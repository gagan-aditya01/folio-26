"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ABOUT, PERSONAL } from "@/lib/data";
import { fadeUp, staggerContainer, countUp } from "@/lib/motion";
import ScrollFloat from "@/components/ui/ScrollFloat";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="about"
      ref={ref}
      className="section-gap relative"
      aria-labelledby="about-heading"
    >
      <div className="container">
        {/* Section Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="section-label mb-16"
        >
          <span className="label">{ABOUT.philosophyLabel}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
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
                How I think. How I build.
              </ScrollFloat>
            </div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="body-lg text-white/60 max-w-lg mb-12 leading-relaxed"
            >
              {ABOUT.bio}
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-6 mt-12 pt-12 border-t border-white/5"
            >
              {ABOUT.stats.map((stat, i) => (
                <motion.div key={stat.label} variants={countUp} custom={i}>
                  <p className="text-3xl font-bold tracking-tighter text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="label opacity-50">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Philosophy pillars */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-0"
          >
            {ABOUT.philosophy.map((pillar, i) => (
              <motion.div
                key={pillar.heading}
                variants={fadeUp}
                custom={i}
                className="py-8 border-b border-white/5 last:border-0 group"
              >
                <div className="flex items-start gap-4">
                  <span className="label mt-1 opacity-30 shrink-0 font-mono">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="heading-md text-white mb-3 group-hover:text-white/80 transition-colors duration-300">
                      {pillar.heading}
                    </h3>
                    <p className="body-md leading-relaxed">{pillar.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
