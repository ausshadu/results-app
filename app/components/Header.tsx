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
      {isDark ? "Light" : "Dark"}
    </button>
  );
}

export default function Header() {
  return (
    <Navbar
      fluid
      className="bg-white/70 dark:bg-gray-900/70 backdrop-blur"
    >
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Deeni Events 2025
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
        <NavbarLink as={Link} href="/cricket">
          Cricket 2025
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
