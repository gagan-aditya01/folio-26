"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { NAV_ITEMS, PERSONAL } from "@/lib/data";

export default function Navigation() {
  const { isVisible, isAtTop } = useScrollDirection();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          key="nav"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="fixed top-0 left-0 right-0 z-[9000] flex justify-center pt-5"
          role="banner"
        >
          <nav
            className={`glass flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-500 ${
              isAtTop ? "border-white/5" : "border-white/10 shadow-2xl"
            }`}
            aria-label="Main navigation"
          >
            {/* Logo / Name */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-4 py-1.5 text-white text-xs font-mono font-semibold tracking-widest uppercase opacity-90 hover:opacity-100 transition-opacity"
              aria-label="Back to top"
            >
              {PERSONAL.firstName}
            </a>

            <div className="w-px h-4 bg-white/10 mx-1" aria-hidden="true" />

            {/* Nav Links */}
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3 py-1.5 text-xs font-mono tracking-wider rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-white/50 hover:text-white/80"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute inset-0 rounded-full bg-white/8 -z-10"
                      transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                    />
                  )}
                </a>
              );
            })}
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
