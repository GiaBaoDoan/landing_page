"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  { label: "Giới thiệu", href: "about" },
  { label: "Dịch vụ", href: "services" },
  { label: "Bảng giá", href: "pricing" },
  { label: "Liên hệ", href: "contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/80 shadow backdrop-blur text-gray-800"
          : "text-white"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Image
            alt="ảnh của lol spa"
            width={100}
            height={20}
            src="/images/logo.png"
            className="h-12 w-24"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <ScrollLink
              key={item.href}
              to={item.href}
              smooth
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer text-sm font-light tracking-wide hover:text-teal-500 transition-colors"
            >
              {item.label}
            </ScrollLink>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-block rounded-full bg-teal-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
        >
          Đặt lịch
        </a>

        {/* Hamburger Icon - Only on Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-inherit"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-gray-800 shadow px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <ScrollLink
              key={item.href}
              to={item.href}
              smooth
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium hover:text-teal-600"
            >
              {item.label}
            </ScrollLink>
          ))}

          <a
            href="#contact"
            className="block rounded-full bg-teal-500 px-5 py-2 text-center text-sm font-semibold text-white hover:bg-teal-600"
            onClick={() => setMenuOpen(false)}
          >
            Đặt lịch
          </a>
        </div>
      )}
    </header>
  );
}
