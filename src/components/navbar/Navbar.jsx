import React from "react";

export default function Navbar() {
  return (
    <header className="w-full bg-[#cfeff6]">
      <div className="mx-auto container flex items-center justify-between py-5 px-6">
        
        {/* LEFT - Logo */}
        <div className="flex items-center gap-3">
          
          {/* SVG Icon */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <g
              stroke="#0A1F44"
              strokeWidth="6"
              strokeLinecap="round"
            >
              <line x1="15" y1="35" x2="35" y2="15" />
              <line x1="15" y1="50" x2="50" y2="15" />
              <line x1="20" y1="65" x2="65" y2="20" />

              <line x1="50" y1="85" x2="85" y2="50" />
              <line x1="35" y1="85" x2="85" y2="35" />
              <line x1="65" y1="80" x2="80" y2="65" />
            </g>
          </svg>

          {/* Logo Text */}
          <span className="text-2xl font-semibold tracking-wide">
            <span className="text-[#2bb3d6]">SCALE</span>
            <span className="text-black">TECH</span>
          </span>
        </div>

        {/* CENTER - Menu */}
        <nav className="hidden md:flex items-center gap-10 text-[16px] font-medium">
          <a className="text-[#2bb3d6] border-b-2 border-[#2bb3d6] pb-1">
            Home
          </a>
          <a className="text-black hover:text-[#2bb3d6] transition">
            About
          </a>
          <a className="text-black hover:text-[#2bb3d6] transition">
            Solutions
          </a>
          <a className="text-black hover:text-[#2bb3d6] transition">
            Career
          </a>
          <a className="text-black hover:text-[#2bb3d6] transition">
            Contact
          </a>
        </nav>

        {/* RIGHT - CTA */}
        <button className="hidden md:block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition">
          Start Digital Journey
        </button>
      </div>
    </header>
  );
}
