import { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal'

const CONTACT_EMAIL = 'shriramsiva@gmail.com'
const CONTACT_PHONE = '+91 96772 56341'

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[1.5rem] w-[1.5rem]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-.83.67-1.5 1.5-1.5h16.5c.83 0 1.5.67 1.5 1.5v10.5c0 .83-.67 1.5-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V6.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[1.5rem] w-[1.5rem]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a.75.75 0 0 0-.242.865 11.29 11.29 0 0 0 6.35 6.35.75.75 0 0 0 .865-.242l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25H18c-9.665 0-15.75-6.085-15.75-15.75V4.5Z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[1.5rem] w-[1.5rem]">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.11 20.45H3.56V9h3.55v11.45Z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[1.5rem] w-[1.5rem]">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
  </svg>
)

const BehanceIcon = () => (
  <span className="text-[1rem] font-bold italic leading-none">Bē</span>
)

const socialLinks = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/shriramsivakumar', Icon: LinkedInIcon },
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com/shriram.designs', Icon: InstagramIcon },
  { id: 'behance', label: 'Behance', href: 'https://behance.net/shriramsivakumar', Icon: BehanceIcon },
]

const initialForm = { name: '', email: '', message: '' }

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState(initialForm)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const subject = `Portfolio enquiry from ${form.name || 'a visitor'}`
    const body = `${form.message}\n\n—\n${form.name}\n${form.email}`
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
    setForm(initialForm)
  }

  return (
    <Modal open={open} onClose={onClose} title="Let’s Connect" maxWidthClassName="max-w-[62rem]">
      <div className="flex flex-col gap-[2.5rem] sm:flex-row">

        {/* Contact details */}
        <div className="flex flex-col gap-[1.25rem] sm:w-2/5 sm:shrink-0">
          <p className="text-fs-body-small leading-relaxed text-body-grey">
            Have a project in mind or just want to say hi? Reach out through any of these.
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex w-full items-center justify-start gap-[1rem] rounded-xl bg-background p-[1rem] text-body-white transition-colors hover:bg-sidebar-selected/40"
          >
            <span className="flex h-[3rem] w-[3rem] shrink-0 items-center justify-center rounded-full bg-heading/15 text-heading"><MailIcon /></span>
            <span className="min-w-0 truncate text-fs-body-small">{CONTACT_EMAIL}</span>
          </a>

          <a
            href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`}
            className="flex w-full items-center justify-start gap-[1rem] rounded-xl bg-background p-[1rem] text-body-white transition-colors hover:bg-sidebar-selected/40"
          >
            <span className="flex h-[3rem] w-[3rem] shrink-0 items-center justify-center rounded-full bg-subheading-green/15 text-subheading-green"><PhoneIcon /></span>
            <span className="text-fs-body-small">{CONTACT_PHONE}</span>
          </a>

          <div className="flex gap-[0.75rem]">
            {socialLinks.map(({ id, label, href, Icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-background text-body-white transition-colors hover:bg-subheading-orange/20 hover:text-subheading-orange"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-[1rem]">
          <div className="flex flex-col gap-[0.5rem]">
            <label htmlFor="contact-name" className="text-[0.875rem] font-medium uppercase tracking-wide text-body-grey">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="rounded-lg border border-white/10 bg-background px-[1rem] py-[0.75rem] text-fs-body-small text-body-white placeholder:text-body-grey focus:border-heading focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-[0.5rem]">
            <label htmlFor="contact-email" className="text-[0.875rem] font-medium uppercase tracking-wide text-body-grey">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="rounded-lg border border-white/10 bg-background px-[1rem] py-[0.75rem] text-fs-body-small text-body-white placeholder:text-body-grey focus:border-heading focus:outline-none"
            />
          </div>

          <div className="flex flex-1 flex-col gap-[0.5rem]">
            <label htmlFor="contact-message" className="text-[0.875rem] font-medium uppercase tracking-wide text-body-grey">Message</label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me a bit about your project..."
              className="flex-1 resize-none rounded-lg border border-white/10 bg-background px-[1rem] py-[0.75rem] text-fs-body-small text-body-white placeholder:text-body-grey focus:border-heading focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-[0.25rem] rounded-lg bg-heading px-[1.5rem] py-[0.875rem] text-fs-body-small font-semibold text-background transition-opacity hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </Modal>
  )
}

ContactModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
