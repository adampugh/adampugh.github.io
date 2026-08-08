import './styles.scss'
import { useEffect, useRef, useState } from 'react'
import { useProgress } from '@react-three/drei'
import { gsap } from '@/lib/gsap'
import SkullRotation from '../../assets/skull_rotation.webp'

// Loading finishes almost instantly when the model is already cached —
// this keeps the loader on screen for at least this long so it never
// flashes in and immediately back out.
const MIN_DISPLAY_MS = 500
const FADE_DURATION = 0.6

interface PageLoaderProps {
  onReady?: () => void
}

const PageLoader = ({ onReady }: PageLoaderProps) => {
  const { active, progress } = useProgress()
  const [isReady, setIsReady] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const mountTimeRef = useRef(performance.now())
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (active || progress < 100) return

    const elapsed = performance.now() - mountTimeRef.current
    const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed)
    const timeoutId = window.setTimeout(() => setIsReady(true), remaining)
    return () => window.clearTimeout(timeoutId)
  }, [active, progress])

  useEffect(() => {
    if (!isReady || !overlayRef.current) return

    onReady?.()
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: FADE_DURATION,
      ease: 'power2.out',
      onComplete: () => setIsHidden(true),
    })
  }, [isReady])

  useEffect(() => {
    document.body.style.overflow = isReady ? '' : 'hidden'
  }, [isReady])

  if (isHidden) return null

  return (
    <div className="page-loader" ref={overlayRef} role="status" aria-live="polite">
      <h3 className="page-loader__title">Loading</h3>
      <img className="page-loader__skull" src={SkullRotation} alt="" />
    </div>
  )
}

export default PageLoader
