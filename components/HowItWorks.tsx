'use client'
import { useEffect, useRef } from 'react'

const steps = [
  {
    number: '01',
    icon: '📸',
    title: 'Photograph the dish',
    description: 'Snap up to 3 photos from different angles — top, side, close-up. The more detail, the better the recipe.',
    color: 'from-orange-500/20 to-amber-500/10',
  },
  {
    number: '02',
    icon: '🤖',
    title: 'AI decodes the recipe',
    description: 'Our AI analyzes ingredients, cooking techniques, textures, and origins to reverse-engineer the full recipe in seconds.',
    color: 'from-rose-500/20 to-orange-500/10',
  },
  {
    number: '03',
    icon: '🍳',
    title: 'Cook it tonight',
    description: 'Follow step-by-step in Cook Mode with built-in timers, Apple Watch support, and voice readout. Save to your cookbook forever.',
    color: 'from-amber-500/20 to-yellow-500/10',
  },
]

export default function HowItWorks() {
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
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] -translate-y-1/2" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 section-hidden">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-orange rounded-full text-sm font-medium text-brand-orange mb-6">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            From table to kitchen in{' '}
            <span className="gradient-text">three steps</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            No subscriptions to view. No credit card for the first 10 scans. Just point, shoot, and cook.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative glass rounded-3xl p-8 hover:border-brand-orange/30 transition-all hover:-translate-y-2 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className="relative z-10">
                <div className="text-xs font-bold text-brand-orange/60 tracking-widest mb-4">{step.number}</div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional description field callout */}
        <div className="mt-12 glass-orange rounded-3xl p-6 text-center">
          <p className="text-white/70 text-sm">
            <span className="text-brand-orange font-semibold">Pro tip:</span> After photographing, add a description like <em>"it had a smoky chipotle kick"</em> or <em>"the sauce was silky and rich"</em> — Claude uses these clues for a more accurate recipe.
          </p>
        </div>
      </div>
    </section>
  )
}
