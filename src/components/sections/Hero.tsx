"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { PERSONAL } from "@/lib/data";
import { fadeUp, fadeIn } from "@/lib/motion";
import MagnetLines from "@/components/ui/MagnetLines";
import TiltedCard from "@/components/ui/TiltedCard";
import Lightfall from "@/components/ui/Lightfall";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  // Dual-image opacity: left biases on left-mouse, right on right-mouse
  const leftOpacity = 0.4 + (1 - mousePos.x) * 0.6;
  const rightOpacity = 0.4 + mousePos.x * 0.6;
  const leftShift = (mousePos.x - 0.5) * -20;
  const rightShift = (mousePos.x - 0.5) * 20;

  const nameParts = PERSONAL.name.toUpperCase().split("");

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Lightfall Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Lightfall
          colors={['#FFFFFF', '#ECECEC', '#1C1C1C']}
          backgroundColor="#000000"
          speed={0.4}
          streakCount={8}
          streakWidth={1}
          streakLength={1}
          glow={1}
          density={1}
          twinkle={1}
          zoom={2}
          backgroundGlow={1}
          opacity={1}
          mouseInteraction={true}
          mouseStrength={1}
          mouseRadius={0.6}
        />
      </div>

      {/* Avatar background */}
      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="relative w-full h-full -mt-32 flex items-center justify-center pointer-events-auto"
          style={{
            opacity: mounted ? 0.3 + (1 - Math.abs(mousePos.x - 0.5) * 2) * 0.4 : 0.4,
            transform: `translateX(${(mousePos.x - 0.5) * -20}px)`,
            transition: "opacity 0.4s ease, transform 0.6s ease",
          }}
        >
          <div
            className="w-64 h-80 md:w-80 md:h-[400px]"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 80%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 80%, transparent 100%)",
            }}
          >
            <TiltedCard
              imageSrc="/profile.jpg"
              altText="Gaganaditya"
              captionText="Gaganaditya"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={14}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
          </div>
        </div>
      </div>

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, transparent 40%, #000 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 120% 50% at 50% 0%, transparent 60%, #000 100%)",
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="container relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-8 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
          <span className="label text-white/50">Available for opportunities</span>
        </motion.div>

        {/* Name — massive display */}
        <div className="overflow-hidden mb-2">
          <motion.div
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
            className="flex flex-row items-center justify-center gap-4 md:gap-8"
          >
            <div className="hidden sm:block shrink-0 mix-blend-difference opacity-50">
              <MagnetLines
                rows={7}
                columns={7}
                containerSize="24vmin"
                lineColor="white"
                lineWidth="3px"
                lineHeight="4vmin"
                baseAngle={0}
              />
            </div>
            <h1 className="display-xl tracking-tighter text-white mix-blend-difference select-none">
              {PERSONAL.name.toUpperCase()}
            </h1>
          </motion.div>
        </div>

        {/* Headline */}
        <div className="overflow-hidden mb-6">
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            className="heading-md text-white/50 font-light tracking-wide max-w-xl"
          >
            {PERSONAL.subheadline}
          </motion.p>
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0, originX: 0.5 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.35 }}
          className="w-16 h-px bg-white/20 mb-8"
        />

        {/* Descriptor chips */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {["B.Tech CSE · AIML", "Christ University, Bangalore", "AI/ML · Full-Stack · R&D"].map(
            (chip) => (
              <span key={chip} className="skill-chip">
                {chip}
              </span>
            )
          )}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8"
        >
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="btn-primary group"
            aria-label="View proof of work — scroll to projects"
          >
            View Proof of Work
            <ArrowDown
              size={14}
              className="group-hover:translate-y-0.5 transition-transform duration-300"
            />
          </a>
          <a
            href={PERSONAL.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label="View Curriculum Vitae"
          >
            View CV
            <FileText size={14} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={8}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-transparent to-white/20"
        />
        <span className="label opacity-20">scroll</span>
      </motion.div>
    </section>
  );
}
