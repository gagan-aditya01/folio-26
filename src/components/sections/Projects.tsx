"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import { useTilt } from "@/hooks/useTilt";
import { PROJECTS } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { Project } from "@/types";


// ─── Architecture Diagram ──────────────────────────────────────────
function ArchDiagram({ nodes }: { nodes: Project["architecture"] }) {
  return (
    <div className="space-y-3" aria-label="Architecture diagram">
      {nodes.map((node, i) => (
        <div key={node.layer} className="flex items-start gap-3">
          {/* Layer connector */}
          <div className="flex flex-col items-center shrink-0 pt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
            {i < nodes.length - 1 && <div className="w-px flex-1 mt-1 bg-white/8 min-h-[24px]" />}
          </div>
          <div className="pb-2">
            <p className="label mb-1.5 opacity-40">{node.layer}</p>
            <div className="flex flex-wrap gap-1.5">
              {node.components.map((comp) => (
                <span
                  key={comp}
                  className="px-2 py-0.5 text-xs font-mono bg-white/4 border border-white/8 rounded-sm text-white/50"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Single Project Card ───────────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt(1.5);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-10%" });

  const statusMap = {
    research: { label: "R&D", color: "bg-white/10 text-white/40" },
    complete: { label: "Complete", color: "bg-white/10 text-white/40" },
    active: { label: "Active", color: "bg-white/15 text-white/60" },
  };

  return (
    <div
      ref={cardRef}
      className="w-full"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="project-card p-8 md:p-10 group"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Card header */}
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="label opacity-30 font-mono">{project.index}</span>
              <span
                className={`px-2 py-0.5 rounded-sm text-xs font-mono ${statusMap[project.status].color}`}
              >
                {statusMap[project.status].label}
              </span>
            </div>
            <h3 className="heading-lg text-white leading-tight mb-2">
              {project.title}
            </h3>
            <p className="label opacity-40">{project.subtitle}</p>
          </div>

          {/* Action links */}
          <div className="flex gap-2 shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-white/10 rounded-sm hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                aria-label={`View ${project.title} live`}
              >
                <ExternalLink size={14} className="text-white/50" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-white/10 rounded-sm hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              aria-label={`View ${project.title} source code`}
            >
              <Code2 size={14} className="text-white/50" />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="body-md mb-8 leading-relaxed">{project.longDescription}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span key={tag} className="skill-chip text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="divider mb-8 opacity-50" />

        {/* Grid: Architecture + Metrics + Lessons */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Architecture */}
          <div className="lg:col-span-1">
            <p className="label mb-5 opacity-40">Architecture</p>
            <ArchDiagram nodes={project.architecture} />
          </div>

          {/* Metrics */}
          <div>
            <p className="label mb-5 opacity-40">Metrics</p>
            <div className="grid grid-cols-2 gap-4">
              {project.metrics.map((m) => (
                <div key={m.label} className="space-y-1">
                  <p className="text-sm font-semibold text-white/80">{m.value}</p>
                  <p className="text-xs font-mono text-white/30 uppercase tracking-wider">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Lessons */}
          <div>
            <p className="label mb-5 opacity-40">Lessons Learned</p>
            <ol className="space-y-3">
              {project.lessons.map((lesson, i) => (
                <li key={i} className="flex gap-3">
                  <span className="label opacity-20 shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-xs text-white/40 leading-relaxed">{lesson}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Hover CTA */}
        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-white/30 hover:text-white/70 transition-colors duration-300 group/link"
          >
            View source
            <ArrowUpRight
              size={12}
              className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
            />
          </a>
          <span className="label opacity-20">{project.index} / 03</span>
        </div>
      </div>
    </div>
  );
}

// ─── Projects Section ──────────────────────────────────────────────
export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-15%" });

  return (
    <section
      id="projects"
      className="section-gap relative"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          ref={headerRef}
          className="section-label"
        >
          <span className="label">Featured Work</span>
        </motion.div>

        <div className="overflow-hidden mb-16">
          <h2 className="display-md text-white">Proof of work.</h2>
        </div>

        {/* Project cards */}
        <div className="relative mt-8 flex flex-col gap-12">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
