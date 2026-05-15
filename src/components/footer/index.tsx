'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer: React.FC = () => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])
  const socialLinks = [
    {
      icon: FaFacebookF,
      href: 'https://www.facebook.com/instituteofforgiveness',
      label: 'Facebook',
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/instituteofforgiveness',
      label: 'Instagram',
    },
    { icon: FaXTwitter, href: 'https://twitter.com/ioforgiveness', label: 'X (Twitter)' },
    {
      icon: FaLinkedinIn,
      href: 'https://www.linkedin.com/company/instituteofforgiveness',
      label: 'LinkedIn',
    },
  ]

  return (
    <footer className="bg-[#2A1430] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 md:px-6 lg:grid-cols-3 lg:px-8">
        {/* Column 1: About */}
        <div className="space-y-5 px-4 sm:px-0">
          <div className="flex items-center gap-3">
            <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#F5C76A] text-[18px] font-[700] text-[#3D1E4D] cinzel">
              IoF
            </span>
            <h3 className="text-[22px] font-[600] faustina-font">Institute of Forgiveness</h3>
          </div>
          <p className="text-[15px] leading-[170%] text-white/80 lato-font">
            A mentoring institute for those with previous justice involvement. We work toward
            juvenile and criminal justice reform and rebuilding the core foundations of family and
            community.
          </p>
          <p className="text-[14px] text-[#F5C76A] lato-font">
            A subsidiary of{' '}
            <Link
              href="https://www.nolefturns.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#FFD888]"
            >
              Nolef Turns Inc.
            </Link>{' '}
            &middot; 501(c)(3) EIN 47-5341386
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-5 px-4 sm:px-0">
          <h3 className="text-[20px] font-[600] text-[#F5C76A] faustina-font">Explore</h3>
          <ul className="space-y-2 text-sm lato-font">
            {[
              { name: 'Home', href: '/#hero' },
              { name: 'Mission', href: '/#mission' },
              { name: 'Programs', href: '/#programs' },
              { name: 'Your Impact', href: '/#impact' },
              { name: 'Donate', href: '/#donate' },
              { name: 'Contact', href: '/#contact' },
              { name: 'About', href: '/about' },
              {
                name: 'Donorbox Giving Page',
                href: 'https://donorbox.org/institute-of-forgiveness',
              },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-[15px] font-[500] text-white/80 transition-colors hover:text-[#F5C76A]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="space-y-2">
            <h4 className="text-[16px] font-[600] text-[#F5C76A] faustina-font">Policies</h4>
            <ul className="space-y-1 text-sm lato-font">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-[14px] text-white/70 transition-colors hover:text-[#F5C76A]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-[14px] text-white/70 transition-colors hover:text-[#F5C76A]"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3: Contact */}
        <div className="space-y-5 px-4 sm:px-0">
          <h3 className="text-[20px] font-[600] text-[#F5C76A] faustina-font">Contact</h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#F5C76A]" />
              <div>
                <p className="text-[15px] font-[500] text-white/70">E-mail</p>
                <a
                  href="mailto:info@instituteofforgiveness.org"
                  className="text-[15px] font-[500] text-white transition-colors hover:text-[#F5C76A] break-all lato-font"
                >
                  info@instituteofforgiveness.org
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#F5C76A]" />
              <div>
                <p className="text-[15px] font-[500] text-white/70">Phone</p>
                <a
                  href="tel:8049186195"
                  className="text-[15px] font-[500] text-white transition-colors hover:text-[#F5C76A] lato-font"
                >
                  (804) 918-6195
                </a>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=2317+Westwood+Ave+Suite+115-C+Richmond+VA+23230"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open address in Google Maps"
              className="flex items-start gap-3 transition-opacity hover:opacity-80"
            >
              <MapPin className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#F5C76A]" />
              <div>
                <p className="text-[15px] font-[500] text-white/70">Address</p>
                <p className="text-[15px] font-[500] text-white lato-font">
                  2317 Westwood Ave. Ste. 115-C
                  <br />
                  Richmond, VA 23230-4019
                </p>
              </div>
            </a>

            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full bg-[#F5C76A] p-2 text-[#3D1E4D] transition-colors hover:bg-[#FFD888]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full border-t border-white/10 px-4 py-6 text-center text-[14px] font-[500] lato-font">
        <p>
          &copy; {currentYear} Institute of Forgiveness. All rights reserved. &middot; Hosted by{' '}
          <Link
            href="https://freeforcharity.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#F5C76A] transition-colors hover:text-[#FFD888]"
          >
            Free For Charity
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
