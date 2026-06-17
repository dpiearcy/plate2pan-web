import Link from 'next/link'
import type { Metadata } from 'next'
import HelpLayout, { Step, Card } from '@/components/HelpLayout'
import {
  Replace,
  GraduationCap,
  Clock,
  CircleHelp,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ask Spark: Your AI Cooking Assistant — Plate2Pan Help',
  description:
    'Spark is the AI cooking assistant inside Plate2Pan. Ask questions mid-cook, get ingredient substitutions, and learn techniques — right from Cook Mode or any recipe.',
}

const canDo = [
  {
    icon: Replace,
    title: 'Ingredient substitutions',
    desc: '“I’m out of buttermilk — what can I use?” Spark suggests swaps that work for the dish and respects what you have on hand.',
  },
  {
    icon: GraduationCap,
    title: 'Technique questions',
    desc: '“How do I know when the onions are done?” or “What does it mean to fold the batter?” Get a clear, plain-language answer in seconds.',
  },
  {
    icon: Clock,
    title: 'On-the-fly help',
    desc: 'Doubling the recipe, fixing a sauce that broke, or wondering if you can skip a step — ask without leaving your place in the recipe.',
  },
  {
    icon: CircleHelp,
    title: 'Recipe-aware answers',
    desc: 'Spark can see the recipe you’re cooking, so its answers fit the exact ingredients and steps in front of you.',
  },
]

export default function SparkAIPage() {
  return (
    <HelpLayout
      title="Ask Spark"
      subtitle="Your AI cooking assistant"
    >
      <div className="glass-orange rounded-2xl p-6 mb-12">
        <p className="font-semibold text-white text-lg">
          “Can I substitute butter for oil?”
        </p>
        <p className="text-white/60 text-sm mt-1 leading-relaxed">
          Spark is the AI cooking assistant built into Plate2Pan. Tap the chat
          bubble any time you have a question and get an answer that fits the
          recipe you’re actually cooking — no Googling, no losing your place.
        </p>
        <p className="text-white/40 text-xs mt-3">
          Spark is a Home Chef feature.{' '}
          <Link href="/help/subscription" className="text-brand-orange hover:underline">
            See plans →
          </Link>
        </p>
      </div>

      <p className="text-white/60 leading-relaxed mb-10">
        Look for the <strong className="text-white/80">chat bubble</strong> —
        it’s available from{' '}
        <Link href="/help/cook-mode" className="text-brand-orange hover:underline">
          Cook Mode
        </Link>{' '}
        and from the main recipe view. Tap it whenever a question comes up, mid-cook
        or while you’re planning ahead.
      </p>

      <h2 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-6">
        How to ask Spark
      </h2>
      <div className="space-y-7 mb-14">
        <Step n={1} title="Open the chat bubble">
          Tap the chat bubble from any recipe or from inside Cook Mode. Spark
          opens without interrupting your timers or your current step.
        </Step>
        <Step n={2} title="Ask in plain language">
          Type or speak your question the way you’d ask a friend — “How do I know
          when the onions are done?” or “Can I use Greek yogurt instead of sour
          cream?”
        </Step>
        <Step n={3} title="Get a recipe-aware answer">
          Because Spark can see the recipe you’re on, the answer accounts for your
          ingredients, quantities, and the step you’re working on.
        </Step>
        <Step n={4} title="Keep cooking">
          Close the chat and you’re right back where you left off — same step, same
          timers running.
        </Step>
      </div>

      <h2 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-6">
        What Spark helps with
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-14">
        {canDo.map((f) => (
          <Card key={f.title} icon={<f.icon className="w-5 h-5" />} title={f.title}>
            {f.desc}
          </Card>
        ))}
      </div>

      <div className="glass rounded-2xl p-6 mb-6">
        <h3 className="font-semibold text-white mb-2">What Spark can do</h3>
        <ul className="text-white/55 text-sm leading-relaxed space-y-1.5 list-disc pl-5">
          <li>Suggest ingredient swaps and substitutions</li>
          <li>Explain cooking techniques and terms</li>
          <li>Help you scale a recipe up or down</li>
          <li>Troubleshoot a step that isn’t going to plan</li>
          <li>Answer questions about the recipe you’re cooking</li>
        </ul>
      </div>

      <div className="glass rounded-2xl p-6 mb-12">
        <h3 className="font-semibold text-white mb-2">What Spark can’t do</h3>
        <ul className="text-white/55 text-sm leading-relaxed space-y-1.5 list-disc pl-5">
          <li>Replace medical or allergy advice — always double-check substitutions against your own dietary needs</li>
          <li>Control your stove, oven, or kitchen appliances</li>
          <li>Guarantee results — cooking varies by equipment, so use your judgment</li>
        </ul>
      </div>

      <div className="glass-orange rounded-2xl p-6">
        <h3 className="font-semibold text-white mb-2">Tip</h3>
        <p className="text-white/60 text-sm leading-relaxed">
          Want a whole new version of a recipe instead of a quick swap? Try{' '}
          <Link href="/help/second-act" className="text-brand-orange hover:underline">
            Second Act
          </Link>{' '}
          to adapt the entire recipe to a different diet or cooking style.
        </p>
      </div>
    </HelpLayout>
  )
}
