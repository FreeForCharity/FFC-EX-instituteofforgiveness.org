'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import { motion, AnimatePresence } from 'framer-motion'

interface MenuItem {
  label: string
  path: string
}

const SCROLL_OFFSET = 100

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  const menuItems: MenuItem[] = useMemo(
    () => [
      { label: 'Home', path: '/#hero' },
      { label: 'Mission', path: '/#mission' },
      { label: 'Programs', path: '/#programs' },
      { label: 'Impact', path: '/#impact' },
      { label: 'Donate', path: '/#donate' },
      { label: 'Contact', path: '/#contact' },
    ],
    []
  )

  const sections = useMemo(
    () =>
      menuItems.map((item) => item.path.replace('/#', '')).filter((section) => section !== 'hero'),
    [menuItems]
  )

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + SCROLL_OFFSET

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId)
            return
          }
        }
      }
      if (window.scrollY < SCROLL_OFFSET) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScrollSpy)
    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [sections])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  const isActive = (path: string) => {
    const sectionId = path.replace('/#', '')
    if (sectionId === 'hero') return activeSection === ''
    return activeSection === sectionId
  }

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 flex w-full items-center bg-[#3D1E4D] text-white shadow-lg transition-all duration-300 ${
        isScrolled ? 'h-[58px]' : 'h-[84px]'
      }`}
    >
      <div className="w-full">
        <div className="mx-auto max-w-[1180px] px-4">
          <div className="flex items-center justify-between transition-all duration-300">
            {/* Brand */}
            <Link
              href="/"
              onClick={handleLinkClick}
              className="flex items-center gap-3"
              aria-label="Institute of Forgiveness"
            >
              <span
                className={`flex items-center justify-center rounded-full bg-[#F5C76A] font-[700] text-[#3D1E4D] transition-all duration-300 ${
                  isScrolled ? 'h-[36px] w-[36px] text-[14px]' : 'h-[44px] w-[44px] text-[16px]'
                }`}
                id="cinzel"
              >
                IoF
              </span>
              <span
                className={`flex flex-col leading-tight transition-all duration-300 ${
                  isScrolled ? 'text-[14px]' : 'text-[16px]'
                }`}
              >
                <span className="font-[600]" id="faustina-font">
                  Institute of Forgiveness
                </span>
                <span className="hidden sm:block text-[11px] text-[#F5C76A]" id="aria-font">
                  Mentoring &middot; Re-Entry &middot; Reform
                </span>
              </span>
            </Link>

            <div className="flex items-center">
              <nav className="hidden lg:block transition-all duration-300" aria-label="Primary">
                <ul className="flex items-center" id="aria-font">
                  {menuItems.map((item, index) => (
                    <li key={index} className="relative">
                      <Link
                        href={item.path}
                        onClick={handleLinkClick}
                        className={`flex items-center px-3 py-2 text-[14px] font-[500] transition-colors duration-200 ${
                          isActive(item.path)
                            ? 'text-[#F5C76A]'
                            : 'text-white/80 hover:text-[#F5C76A]'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <a
                href="https://donorbox.org/institute-of-forgiveness"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 hidden lg:inline-flex h-[40px] items-center justify-center rounded-full bg-[#F5C76A] px-[20px] text-[14px] font-[600] text-[#3D1E4D] transition hover:bg-[#FFD888]"
                id="lato-font"
              >
                Donate
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-[#F5C76A]"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? (
                  <RxCross2 className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`lg:hidden absolute left-0 w-full overflow-hidden z-40 ${
              isScrolled ? 'top-[56px]' : 'top-[82px]'
            }`}
          >
            <div className="max-w-[700px] mx-auto px-6 py-4 bg-[#3D1E4D] border-t-[3px] border-[#F5C76A] shadow-lg max-h-[80vh] overflow-auto">
              <ul className="space-y-1">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      onClick={handleLinkClick}
                      className={`block rounded-lg px-4 py-2 text-sm font-[600] ${
                        isActive(item.path)
                          ? 'bg-white/10 text-[#F5C76A]'
                          : 'text-white/85 hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="https://donorbox.org/institute-of-forgiveness"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg bg-[#F5C76A] px-4 py-2 text-center text-sm font-[700] text-[#3D1E4D]"
                  >
                    Donate
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
