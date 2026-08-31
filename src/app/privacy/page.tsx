import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'AZ Fitness privacy policy — how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-az-black pt-32 pb-20 section-padding">
      <div className="container-wide max-w-3xl">
        <p className="label-text mb-4">LEGAL</p>
        <h1 className="heading-lg text-az-offwhite mb-4">PRIVACY POLICY.</h1>
        <p className="text-az-offwhite/50 text-sm mb-12">Last updated: {new Date().getFullYear()}</p>

        <div className="prose prose-invert max-w-none space-y-10">
          {[
            {
              title: '1. Who We Are',
              content: 'AZ Fitness is a gym located at Powerline Junction, Ajebamidele Area, Ile-Ife, Osun State, Nigeria. When we refer to "AZ Fitness", "we", "us", or "our" in this policy, we mean AZ Fitness and its operations. You can contact us at contact@azfitness.example.',
            },
            {
              title: '2. Information We Collect',
              content: 'We may collect the following information when you use our website or enquire about our services:\n\n• Name, phone number, and email address when you submit a contact form, booking enquiry, or checkout form\n• Information you provide voluntarily about your fitness goals or training preferences\n• Basic usage data from our website (pages visited, device type)',
            },
            {
              title: '3. How We Use Your Information',
              content: 'We use your information to:\n\n• Respond to your enquiries and booking requests\n• Communicate with you about your membership or training sessions\n• Fulfil shop orders (where applicable)\n• Improve our services\n\nWe do not sell your information to third parties.',
            },
            {
              title: '4. How We Store Your Information',
              content: 'Your information is stored securely. We retain personal data only for as long as necessary to fulfil the purpose for which it was collected, or as required by applicable law.',
            },
            {
              title: '5. Your Rights',
              content: 'You have the right to:\n\n• Request access to the personal information we hold about you\n• Ask us to correct inaccurate information\n• Ask us to delete your information\n• Withdraw consent where processing is based on consent\n\nTo exercise these rights, contact us at contact@azfitness.example.',
            },
            {
              title: '6. Cookies',
              content: 'Our website may use cookies for basic functionality and to improve your experience. We do not use tracking cookies for advertising purposes.',
            },
            {
              title: '7. Third-Party Services',
              content: 'Our website may include links to third-party platforms (Instagram, Google Maps, WhatsApp). These services have their own privacy policies, which we encourage you to review.',
            },
            {
              title: '8. Changes to This Policy',
              content: 'We may update this privacy policy from time to time. Changes will be reflected on this page with an updated date.',
            },
            {
              title: '9. Contact',
              content: 'For any privacy-related questions or requests, contact us at contact@azfitness.example or visit us at Powerline Junction, Ajebamidele Area, Ile-Ife, Osun State, Nigeria.',
            },
          ].map((section) => (
            <div key={section.title} className="border-b border-white/5 pb-8">
              <h2 className="text-az-offwhite font-bold text-lg mb-4">{section.title}</h2>
              <div className="text-az-offwhite/60 text-sm leading-relaxed whitespace-pre-line">{section.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
