import Link from 'next/link'
import type { Metadata } from 'next'
import HelpLayout from '@/components/HelpLayout'
import { Instagram, Compass, Music2, Globe, Link2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Import from Instagram, Pinterest & TikTok — Plate2Pan Help',
  description:
    'Step-by-step guides for saving recipes into Plate2Pan from Instagram, Pinterest, TikTok, Safari, or any direct URL.',
}

const platforms = [
  {
    key: 'instagram',
    name: 'Instagram',
    icon: Instagram,
    accent: 'from-fuchsia-500/20 to-orange-500/20',
    iconColor: 'text-fuchsia-400',
    note: 'Works for Reels, posts, and carousels.',
    steps: ['Tap the ··· menu on the post', 'Choose Share to', 'Open the Share Sheet', 'Tap Plate2Pan'],
  },
  {
    key: 'pinterest',
    name: 'Pinterest',
    icon: Compass,
    accent: 'from-red-500/20 to-rose-500/20',
    iconColor: 'text-red-400',
    note: 'Plate2Pan follows the pin link to the source recipe automatically.',
    steps: ['Open the pin', 'Tap the Send button', 'Open the Share Sheet', 'Tap Plate2Pan'],
  },
  {
    key: 'tiktok',
    name: 'TikTok',
    icon: Music2,
    accent: 'from-cyan-500/20 to-pink-500/20',
    iconColor: 'text-cyan-300',
    note: 'Great for quick recipe videos.',
    steps: ['Tap Share on the video', 'Scroll to More', 'Tap Plate2Pan'],
  },
  {
    key: 'safari',
    name: 'Safari',
    icon: Globe,
    accent: 'from-sky-500/20 to-blue-500/20',
    iconColor: 'text-sky-400',
    note: 'Any recipe blog or website works. On Android, do the same from Chrome: tap ⋮ → Share → Plate2Pan.',
    steps: ['Tap the Share button in the toolbar', 'Tap Plate2Pan'],
  },
  {
    key: 'url',
    name: 'Direct URL',
    icon: Link2,
    accent: 'from-orange-500/20 to-amber-500/20',
    iconColor: 'text-brand-orange',
    note: 'No Share Sheet needed — paste any link.',
    steps: ['Copy the recipe URL', 'Open Plate2Pan and tap +', 'Choose Import from URL', 'Paste the link and import'],
  },
]

export default function SocialImportPage() {
  return (
    <HelpLayout
      title="Import from Social"
      subtitle="Instagram · Pinterest · TikTok · Safari · URL"
    >
      <p className="text-white/60 leading-relaxed mb-6">
        Found a recipe while scrolling? Send it straight to your cookbook. These
        steps use your phone's share menu — the{' '}
        <strong className="text-white/80">Share Sheet</strong> on iPhone &amp;
        iPad, or the <strong className="text-white/80">share menu</strong> on
        Android. On iOS, set up the Share Sheet once and the rest takes a single
        tap. On Android, Plate2Pan shows up in the share menu automatically — no
        setup needed.
      </p>

      <Link
        href="/help/share-sheet"
        className="group block glass-orange rounded-2xl p-5 mb-12 transition-all hover:orange-glow-sm"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="inline-block px-2 py-0.5 mb-1.5 rounded-full bg-brand-orange text-white text-[10px] font-bold uppercase tracking-wide">
              ⭐ Start Here
            </span>
            <p className="font-semibold text-white">Set up the Share Sheet first (iPhone &amp; iPad)</p>
            <p className="text-white/55 text-sm mt-0.5">
              The one-time iOS setup that powers Instagram, Pinterest, TikTok &
              Safari imports. Android users can skip this — the share menu works
              out of the box.
            </p>
          </div>
          <span className="text-brand-orange font-semibold text-sm group-hover:underline whitespace-nowrap">
            Set up →
          </span>
        </div>
      </Link>

      <div className="space-y-6">
        {platforms.map((p) => {
          const Icon = p.icon
          return (
            <div
              key={p.key}
              className="glass rounded-2xl p-6 transition-all hover:border-white/15"
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.accent} border border-white/10 flex items-center justify-center ${p.iconColor}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="font-semibold text-white text-lg">{p.name}</h2>
              </div>

              {/* breadcrumb-style step flow */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {p.steps.map((step, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-white/70 text-xs font-medium">
                      <span className="text-brand-orange font-bold">{i + 1}</span>
                      {step}
                    </span>
                    {i < p.steps.length - 1 && (
                      <span className="text-white/25 text-sm">→</span>
                    )}
                  </span>
                ))}
              </div>

              <p className="text-white/45 text-xs leading-relaxed">{p.note}</p>
            </div>
          )
        })}
      </div>
    </HelpLayout>
  )
}
