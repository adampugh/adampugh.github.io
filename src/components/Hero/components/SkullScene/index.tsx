import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { Box3, Vector3 } from 'three'
import type { Group, PerspectiveCamera as ThreePerspectiveCamera } from 'three'
import Skull from '../Skull'

import './styles.scss'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const MOUTH_MESH_NAME = 'Plane'

// Where the settle-triggered snap hands off to/back from once it commits.
const HERO_TARGET_SELECTOR = '#home'
const PROJECTS_TARGET_SELECTOR = '#projects'
const SNAP_DURATION = 1
// How long scrolling has to be still before we treat it as "settled".
const SCROLL_SETTLE_DELAY = 150

// How far the model turns to go from its off-center start to facing the camera.
const START_ROTATION_Y = 0.15
const END_ROTATION_Y = 0

// How close the camera ends up in front of the mouth once it's zoomed in.
const MOUTH_ZOOM_DISTANCE = 0.05

// How far the jaw drops open over the course of the zoom-in.
const JAW_OPEN_ROTATION_X = -0.4

// Relative weight of each segment within the scrubbed timeline — not
// seconds, since scrub maps total timeline length to scroll distance.
// Equal weights split the spacer's scroll distance evenly across the
// three segments: rotate, then zoom + jaw, then the mouth expand.
const SEGMENT_DURATION = 1

interface SkullSceneProps {
  children?: ReactNode
}

