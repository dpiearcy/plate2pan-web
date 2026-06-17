import type { Metadata } from 'next'
import HelpLayout from '@/components/HelpLayout'

export const metadata: Metadata = {
  title: 'Set Up the iOS Share Sheet — Plate2Pan Help',
  description:
    'Add Plate2Pan to your iOS Share Sheet in five quick steps so you can save any recipe from Safari, Instagram, Pinterest, or TikTok with a single tap.',
}

/* ---------- CSS-drawn iOS mockups ---------- */

// A small Plate2Pan "app icon" tile.
function P2PIcon({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const dim = size === 'sm' ? 'w-11 h-11' : 'w-14 h-14'
  const text = size === 'sm' ? 'text-base' : 'text-xl'
  return (
    <div
      className={`${dim} rounded-[22%] bg-gradient-to-br from-brand-orange to-brand-orange-dark flex items-center justify-center ${text} shadow-lg`}
    >
      🍳
    </div>
  )
}

function GenericIcon({
  emoji,
  color = 'bg-white/10',
}: {
  emoji: string
  color?: string
}) {
  return (
    <div
      className={`w-14 h-14 rounded-[22%] ${color} flex items-center justify-center text-xl`}
    >
      {emoji}
    </div>
  )
}

// Frame that looks like the bottom Share Sheet sliding up.
function SheetFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 rounded-3xl bg-dark-700 border border-white/10 p-4 shadow-2xl overflow-hidden">
      <div className="w-9 h-1 rounded-full bg-white/20 mx-auto mb-4" />
      {children}
    </div>
  )
}

/* Step 1 — an app toolbar with the Share button highlighted */
function MockStep1() {
  return (
    <div className="mt-5 rounded-3xl bg-dark-700 border border-white/10 overflow-hidden shadow-2xl">
      {/* fake content */}
      <div className="p-5 space-y-2">
        <div className="h-3 w-2/3 rounded bg-white/10" />
        <div className="h-3 w-full rounded bg-white/5" />
        <div className="h-3 w-5/6 rounded bg-white/5" />
        <div className="h-28 w-full rounded-xl bg-white/[0.04] mt-3" />
      </div>
      {/* toolbar */}
      <div className="flex items-center justify-around border-t border-white/10 bg-dark-600 px-4 py-3 text-white/30">
        <span className="text-lg">‹</span>
        <span className="text-lg">›</span>
        <div className="relative">
          <div className="absolute -inset-2 rounded-xl bg-brand-orange/20 border border-brand-orange/40 animate-pulse" />
          <span className="relative text-lg text-brand-orange">📤</span>
        </div>
        <span className="text-lg">📖</span>
        <span className="text-lg">⧉</span>
      </div>
    </div>
  )
}

/* Step 2 — horizontal app row ending in "More" */
function MockStep2() {
  return (
    <SheetFrame>
      <p className="text-white/40 text-xs mb-3 px-1">Scroll the app row →</p>
      <div className="flex gap-4 overflow-hidden">
        {[
          { e: '✈️', c: 'bg-sky-500/20' },
          { e: '💬', c: 'bg-green-500/20' },
          { e: '📝', c: 'bg-yellow-500/20' },
          { e: '🔖', c: 'bg-rose-500/20' },
        ].map((a, i) => (
          <div key={i} className="flex-shrink-0 opacity-50">
            <GenericIcon emoji={a.e} color={a.c} />
          </div>
        ))}
        {/* More */}
        <div className="flex-shrink-0 relative">
          <div className="absolute -inset-1.5 rounded-2xl bg-brand-orange/20 border border-brand-orange/40 animate-pulse" />
          <div className="relative w-14 h-14 rounded-[22%] bg-white/10 flex items-center justify-center text-2xl text-white/80">
            •••
          </div>
        </div>
      </div>
      <p className="text-center text-brand-orange text-xs font-semibold mt-3">
        Tap “More”
      </p>
    </SheetFrame>
  )
}

