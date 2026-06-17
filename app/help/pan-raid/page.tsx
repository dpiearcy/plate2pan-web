import Link from 'next/link'
import type { Metadata } from 'next'
import HelpLayout, { Step } from '@/components/HelpLayout'

export const metadata: Metadata = {
  title: 'Pan Raid — Plate2Pan Help',
  description:
    'Use Pan Raid to turn the ingredients you already have into a recipe you can cook tonight. Build your pantry, set preferences, and let AI do the rest.',
}

export default function PanRaidPage() {
  return (
    <HelpLayout title="Pan Raid" subtitle="Cook with what you already have">
      <div className="glass-orange rounded-2xl p-6 mb-12">
        <p className="font-semibold text-white text-lg">
          “What can I make right now?”
        </p>
        <p className="text-white/60 text-sm mt-1 leading-relaxed">
          Pan Raid looks at what's in your pantry and generates a recipe you can
          actually cook tonight — no last-minute grocery run required.
        </p>
        <p className="text-white/40 text-xs mt-3">
          Pan Raid is a Home Chef feature.{' '}
          <Link href="/help/subscription" className="text-brand-orange hover:underline">
            See plans →
          </Link>
        </p>
      </div>

      <h2 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-6">
        How it works
      </h2>
      <div className="space-y-7">
        <Step n={1} title="Build your pantry">
          Add what you have on hand — scan items, type them in, or let finished
          recipes top up your inventory automatically. The more accurate your
          pantry, the better the suggestions.
        </Step>
        <Step n={2} title="Tap Pan Raid">
          Open Pan Raid and Plate2Pan scans your current pantry for what's
          cookable.
        </Step>
        <Step n={3} title="Set your preferences">
          Choose dietary preferences, cuisine, and how much effort you're up for
          tonight. Allergies and restrictions are respected.
        </Step>
        <Step n={4} title="Review the recipe">
          Plate2Pan generates a recipe built around your ingredients. Like it?
          Save it. Want something else? Generate again.
        </Step>
        <Step n={5} title="Save & cook">
          Send it straight into{' '}
          <Link href="/help/cook-mode" className="text-brand-orange hover:underline">
            Cook Mode
          </Link>{' '}
          and start cooking step by step.
        </Step>
        <Step n={6} title="Pantry auto-updates">
          When you finish, the ingredients you used are deducted from your
          pantry — so your next Pan Raid is always accurate.
        </Step>
      </div>

      <div className="mt-12 glass rounded-2xl p-6">
        <h3 className="font-semibold text-white mb-2">Tip</h3>
        <p className="text-white/55 text-sm leading-relaxed">
          Keep your pantry roughly current and Pan Raid gets dramatically better.
          Cook Mode's automatic pantry deduction does most of the upkeep for you.
        </p>
      </div>
    </HelpLayout>
  )
}
