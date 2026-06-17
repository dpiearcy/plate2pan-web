import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Share2, Sparkles, ChefHat, CreditCard } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Support — Plate to Pan',
  description: 'Get help with the Plate to Pan app. Browse guides in the Help Center or contact support.',
}

const quickLinks = [
  {
    href: '/help/share-sheet',
    icon: Share2,
    title: 'Set Up the Share Sheet',
    desc: 'Save any recipe in one tap.',
    featured: true,
  },
  {
    href: '/help/getting-started',
    icon: Sparkles,
    title: 'Getting Started',
    desc: 'Five ways to add recipes.',
  },
  {
    href: '/help/cook-mode',
    icon: ChefHat,
    title: 'Cook Mode',
    desc: 'Hands-free guided cooking.',
  },
  {
    href: '/help/subscription',
    icon: CreditCard,
    title: 'Subscription & Billing',
    desc: 'Plans, trials, and restores.',
  },
]

export default function Support() {
  return (
    <div className="min-h-screen bg-dark-900">
      <header className="border-b border-white/5 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" aria-label="Plate2Pan home">
            <Image
              src="/branding/logo-white.png"
              alt="Plate2Pan"
              width={1630}
              height={370}
              className="h-auto w-36 opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
          <Link href="/" className="text-sm text-white/40 hover:text-white/70 transition-colors">← Back to home</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black mb-2">Support</h1>
        <p className="text-white/40 text-sm mb-12">Guides, answers, and a way to reach us</p>

        {/* Help Center CTA */}
        <Link href="/help" className="group block mb-12">
          <div className="glass-orange rounded-2xl p-6 transition-all group-hover:orange-glow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-white text-lg">Visit the Help Center</p>
              <p className="text-sm text-white/55 mt-1">
                Step-by-step guides for every feature — Share Sheet setup, imports, Cook Mode, meal planning, and more.
              </p>
            </div>
            <span className="flex-shrink-0 px-6 py-2.5 bg-brand-orange group-hover:bg-brand-orange-dark rounded-xl font-semibold text-white text-sm transition-all group-hover:scale-105">
              Browse Guides →
            </span>
          </div>
        </Link>

        {/* Quick links */}
        <h2 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-5">Popular guides</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {quickLinks.map((l) => {
            const Icon = l.icon
            return (
              <Link
                key={l.href}
                href={l.href}
                className="group glass rounded-2xl p-5 transition-all hover:bg-white/[0.06] hover:border-white/15 relative"
              >
                {l.featured && (
                  <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-brand-orange text-white text-[10px] font-bold uppercase tracking-wide">
                    Start Here
                  </span>
                )}
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mb-3 text-brand-orange">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-white mb-1 group-hover:text-brand-orange transition-colors">{l.title}</h3>
                <p className="text-white/50 text-sm">{l.desc}</p>
              </Link>
            )
          })}
        </div>

        {/* Contact */}
        <div className="glass rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-white">Still need help?</p>
            <p className="text-sm text-white/50 mt-1">Email us and we'll get back to you as soon as we can.</p>
          </div>
          <a
            href="mailto:support@plate2pan.app"
            className="flex-shrink-0 px-6 py-2.5 bg-brand-orange hover:bg-brand-orange-dark rounded-xl font-semibold text-white text-sm transition-all hover:scale-105"
          >
            Email Support
          </a>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/30 text-sm mb-2">Reach us directly at</p>
          <a href="mailto:support@plate2pan.app" className="text-brand-orange hover:underline text-sm">support@plate2pan.app</a>
        </div>
      </main>
    </div>
  )
}