/* Step 3 — full app list with a green + next to Plate2Pan */
function MockStep3() {
  const rows = [
    { name: 'Notes', icon: '📝', active: false },
    { name: 'Reminders', icon: '🔖', active: false },
    { name: 'Plate2Pan', icon: null, active: true },
    { name: 'Books', icon: '📖', active: false },
  ]
  return (
    <SheetFrame>
      <p className="text-white/40 text-xs mb-3 px-1">Apps</p>
      <div className="divide-y divide-white/5">
        {rows.map((r) => (
          <div
            key={r.name}
            className={`flex items-center gap-3 py-2.5 px-1 ${
              r.active ? 'bg-brand-orange/5 rounded-xl' : ''
            }`}
          >
            {r.active ? (
              <P2PIcon size="sm" />
            ) : (
              <div className="w-11 h-11 rounded-[22%] bg-white/10 flex items-center justify-center text-base opacity-60">
                {r.icon}
              </div>
            )}
            <span
              className={`flex-1 text-sm ${
                r.active ? 'text-white font-semibold' : 'text-white/50'
              }`}
            >
              {r.name}
            </span>
            {r.active ? (
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-500 text-white text-lg font-bold leading-none">
                +
              </span>
            ) : (
              <span className="text-white/20 text-lg">⊖</span>
            )}
          </div>
        ))}
      </div>
      <p className="text-center text-brand-orange text-xs font-semibold mt-3">
        Tap the green + on Plate2Pan
      </p>
    </SheetFrame>
  )
}

/* Step 4 — Favorites reorder list, Plate2Pan being dragged to the top */
function MockStep4() {
  const favs = [
    { name: 'Plate2Pan', active: true },
    { name: 'Messages', active: false },
    { name: 'Mail', active: false },
  ]
  return (
    <SheetFrame>
      <p className="text-white/40 text-xs mb-3 px-1">Favorites</p>
      <div className="space-y-2">
        {favs.map((f, i) => (
          <div
            key={f.name}
            className={`flex items-center gap-3 py-2.5 px-3 rounded-xl ${
              f.active
                ? 'bg-brand-orange/10 border border-brand-orange/30 orange-glow-sm'
                : 'bg-white/[0.03]'
            }`}
          >
            {f.active ? (
              <P2PIcon size="sm" />
            ) : (
              <div className="w-11 h-11 rounded-[22%] bg-white/10 flex items-center justify-center text-base opacity-60">
                {i === 1 ? '💬' : '✉️'}
              </div>
            )}
            <span
              className={`flex-1 text-sm ${
                f.active ? 'text-white font-semibold' : 'text-white/50'
              }`}
            >
              {f.name}
            </span>
            <span className="text-white/30 text-lg leading-none">≡</span>
          </div>
        ))}
      </div>
      <p className="text-center text-brand-orange text-xs font-semibold mt-3">
        Drag ≡ to move Plate2Pan to the top
      </p>
    </SheetFrame>
  )
}

/* Step 5 — Plate2Pan now sitting first in the Favorites row */
function MockStep5() {
  return (
    <SheetFrame>
      <div className="flex gap-4 overflow-hidden">
        <div className="flex-shrink-0 text-center">
          <div className="relative">
            <div className="absolute -inset-1.5 rounded-2xl bg-brand-orange/20 border border-brand-orange/40" />
            <div className="relative">
              <P2PIcon />
            </div>
          </div>
          <span className="block text-[10px] text-white/60 mt-1.5 w-14 truncate">
            Plate2Pan
          </span>
        </div>
        {[
          { e: '💬', c: 'bg-green-500/20', n: 'Messages' },
          { e: '✉️', c: 'bg-sky-500/20', n: 'Mail' },
          { e: '📝', c: 'bg-yellow-500/20', n: 'Notes' },
        ].map((a) => (
          <div key={a.n} className="flex-shrink-0 text-center opacity-60">
            <GenericIcon emoji={a.e} color={a.c} />
            <span className="block text-[10px] text-white/50 mt-1.5 w-14 truncate">
              {a.n}
            </span>
          </div>
        ))}
      </div>
      <p className="text-center text-brand-orange text-xs font-semibold mt-4">
        One tap → recipe saved 🎉
      </p>
    </SheetFrame>
  )
}

