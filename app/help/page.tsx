import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  Share2,
  Sparkles,
  Instagram,
  ChefHat,
  CalendarDays,
  Refrigerator,
  CreditCard,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Help Center — Plate2Pan',
  description:
    'Guides and answers for Plate2Pan: set up the iOS Share Sheet, import recipes, use Cook Mode, plan meals, run Pan Raid, and manage your subscription.',
}

const sections = [
  {
    label: 'Getting Started',
    articles: [
      {
        href: '/help/getting-started',
        icon: Sparkles,
        title: 'Getting Started',
        desc: 'The five ways to get recipes into Plate2Pan — scan, URL, social, manual, and AI.',
      },
      {
        href: '/help/social-import',
        icon: Instagram,
        title: 'Import from Instagram, Pinterest & TikTok',
        desc: 'Save recipes you find on social media in one tap, platform by platform.',
      },
    ],
  },
  {
    label: 'Features',
    articles: [
      {
        href: '/help/cook-mode',
        icon: ChefHat,
        title: 'Cook Mode Guide',
        desc: 'Hands-free, step-by-step cooking with timers, voice control, and read-aloud.',
      },
      {
        href: '/help/meal-planning',
        icon: CalendarDays,
        title: 'Meal Planning & Grocery Lists',
        desc: 'Plan your week and turn it into a smart, de-duplicated grocery list.',
      },
      {
        href: '/help/pan-raid',
        icon: Refrigerator,
        title: 'Pan Raid',
        desc: 'Turn what you already have into a recipe you can cook tonight.',
      },
    ],
  },
  {
    label: 'Account & Subscription',
    articles: [
      {
        href: '/help/subscription',
        icon: CreditCard,
        title: 'Subscription & Billing',
        desc: 'Free vs. Home Chef, the free trial, upgrading, canceling, and restoring purchases.',
      },
    ],
  },
]

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="border-b border-white/5 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" aria-label="Plate2Pan home">
            <Image
              src="/branding/logo-white.png"
              alt="Plate2Pan"
              width={1630}
              height={370}
              className="h-auto w-36 opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl sm:text-5xl font-black mb-3">Help Center</h1>
        <p className="text-white/50 text-lg mb-12 max-w-2xl">
          Everything you need to get the most out of Plate2Pan. New here? Start
          by setting up the Share Sheet — it's the fastest way to save recipes.
        </p>

        {/* Featured: Share Sheet */}
        <Link href="/help/share-sheet" className="group block mb-14">
          <div className="glass-orange rounded-3xl p-8 transition-all group-hover:scale-[1.01] group-hover:orange-glow-sm relative overflow-hidden">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full bg-brand-orange text-white text-xs font-bold uppercase tracking-wide">
              ⭐ Start Here
            </span>
            <div className="flex items-start gap-5">
              <div className="hidden sm:flex flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-orange items-center justify-center orange-glow-sm">
                <Share2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Set Up the iOS Share Sheet
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Add Plate2Pan to your Share Sheet once and save any recipe —
                  from Safari, Instagram, Pinterest, or TikTok — with a single
                  tap. Takes about 30 seconds.
                </p>
                <span className="inline-block mt-4 text-brand-orange font-semibold text-sm group-hover:underline">
                  Set it up →
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Sections */}
        <div className="space-y-14">
          {sections.map((section) => (
            <section key={section.label}>
              <h2 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-5">
                {section.label}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {section.articles.map((a) => {
                  const Icon = a.icon
                  return (
                    <Link
                      key={a.href}
                      href={a.href}
                      className="group glass rounded-2xl p-6 transition-all hover:bg-white/[0.06] hover:border-white/15"
                    >
                      <div className="w-11 h-11 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mb-4 text-brand-orange group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-white mb-1.5 group-hover:text-brand-orange transition-colors">
                        {a.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {a.desc}
                      </p>
                    </Link>
                  )
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-16 glass rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-white">Can't find what you need?</p>
            <p className="text-sm text-white/50 mt-1">
              Our team is happy to help with anything.
            </p>
          </div>
          <a
            href="mailto:support@plate2pan.app"
            className="flex-shrink-0 px-6 py-2.5 bg-brand-orange hover:bg-brand-orange-dark rounded-xl font-semibold text-white text-sm transition-all hover:scale-105"
          >
            Email Support
          </a>
        </div>
      </main>
    </div>
  )
}
