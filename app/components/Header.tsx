"use client";

import Link from "next/link";
import {
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Navbar,
} from "flowbite-react";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const ls = localStorage.getItem("theme");
    return ls
      ? ls === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggle = () => setIsDark((v) => !v);

  return (
    <button
      onClick={toggle}
      className="px-3 py-1 text-sm font-medium text-gray-900 bg-gray-200 rounded-full hover:bg-gray-300 dark:text-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
    >
      <div className="flex items-center gap-1">
        {isDark ? (
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
          </svg>
        ) : (
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
        {isDark ? "Light" : "Dark"}
      </div>
    </button>
  );
}

export default function Header() {
  return (
    <Navbar fluid className="bg-white/70 dark:bg-gray-900/70 backdrop-blur">
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Deeni Events
        </span>
      </NavbarBrand>
      <div className="flex items-center gap-2 md:order-2">
        <ThemeToggle />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink as={Link} href="/quiz-2025">
          Quiz 2025
        </NavbarLink>
        <NavbarLink as={Link} href="/essay-2025">
          Essay 2025
        </NavbarLink>
        <NavbarLink as={Link} href="/cricket-2025">
          Cricket 2025
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
