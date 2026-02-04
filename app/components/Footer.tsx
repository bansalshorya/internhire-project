import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="w-full bg-black py-1">
      {/* this is for horizontal line */}
      <div className="w-3/4 h-px bg-neutral-500 mx-auto mt-4" />
      <div className="flex flex-wrap items-center justify-center gap-12 m-2">
        <Link
          href="/legal/about"
          className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300"
        >
          About
        </Link>

        <Link
          href="/legal/privacy"
          className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300"
        >
          Privacy
        </Link>

        <Link
          href="/legal/terms"
          className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300"
        >
          Terms
        </Link>

        <Link
          href="/legal/contact-us"
          className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300"
        >
          Contact Us
        </Link>

        <Link
          href="/legal/shipping-policy"
          className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300"
        >
          Shipping Policy
        </Link>
        <Link
          href="/legal/refund-policy"
          className="px-3 py-2 text-sm font-medium text-white hover:text-gray-300"
        >
          Refund Policy
        </Link>
      </div>
    </div>
  )
}

export default Footer