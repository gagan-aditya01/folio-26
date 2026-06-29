"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TIMELINE } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";
import ScrollFloat from "@/components/ui/ScrollFloat";

const typeIconMap = {
  work: "↗",
  education: "◆",
  cert: "✓",
  achievement: "⬡",
};

const typeColorMap = {
  work: "text-white/60",
  education: "text-white/60",
  cert: "text-white/40",
  achievement: "text-white/40",
};

export default function Timeline() {
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-15%" });
  const isListInView = useInView(listRef, { once: true, margin: "-10%" });

  return (
    <section
      id="timeline"
      className="section-gap relative"
      aria-labelledby="timeline-heading"
    >
      <div className="container">
        {/* Section label */}
        <motion.div
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          className="section-label"
        >
          <span className="label">Chronology</span>
        </motion.div>

        <div className="overflow-hidden mb-16">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="display-md text-white"
          >
            The journey.
          </ScrollFloat>
        </div>

        {/* Timeline list */}
        <motion.ol
          ref={listRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isListInView ? "visible" : "hidden"}
          className="relative pl-0"
          aria-label="Career and education timeline"
        >
          {/* Vertical line */}
          <div
            className="absolute left-0 top-2 bottom-2 hidden md:block"
            style={{
              width: "1px",
              background: "linear-gradient(to bottom, transparent, var(--border) 10%, var(--border) 90%, transparent)",
              marginLeft: "7px",
            }}
            aria-hidden="true"
          />

          {TIMELINE.map((item, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              custom={i}
              className="relative flex gap-6 md:gap-10 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="relative shrink-0 hidden md:flex items-start pt-1" aria-hidden="true">
                <div className="w-3.5 h-3.5 rounded-full border border-white/20 bg-black flex items-center justify-center z-10">
                  <div className="w-1 h-1 rounded-full bg-white/40" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 mb-3">
                  {/* Period */}
                  <span className="label opacity-30 shrink-0 sm:min-w-[130px]">
                    {item.period}
                  </span>

                  {/* Role + Type Icon */}
                  <div className="flex items-center gap-2">
                    <span className={`${typeColorMap[item.type]} text-sm font-mono`}>
                      {typeIconMap[item.type]}
                    </span>
                    <h3 className="heading-md text-white">{item.role}</h3>
                  </div>
                </div>

                <div className="sm:ml-[calc(130px+1.5rem+1.5rem)] space-y-3">
                  <p className="label opacity-40">{item.org}</p>
                  <p className="body-md leading-relaxed">{item.description}</p>

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="skill-chip text-xs py-0.5 px-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
