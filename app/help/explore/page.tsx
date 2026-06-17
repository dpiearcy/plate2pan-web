import Link from 'next/link'
import type { Metadata } from 'next'
import HelpLayout, { Step, Card } from '@/components/HelpLayout'
import {
  Search,
  SlidersHorizontal,
  Sparkles,
  BookmarkPlus,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Explore: Find & Generate Recipes — Plate2Pan Help',
  description:
    'Search Plate2Pan by keyword or ingredient, filter by diet, cuisine and time, and generate brand-new recipes with AI by describing what you want in plain language.',
}

const highlights = [
  {
    icon: Search,
    title: 'Search by keyword or ingredient',
    desc: 'Type a dish, a cuisine, or an ingredient — “lemon chicken”, “tofu”, “weeknight pasta” — and see matching recipes.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Filter the results',
    desc: 'Narrow by dietary needs, cuisine, and how much time you have so you only see recipes that fit tonight.',
  },
  {
    icon: Sparkles,
    title: 'Generate with AI',
    desc: 'Describe what you’re after in plain language and let Plate2Pan create a brand-new recipe just for you.',
  },
  {
    icon: BookmarkPlus,
    title: 'Save in one tap',
    desc: 'Found a keeper? Save it to your cookbook, ready for Cook Mode, meal planning, and grocery lists.',
  },
]

export default function ExplorePage() {
  return (
    <HelpLayout
      title="Explore"
      subtitle="Find a recipe — or generate one"
    >
      <div className="glass-orange rounded-2xl p-6 mb-12">
        <p className="font-semibold text-white text-lg">
          “Make me a 30-minute pasta with chicken.”
        </p>
        <p className="text-white/60 text-sm mt-1 leading-relaxed">
          Explore is where you search for recipes and generate new ones with AI.
          Search by keyword or ingredient, filter to your needs, or just describe
          what you’re craving.
        </p>
        <p className="text-white/40 text-xs mt-3">
          Searching is free for everyone. AI recipe generation is a Home Chef
          feature.{' '}
          <Link href="/help/subscription" className="text-brand-orange hover:underline">
            See plans →
          </Link>
        </p>
      </div>

      <p className="text-white/60 leading-relaxed mb-10">
        Open the <strong className="text-white/80">Explore</strong> tab to search,
        filter, and generate. Here’s everything it does.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-14">
        {highlights.map((f) => (
          <Card key={f.title} icon={<f.icon className="w-5 h-5" />} title={f.title}>
            {f.desc}
          </Card>
        ))}
      </div>

      <h2 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-6">
        Search & filter
      </h2>
      <div className="space-y-7 mb-14">
        <Step n={1} title="Type what you’re after">
          Search by a dish name, a cuisine, or an ingredient you want to use up.
        </Step>
        <Step n={2} title="Apply filters">
          Tap the filters to narrow by dietary needs, cuisine, and time. Allergies
          and restrictions are respected.
        </Step>
        <Step n={3} title="Save what you like">
          Tap save on any result and it lands in your cookbook, ready to cook.
        </Step>
      </div>

      <h2 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-6">
        Generate a recipe with AI
      </h2>
      <div className="space-y-7 mb-14">
        <Step n={1} title="Describe what you want">
          Use plain language — “a 30-minute pasta with chicken”, “a cozy vegetarian
          soup”, “something with the salmon in my fridge.”
        </Step>
        <Step n={2} title="Add your preferences">
          Mention any dietary needs, cuisine, or time limits and the recipe is built
          around them.
        </Step>
        <Step n={3} title="Review & save">
          Plate2Pan generates a complete recipe. Like it? Save it. Want a different
          take? Generate again.
        </Step>
        <Step n={4} title="Cook it">
          Send your new recipe straight into{' '}
          <Link href="/help/cook-mode" className="text-brand-orange hover:underline">
            Cook Mode
          </Link>{' '}
          and start cooking step by step.
        </Step>
      </div>

      <div className="glass rounded-2xl p-6 mb-12">
        <h3 className="font-semibold text-white mb-2">When AI generation is available</h3>
        <p className="text-white/55 text-sm leading-relaxed">
          Searching and filtering in Explore are free for everyone. Generating a
          brand-new recipe with AI is a{' '}
          <Link href="/help/subscription" className="text-brand-orange hover:underline">
            Home Chef
          </Link>{' '}
          feature, alongside Pan Raid and recipe variants.
        </p>
      </div>

      <div className="glass-orange rounded-2xl p-6">
        <h3 className="font-semibold text-white mb-2">Explore vs. Discover</h3>
        <p className="text-white/60 text-sm leading-relaxed">
          Explore searches recipes and generates new ones with AI. Want to see what
          real home cooks are sharing? Head to{' '}
          <Link href="/help/discover" className="text-brand-orange hover:underline">
            Discover
          </Link>
          . Cooking with what’s already in your kitchen? Try{' '}
          <Link href="/help/pan-raid" className="text-brand-orange hover:underline">
            Pan Raid
          </Link>
          .
        </p>
      </div>
    </HelpLayout>
  )
}
