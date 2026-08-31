'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle, Check, ExternalLink } from 'lucide-react';
import { businessInfo } from '@/data/businessInfo';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-az-black pt-32 pb-16 section-padding">
        <div className="container-wide">
          <p className="label-text mb-4">GET IN TOUCH</p>
          <h1 className="heading-xl text-az-offwhite mb-6 max-w-2xl">CONTACT AZ FITNESS.</h1>
          <p className="body-lg text-az-offwhite/70 max-w-xl">
            Questions, memberships, training enquiries — reach us by phone, WhatsApp, or the form below. Or just come in.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="bg-az-charcoal py-20 section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              {/* Address */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={16} className="text-az-green" />
                  <h2 className="text-xs font-semibold tracking-widest uppercase text-az-green">Location</h2>
                </div>
                <p className="text-az-offwhite/80 text-sm leading-relaxed mb-3">{businessInfo.address.full}</p>
                <a
                  href={businessInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-az-green hover:text-az-offwhite transition-colors"
                >
                  Get Directions <ExternalLink size={12} />
                </a>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Phone size={16} className="text-az-green" />
                  <h2 className="text-xs font-semibold tracking-widest uppercase text-az-green">Phone</h2>
                </div>
                <a href={`tel:${businessInfo.contact.phone}`} className="text-az-offwhite/80 text-sm hover:text-az-green transition-colors">
                  {businessInfo.contact.phone}
                </a>
              </div>

              {/* WhatsApp */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MessageCircle size={16} className="text-az-green" />
                  <h2 className="text-xs font-semibold tracking-widest uppercase text-az-green">WhatsApp</h2>
                </div>
                <a
                  href={businessInfo.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-az-green text-white text-xs font-semibold tracking-widest uppercase px-4 py-2.5 hover:bg-az-green-deep transition-colors"
                >
                  <MessageCircle size={14} /> Message on WhatsApp
                </a>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Mail size={16} className="text-az-green" />
                  <h2 className="text-xs font-semibold tracking-widest uppercase text-az-green">Email</h2>
                </div>
                <a href={`mailto:${businessInfo.contact.email}`} className="text-az-offwhite/80 text-sm hover:text-az-green transition-colors">
                  {businessInfo.contact.email}
                </a>
              </div>

              {/* Hours */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={16} className="text-az-green" />
                  <h2 className="text-xs font-semibold tracking-widest uppercase text-az-green">Opening Hours</h2>
                </div>
                <ul className="space-y-2">
                  {businessInfo.hours.map((h) => (
                    <li key={h.day} className="flex justify-between text-sm gap-4">
                      <span className="text-az-offwhite/60">{h.day}</span>
                      <span className={h.time === 'Closed' ? 'text-az-offwhite/30' : 'text-az-offwhite'}>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instagram */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Instagram size={16} className="text-az-green" />
                  <h2 className="text-xs font-semibold tracking-widest uppercase text-az-green">Instagram</h2>
                </div>
                <a
                  href={businessInfo.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-az-offwhite/80 text-sm hover:text-az-green transition-colors"
                >
                  {businessInfo.social.instagram}
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-az-black border border-az-green/30 p-10 text-center">
                  <div className="w-14 h-14 bg-az-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={28} className="text-white" />
                  </div>
                  <h2 className="heading-md text-az-offwhite mb-4">MESSAGE SENT.</h2>
                  <p className="text-az-offwhite/60 leading-relaxed max-w-sm mx-auto">
                    Thanks, {form.name}. We&apos;ve received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <p className="label-text mb-6">SEND US A MESSAGE</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { name: 'name', label: 'Full Name', type: 'text', required: true },
                      { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-xs font-semibold tracking-widest uppercase text-az-offwhite/50 mb-2">
                          {field.label} {field.required && <span className="text-az-green">*</span>}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name as keyof ContactForm]}
                          onChange={handleChange}
                          required={field.required}
                          className="w-full bg-az-black border border-white/10 text-az-offwhite px-4 py-3 text-sm focus:outline-none focus:border-az-green transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-az-offwhite/50 mb-2">
                      Email Address <span className="text-az-green">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-az-black border border-white/10 text-az-offwhite px-4 py-3 text-sm focus:outline-none focus:border-az-green transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-az-offwhite/50 mb-2">Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-az-black border border-white/10 text-az-offwhite px-4 py-3 text-sm focus:outline-none focus:border-az-green transition-colors"
                    >
                      <option value="">Select a subject...</option>
                      <option>General Enquiry</option>
                      <option>Membership</option>
                      <option>Personal Training</option>
                      <option>Boxing</option>
                      <option>Group Training</option>
                      <option>Shop / Order</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-az-offwhite/50 mb-2">
                      Message <span className="text-az-green">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us what you need..."
                      className="w-full bg-az-black border border-white/10 text-az-offwhite px-4 py-3 text-sm focus:outline-none focus:border-az-green transition-colors resize-none placeholder:text-az-offwhite/20"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-az-green text-white text-sm font-semibold tracking-widest uppercase px-10 py-4 hover:bg-az-green-deep transition-colors disabled:opacity-50"
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-az-black py-16 section-padding">
        <div className="container-wide">
          <p className="label-text mb-4">FIND US</p>
          <h2 className="heading-md text-az-offwhite mb-8">POWERLINE JUNCTION, ILE-IFE.</h2>
          <div className="bg-az-charcoal border border-white/10 aspect-[16/7] flex flex-col items-center justify-center gap-4">
            <MapPin size={36} className="text-az-green" />
            <div className="text-center">
              <p className="text-az-offwhite font-semibold mb-1">{businessInfo.address.full}</p>
              <p className="text-az-offwhite/50 text-sm mb-4">Map integration available — use directions link below</p>
              <a
                href={businessInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-az-green text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-az-green-deep transition-colors"
              >
                Open in Google Maps <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
