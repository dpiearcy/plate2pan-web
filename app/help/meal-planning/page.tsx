import type { Metadata } from 'next'
import HelpLayout, { Step } from '@/components/HelpLayout'
import { CalendarDays, ShoppingCart, Combine, Share2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Meal Planning & Grocery Lists — Plate2Pan Help',
  description:
    'Plan your week in Plate2Pan, generate a smart grocery list with automatic deduplication, and share it with whoever does the shopping.',
}

const features = [
  {
    icon: CalendarDays,
    title: 'Plan the week',
    body: 'Drag recipes from your cookbook onto any day. Add breakfast, lunch, dinner, or snacks, and adjust servings per meal so the plan matches your household.',
  },
  {
    icon: ShoppingCart,
    title: 'Build the grocery list',
    body: 'With one tap, Plate2Pan rolls every ingredient from your planned meals into a single grocery list, organized by aisle so shopping is fast.',
  },
  {
    icon: Combine,
    title: 'Smart deduplication',
    body: 'Three recipes need onions? You’ll see one line with the combined amount — not three. Plate2Pan merges duplicate ingredients and totals the quantities for you.',
  },
  {
    icon: Share2,
    title: 'Share the list',
    body: 'Send the finished grocery list to a partner or roommate. Whoever’s shopping can check items off as they go.',
  },
]

export default function MealPlanningPage() {
  return (
    <HelpLayout
      title="Meal Planning & Grocery Lists"
      subtitle="Plan once, shop smart"
    >
      <p className="text-white/60 leading-relaxed mb-10">
        Plan your week and Plate2Pan handles the shopping math. Here's how it
        flows, start to finish.
      </p>

      <div className="space-y-8 mb-12">
        {features.map((f, i) => (
          <div key={f.title} className="glass rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-11 h-11 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange flex-shrink-0">
                <f.icon className="w-5 h-5" />
              </div>
              <h2 className="font-semibold text-white text-lg">{f.title}</h2>
            </div>
            <p className="text-white/55 text-sm leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-6">
        Step by step
      </h2>
      <div className="space-y-6">
        <Step n={1} title="Open the planner">
          Tap the calendar tab and pick the week you want to plan.
        </Step>
        <Step n={2} title="Add your meals">
          Drop recipes from your cookbook onto each day and set servings.
        </Step>
        <Step n={3} title="Generate the list">
          Tap <strong className="text-white/80">Build Grocery List</strong> —
          ingredients merge and total automatically.
        </Step>
        <Step n={4} title="Shop or share">
          Check items off as you shop, or share the list with someone else.
        </Step>
      </div>
    </HelpLayout>
  )
}
