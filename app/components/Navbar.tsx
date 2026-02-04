import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-black border-b border-gray-200">
      <div className="max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-13">
          {/* Left Side: Logo */}
          <div className="flex items-center">
            {/* <Link href={homeHref} className="flex"> */}
              <span className="text-2xl font-bold text-white">InternHire</span>
            {/* </Link> */}
          </div>

          {/* Right Side: Navigation Links */}
          <div className="flex items-center"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar