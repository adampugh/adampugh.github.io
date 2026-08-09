import './styles.scss'
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

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const MOUTH_MESH_NAME = 'Plane'

const HERO_TARGET_SELECTOR = '#home'
const PROJECTS_TARGET_SELECTOR = '#projects'
const SNAP_DURATION = 1
const SCROLL_SETTLE_DELAY = 150

// 3d model rotation degree
const START_ROTATION_Y = 0.15
const END_ROTATION_Y = 0

const MOUTH_ZOOM_DISTANCE = 0.05
const JAW_OPEN_ROTATION_X = -0.4

// Equal weights split the spacer's scroll distance evenly across the
// three segments: rotate, zoom + jaw, expand
const SEGMENT_DURATION = 1

interface SkullSceneProps {
  children?: ReactNode
}

export default function SkullScene({ children }: SkullSceneProps) {
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

      const closedJawRotationX = lowerJaw?.rotation.x ?? 0

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: spacerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          // markers: true, // use to tune animation
        },
        defaults: { duration: SEGMENT_DURATION, ease: 'none' },
      })

      // fix jaw closed on load
      if (lowerJaw) {
        tl.set(lowerJaw.rotation, { x: closedJawRotationX })
      }

      // rotation segment
      tl.fromTo(group.rotation, { y: START_ROTATION_Y }, { y: END_ROTATION_Y })

      group.rotation.y = END_ROTATION_Y
      group.updateMatrixWorld(true)
      const mouth = group.getObjectByName(MOUTH_MESH_NAME)
      const mouthTarget = mouth
        ? new Box3().setFromObject(mouth).getCenter(new Vector3())
        : new Vector3()
      group.rotation.y = START_ROTATION_Y
      group.updateMatrixWorld(true)

      // read camera's actual current position once
      camera.updateMatrixWorld(true)
      const initialCameraPosition = camera.position.clone()
      const initialLookAt = camera.position.clone().add(camera.getWorldDirection(new Vector3()))

      // zoom segment - skull mouth zoom
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

      // expand segment - mouth plane expands to full width
      if (blackoutRef.current) {
        tl.addLabel('expand').to(blackoutRef.current, { width: '100vw' }, 'expand')
      }
    },
    { scope: spacerRef, dependencies: [group, camera] },
  )

  // scroll snap
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

      // if past scroll sections return
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
