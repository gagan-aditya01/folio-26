"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Link, Mail, ArrowUpRight } from "lucide-react";
import { PERSONAL, SOCIAL_LINKS } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";
import ScrollFloat from "@/components/ui/ScrollFloat";

const iconMap = {
  github: Code2,
  linkedin: Link,
  mail: Mail,
};

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="contact"
      ref={ref}
      className="section-gap relative"
      aria-labelledby="contact-heading"
    >
      {/* Top border */}
      <div className="container">
        <div className="divider opacity-50 mb-20" />
      </div>

      <div className="container">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="section-label"
        >
          <span className="label">Interface</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-end">
          {/* Left: Heading */}
          <div>
            <div className="overflow-hidden mb-6">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
                containerClassName="display-md text-white"
              >
                Let&apos;s build something.
              </ScrollFloat>
            </div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={2}
              className="body-lg max-w-md"
            >
              Open to research collaborations, internships, and projects at the
              intersection of AI and engineering. Reach out — I respond to every
              message.
            </motion.p>
          </div>

          {/* Right: Terminal-style links */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-0"
            aria-label="Contact links"
          >
            {SOCIAL_LINKS.map((link, i) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <motion.div key={link.label} variants={fadeUp} custom={i}>
                  <a
                    href={link.url}
                    target={link.icon !== "mail" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-5 border-b border-white/5 hover:border-white/15 transition-all duration-300"
                    aria-label={`${link.label}: ${link.handle}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-sm group-hover:border-white/25 group-hover:bg-white/5 transition-all duration-300">
                        <Icon size={14} className="text-white/40 group-hover:text-white/70 transition-colors" />
                      </div>
                      <div>
                        <p className="label opacity-40 mb-0.5">{link.label}</p>
                        <p className="font-mono text-sm text-white/60 group-hover:text-white/90 transition-colors">
                          {link.handle}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    />
                  </a>
                </motion.div>
              );
            })}

            {/* Direct email CTA */}
            <motion.div variants={fadeUp} custom={3} className="pt-8">
              <a
                href={`mailto:${PERSONAL.email}`}
                className="btn-primary w-full justify-center"
                aria-label="Send email to Gaganaditya"
              >
                <Mail size={14} />
                Send a message
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={5}
          className="mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
          role="contentinfo"
        >
          <p className="label opacity-20">
            © {new Date().getFullYear()} {PERSONAL.name}. Built with Next.js.
          </p>
          <p className="label opacity-15 text-center">
            {PERSONAL.university} · {PERSONAL.degree}
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="label opacity-20 hover:opacity-50 transition-opacity"
            aria-label="Back to top of page"
          >
            Back to top ↑
          </a>
        </motion.footer>
      </div>
    </section>
  );
}
