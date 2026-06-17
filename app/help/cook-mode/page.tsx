import type { Metadata } from 'next'
import HelpLayout, { Card } from '@/components/HelpLayout'
import {
  ListChecks,
  Timer,
  Carrot,
  Mic,
  Volume2,
  Sun,
  Refrigerator,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cook Mode Guide — Plate2Pan Help',
  description:
    'How to use Cook Mode in Plate2Pan: step navigation, auto timers, ingredient callouts, voice control, read-aloud, always-on screen, and pantry deduction.',
}

const features = [
  {
    icon: ListChecks,
    title: 'Step navigation',
    desc: 'See one step at a time with a clear progress bar. Swipe or tap to move forward and back so you never lose your place.',
  },
  {
    icon: Timer,
    title: 'Auto timers',
    desc: 'Timed steps start a countdown with a tap. You get a notification when time’s up — even if your screen is off or you’ve switched apps.',
  },
  {
    icon: Carrot,
    title: 'Ingredient callouts',
    desc: 'Each step shows exactly the ingredients it needs, scaled to your chosen serving size. No flipping back to the top of the recipe.',
  },
  {
    icon: Mic,
    title: 'Voice control',
    desc: 'Hands covered in flour? Just say “next”, “previous”, or “repeat” to move through the recipe without touching your phone.',
  },
  {
    icon: Volume2,
    title: 'Read-aloud',
    desc: 'Plate2Pan can read each step out loud so you can keep your eyes on the pan and your hands on the knife.',
  },
  {
    icon: Sun,
    title: 'Screen stays awake',
    desc: 'The display won’t dim or lock while you’re cooking, so the current step is always visible at a glance.',
  },
  {
    icon: Refrigerator,
    title: 'Pantry update on finish',
    desc: 'When you finish a recipe, Plate2Pan deducts the ingredients you used from your pantry inventory automatically.',
  },
]

export default function CookModePage() {
  return (
    <HelpLayout
      title="Cook Mode Guide"
      subtitle="Hands-free, step-by-step cooking"
    >
      <p className="text-white/60 leading-relaxed mb-10">
        Cook Mode turns any saved recipe into a guided, hands-free cooking
        experience. Open a recipe and tap{' '}
        <strong className="text-white/80">Start Cooking</strong> to begin —
        here's everything it does for you.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {features.map((f) => (
          <Card key={f.title} icon={<f.icon className="w-5 h-5" />} title={f.title}>
            {f.desc}
          </Card>
        ))}
      </div>

      <div className="mt-10 glass-orange rounded-2xl p-6">
        <h3 className="font-semibold text-white mb-2">Putting it together</h3>
        <p className="text-white/60 text-sm leading-relaxed">
          Start a recipe, set your serving size, and let Cook Mode walk you
          through it — reading steps aloud, running your timers, and listening
          for “next”. When you finish, your pantry updates itself so your next
          Pan Raid is always accurate.
        </p>
      </div>
    </HelpLayout>
  )
}