export default function SkullScene({ children }: SkullSceneProps) {
  // This is what actually gives the page real, scrollable height — the
  // fixed-position .skull-scene canvas layer below contributes none of its
  // own (position: fixed removes it from document flow entirely), so
  // ScrollTrigger needs a normal-flow element to measure scroll progress
  // against. Its height is what defines "how far you scroll" for the
  // animation and for the page's scroll-snap step into the next section.
  const spacerRef = useRef<HTMLDivElement>(null)
  const blackoutRef = useRef<HTMLDivElement>(null)
  const [group, setGroup] = useState<Group | null>(null)
  const [camera, setCamera] = useState<ThreePerspectiveCamera | null>(null)

  useGSAP(
    () => {
      if (!group || !camera) return

      const lowerJaw = group.getObjectByName('Lower_Jaw')
      if (!lowerJaw) {
        console.warn('Lower_Jaw not found — check the bone name in the model')
      }
      // Read the model's actual authored rest pose rather than assuming
      // "closed" is x: 0 — the rig's bind pose may not be exactly zero.
      const closedJawRotationX = lowerJaw?.rotation.x ?? 0

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: spacerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          // markers: true, // uncomment while tuning to see start/end points
        },
        defaults: { duration: SEGMENT_DURATION, ease: 'none' },
      })

      // Pin the jaw closed at the very start — using .set() + .to() below
      // (rather than .fromTo()) since fromTo's "from" value renders
      // immediately on creation regardless of its timeline position, which
      // was forcing the jaw open from frame one.
      if (lowerJaw) {
        tl.set(lowerJaw.rotation, { x: closedJawRotationX })
      }

      // Rotation segment — plays first, camera and jaw untouched.
      tl.fromTo(group.rotation, { y: START_ROTATION_Y }, { y: END_ROTATION_Y })

      // Sample where the mouth actually ends up once the model has finished
      // rotating (its world position moves with the group's rotation), then
      // put the rotation back where the timeline expects to find it.
      group.rotation.y = END_ROTATION_Y
      group.updateMatrixWorld(true)
      const mouth = group.getObjectByName(MOUTH_MESH_NAME)
      const mouthTarget = mouth
        ? new Box3().setFromObject(mouth).getCenter(new Vector3())
        : new Vector3()
      group.rotation.y = START_ROTATION_Y
      group.updateMatrixWorld(true)

      // Read the camera's actual current position/orientation once, up
      // front — not to reset it, but so the zoom tween below has an
      // explicit "from" instead of relying on .to()'s lazy start-value
      // capture (which samples "wherever the property currently is" the
      // first time the tween renders). Under a scrubbed ScrollTrigger, a
      // fast scroll can jump the playhead by a large, velocity-dependent
      // amount between frames, so that lazy capture isn't guaranteed to
      // land on the same value every time — this is what was causing the
      // camera to end up in a different place depending on scroll speed.
      camera.updateMatrixWorld(true)
      const initialCameraPosition = camera.position.clone()
      const initialLookAt = camera.position.clone().add(camera.getWorldDirection(new Vector3()))

      // Zoom segment — plays after the rotation, animating from the
      // camera's actual starting position/orientation into the mouth, jaw
      // opening over the same stretch. Position and look-at are driven by
      // a single tween (rather than two parallel ones) so there's no
      // cross-tween ordering to get wrong — GSAP updates camera.position
      // before running this onUpdate, and the look-at target is derived
      // from this same tween's own progress (this.ratio), not a second
      // independently-scrubbed value that could fall out of sync with it
      // under a large, fast-scroll-driven jump.
      tl.addLabel('zoom').fromTo(
        camera.position,
        { x: initialCameraPosition.x, y: initialCameraPosition.y, z: initialCameraPosition.z },
        {
          x: mouthTarget.x,
          y: mouthTarget.y,
          z: mouthTarget.z + MOUTH_ZOOM_DISTANCE,
          onUpdate: function () {
            camera.lookAt(
              gsap.utils.interpolate(initialLookAt.x, mouthTarget.x, this.ratio),
              gsap.utils.interpolate(initialLookAt.y, mouthTarget.y, this.ratio),
              gsap.utils.interpolate(initialLookAt.z, mouthTarget.z, this.ratio),
            )
          },
        },
        'zoom',
      )

      if (lowerJaw) {
        tl.to(lowerJaw.rotation, { x: closedJawRotationX - JAW_OPEN_ROTATION_X }, 'zoom')
      }

      // Expand segment — plays after the zoom, camera and rotation left
      // untouched (model stays put) while a centered DOM overlay (full
      // height, width: 0) widens out to 100vw, curtaining the screen in
      // solid black to match --black (the next section's background).
      // Scaling the in-scene mouth mesh itself doesn't work here — it's a
      // SkinnedMesh with no translation of its own, so its scale pivot
      // sits at the skull's base origin rather than the mouth, and
      // growing it just flings the geometry away from camera instead of
      // filling the frame.
      if (blackoutRef.current) {
        tl.addLabel('expand').to(blackoutRef.current, { width: '100vw' }, 'expand')
      }
    },
    { scope: spacerRef, dependencies: [group, camera] },
  )

  // Intercepting wheel events in real time fought native scroll physics —
  // trackpad momentum kept firing further wheel events after the one that
  // triggered a snap, which weren't being blocked, so native scroll kept
  // adding on top of the GSAP tween (the overshoot). It also only ever
  // saw 'wheel', so keyboard/touch/scrollbar-drag scrolling could land
  // anywhere mid-animation without ever being caught.
  //
  // This instead never interferes with scrolling while it's happening —
  // no preventDefault, works the same for every input method — and only
  // acts once scrolling goes quiet (SCROLL_SETTLE_DELAY). If that rest
  // position is strictly between the Hero start and the Projects
  // boundary, it animates the rest of the way in whichever direction the
  // user was last moving.
  useEffect(() => {
    let settleTimeoutId: number | undefined
    let lastScrollY = window.scrollY
    let lastDirection: 'down' | 'up' = 'down'
    let isSnapping = false

    const trySnap = () => {
      const heroEl = document.querySelector(HERO_TARGET_SELECTOR)
      const projectsEl = document.querySelector(PROJECTS_TARGET_SELECTOR)
      if (!heroEl || !projectsEl) return

      const heroTop = heroEl.getBoundingClientRect().top + window.scrollY
      const projectsTop = projectsEl.getBoundingClientRect().top + window.scrollY
      const y = window.scrollY

      // Already resting at (or past) one of the two ends — nothing to do.
      if (y <= heroTop + 1 || y >= projectsTop - 1) return

      const targetY = lastDirection === 'down' ? projectsTop : heroTop

      isSnapping = true
      gsap.to(window, {
        scrollTo: { y: targetY },
        duration: SNAP_DURATION,
        ease: 'power2.inOut',
        onComplete: () => {
          isSnapping = false
        },
      })
    }

    const handleScroll = () => {
      if (isSnapping) return

      const currentScrollY = window.scrollY
      if (currentScrollY !== lastScrollY) {
        lastDirection = currentScrollY > lastScrollY ? 'down' : 'up'
        lastScrollY = currentScrollY
      }

      window.clearTimeout(settleTimeoutId)
      settleTimeoutId = window.setTimeout(trySnap, SCROLL_SETTLE_DELAY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.clearTimeout(settleTimeoutId)
    }
  }, [])

  return (
    <div className="skull-scene__spacer" ref={spacerRef}>
      <div className="skull-scene">
        <div className="skull-scene__pin">
          <Canvas className="skull-scene__canvas">
            <PerspectiveCamera ref={setCamera} makeDefault fov={45} position={[0, 0.1, 3.1]} />
            <ambientLight intensity={0.6} />
            <directionalLight position={[2, 3, 2]} intensity={1.2} />
            <Skull ref={setGroup} />
          </Canvas>

          {children && <div className="skull-scene__content">{children}</div>}
          <div className="skull-scene__blackout" ref={blackoutRef} />
        </div>
      </div>
    </div>
  )
}
