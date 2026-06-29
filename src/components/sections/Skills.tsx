"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { fadeUp, scaleReveal, staggerContainer } from "@/lib/motion";
import ScrollFloat from "@/components/ui/ScrollFloat";

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="skills"
      ref={ref}
      className="section-gap relative"
      aria-labelledby="skills-heading"
    >
      {/* Faint background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="container relative">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="section-label"
        >
          <span className="label">Capability Matrix</span>
        </motion.div>

        <div className="overflow-hidden mb-16">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="display-md text-white max-w-xl"
          >
            Tools of the trade.
          </ScrollFloat>
        </div>

        {/* Skills grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {SKILLS.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              custom={groupIndex}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 items-start py-8 border-t border-white/5"
            >
              {/* Category label */}
              <div>
                <p className="label text-white/30">{group.category}</p>
                <p className="mt-1 text-white/10 mono text-xs">{String(groupIndex + 1).padStart(2, "0")}</p>
              </div>

              {/* Chip matrix */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-wrap gap-2"
              >
                {group.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    variants={scaleReveal}
                    custom={skillIndex + groupIndex * 3}
                    className="skill-chip"
                    data-cursor="hover"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
