import Link from 'next/link'
import Image from 'next/image'

interface HelpLayoutProps {
  title: string
  subtitle?: string
  /** Where the "← Back" link points. Defaults to the help hub. */
  backHref?: string
  backLabel?: string
  /** Show the "Start Here" badge near the title (used by the share-sheet page). */
  startHere?: boolean
  children: React.ReactNode
}

export default function HelpLayout({
  title,
  subtitle,
  backHref = '/help',
  backLabel = '← Back to Help Center',
  startHere = false,
  children,
}: HelpLayoutProps) {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="border-b border-white/5 px-6 py-4 sticky top-0 z-40 bg-dark-900/90 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" aria-label="Plate2Pan home">
            <Image
              src="/branding/logo-white.png"
              alt="Plate2Pan"
              width={1630}
              height={370}
              className="h-auto w-36 opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
          <Link
            href={backHref}
            className="text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            {backLabel}
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        {startHere && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full bg-brand-orange text-white text-xs font-bold uppercase tracking-wide orange-glow-sm">
            ⭐ Start Here
          </span>
        )}
        <h1 className="text-4xl font-black mb-2">{title}</h1>
        {subtitle && <p className="text-white/40 text-sm mb-12">{subtitle}</p>}

        {children}

        {/* Footer help nav */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-white/30 text-sm mb-2">Still need a hand?</p>
          <a
            href="mailto:support@plate2pan.app"
            className="text-brand-orange hover:underline text-sm"
          >
            support@plate2pan.app
          </a>
          <div className="mt-4">
            <Link
              href="/help"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Browse all help articles →
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

/* ---------- Shared building blocks ---------- */

/** Orange numbered step circle + content. */
export function Step({
  n,
  title,
  children,
}: {
  n: number
  title?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-orange text-white font-bold flex items-center justify-center text-sm orange-glow-sm">
        {n}
      </div>
      <div className="pt-1 flex-1 min-w-0">
        {title && <h3 className="font-semibold text-white mb-1">{title}</h3>}
        <div className="text-white/60 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

/** Glass feature/info card. */
export function Card({
  icon,
  title,
  children,
  className = '',
}: {
  icon?: React.ReactNode
  title: string
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={`glass rounded-2xl p-6 ${className}`}>
      {icon && (
        <div className="w-11 h-11 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mb-4 text-brand-orange">
          {icon}
        </div>
      )}
      <h3 className="font-semibold text-white mb-2">{title}</h3>
      {children && (
        <div className="text-white/55 text-sm leading-relaxed">{children}</div>
      )}
    </div>
  )
}
