import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Plate to Pan — Reverse-Engineer Any Restaurant Dish',
  description: 'Photograph a dish at a restaurant, get a full recipe with ingredients, instructions, nutrition, and dietary adaptations — powered by AI. Cook Mode with step timers, Apple Watch support, meal planning, and more.',
  keywords: ['recipe app', 'restaurant recipe', 'AI cooking', 'food photography', 'recipe reverse engineer', 'cook mode', 'meal planner', 'dietary adaptation'],
  authors: [{ name: 'Abounding Media LLC' }],
  openGraph: {
    title: 'Plate to Pan — Reverse-Engineer Any Restaurant Dish',
    description: 'Point your camera at any dish. Get the full recipe in seconds.',
    url: 'https://plate2pan.app',
    siteName: 'Plate to Pan',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plate to Pan — Reverse-Engineer Any Restaurant Dish',
    description: 'Point your camera at any dish. Get the full recipe in seconds.',
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
