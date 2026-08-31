import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'AZ Fitness terms and conditions — gym membership, shop purchases, and use of the website.',
};

export default function TermsPage() {
  return (
    <div className="bg-az-black pt-32 pb-20 section-padding">
      <div className="container-wide max-w-3xl">
        <p className="label-text mb-4">LEGAL</p>
        <h1 className="heading-lg text-az-offwhite mb-4">TERMS & CONDITIONS.</h1>
        <p className="text-az-offwhite/50 text-sm mb-12">Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-10">
          {[
            {
              title: '1. Use of This Website',
              content: 'By using the AZ Fitness website, you agree to these terms and conditions. If you do not agree, please do not use this website. This website is provided for informational purposes and to facilitate enquiries about AZ Fitness services.',
            },
            {
              title: '2. Membership Terms',
              content: 'Memberships are subject to the terms agreed at the time of sign-up. AZ Fitness reserves the right to suspend or terminate memberships in cases of misconduct or non-payment. Membership fees are non-refundable unless otherwise agreed in writing.',
            },
            {
              title: '3. Shop & Orders',
              content: 'All prices shown on the AZ Fitness website are placeholders and subject to change. Orders placed through the website are treated as enquiries until confirmed by AZ Fitness staff. Payment will be arranged directly. AZ Fitness reserves the right to cancel orders that cannot be fulfilled.',
            },
            {
              title: '4. Training & Physical Activity',
              content: 'All training at AZ Fitness is undertaken at the member\'s own risk. Members are responsible for informing trainers of any medical conditions or physical limitations before training. AZ Fitness is not liable for injuries sustained during training, except where caused by our negligence.',
            },
            {
              title: '5. Acceptable Use',
              content: 'You agree not to use this website or our facilities in a way that is unlawful, harmful, or disruptive. AZ Fitness reserves the right to refuse service to anyone who violates these terms or the gym\'s code of conduct.',
            },
            {
              title: '6. Intellectual Property',
              content: 'All content on this website — including text, images, logos, and design — is the property of AZ Fitness and may not be reproduced without permission.',
            },
            {
              title: '7. Limitation of Liability',
              content: 'AZ Fitness is not liable for any indirect, incidental, or consequential losses arising from use of the website or our services. Our total liability in any matter is limited to the amount paid by the member or customer in the relevant transaction.',
            },
            {
              title: '8. Changes to These Terms',
              content: 'AZ Fitness may update these terms at any time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.',
            },
            {
              title: '9. Governing Law',
              content: 'These terms are governed by the laws of the Federal Republic of Nigeria.',
            },
            {
              title: '10. Contact',
              content: 'For any questions about these terms, contact us at contact@azfitness.example or visit us at Powerline Junction, Ajebamidele Area, Ile-Ife, Osun State, Nigeria.',
            },
          ].map((section) => (
            <div key={section.title} className="border-b border-white/5 pb-8">
              <h2 className="text-az-offwhite font-bold text-lg mb-4">{section.title}</h2>
              <p className="text-az-offwhite/60 text-sm leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
