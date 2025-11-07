"use client";

import Link from "next/link";
import { Button, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Navbar } from "flowbite-react";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const getInitial = () => {
    try {
      const ls = localStorage.getItem("theme");
      if (ls === "dark") return true;
      if (ls === "light") return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  };

  const [isDark, setIsDark] = useState<boolean>(() => getInitial());

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // no-op
    }
  }, [isDark]);

  const toggle = () => setIsDark((v) => !v);

  return (
    <Button color="gray" onClick={toggle} size="sm" pill>
      {isDark ? "Light" : "Dark"}
    </Button>
  );
}

export default function Header() {
  return (
    <Navbar fluid rounded className="bg-white/70 dark:bg-gray-900/70 backdrop-blur">
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
        <NavbarLink href="https://github.com/ausshadu/results-app" target="_blank" rel="noreferrer">
          GitHub
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
