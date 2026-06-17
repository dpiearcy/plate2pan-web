import Link from 'next/link'
import type { Metadata } from 'next'
import HelpLayout from '@/components/HelpLayout'
import { Camera, Link2, Share2, PencilLine, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Getting Started — Plate2Pan Help',
  description:
    'The five ways to get recipes into Plate2Pan: scan a dish, import from a URL, save from social media, enter manually, or generate with AI.',
}

const methods = [
  {
    icon: Camera,
    title: 'Scan a dish',
    desc: 'Photograph a finished dish — at a restaurant or from a cookbook — and let AI reverse-engineer a full recipe.',
    steps: [
      'Tap the camera button on the home screen.',
      'Take a photo of the dish, or pick one from your library.',
      'Add an optional note (e.g. “extra spicy, no dairy”).',
      'Review the generated recipe and tap Save.',
    ],
  },
  {
    icon: Link2,
    title: 'Import from URL',
    desc: 'Paste a link to any recipe blog or website and Plate2Pan pulls in the ingredients and steps.',
    steps: [
      'Copy the recipe’s web address.',
      'Tap + → Import from URL.',
      'Paste the link and tap Import.',
      'Tidy up anything if needed, then Save.',
    ],
  },
  {
    icon: Share2,
    title: 'Save from social',
    desc: 'Grab recipes from Instagram, Pinterest, and TikTok using your phone’s share menu.',
    steps: [
      'On iOS, set up the Share Sheet once (~30 seconds). On Android, no setup needed.',
      'Find a recipe in your favorite app.',
      'Tap Share → Plate2Pan.',
      'The recipe lands in your cookbook automatically.',
    ],
    featuredLink: { href: '/help/share-sheet', label: 'Set up the Share Sheet (iOS) →' },
  },
  {
    icon: PencilLine,
    title: 'Enter manually',
    desc: 'Already know the recipe? Type it in yourself for full control.',
    steps: [
      'Tap + → Add manually.',
      'Enter a title, ingredients, and steps.',
      'Set servings, time, and tags.',
      'Tap Save to add it to your cookbook.',
    ],
  },
  {
    icon: Sparkles,
    title: 'Generate with AI',
    desc: 'Describe what you’re craving and let Plate2Pan create a brand-new recipe for you.',
    steps: [
      'Tap + → Generate with AI.',
      'Describe the dish, cuisine, or ingredients.',
      'Add any dietary preferences or restrictions.',
      'Review the result and Save your favorites.',
    ],
  },
]

export default function GettingStartedPage() {
  return (
    <HelpLayout
      title="Getting Started"
      subtitle="Five ways to fill your cookbook"
    >
      <p className="text-white/60 leading-relaxed mb-10">
        Plate2Pan meets you wherever your recipes come from. However you find
        food inspiration, there's a quick way to capture it. Here are all five.
      </p>

      <div className="space-y-6">
        {methods.map((m) => {
          const Icon = m.icon
          return (
            <div key={m.title} className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-white text-lg">{m.title}</h2>
                  <p className="text-white/55 text-sm mt-1 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>

              <ol className="mt-5 space-y-3 sm:pl-14">
                {m.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange/15 text-brand-orange text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-white/60 text-sm leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>

              {m.featuredLink && (
                <Link
                  href={m.featuredLink.href}
                  className="inline-block mt-5 text-brand-orange hover:underline text-sm font-semibold"
                >
                  {m.featuredLink.label}
                </Link>
              )}
            </div>
          )
        })}
      </div>
    </HelpLayout>
  )
}
