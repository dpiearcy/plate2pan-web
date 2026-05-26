import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support — Plate to Pan',
  description: 'Get help with the Plate to Pan app.',
}

const faqs = [
  {
    q: 'When will Plate2Pan be available?',
    a: 'Plate2Pan is preparing to launch on the App Store soon. This website will be updated with a download link as soon as the app is live.',
  },
  {
    q: 'How accurate will the recipes be?',
    a: 'Accuracy will depend on the photo quality and dish complexity. A clear, well-lit photo of a distinct dish should yield a useful starting recipe. Think of it as a skilled chef\'s best guess from looking at a dish — not the original chef\'s secret recipe. Always double-check for allergens before cooking.',
  },
  {
    q: 'Will there be a way to try Plate2Pan?',
    a: 'A starter tier with 10 recipe scans is planned for launch. Final plan details and introductory offers will be confirmed when the app is available.',
  },
  {
    q: 'How will subscriptions be managed?',
    a: 'If you choose a subscription after launch, it will be managed through Apple. You will be able to change or cancel it from the Subscriptions section in iOS Settings.',
  },
  {
    q: 'Will I be able to use the app without signing in?',
    a: 'The planned experience allows recipe scanning and viewing without an account. Signing in will enable cross-device sync for your cookbook, meal plans, and grocery lists.',
  },
  {
    q: 'How will Cook Mode work?',
    a: 'Cook Mode is designed to show one step at a time with a progress bar, optional voice readout, and countdown timers for timed steps. Notifications are planned so you can keep track even when your screen is off.',
  },
  {
    q: 'Will it work with Apple Watch?',
    a: 'Apple Watch support is planned as part of the Pro experience, with cook steps, timers, and navigation available from your wrist.',
  },
  {
    q: 'What will Pan Raid do?',
    a: 'Pan Raid is designed to identify ingredients from photos of your fridge, pantry shelves, or counter and use them to help organize your pantry inventory.',
  },
  {
    q: 'How will I adapt a recipe for my diet?',
    a: 'Plate2Pan is designed to let you set dietary preferences and allergies, then adapt generated recipes around those preferences. Always verify ingredient safety for your specific needs.',
  },
  {
    q: 'Where can I ask a question before launch?',
    a: 'Email support@plate2pan.app and we will be happy to help with pre-launch questions.',
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
        <p className="text-white/40 text-sm mb-4">Launch information and product help</p>

        {/* Contact CTA */}
        <div className="glass-orange rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-white">Plate2Pan is launching soon</p>
            <p className="text-sm text-white/50 mt-1">The app is not yet available to download. Questions before launch are welcome.</p>
          </div>
          <a
            href="mailto:support@plate2pan.app"
            className="flex-shrink-0 px-6 py-2.5 bg-brand-orange hover:bg-brand-orange-dark rounded-xl font-semibold text-white text-sm transition-all hover:scale-105"
          >
            Email Support
          </a>
        </div>

        <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/30 text-sm mb-2">Didn't find your answer?</p>
          <a href="mailto:support@plate2pan.app" className="text-brand-orange hover:underline text-sm">support@plate2pan.app</a>
        </div>
      </main>
    </div>
  )
}
