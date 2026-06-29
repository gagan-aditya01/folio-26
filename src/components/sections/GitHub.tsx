"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Star, GitFork, ExternalLink } from "lucide-react";
import { GITHUB } from "@/lib/data";
import { fadeUp, staggerContainer, scaleReveal } from "@/lib/motion";
import ScrollFloat from "@/components/ui/ScrollFloat";

// ─── Contribution Grid (Visual representation) ─────────────────────
function ContributionGrid() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  // Generate a realistic-looking contribution pattern
  const weeks = 26;
  const days = 7;

  if (!mounted) {
    return <div className="flex gap-[3px] overflow-x-auto pb-2 min-h-[95px]" />;
  }

  const grid = Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: days }, (_, d) => {
      // Simulate a realistic contribution pattern
      const base = Math.random();
      const weekday = d > 0 && d < 6 ? 1.4 : 0.6; // more weekday activity
      const recency = 0.3 + (w / weeks) * 0.7; // more recent = more activity
      const intensity = base * weekday * recency;
      return Math.min(4, Math.floor(intensity * 5));
    })
  );

  const opacityMap = [0.05, 0.18, 0.38, 0.65, 1];

  return (
    <div
      className="flex gap-[3px] overflow-x-auto pb-2"
      role="img"
      aria-label="GitHub contribution activity heatmap"
    >
      {grid.map((week, wi) => (
        <div key={wi} className="flex flex-col gap-[3px]">
          {week.map((level, di) => (
            <div
              key={di}
              className="contribution-cell w-[10px] h-[10px] md:w-[11px] md:h-[11px] rounded-[2px]"
              style={{
                background: `rgba(255,255,255,${opacityMap[level]})`,
              }}
              aria-hidden="true"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── Pinned Repo Card ──────────────────────────────────────────────
function RepoCard({
  repo,
  index,
}: {
  repo: (typeof GITHUB.pinnedRepos)[0];
  index: number;
}) {
  const langColors: Record<string, string> = {
    Python: "bg-blue-400/60",
    TypeScript: "bg-sky-400/60",
    JavaScript: "bg-yellow-400/60",
    Java: "bg-orange-400/60",
    "C++": "bg-pink-400/60",
  };

  return (
    <motion.div
      variants={scaleReveal}
      custom={index}
      className="block p-5 border border-white/5 rounded-sm hover:border-white/15 hover:bg-white/[0.02] transition-all duration-300 group"
      aria-label={`GitHub repository: ${repo.name}`}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <Code2 size={14} className="text-white/30 shrink-0" />
          <span className="text-sm font-mono text-white/70 group-hover:text-white/90 transition-colors">
            {repo.name}
          </span>
        </div>
      </div>
      <p className="text-xs text-white/30 leading-relaxed mb-4">
        {repo.description}
      </p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <span
            className={`w-2 h-2 rounded-full ${langColors[repo.language] || "bg-white/40"}`}
          />
          <span className="text-xs font-mono text-white/30">{repo.language}</span>
        </div>
        <div className="flex items-center gap-1 text-white/20">
          <Star size={11} />
          <span className="text-xs font-mono">{repo.stars}</span>
        </div>
        <div className="flex items-center gap-1 text-white/20">
          <GitFork size={11} />
          <span className="text-xs font-mono">{repo.forks}</span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── GitHub Section ────────────────────────────────────────────────
export default function GitHubSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-10%" });

  return (
    <section
      id="github"
      className="section-gap relative"
      aria-labelledby="github-heading"
    >
      <div className="container">
        {/* Section label */}
        <motion.div
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="section-label"
        >
          <span className="label">GitHub Activity</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: heading + stats */}
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
                Iterative. Consistent.
              </ScrollFloat>
            </div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={2}
              className="body-lg mb-8"
            >
              Clean commit history as a signal of engineering discipline.
              Every repository tells a story of problem decomposition and
              iterative improvement.
            </motion.p>

            <motion.a
              href={GITHUB.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={3}
              className="btn-secondary inline-flex"
              aria-label="View GitHub profile"
            >
              <Code2 size={14} />
              @{GITHUB.username}
            </motion.a>
          </div>

          {/* Right: Grid + repos */}
          <div className="space-y-8">
            {/* Contribution grid */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={2}
              className="p-6 border border-white/5 rounded-sm bg-white/[0.01]"
            >
              <div className="flex items-center justify-between mb-5">
                <p className="label opacity-40">Contribution Activity</p>
                <span className="label opacity-20">Last 26 weeks</span>
              </div>
              <ContributionGrid />
              <div className="flex items-center justify-end gap-2 mt-3">
                <span className="label opacity-20">Less</span>
                {[0.05, 0.18, 0.38, 0.65, 1].map((op) => (
                  <div
                    key={op}
                    className="w-2.5 h-2.5 rounded-[2px]"
                    style={{ background: `rgba(255,255,255,${op})` }}
                    aria-hidden="true"
                  />
                ))}
                <span className="label opacity-20">More</span>
              </div>
            </motion.div>

            {/* Pinned repos */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-3"
            >
              <p className="label opacity-30 mb-4">Pinned Repositories</p>
              {GITHUB.pinnedRepos.map((repo, i) => (
                <RepoCard key={repo.name} repo={repo} index={i} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
