import Link from 'next/link'
import type { Metadata } from 'next'
import HelpLayout, { Step, Card } from '@/components/HelpLayout'
import {
  Leaf,
  Heart,
  Wheat,
  Drumstick,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Second Act: Recipe Variants — Plate2Pan Help',
  description:
    'Second Act uses AI to adapt any saved recipe to a different diet or cooking style — Keto, Vegetarian, Vegan, Gluten-Free, Heart Healthy and more — then saves it as a new recipe.',
}

const styles = [
  {
    icon: Drumstick,
    title: 'Keto & low-carb',
    desc: 'Swaps high-carb ingredients for low-carb alternatives and rebalances the macros.',
  },
  {
    icon: Heart,
    title: 'Heart Healthy',
    desc: 'Cuts back on saturated fat and sodium and leans on heart-friendly ingredients.',
  },
  {
    icon: Leaf,
    title: 'Vegetarian & Vegan',
    desc: 'Replaces meat, and for vegan, all animal products — with the right plant-based stand-ins.',
  },
  {
    icon: Wheat,
    title: 'Gluten-Free & more',
    desc: 'Removes gluten-containing ingredients. Dairy-Free, Paleo and other styles work the same way.',
  },
]

export default function SecondActPage() {
  return (
    <HelpLayout
      title="Second Act"
      subtitle="Recipe variants, reimagined by AI"
    >
      <div className="glass-orange rounded-2xl p-6 mb-12">
        <p className="font-semibold text-white text-lg">
          “I love this recipe — but can I make it vegan?”
        </p>
        <p className="text-white/60 text-sm mt-1 leading-relaxed">
          Second Act takes any recipe you’ve saved and re-imagines it for a
          different diet or cooking style. It’s a fresh take on a dish you already
          love — adapted by AI, ready to cook.
        </p>
        <p className="text-white/40 text-xs mt-3">
          Second Act is a Home Chef feature.{' '}
          <Link href="/help/subscription" className="text-brand-orange hover:underline">
            See plans →
          </Link>
        </p>
      </div>

      <h2 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-6">
        How it works
      </h2>
      <div className="space-y-7 mb-14">
        <Step n={1} title="Open a recipe">
          Go to the detail screen of any recipe in your cookbook — one you scanned,
          imported, or generated.
        </Step>
        <Step n={2} title="Tap Second Act">
          Find the <strong className="text-white/80">Second Act</strong> option on
          the recipe and tap it to start a new variant.
        </Step>
        <Step n={3} title="Pick a style">
          Choose the diet or cooking style you want — Keto, Heart Healthy,
          Vegetarian, Vegan, Gluten-Free, and more.
        </Step>
        <Step n={4} title="Review the variant">
          Plate2Pan rewrites the ingredients and steps to match. Like it? Save it.
          Want a different take? Try another style.
        </Step>
        <Step n={5} title="Save as a new recipe">
          The variant is saved as its own recipe in your cookbook — your original
          stays exactly as it was.
        </Step>
      </div>

      <h2 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-6">
        Styles you can choose
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-14">
        {styles.map((s) => (
          <Card key={s.title} icon={<s.icon className="w-5 h-5" />} title={s.title}>
            {s.desc}
          </Card>
        ))}
      </div>

      <div className="glass rounded-2xl p-6 mb-6">
        <h3 className="font-semibold text-white mb-2">What changes</h3>
        <ul className="text-white/55 text-sm leading-relaxed space-y-1.5 list-disc pl-5">
          <li>Ingredients that don’t fit the chosen style are swapped for ones that do</li>
          <li>Steps are rewritten where the new ingredients need different handling</li>
          <li>Quantities and timing are adjusted to keep the dish working</li>
        </ul>
      </div>

      <div className="glass rounded-2xl p-6 mb-12">
        <h3 className="font-semibold text-white mb-2">What stays the same</h3>
        <ul className="text-white/55 text-sm leading-relaxed space-y-1.5 list-disc pl-5">
          <li>The spirit of the original dish — it’s a variant, not a brand-new recipe</li>
          <li>Your original recipe, untouched and still in your cookbook</li>
          <li>Everything else you love about Plate2Pan — the variant works with Cook Mode, meal planning, and grocery lists</li>
        </ul>
      </div>

      <div className="glass-orange rounded-2xl p-6">
        <h3 className="font-semibold text-white mb-2">Tip</h3>
        <p className="text-white/60 text-sm leading-relaxed">
          Need a quick swap mid-cook instead of a whole new version? Ask{' '}
          <Link href="/help/spark-ai" className="text-brand-orange hover:underline">
            Spark
          </Link>
          . When your variant is ready to cook, send it straight into{' '}
          <Link href="/help/cook-mode" className="text-brand-orange hover:underline">
            Cook Mode
          </Link>
          .
        </p>
      </div>
    </HelpLayout>
  )
}
