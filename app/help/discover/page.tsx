import Link from 'next/link'
import type { Metadata } from 'next'
import HelpLayout, { Step, Card } from '@/components/HelpLayout'
import {
  Compass,
  BookmarkPlus,
  Heart,
  Share2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Discover: Community Recipes — Plate2Pan Help',
  description:
    'Browse recipes shared by the Plate2Pan community, save them to your collection in one tap, like the ones you love, and share your own recipes to Discover.',
}

const highlights = [
  {
    icon: Compass,
    title: 'Browse the community',
    desc: 'Scroll a feed of recipes shared by other home cooks — fresh ideas and crowd favorites, all in one place.',
  },
  {
    icon: BookmarkPlus,
    title: 'Save in one tap',
    desc: 'See something you’d cook? Tap save and it lands in your own cookbook, ready for Cook Mode and meal planning.',
  },
  {
    icon: Heart,
    title: 'Like what you love',
    desc: 'Tap the heart to show appreciation. Likes help great recipes rise so the whole community finds them.',
  },
  {
    icon: Share2,
    title: 'Share your own',
    desc: 'Post a recipe from your cookbook to Discover and let other cooks save and enjoy it.',
  },
]

export default function DiscoverPage() {
  return (
    <HelpLayout
      title="Discover"
      subtitle="Community recipes from cooks like you"
    >
      <div className="glass-orange rounded-2xl p-6 mb-12">
        <p className="font-semibold text-white text-lg">
          “Show me what everyone else is cooking.”
        </p>
        <p className="text-white/60 text-sm mt-1 leading-relaxed">
          Discover is the community tab in Plate2Pan. Browse recipes shared by
          other home cooks, save the ones you love to your own collection, and
          share your favorites back.
        </p>
        <p className="text-white/40 text-xs mt-3">
          Browsing and saving from Discover is free for everyone. Sharing your own
          recipes requires Home Chef.{' '}
          <Link href="/help/subscription" className="text-brand-orange hover:underline">
            See plans →
          </Link>
        </p>
      </div>

      <p className="text-white/60 leading-relaxed mb-10">
        Open the <strong className="text-white/80">Discover</strong> tab to see a
        feed of community recipes. Here’s everything you can do.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-14">
        {highlights.map((f) => (
          <Card key={f.title} icon={<f.icon className="w-5 h-5" />} title={f.title}>
            {f.desc}
          </Card>
        ))}
      </div>

      <h2 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-6">
        Save a community recipe
      </h2>
      <div className="space-y-7 mb-14">
        <Step n={1} title="Open the Discover tab">
          Browse the feed and tap any recipe to see its ingredients and steps.
        </Step>
        <Step n={2} title="Tap save">
          One tap copies the recipe into your own cookbook — no retyping.
        </Step>
        <Step n={3} title="Cook it your way">
          Saved recipes work just like your own: send them to{' '}
          <Link href="/help/cook-mode" className="text-brand-orange hover:underline">
            Cook Mode
          </Link>
          , add them to your{' '}
          <Link href="/help/meal-planning" className="text-brand-orange hover:underline">
            meal plan
          </Link>
          , or adapt them with{' '}
          <Link href="/help/second-act" className="text-brand-orange hover:underline">
            Second Act
          </Link>
          .
        </Step>
      </div>

      <h2 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-6">
        Share one of your recipes
      </h2>
      <div className="space-y-7 mb-14">
        <Step n={1} title="Open a recipe in your cookbook">
          Pick any recipe you’d like to share with the community.
        </Step>
        <Step n={2} title="Tap Share to Discover">
          Confirm the details and post it. Sharing to Discover is a Home Chef
          feature.
        </Step>
        <Step n={3} title="See the love roll in">
          Other cooks can now find your recipe, save it, and like it.
        </Step>
      </div>

      <div className="glass rounded-2xl p-6 mb-12">
        <h3 className="font-semibold text-white mb-2">What gets shared</h3>
        <p className="text-white/55 text-sm leading-relaxed mb-3">
          When you share a recipe to Discover, the community sees:
        </p>
        <ul className="text-white/55 text-sm leading-relaxed space-y-1.5 list-disc pl-5">
          <li>The recipe title</li>
          <li>The photo</li>
          <li>The ingredients</li>
          <li>The instructions</li>
        </ul>
        <p className="text-white/55 text-sm leading-relaxed mt-3">
          Your <strong className="text-white/80">private notes stay private</strong>
          {' '}— they’re never shared. You can remove a recipe from Discover any time.
        </p>
      </div>

      <div className="glass-orange rounded-2xl p-6">
        <h3 className="font-semibold text-white mb-2">Discover vs. Explore</h3>
        <p className="text-white/60 text-sm leading-relaxed">
          Discover is for recipes shared by real people. Looking to search the web
          or generate something new with AI? Head to{' '}
          <Link href="/help/explore" className="text-brand-orange hover:underline">
            Explore
          </Link>
          .
        </p>
      </div>
    </HelpLayout>
  )
}
