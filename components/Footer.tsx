import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <Image
            src="/branding/logo-orange.png"
            alt="Plate2Pan"
            width={1630}
            height={370}
            className="h-auto w-36 opacity-90"
          />

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/40">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
            <Link href="/support" className="hover:text-white/70 transition-colors">Support</Link>
            <a href="mailto:support@plate2pan.app" className="hover:text-white/70 transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-white/30">
            © {year} Abounding Media LLC
          </div>
        </div>
      </div>
    </footer>
  )
}
