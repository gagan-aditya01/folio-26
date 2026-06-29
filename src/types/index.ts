// ─── Core Types ───────────────────────────────────────────────────

export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  architecture: ArchNode[];
  metrics: Metric[];
  lessons: string[];
  githubUrl: string;
  liveUrl?: string;
  status: "active" | "research" | "complete";
}

export interface ArchNode {
  layer: string;
  components: string[];
}

export interface Metric {
  label: string;
  value: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface TimelineItem {
  period: string;
  role: string;
  org: string;
  description: string;
  tags?: string[];
  type: "education" | "work" | "cert" | "achievement";
}

export interface SocialLink {
  label: string;
  handle: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
