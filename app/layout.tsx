import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Plate2Pan — AI Recipe App Launching Soon',
  description: 'Plate2Pan is launching soon on iPhone and iPad. Photograph a restaurant dish and turn it into an AI-generated recipe with guided cooking tools.',
  keywords: ['recipe app', 'restaurant recipe', 'AI cooking', 'food photography', 'recipe reverse engineer', 'cook mode', 'meal planner', 'dietary adaptation'],
  authors: [{ name: 'Abounding Media LLC' }],
  openGraph: {
    title: 'Plate2Pan — AI Recipe App Launching Soon',
    description: 'Launching soon on iPhone and iPad. Turn a restaurant dish photo into an AI-generated recipe.',
    url: 'https://plate2pan.app',
    siteName: 'Plate2Pan',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plate2Pan — AI Recipe App Launching Soon',
    description: 'Launching soon on iPhone and iPad. Turn a restaurant dish photo into an AI-generated recipe.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://plate2pan.app' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-dark-900 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
