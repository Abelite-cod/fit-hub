'use client';

import { useState } from 'react';
import { Check, Calendar, User, Mail, Phone, MessageSquare } from 'lucide-react';

const services = [
  'General Enquiry',
  'Membership',
  'Personal Training',
  'Boxing',
  'Group Training',
  'Massage / Recovery',
  'Tennis',
  'Nutrition & Wellness',
  'Shop / Products',
];

interface BookingForm {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredTime: string;
  message: string;
}

export default function BookPage() {
  const [form, setForm] = useState<BookingForm>({
    name: '', phone: '', email: '', service: '', preferredTime: '', message: '',
  });
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

  if (submitted) {
    return (
      <div className="bg-az-black min-h-screen pt-32 section-padding">
        <div className="container-wide max-w-2xl mx-auto py-20 text-center">
          <div className="w-16 h-16 bg-az-green rounded-full flex items-center justify-center mx-auto mb-8">
            <Check size={32} className="text-white" />
          </div>
          <h1 className="heading-lg text-az-offwhite mb-4">ENQUIRY RECEIVED.</h1>
          <p className="text-az-offwhite/70 mb-4 max-w-sm mx-auto leading-relaxed">
            Thanks, {form.name}. Your enquiry has been received. We&apos;ll be in touch with you shortly.
          </p>
          {form.service && (
            <p className="text-az-offwhite/40 text-sm mb-10">Service: <span className="text-az-offwhite/60">{form.service}</span></p>
          )}
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-az-green text-white text-sm font-semibold tracking-widest uppercase px-8 py-4 hover:bg-az-green-deep transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-az-black pt-32 pb-16 section-padding">
        <div className="container-wide">
          <p className="label-text mb-4">AZ FITNESS</p>
          <h1 className="heading-xl text-az-offwhite mb-6 max-w-2xl">BOOK OR ENQUIRE.</h1>
          <p className="body-lg text-az-offwhite/70 max-w-xl">
            Ready to join, ask about a service, or book a session? Fill in the form and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-az-charcoal py-20 section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Info sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <p className="label-text mb-4">WHAT TO EXPECT</p>
                <ul className="space-y-4">
                  {[
                    { icon: MessageSquare, text: "Fill in the form with your details and what you're interested in." },
                    { icon: Phone, text: "We'll reach out to you by phone or WhatsApp within 24 hours." },
                    { icon: Calendar, text: "We'll confirm your session, visit, or answer your question." },
                    { icon: User, text: 'Show up and train.' },
                  ].map(({ icon: Icon, text }, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-az-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={14} className="text-az-green" />
                      </div>
                      <p className="text-sm text-az-offwhite/60 leading-relaxed">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-az-black border border-white/10 p-6">
                <p className="label-text mb-3">SERVICES</p>
                <ul className="space-y-1">
                  {services.map((s) => (
                    <li key={s}>
                      <button
                        type="button"
                        onClick={() => setForm({ ...form, service: s })}
                        className={`text-sm py-1 transition-colors ${form.service === s ? 'text-az-green font-semibold' : 'text-az-offwhite/50 hover:text-az-offwhite'}`}
                      >
                        {s}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: 'name', label: 'Full Name', type: 'text', required: true },
                  { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-az-offwhite/50 mb-2">
                      {field.label} {field.required && <span className="text-az-green">*</span>}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name as keyof BookingForm]}
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
                <label className="block text-xs font-semibold tracking-widest uppercase text-az-offwhite/50 mb-2">
                  Service / What Are You Interested In? <span className="text-az-green">*</span>
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-az-black border border-white/10 text-az-offwhite px-4 py-3 text-sm focus:outline-none focus:border-az-green transition-colors"
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-az-offwhite/50 mb-2">
                  Preferred Date / Time (Optional)
                </label>
                <input
                  type="text"
                  name="preferredTime"
                  value={form.preferredTime}
                  onChange={handleChange}
                  placeholder="e.g. Weekday mornings, Saturday, flexible..."
                  className="w-full bg-az-black border border-white/10 text-az-offwhite px-4 py-3 text-sm focus:outline-none focus:border-az-green transition-colors placeholder:text-az-offwhite/20"
                />
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
                  placeholder="Tell us about your goals, what you're looking for, or any questions you have..."
                  className="w-full bg-az-black border border-white/10 text-az-offwhite px-4 py-3 text-sm focus:outline-none focus:border-az-green transition-colors resize-none placeholder:text-az-offwhite/20"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-az-green text-white text-sm font-semibold tracking-widest uppercase py-4 hover:bg-az-green-deep transition-colors disabled:opacity-50"
              >
                {submitting ? 'Sending...' : 'Send Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
