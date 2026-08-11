import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/lib/gsap'

type FadeInOptions = {
  trigger?: 'mount' | 'scroll'
  y?: number
  duration?: number
  stagger?: number
  ease?: string
  start?: string
  deps?: unknown[]
  delay?: number
}

export function useFadeIn<T extends HTMLElement>(
  selector = '[data-fade]',
  {
    trigger = 'scroll',
    y = 24,
    duration = 0.6,
    stagger = 0.08,
    ease = 'power2.out',
    start = 'top 85%',
    deps = [],
    delay = 0,
  }: FadeInOptions = {},
) {
  const ref = useRef<T>(null)

  useGSAP(
    () => {
      if (!ref.current) return

      const targets = gsap.utils.toArray<HTMLElement>(selector, ref.current)
      const els = targets.length > 0 ? targets : ref.current

      gsap.from(els, {
        y,
        opacity: 0,
        duration,
        stagger: targets.length > 0 ? stagger : 0,
        ease,
        delay,
        ...(trigger === 'scroll' && {
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: 'play none none none',
          },
        }),
      })
    },
    { scope: ref, dependencies: deps },
  )

  const playExit = (): Promise<void> =>
    new Promise((resolve) => {
      if (!ref.current) return resolve()

      gsap.to(ref.current, {
        opacity: 0,
        y: 0,
        duration: duration * 0.7,
        ease: 'power2.in',
        onComplete: resolve,
      })
    })

  return { ref, playExit }
}

type MaskOptions = {
  trigger?: 'mount' | 'scroll'
  start?: string
  deps?: unknown[]
}

export function useLettersRevealMask<T extends HTMLElement>({
  trigger = 'scroll',
  start = 'top 75%',
  deps = [],
}: MaskOptions = {}) {
  const ref = useRef<T>(null)
  const splitRef = useRef<SplitText | null>(null)

  useGSAP(
    () => {
      if (!ref.current) return

      const split = SplitText.create(ref.current, {
        type: 'chars',
        mask: 'chars',
        autoSplit: true,
        onSplit(self) {
          splitRef.current = self

          return gsap.from(self.chars, {
            yPercent: 110,
            stagger: 0.03,
            duration: 0.6,
            delay: 0.2,
            ease: 'power3.out',
            ...(trigger === 'scroll' && {
              scrollTrigger: {
                trigger: ref.current,
                start,
                toggleActions: 'play none none reverse',
              },
            }),
          })
        },
      })

      return () => split.revert()
    },
    { scope: ref, dependencies: deps },
  )

  const playExit = (): Promise<void> =>
    new Promise((resolve) => {
      const chars = splitRef.current?.chars
      if (!chars || chars.length === 0) return resolve()

      gsap.to(chars, {
        yPercent: 110,
        stagger: { each: 0.02, from: 'end' }, // last-in, first-out reads nicely on exit
        duration: 0.4,
        ease: 'power2.in',
        onComplete: resolve,
      })
    })

  return { ref, playExit }
}
