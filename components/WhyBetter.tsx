'use client'
import { useEffect, useRef } from 'react'

const comparisons = [
  { feature: 'View recipes without paying', us: true, them: false },
  { feature: 'Free scans to try first', us: true, them: false },
  { feature: 'Step-by-step Cook Mode', us: true, them: false },
  { feature: 'Per-step built-in timers', us: true, them: false },
  { feature: 'Apple Watch companion', us: true, them: false },
  { feature: 'Weekly meal planner', us: true, them: false },
  { feature: 'AI grocery list merge', us: true, them: false },
  { feature: 'Pantry inventory scan', us: true, them: false },
  { feature: 'Dietary profile adaptation', us: true, them: true },
  { feature: 'Wine & beverage pairings', us: true, them: false },
  { feature: 'PDF & share export', us: true, them: false },
  { feature: 'URL recipe import', us: true, them: false },
]

export default function WhyBetter() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('section-visible') },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-orange/6 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6 section-hidden">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-orange rounded-full text-sm font-medium text-brand-orange mb-6">
            Why Plate to Pan
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            The app other apps{' '}
            <span className="gradient-text">wish they were</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Other dish-scanning apps give you a recipe and stop. We give you an entire kitchen companion.
          </p>
        </div>

        <div className="glass rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[1fr_120px_120px] gap-4 px-6 py-4 bg-white/4 border-b border-white/8">
            <div className="text-sm text-white/40 font-medium">Feature</div>
            <div className="text-sm font-bold text-brand-orange text-center">Plate to Pan</div>
            <div className="text-sm text-white/30 text-center font-medium">Other apps</div>
          </div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_120px_120px] gap-4 px-6 py-3.5 items-center ${
                i % 2 === 0 ? '' : 'bg-white/2'
              } hover:bg-brand-orange/5 transition-colors`}
            >
              <div className="text-sm text-white/70">{row.feature}</div>
              <div className="flex justify-center">
                {row.us ? (
                  <div className="w-6 h-6 rounded-full bg-brand-orange/20 border border-brand-orange/50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 text-brand-orange">
                      <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-red-400">
                      <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                {row.them ? (
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 text-white/40">
                      <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-white/3 border border-white/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-white/20">
                      <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-xs mt-6">
          Comparison based on publicly available information as of 2024. Features subject to change.
        </p>
      </div>
    </section>
  )
}
