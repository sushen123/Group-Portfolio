"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { NavbarButton } from "./ui/resizable-navbar";
import { IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Work", link: "#work" },
  { name: "Contact", link: "#contact" },
];

export const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex items-center justify-center transition-all duration-500",
        isScrolled ? "h-16" : "h-20"
      )}
    >
      <motion.div
        animate={{
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          backgroundColor: isScrolled
            ? "rgba(10, 10, 10, 0.6)"
            : "rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={cn(
          "flex w-full max-w-7xl items-center justify-between px-6 py-2 transition-all duration-500",
          isScrolled &&
          "mx-4 rounded-full border border-white/10 shadow-lg"
        )}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-aextera-coral">
            <span className="text-xs font-bold text-white">A</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">
            AextEra
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <NavbarButton
            href="#contact"
            className="hidden rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-aextera-coral hover:border-aextera-coral md:inline-flex items-center gap-2"
          >
            Let&apos;s Talk
            <IconArrowRight className="h-4 w-4" />
          </NavbarButton>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 md:hidden"
          >
            {isMobileMenuOpen ? (
              <IconX className="h-5 w-5 text-white" />
            ) : (
              <IconMenu2 className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-x-0 top-0 z-40 flex h-screen flex-col items-center justify-center gap-8 bg-aextera-dark/95 backdrop-blur-xl lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-semibold text-white transition-colors hover:text-aextera-coral"
              >
                {item.name}
              </a>
            ))}
            <NavbarButton
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-3 text-lg font-medium text-white backdrop-blur-sm hover:bg-aextera-coral hover:border-aextera-coral"
            >
              Let&apos;s Talk
              <IconArrowRight className="h-5 w-5" />
            </NavbarButton>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
