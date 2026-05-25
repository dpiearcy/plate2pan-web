import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support — Plate to Pan',
  description: 'Get help with the Plate to Pan app.',
}

const faqs = [
  {
    q: 'How accurate are the recipes?',
    a: 'Accuracy depends on the photo quality and dish complexity. A clear, well-lit photo of a distinct dish typically yields a very usable recipe. Think of it as a skilled chef\'s best guess from looking at a dish — not the original chef\'s secret recipe. Always double-check for allergens before cooking.',
  },
  {
    q: 'What are my 10 free scans?',
    a: 'Every new account gets 10 recipe scans at no charge, with no time limit — they\'re yours forever. This lets you try the full scanning experience before subscribing. Other features like Cook Mode, meal planning, and grocery lists are available on all plans.',
  },
  {
    q: 'How do I cancel my subscription?',
    a: 'Subscriptions are managed by Apple. To cancel: open iOS Settings → tap your name at the top → Subscriptions → Plate to Pan → Cancel Subscription. Cancellation takes effect at the end of the current billing period.',
  },
  {
    q: 'Can I use the app without signing in?',
    a: 'Yes — you can scan and view recipes without an account. Signing in enables cross-device sync for your cookbook, meal plans, and grocery lists.',
  },
  {
    q: 'How does Cook Mode work?',
    a: 'Tap "Start Cook Mode" on any recipe. The app goes full-screen with one step at a time, a progress bar, and optional voice readout. Steps with timers show a countdown badge — tap to start it. You\'ll get a notification when the timer ends, even if your screen is off. Swipe left/right to navigate steps.',
  },
  {
    q: 'Does it work with Apple Watch?',
    a: 'Yes — with a Pro subscription. Install the watch app and your current cook step, timer, and controls appear on your wrist. Tap Next/Back to navigate, and timers sync automatically.',
  },
  {
    q: 'What is Pan Raid?',
    a: 'Pan Raid (found in the Kitchen tab) lets you photograph your fridge, pantry shelves, or counter. The AI identifies what ingredients you have and updates your pantry inventory. Great for knowing what you can cook before you shop.',
  },
  {
    q: 'How do I adapt a recipe for my diet?',
    a: 'Go to Profile → Dietary Preferences and select your diets (Keto, Vegan, Gluten-Free, etc.) and any allergies. When you scan a new dish, the recipe will automatically adapt. You can also tap "Refine Recipe" on any saved recipe to re-adapt it.',
  },
  {
    q: 'I got a low-confidence result — what do I do?',
    a: 'Try photographing from a different angle, add a second photo showing the ingredients more clearly, or type a description of the dish in the text field. Low confidence usually means the dish is visually ambiguous — more context helps a lot.',
  },
  {
    q: 'My photo isn\'t uploading / the scan is failing.',
    a: 'Check your internet connection. If the issue persists, try closing and reopening the app. If scans consistently fail, email us at support@plate2pan.app with your device model and iOS version.',
  },
]

export default function Support() {
  return (
    <div className="min-h-screen bg-dark-900">
      <header className="border-b border-white/5 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-brand-orange flex items-center justify-center text-sm">🍳</div>
            <span className="font-semibold text-white/80">Plate to Pan</span>
          </Link>
          <Link href="/" className="text-sm text-white/40 hover:text-white/70 transition-colors">← Back to home</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black mb-2">Support</h1>
        <p className="text-white/40 text-sm mb-4">Get help with Plate to Pan</p>

        {/* Contact CTA */}
        <div className="glass-orange rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-white">Need direct help?</p>
            <p className="text-sm text-white/50 mt-1">We typically respond within 1 business day.</p>
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
