/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="px-3 py-2 text-sm font-semibold tracking-wide text-slate-900 hover:text-slate-700"
  >
    {children}
  </a>
);

export default function Navbar1() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // optional: keep theme in sync with <html class="dark">
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const toggleDark = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setDark(html.classList.contains("dark"));
  };

  return (
    <header className="w-full border-b bg-white dark:bg-slate-950">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <a href="/" className="flex items-center gap-3">
          <span className="h-10 w-10 rounded-md bg-slate-900 dark:bg-white" />
          <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            GENIUSEE
          </span>
        </a>

        {/* Center: Desktop nav */}
        <nav className="hidden items-center gap-2 lg:flex">
          <NavLink href="/services">SERVICES</NavLink>
          <NavLink href="/industries">INDUSTRIES</NavLink>
          <NavLink href="/about">ABOUT US</NavLink>
          <NavLink href="/portfolio">PORTFOLIO</NavLink>
          <NavLink href="/blog">BLOG</NavLink>
          <NavLink href="/career">CAREER</NavLink>

          {/* Search icon */}
          <button
            type="button"
            className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-white/10"
            aria-label="Search"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-slate-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
          </button>
        </nav>

        {/* Right: CTA + theme */}
        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="hidden rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 lg:inline-flex dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            CONTACT US
          </a>

          <button
            type="button"
            onClick={toggleDark}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 dark:border-white/10 dark:bg-slate-950 dark:hover:bg-white/10"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {dark ? (
              // moon
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.8A8.5 8.5 0 0 1 11.2 3 7 7 0 1 0 21 12.8z" />
              </svg>
            ) : (
              // sun
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-slate-900"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 lg:hidden dark:border-white/10 dark:bg-slate-950 dark:hover:bg-white/10"
            aria-label="Open menu"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-slate-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
