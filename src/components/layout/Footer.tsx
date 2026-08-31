import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { businessInfo } from '@/data/businessInfo';

const trainingLinks = [
  { label: 'Strength & Lifting', href: '/training' },
  { label: 'Boxing', href: '/boxing' },
  { label: 'Personal Training', href: '/personal-training' },
  { label: 'Group Training', href: '/group-training' },
  { label: 'Tennis', href: '/tennis' },
  { label: 'Nutrition & Wellness', href: '/nutrition-wellness' },
];

const siteLinks = [
  { label: 'About', href: '/about' },
  { label: 'Memberships', href: '/memberships' },
  { label: 'Shop', href: '/shop' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Book / Enquire', href: '/book' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-az-charcoal border-t border-white/10">
      <div className="container-wide section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-az-green font-black text-2xl tracking-tight">AZ</span>
              <span className="text-az-offwhite font-bold text-lg tracking-widest uppercase">FITNESS</span>
            </Link>
            <p className="text-az-offwhite/60 text-sm leading-relaxed mb-6">
              A serious gym in Ile-Ife, Osun State. Built for people who want to train properly, stay
              consistent, and see results.
            </p>
            <a
              href={businessInfo.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-az-offwhite/70 hover:text-az-green transition-colors"
            >
              <Instagram size={16} />
              {businessInfo.social.instagram}
            </a>
          </div>

          {/* Training Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-az-green mb-4">
              Training
            </h3>
            <ul className="space-y-2">
              {trainingLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-az-offwhite/60 hover:text-az-offwhite transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-az-green mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-az-offwhite/60 hover:text-az-offwhite transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-az-green mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-az-offwhite/60">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-az-green" />
                <span>{businessInfo.address.full}</span>
              </li>
              <li>
                <a
                  href={`tel:${businessInfo.contact.phone}`}
                  className="flex items-center gap-2 text-sm text-az-offwhite/60 hover:text-az-offwhite transition-colors"
                >
                  <Phone size={14} className="text-az-green" />
                  {businessInfo.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessInfo.contact.email}`}
                  className="flex items-center gap-2 text-sm text-az-offwhite/60 hover:text-az-offwhite transition-colors"
                >
                  <Mail size={14} className="text-az-green" />
                  {businessInfo.contact.email}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-xs font-semibold tracking-widest uppercase text-az-green mb-3">
                Hours
              </h4>
              <ul className="space-y-1">
                {businessInfo.hours.map((h) => (
                  <li key={h.day} className="text-xs text-az-offwhite/60">
                    <span className="font-medium text-az-offwhite/80">{h.day}:</span> {h.time}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide section-padding py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-az-offwhite/40">
            © {year} AZ Fitness. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-az-offwhite/40 hover:text-az-offwhite/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-az-offwhite/40 hover:text-az-offwhite/70 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
