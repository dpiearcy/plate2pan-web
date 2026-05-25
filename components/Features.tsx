'use client'
import { useEffect, useRef } from 'react'

const features = [
  {
    icon: '🎯',
    title: 'Cook Mode',
    description: 'Full-screen step-by-step cooking with auto-advance, progress bar, and hands-free voice readout.',
    badge: 'Exclusive',
  },
  {
    icon: '⏱',
    title: 'Built-in Timers',
    description: 'Each step has a timer when needed. Tap to start, get a notification when done — even with the screen off.',
    badge: null,
  },
  {
    icon: '⌚',
    title: 'Apple Watch',
    description: 'See your current step, run timers, and navigate hands-free — right from your wrist while cooking.',
    badge: 'Exclusive',
  },
  {
    icon: '🥦',
    title: 'Dietary Adaptation',
    description: 'Keto, vegan, gluten-free, low-sodium — set your profile and every recipe adapts automatically.',
    badge: null,
  },
  {
    icon: '📅',
    title: 'Meal Planner',
    description: 'Plan your whole week. Assign recipes to Mon–Sun, 3 meal slots each, and auto-build a grocery list.',
    badge: null,
  },
  {
    icon: '🛒',
    title: 'Smart Grocery Lists',
    description: 'Add multiple recipes. AI merges duplicate ingredients intelligently so you shop once.',
    badge: null,
  },
  {
    icon: '🥫',
    title: 'Pan Raid (Pantry)',
    description: 'Photograph your fridge or shelves. AI identifies what you have so you know what you can make.',
    badge: 'New',
  },
  {
    icon: '🔗',
    title: 'Import from URL',
    description: "Paste a link from TikTok, Instagram, or any recipe site and we'll parse it into your cookbook.",
    badge: null,
  },
  {
    icon: '📏',
    title: 'Serving Adjuster',
    description: 'Scale recipes up or down. Cooking for 2 or 12 — ingredients adjust automatically with smart fractions.',
    badge: null,
  },
  {
    icon: '📤',
    title: 'Share & Export',
    description: 'Export as a beautiful PDF, share plain text, or send a .ptprecipe file to another Plate to Pan user.',
    badge: null,
  },
  {
    icon: '🍷',
    title: 'Wine Pairings',
    description: "Every recipe suggests wine and beverage pairings that complement the dish's flavors.",
    badge: null,
  },
  {
    icon: '🔢',
    title: 'Full Nutrition',
    description: 'Calories, protein, carbs, fat, sodium, fiber — all estimated per serving based on the dish.',
    badge: null,
  },
]

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('section-visible') },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 section-hidden">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-orange rounded-full text-sm font-medium text-brand-orange mb-6">
            Everything you need
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Built for{' '}
            <span className="gradient-text">real cooks</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Not just a recipe scanner. A full cooking companion — from the restaurant table to your kitchen counter.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="group glass rounded-2xl p-6 hover:border-brand-orange/30 transition-all hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{f.icon}</span>
                  {f.badge && (
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      f.badge === 'Exclusive' ? 'bg-brand-orange/20 text-brand-orange border border-brand-orange/30' :
                      'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    }`}>
                      {f.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold mb-1.5">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