const steps = [
  {
    title: 'Open any app and tap Share',
    body: (
      <>
        Open Safari, Instagram, Pinterest, or TikTok and find a recipe. Tap the{' '}
        <strong className="text-white/80">Share button</strong> (📤) — it's
        usually in the toolbar or behind the ··· menu.
      </>
    ),
    mock: <MockStep1 />,
  },
  {
    title: 'Scroll to “More”',
    body: (
      <>
        The Share Sheet slides up with a row of app icons. Scroll that row to the
        left until you reach <strong className="text-white/80">More</strong>{' '}
        (the three dots).
      </>
    ),
    mock: <MockStep2 />,
  },
  {
    title: 'Add Plate2Pan',
    body: (
      <>
        Tapping More opens your full app list. Find{' '}
        <strong className="text-white/80">Plate2Pan</strong> and tap the green{' '}
        <strong className="text-green-400">+</strong> to add it to your
        favorites.
      </>
    ),
    mock: <MockStep3 />,
  },
  {
    title: 'Drag it to the top',
    body: (
      <>
        In the <strong className="text-white/80">Favorites</strong> list, press
        and drag the ≡ handle to move Plate2Pan to the top row so it's always one
        tap away.
      </>
    ),
    mock: <MockStep4 />,
  },
  {
    title: "You're done!",
    body: (
      <>
        From now on, tap <strong className="text-white/80">Plate2Pan</strong> in
        any Share Sheet to instantly save the recipe to your cookbook — no
        copy-pasting, no switching apps.
      </>
    ),
    mock: <MockStep5 />,
  },
]

export default function ShareSheetPage() {
  return (
    <HelpLayout
      title="Set Up the iOS Share Sheet"
      subtitle="5 quick steps · about 30 seconds"
      startHere
    >
      {/* Payoff banner */}
      <div className="glass-orange rounded-2xl p-6 mb-6">
        <p className="font-semibold text-white text-lg">
          One tap to save any recipe.
        </p>
        <p className="text-white/60 text-sm mt-1 leading-relaxed">
          Set this up once and Plate2Pan lives right inside the iOS Share Sheet.
          See a recipe anywhere — a blog, Instagram, a friend's text — and send it
          straight to your cookbook with a single tap.
        </p>
      </div>

      {/* Android note */}
      <div className="glass rounded-2xl p-5 mb-12 flex gap-3">
        <span className="text-xl leading-none">🤖</span>
        <p className="text-white/55 text-sm leading-relaxed">
          <strong className="text-white/80">On Android?</strong> This guide is for
          iPhone and iPad. Android works a little differently — you don't need to
          set anything up. Just tap <strong className="text-white/80">Share</strong>{' '}
          in any app and choose <strong className="text-white/80">Plate2Pan</strong>{' '}
          from the Android share menu to save a recipe.
        </p>
      </div>

      <div className="space-y-12">
        {steps.map((s, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-brand-orange text-white font-bold flex items-center justify-center text-sm orange-glow-sm">
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="w-px flex-1 bg-white/10 mt-2" />
              )}
            </div>
            <div className="flex-1 min-w-0 pb-2">
              <h2 className="font-semibold text-white text-lg mb-1.5">
                {s.title}
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">{s.body}</p>
              {s.mock}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 glass rounded-2xl p-6">
        <h3 className="font-semibold text-white mb-2">Tip</h3>
        <p className="text-white/55 text-sm leading-relaxed">
          You only have to do this once per device. After it's in your Favorites,
          Plate2Pan appears at the top of every Share Sheet across all your apps.
        </p>
      </div>
    </HelpLayout>
  )
}
