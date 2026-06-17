import type { Metadata } from 'next'
import HelpLayout from '@/components/HelpLayout'
import { Check, Minus } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Subscription & Billing — Plate2Pan Help',
  description:
    'Compare the free plan and Home Chef, learn about the 7-day free trial, and find out how to upgrade, cancel, or restore your purchase.',
}

type Cell = boolean | string

const rows: { feature: string; free: Cell; pro: Cell }[] = [
  { feature: 'AI dish scans', free: '10 / month', pro: 'Unlimited' },
  { feature: 'Cookbook', free: true, pro: true },
  { feature: 'Cook Mode', free: true, pro: true },
  { feature: 'Meal planning & grocery lists', free: true, pro: true },
  { feature: 'Import from URL & social', free: true, pro: true },
  { feature: 'Pan Raid', free: false, pro: true },
  { feature: 'Recipe variants', free: false, pro: true },
]

const faqs = [
  {
    q: 'How do I upgrade to Home Chef?',
    a: 'Open Settings → Subscription inside the app and tap Upgrade. Choose monthly or yearly billing and confirm the purchase — on iOS through the App Store (Face ID, Touch ID, or your Apple account), and on Android through Google Play.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes — Home Chef includes a 7-day free trial. You won’t be charged until the trial ends, and you can cancel any time before then at no cost.',
  },
  {
    q: 'How do I cancel?',
    a: 'Subscriptions are managed by the app store you bought through. On iOS: Settings → your name → Subscriptions → Plate2Pan → Cancel Subscription. On Android: Google Play → Menu → Subscriptions → Plate2Pan → Cancel. Either way, you’ll keep Home Chef features until the end of the current billing period.',
  },
  {
    q: 'How do I restore a purchase?',
    a: 'If you reinstalled the app or got a new device, open Settings → Subscription → Restore Purchases. Make sure you’re signed in with the same account you used to subscribe — your Apple ID on iOS, or your Google account on Android.',
  },
  {
    q: 'I paid but the app still shows Free.',
    a: 'First, tap Settings → Subscription → Restore Purchases. Confirm you’re signed in with the account used for the purchase (your Apple ID on iOS, or your Google account on Android) and that you have a network connection. If it still shows Free after a minute, email support@plate2pan.app with your purchase receipt and we’ll sort it out fast.',
  },
]

function FeatureCell({ value }: { value: Cell }) {
  if (value === true)
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange/15 text-brand-orange">
        <Check className="w-4 h-4" />
      </span>
    )
  if (value === false)
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 text-white/20">
        <Minus className="w-4 h-4" />
      </span>
    )
  return <span className="text-white/70 text-sm font-medium">{value}</span>
}

export default function SubscriptionPage() {
  return (
    <HelpLayout
      title="Subscription & Billing"
      subtitle="Free vs. Home Chef, and how billing works"
    >
      <p className="text-white/60 leading-relaxed mb-10">
        Plate2Pan is free to use, with an optional Home Chef plan that unlocks
        unlimited AI and the most powerful features. Here's exactly what you get.
      </p>

      {/* Comparison table */}
      <div className="glass rounded-2xl overflow-hidden mb-6">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-4 px-5 text-sm font-semibold text-white/80">
                Feature
              </th>
              <th className="py-4 px-3 text-center text-sm font-semibold text-white/60 w-24">
                Free
              </th>
              <th className="py-4 px-3 text-center text-sm font-semibold text-brand-orange w-28">
                Home Chef
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map((r) => (
              <tr key={r.feature}>
                <td className="py-3.5 px-5 text-sm text-white/70">{r.feature}</td>
                <td className="py-3.5 px-3 text-center">
                  <div className="flex justify-center">
                    <FeatureCell value={r.free} />
                  </div>
                </td>
                <td className="py-3.5 px-3 text-center bg-brand-orange/[0.04]">
                  <div className="flex justify-center">
                    <FeatureCell value={r.pro} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pricing */}
      <div className="grid sm:grid-cols-2 gap-4 mb-14">
        <div className="glass rounded-2xl p-6">
          <p className="text-sm text-white/40 uppercase tracking-wide font-semibold mb-2">
            Free
          </p>
          <p className="text-3xl font-black text-white">
            $0
          </p>
          <p className="text-white/50 text-sm mt-2 leading-relaxed">
            10 AI scans per month, plus the full cookbook, Cook Mode, and meal
            planning.
          </p>
        </div>
        <div className="glass-orange rounded-2xl p-6 relative orange-glow-sm">
          <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-brand-orange text-white text-[10px] font-bold uppercase tracking-wide">
            7-day free trial
          </span>
          <p className="text-sm text-brand-orange uppercase tracking-wide font-semibold mb-2">
            Home Chef
          </p>
          <p className="text-3xl font-black text-white">
            $3.99
            <span className="text-base font-medium text-white/50">/month</span>
          </p>
          <p className="text-white/60 text-sm mt-1">
            or <strong className="text-white/80">$29.99/year</strong> — save
            ~38%
          </p>
          <p className="text-white/50 text-sm mt-2 leading-relaxed">
            Unlimited everything, plus Pan Raid and recipe variants.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.q} className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
            <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </HelpLayout>
  )
}
