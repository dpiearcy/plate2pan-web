'use client'
import { useEffect, useRef } from 'react'

const freeFeatures = [
  '10 free recipe scans per month',
  'Full Cook Mode with timers',
  'Save to cookbook',
  'Dietary profile setup',
  'Basic grocery lists',
]

const proFeatures = [
  'Unlimited recipe scans',
  'Everything in Free',
  'Apple Watch companion',
  'Meal planner (Mon–Sun)',
  'AI grocery list merge',
  'Pan Raid pantry scan',
  'URL recipe import',
  'Wine & beverage pairings',
  'PDF & share export',
  'Recipe serving adjuster',
  'Priority AI processing',
]

export default function Pricing() {
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
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-orange/6 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 section-hidden">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-orange rounded-full text-sm font-medium text-brand-orange mb-6">
            Simple Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Try it free.{' '}
            <span className="gradient-text">Upgrade when ready.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto">
            Start free with 10 scans a month. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Free tier */}
          <div className="glass rounded-3xl p-8 flex flex-col">
            <div className="mb-6">
              <div className="text-white/50 text-sm font-medium mb-2">Free</div>
              <div className="text-4xl font-black mb-1">$0</div>
              <div className="text-white/40 text-sm">10 free scans per month</div>
            </div>

            <ul className="flex-1 space-y-3 mb-8">
              {freeFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-white/30 flex-shrink-0">
                    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#launch"
              className="w-full py-3.5 glass rounded-2xl text-center font-semibold text-white/80 hover:text-white hover:bg-white/8 transition-all block"
            >
              Get Started Free
            </a>
          </div>

          {/* Pro tier */}
          <div className="relative rounded-3xl p-8 flex flex-col overflow-hidden animated-border border">
            {/* Glow bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-amber-500/5" />
            <div className="absolute inset-0 bg-dark-800" style={{ zIndex: -1 }} />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <div className="text-brand-orange text-sm font-bold">Pro</div>
                <div className="px-2.5 py-0.5 bg-brand-orange/20 text-brand-orange border border-brand-orange/40 rounded-full text-xs font-bold">
                  BEST VALUE
                </div>
              </div>

              <div className="mb-1">
                <span className="text-4xl font-black">$29.99</span>
                <span className="text-white/40 text-sm ml-1">/year</span>
              </div>
              <div className="text-white/40 text-sm mb-1">or $3.99/month</div>
              <div className="text-brand-orange/80 text-xs font-medium mb-6">≈ $2.50/mo — save 38% vs monthly</div>

              <ul className="flex-1 space-y-3 mb-8">
                {proFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-brand-orange flex-shrink-0">
                      <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#launch"
                className="w-full py-3.5 bg-brand-orange hover:bg-brand-orange-dark rounded-2xl text-center font-bold text-white orange-glow block transition-all"
              >
                Start Free Trial
              </a>

              <p className="text-center text-white/30 text-xs mt-3">7-day free trial included</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
