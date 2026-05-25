'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Radial background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[800px] h-[800px] bg-brand-orange/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-orange-400/5 rounded-full blur-[60px]" />
      </div>

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 py-20 section-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Text side */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-orange rounded-full text-sm font-medium text-brand-orange mb-8 animate-pulse-slow">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              AI-Powered Recipe Reverse-Engineering
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              Loved it at the{' '}
              <span className="gradient-text">restaurant?</span>
              <br />
              Cook it{' '}
              <span className="gradient-text">tonight.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Point your camera at any dish. Plate to Pan reverse-engineers the full recipe — ingredients, step-by-step instructions, nutrition info, and dietary adaptations — in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://apps.apple.com/app/plate-to-pan/id0000000000"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark rounded-2xl font-semibold text-white transition-all hover:scale-105 orange-glow"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on the App Store
              </a>
              <a
                href="#how-it-works"
                className="flex items-center justify-center gap-2 px-8 py-4 glass rounded-2xl font-semibold text-white/80 hover:text-white transition-all hover:bg-white/8"
              >
                See how it works
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-4 justify-center lg:justify-start text-sm text-white/40">
              <div className="flex -space-x-2">
                {['🧑‍🍳','👩‍🍳','🧑‍🍳','👨‍🍳','👩‍🍳'].map((e, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-dark-500 border border-dark-700 flex items-center justify-center text-xs">
                    {e}
                  </div>
                ))}
              </div>
              <span>10 free scans to start · No credit card needed</span>
            </div>
          </div>

          {/* Phone mockup side */}
          <div className="relative flex-shrink-0">
            <div className="relative w-[280px] md:w-[320px] animate-float">
              {/* Phone frame */}
              <div className="relative bg-dark-800 rounded-[44px] border border-white/10 overflow-hidden phone-shadow"
                style={{ aspectRatio: '9/19.5' }}>
                {/* Status bar */}
                <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 z-10">
                  <span className="text-xs font-semibold text-white">9:41</span>
                  <div className="w-24 h-6 bg-dark-900 rounded-full" />
                  <div className="flex gap-1 items-center">
                    <div className="w-4 h-3 border border-white/50 rounded-sm relative">
                      <div className="absolute right-0 top-0.5 -mr-0.5 w-0.5 h-2 bg-white/50 rounded-full" />
                      <div className="absolute left-0 top-0 bottom-0 right-1 m-0.5 bg-white/50 rounded-sm" style={{width: '75%'}} />
                    </div>
                  </div>
                </div>

                {/* App content mockup */}
                <div className="absolute inset-0 flex flex-col pt-14 px-4 pb-4 gap-3">
                  {/* Dish photo placeholder */}
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-orange-900/30 to-amber-900/20 border border-white/5"
                    style={{ height: '38%' }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🍝</div>
                        <div className="text-xs text-white/40">Cacio e Pepe</div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-brand-orange/90 rounded-lg text-xs font-bold">
                      High confidence ✓
                    </div>
                  </div>

                  {/* Recipe info */}
                  <div className="glass rounded-2xl p-3">
                    <div className="font-bold text-sm mb-1">Cacio e Pepe</div>
                    <div className="text-xs text-white/50 mb-2">Roman · 4 servings · 25 min</div>
                    <div className="flex gap-2">
                      {['450 cal','18g protein','62g carbs'].map(n => (
                        <div key={n} className="text-xs px-2 py-1 bg-white/5 rounded-lg text-white/60">{n}</div>
                      ))}
                    </div>
                  </div>

                  {/* Steps preview */}
                  <div className="flex flex-col gap-1.5">
                    {['Boil pasta in salted water','Toast black pepper in pan','Add Pecorino and Parmesan'].map((step, i) => (
                      <div key={i} className="flex items-center gap-2 glass rounded-xl px-3 py-2">
                        <div className="w-5 h-5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </div>
                        <div className="text-xs text-white/70 line-clamp-1">{step}</div>
                      </div>
                    ))}
                  </div>

                  {/* Cook Mode button */}
                  <div className="mt-auto">
                    <div className="w-full py-3 bg-brand-orange rounded-2xl text-center text-sm font-bold text-white orange-glow-sm">
                      🍳 Start Cook Mode
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-12 top-1/4 glass rounded-2xl px-3 py-2 text-xs font-medium animate-float-delayed whitespace-nowrap border border-white/10">
                ⏱ Timer: 8 min
              </div>
              <div className="absolute -right-14 top-1/2 glass-orange rounded-2xl px-3 py-2 text-xs font-medium whitespace-nowrap">
                🍷 Wine pairing
              </div>
              <div className="absolute -left-10 bottom-1/4 glass rounded-2xl px-3 py-2 text-xs font-medium whitespace-nowrap border border-white/10">
                ⌚ Apple Watch
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs">
        <span>Scroll to explore</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
