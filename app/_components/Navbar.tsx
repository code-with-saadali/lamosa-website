'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { LiaAngleDownSolid } from 'react-icons/lia'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

export default function Navbar() {
  const [open, setOpen] = useState(false)          // Company dropdown (desktop)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close company dropdown when clicking outside (desktop)
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const companyLinks = [
    { title: 'Projects', sub: "See our work that we've built.", href: '/projects', badge: true },
    { title: 'Blog', sub: 'Design tips & insights from blogs.', href: '/blog' },
    { title: 'About us', sub: 'About our amazing team.', href: '/about' },
  ]

  const pagesLinks = [
    { name: 'Contact us', href: '/contact' },
    { name: 'Career', href: '/career', count: 4 },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]

  const navLinks = [
    { name: 'Projects', href: '/projects', badge: 'New' },
    { name: 'Blog', href: '/blog' },
    { name: 'About us', href: '/about' },
  ]

  return (
    <div className="flex justify-center px-4 py-3 bg-[#f0f0ee] md:px-6 md:py-4">
      <nav className="flex items-center justify-between bg-white border border-gray-200 rounded-full px-4 py-2 w-full max-w-6xl relative md:px-6 md:py-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-base font-semibold text-gray-900">
          <div className="flex items-end gap-1 h-4">
            <div className="w-1 h-4 bg-gray-900 rounded-sm" />
            <div className="w-1 h-3 bg-gray-900 rounded-sm" />
          </div>
          Lamosa
        </Link>

        {/* Desktop Navigation (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-2">
          {/* Company Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center cursor-pointer gap-1 px-4 py-2 text-base font-medium text-gray-900 rounded-full hover:bg-gray-100 transition"
            >
              Company
              <LiaAngleDownSolid
                className={`text-xs mt-px transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown Panel */}
            <div
              className={`absolute mt-3 top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-190 bg-white border border-gray-200 rounded-2xl grid grid-cols-2 overflow-hidden z-50 transition-all duration-200 origin-top
              ${open ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.97] -translate-y-2 pointer-events-none'}`}
            >
              {/* LEFT */}
              <div className="p-5 flex flex-col gap-3">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Company</p>
                {companyLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition"
                  >
                    <div className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center bg-white shrink-0">
                      <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="3" y="3" width="7" height="7" rx="1.5"/>
                        <rect x="14" y="3" width="7" height="7" rx="1.5"/>
                        <rect x="3" y="14" width="7" height="7" rx="1.5"/>
                        <rect x="14" y="14" width="7" height="7" rx="1.5"/>
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                        {item.title}
                        {item.badge && (
                          <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                            new
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 font leading-relaxed">{item.sub}</p>
                    </div>
                  </Link>
                ))}
                <button className="mt-2 flex items-center justify-between bg-gray-900 text-white rounded-full px-5 py-2.5 text-sm hover:bg-gray-800 transition">
                  Book A Call
                  <span className="w-5 h-5 border border-white/30 rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5"/>
                    </svg>
                  </span>
                </button>
              </div>

              {/* RIGHT */}
              <div className="p-5 flex flex-col gap-2">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Pages</p>
                <div className="bg-gray-50 rounded-xl p-2 flex flex-col h-full gap-1">
                  {pagesLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white text-sm font-medium text-gray-900 transition"
                    >
                      {link.name}
                      {link.count && (
                        <span className="bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded-full">
                          {link.count}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Nav Links */}
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-4 py-2 text-base font-medium text-gray-900 rounded-full hover:bg-gray-100 transition"
            >
              {item.name}
              {item.badge && (
                <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full ml-1">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button (hidden on mobile) */}
        <button className="hidden md:flex items-center gap-2 bg-gray-900 text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-gray-800 transition">
          Get Template
          <span className="w-5 h-5 border border-white/30 rounded-full flex items-center justify-center">
            <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5"/>
            </svg>
          </span>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Open menu"
        >
          <HiOutlineMenu className="w-6 h-6 text-gray-900" />
        </button>

        {/* Mobile Drawer */}
        <div
          className={`fixed inset-0 z-50 transition-all duration-300 md:hidden ${
            mobileMenuOpen ? 'visible' : 'invisible'
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Drawer Panel */}
          <div
            className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-xl flex flex-col transition-transform duration-300 ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <Link href="/" className="flex items-center gap-2 text-base font-semibold text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                <div className="flex items-end gap-1 h-4">
                  <div className="w-1 h-4 bg-gray-900 rounded-sm" />
                  <div className="w-1 h-3 bg-gray-900 rounded-sm" />
                </div>
                Lamosa
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition"
                aria-label="Close menu"
              >
                <HiOutlineX className="w-5 h-5 text-gray-900" />
              </button>
            </div>

            {/* Scrollable Menu Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              {/* Main Nav Links */}
              <div className="space-y-1">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    {item.badge && (
                      <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>

              {/* Company Section (Mobile) */}
              <div>
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2 px-4">Company</p>
                <div className="space-y-1">
                  {companyLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex flex-col px-4 py-3 rounded-xl hover:bg-gray-50 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                        {item.title}
                        {item.badge && (
                          <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                            new
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{item.sub}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Pages Section (Mobile) */}
              <div>
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2 px-4">Pages</p>
                <div className="bg-gray-50 rounded-xl p-2 space-y-1">
                  {pagesLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white text-sm font-medium text-gray-900 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                      {link.count && (
                        <span className="bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded-full">
                          {link.count}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                <button className="w-full flex items-center justify-between bg-gray-900 text-white rounded-full px-5 py-3 text-sm font-medium hover:bg-gray-800 transition">
                  Book A Call
                  <span className="w-5 h-5 border border-white/30 rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5"/>
                    </svg>
                  </span>
                </button>
                <button className="w-full flex items-center justify-between bg-white border border-gray-200 text-gray-900 rounded-full px-5 py-3 text-sm font-medium hover:bg-gray-50 transition">
                  Get Template
                  <span className="w-5 h-5 border border-gray-300 rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5"/>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}