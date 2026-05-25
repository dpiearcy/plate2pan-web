import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Plate to Pan',
  description: 'Privacy Policy for the Plate to Pan iOS app and website.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="border-b border-white/5 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-brand-orange flex items-center justify-center text-sm">🍳</div>
            <span className="font-semibold text-white/80">Plate to Pan</span>
          </Link>
          <Link href="/" className="text-sm text-white/40 hover:text-white/70 transition-colors">← Back to home</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-12">Effective date: January 1, 2025 · Last updated: January 1, 2025</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Who We Are</h2>
            <p>Plate to Pan ("Plate to Pan," "we," "us," or "our") is an iOS application and website operated by Abounding Media LLC. Our contact email is <a href="mailto:support@plate2pan.app" className="text-brand-orange hover:underline">support@plate2pan.app</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
            <h3 className="font-semibold text-white/90 mb-2">2a. Information You Provide</h3>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Account information (email address, display name) when you sign in with Apple or Google.</li>
              <li>Photos you choose to submit for recipe analysis.</li>
              <li>Text descriptions you type alongside photos.</li>
              <li>Recipes, meal plans, grocery lists, and pantry items you save within the app.</li>
              <li>Support messages you send us.</li>
            </ul>

            <h3 className="font-semibold text-white/90 mt-4 mb-2">2b. Information Collected Automatically</h3>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>App usage data (features used, scan counts) to improve the product and enforce free-tier limits.</li>
              <li>Crash reports and diagnostic logs to identify and fix bugs.</li>
              <li>Device type, OS version, and app version for compatibility.</li>
              <li>Purchase and subscription status (managed by Apple App Store and RevenueCat).</li>
            </ul>

            <h3 className="font-semibold text-white/90 mt-4 mb-2">2c. Information We Do NOT Collect</h3>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>We do not collect health data from Apple HealthKit or any medical records.</li>
              <li>We do not store your photos on our servers after the AI analysis is complete.</li>
              <li>We do not sell your data to advertisers or third parties.</li>
              <li>We do not track your location.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>To process your dish photos and return a recipe via our AI provider (Anthropic, Inc.).</li>
              <li>To sync your cookbook, meal plans, and grocery lists across your devices (via Firebase).</li>
              <li>To manage your subscription and enforce usage limits (via RevenueCat and Apple).</li>
              <li>To respond to support requests.</li>
              <li>To improve the accuracy and reliability of our recipe analysis.</li>
              <li>To send optional push notifications (timers, meal plan reminders) that you can disable at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Third-Party Services</h2>
            <p className="mb-3">We use the following third parties to operate the app. Each has its own privacy policy.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left pb-2 font-semibold text-white/80">Provider</th>
                    <th className="text-left pb-2 font-semibold text-white/80">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ['Anthropic, Inc.', 'AI recipe analysis (your photo and description are sent here; not stored by Anthropic after processing)'],
                    ['Google Firebase', 'Cloud database for recipe sync, authentication'],
                    ['RevenueCat', 'Subscription management and purchase validation'],
                    ['Apple Inc.', 'App distribution, Sign in with Apple, push notifications, App Store payments'],
                  ].map(([provider, purpose]) => (
                    <tr key={provider}>
                      <td className="py-2.5 pr-4 text-white/70 font-medium whitespace-nowrap">{provider}</td>
                      <td className="py-2.5 text-white/50">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Data Storage and Security</h2>
            <p>Your recipe data is stored in Google Firebase (Firestore) in the United States. We use industry-standard security measures including TLS in transit and Firebase security rules that restrict access to your data to only you. We do not store dish photos after analysis is complete.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Your Rights and Choices</h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong className="text-white/80">Access:</strong> You can view all your saved data within the app at any time.</li>
              <li><strong className="text-white/80">Deletion:</strong> You can delete your account and all associated data from Settings → Account → Delete Account. Data is permanently removed within 30 days.</li>
              <li><strong className="text-white/80">Notifications:</strong> You can disable push notifications in iOS Settings at any time.</li>
              <li><strong className="text-white/80">Data portability:</strong> You can export your recipes as PDF or plain text from within the app.</li>
            </ul>
            <p className="mt-3">If you are in the European Economic Area (EEA), United Kingdom, or California, you may have additional rights under GDPR or CCPA. Contact us at <a href="mailto:support@plate2pan.app" className="text-brand-orange hover:underline">support@plate2pan.app</a> to exercise any of these rights.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Children's Privacy</h2>
            <p>Plate to Pan is not directed to children under 13 (or under 16 in the EEA). We do not knowingly collect personal information from children. If you believe a child has provided us information, contact us and we will delete it promptly.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of material changes via in-app notification or email. Continued use of the app after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Contact Us</h2>
            <p>Questions or concerns? Reach us at:</p>
            <div className="mt-3 glass rounded-2xl p-5 text-sm">
              <p className="font-semibold text-white">Abounding Media LLC</p>
              <p className="mt-1"><a href="mailto:support@plate2pan.app" className="text-brand-orange hover:underline">support@plate2pan.app</a></p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
