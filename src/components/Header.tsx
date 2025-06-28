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
        <div className="text-xl font-bold">
          <Image
            alt="ảnh của lol spa"
            width={100}
            height={20}
            src="/images/logo-spa.png"
          />
        </div>

        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <ScrollLink
              key={item.href}
              to={item.href}
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer text-sm font-light tracking-wide hover:text-teal-500 transition-colors"
            >
              {item.label}
            </ScrollLink>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-block rounded-full bg-teal-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
        >
          Đặt lịch
        </a>
      </div>
    </header>
  );
}
