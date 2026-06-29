// ─── Single Source of Truth for All Portfolio Content ─────────────
// Update this file to change any text, links, or data on the site.
// No other file needs to be touched for content edits.

import type { Project, Skill, TimelineItem, SocialLink, NavItem } from "@/types";

// ─── Personal Info ─────────────────────────────────────────────────
export const PERSONAL = {
  name: "Gaganaditya",
  firstName: "Gagan",
  lastName: "Aditya",
  headline: "AI/ML Engineer &\nFull-Stack Builder",
  subheadline:
    "Engineering systems that think — from generative AI pipelines to full-stack applications.",
  email: "gaganaditya.shloka@gmail.com", // ← UPDATE THIS
  location: "Bangalore, India",
  university: "Christ University, Bangalore",
  degree: "B.Tech Computer Science & Engineering (AIML Specialization)",
  year: "2nd Year",
  cvUrl: "/cv.pdf", // ← ADD YOUR CV TO public/cv.pdf
} as const;

// ─── Navigation ────────────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

// ─── Social Links ───────────────────────────────────────────────────
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    handle: "github.com/gagan-aditya01", // ← UPDATE THIS
    url: "https://github.com/gagan-aditya01", // ← UPDATE THIS
    icon: "github",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/gagan-aditya-ce", // ← UPDATE THIS
    url: "https://www.linkedin.com/in/gagan-aditya-ce/", // ← UPDATE THIS
    icon: "linkedin",
  },
  {
    label: "Email",
    handle: "gaganaditya.shloka@gmail.com", // ← UPDATE THIS
    url: "mailto:gaganaditya.shloka@gmail.com", // ← UPDATE THIS
    icon: "mail",
  },
];

// ─── About / Philosophy ─────────────────────────────────────────────
export const ABOUT = {
  philosophyLabel: "Engineering Philosophy",
  bio: "I am a sophomore at Christ University with a strong foundation in Computer Science and AIML. I specialize in building generative AI pipelines and full-stack systems with a focus on scalable architecture and seamless user experiences.",
  philosophy: [
    {
      heading: "Systems Before Solutions",
      body: "Before writing a single line of code, I map the problem space. I think in abstractions — data flows, state machines, and failure modes. The architecture is the product.",
    },
    {
      heading: "AI as Infrastructure",
      body: "I treat generative AI not as a feature, but as a layer of infrastructure. Every model integration I build is modular, observable, and replaceable — ready for the next generation of capabilities.",
    },
    {
      heading: "Precision Over Speed",
      body: "Engineering maturity means knowing when not to code. I prototype fast, but I build slow — reviewing every design decision against future maintainability and cognitive load.",
    },
  ],
  stats: [
    { label: "Projects Shipped", value: "3+" },
    { label: "GitHub Contributions", value: "500+" },
    { label: "LeetCode Problems", value: "150+" },
    { label: "NPTEL Certifications", value: "2" },
  ],
};

// ─── Skills Matrix ──────────────────────────────────────────────────
export const SKILLS: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Python", "TypeScript", "Java", "C"],
  },
  {
    category: "AI & Data Frameworks",
    items: [
      "PyTorch",
      "Generative AI APIs",
      "Prompt Engineering",
      "Claude API",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },
  {
    category: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
    ],
  },
];

// ─── Projects ───────────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: "tts-architecture",
    index: "01",
    title: "Multilingual Text-to-Speech Architecture",
    subtitle: "Generative AI Content Pipeline",
    description:
      "A production R&D system leveraging Claude and Antigravity frameworks to automate multilingual content synthesis — from raw text input to fully narrated, multi-language audio output.",
    longDescription:
      "Designed and built within an R&D paradigm at a generative AI startup, this system orchestrates Claude's language understanding capabilities with a custom TTS pipeline to produce high-fidelity, contextually accurate audio across multiple languages. The architecture is fully modular — each stage (script generation, voice mapping, synthesis, post-processing) operates as an independent, swappable unit.",
    tags: [
      "Claude API",
      "Generative AI",
      "Python",
      "TTS",
      "NLP",
      "R&D",
      "Multilingual",
    ],
    architecture: [
      {
        layer: "Input Layer",
        components: ["Raw Text / URL", "Language Detector", "Content Sanitizer"],
      },
      {
        layer: "AI Orchestration",
        components: ["Claude API", "Script Generator", "Tone Classifier"],
      },
      {
        layer: "Synthesis Layer",
        components: ["Voice Mapper", "TTS Engine", "Audio Post-Processor"],
      },
      {
        layer: "Output Layer",
        components: ["Audio File", "CDN Upload", "Metadata Logger"],
      },
    ],
    metrics: [
      { label: "Languages Supported", value: "8+" },
      { label: "Pipeline Stage", value: "R&D" },
      { label: "Architecture", value: "Modular" },
      { label: "Framework", value: "Claude API" },
    ],
    lessons: [
      "Prompt engineering for structured output requires precise constraint framing — ambiguity compounds across pipeline stages.",
      "Modular pipeline design with clear interfaces reduces debugging time by isolating failure domains.",
      "TTS quality variance across languages demands language-specific post-processing rather than a universal filter.",
    ],
    githubUrl: "#", // ← UPDATE: Add real GitHub URL
    status: "research",
  },
  {
    id: "parkinsons-prediction",
    index: "02",
    title: "Parkinson's Disease Prediction Engine",
    subtitle: "Big Data Analytics & ML Classification",
    description:
      "An advanced diagnostic analytics system that processes large-scale walking video datasets (MMU and CARE-PD) to classify Parkinson's disease indicators using computer vision and machine learning.",
    longDescription:
      "Built on top of the MMU and CARE-PD benchmark datasets, this system processes gait analysis video data to extract kinematic biomarkers — stride length, cadence, limb tremor vectors — and feeds them into a classification pipeline. The project applies Big Data concepts to medical diagnostics, demonstrating that large-scale video data can serve as a non-invasive diagnostic proxy.",
    tags: [
      "PyTorch",
      "Computer Vision",
      "Big Data",
      "Python",
      "ML Classification",
      "Gait Analysis",
      "Medical AI",
    ],
    architecture: [
      {
        layer: "Data Ingestion",
        components: ["MMU Dataset", "CARE-PD Dataset", "Video Preprocessor"],
      },
      {
        layer: "Feature Extraction",
        components: [
          "Pose Estimator",
          "Kinematic Feature Extractor",
          "Temporal Windowing",
        ],
      },
      {
        layer: "Classification",
        components: ["ML Model", "Confidence Scorer", "Threshold Calibrator"],
      },
      {
        layer: "Output",
        components: [
          "Diagnostic Report",
          "Confidence Score",
          "Feature Attribution",
        ],
      },
    ],
    metrics: [
      { label: "Datasets", value: "MMU + CARE-PD" },
      { label: "Domain", value: "Medical AI" },
      { label: "Approach", value: "Big Data + CV" },
      { label: "Task", value: "Classification" },
    ],
    lessons: [
      "Medical datasets require rigorous preprocessing — noise in gait data directly corrupts downstream feature quality.",
      "Class imbalance in clinical datasets demands weighted loss functions or oversampling, not raw accuracy as a metric.",
      "Explainability matters in medical AI — feature attribution is as important as classification performance.",
    ],
    githubUrl: "#", // ← UPDATE: Add real GitHub URL
    status: "complete",
  },
  {
    id: "event-management",
    index: "03",
    title: "Relational Event Management System",
    subtitle: "Full-Stack Web Application",
    description:
      "A complete full-stack web application with an Angular/TypeScript frontend and a structured XAMPP + PHP relational database backend, designed to handle end-to-end event lifecycle management.",
    longDescription:
      "Engineered as a production-grade application, this system handles user authentication, event creation, attendee registration, and real-time capacity tracking. The frontend is built with Angular's component architecture and TypeScript for full type safety, while the backend leverages PHP with normalized relational database schemas for data integrity.",
    tags: [
      "Angular",
      "TypeScript",
      "PHP",
      "XAMPP",
      "MySQL",
      "Full-Stack",
      "Relational DB",
    ],
    architecture: [
      {
        layer: "Frontend",
        components: ["Angular Router", "TypeScript Components", "Reactive Forms"],
      },
      {
        layer: "API Layer",
        components: ["PHP REST API", "Auth Middleware", "Request Validator"],
      },
      {
        layer: "Database",
        components: ["MySQL Schema", "Entity Relations", "Query Optimizer"],
      },
      {
        layer: "Infrastructure",
        components: ["XAMPP Server", "Session Manager", "Error Logger"],
      },
    ],
    metrics: [
      { label: "Frontend", value: "Angular + TS" },
      { label: "Backend", value: "PHP + MySQL" },
      { label: "Architecture", value: "Full-Stack" },
      { label: "Database", value: "Relational" },
    ],
    lessons: [
      "Relational schema normalization upfront eliminates entire categories of data consistency bugs.",
      "Angular's reactive forms model scales well for complex multi-step workflows with conditional validation.",
      "PHP's request lifecycle model requires explicit state management — stateless design is a feature, not a limitation.",
    ],
    githubUrl: "#", // ← UPDATE: Add real GitHub URL
    status: "complete",
  },
];

// ─── Timeline ───────────────────────────────────────────────────────
export const TIMELINE: TimelineItem[] = [
  {
    period: "2024 — Present",
    role: "AI Content Creator & R&D Lead",
    org: "Generative AI Startup", // ← UPDATE: Add startup name if public
    description:
      "Leading R&D initiatives focused on generative AI content pipelines. Architected the multilingual TTS system using Claude API. Responsible for prompt engineering strategy, pipeline design, and production integration.",
    tags: ["Claude API", "Python", "Generative AI", "R&D", "Prompt Engineering"],
    type: "work",
  },
  {
    period: "2023 — Present",
    role: "B.Tech CSE (AIML Specialization)",
    org: "Christ University, Bangalore",
    description:
      "2nd Year Computer Science & Engineering with a specialization in Artificial Intelligence and Machine Learning. Core coursework in algorithms, data structures, machine learning, and software engineering.",
    tags: ["AIML", "CSE", "Algorithms", "Python", "Research"],
    type: "education",
  },
  {
    period: "Ongoing",
    role: "NPTEL Certified — Programming & AI",
    org: "NPTEL (IIT Consortium)",
    description:
      "Completed NPTEL certification programs in programming and computer science. Authenticated credentials demonstrating structured academic excellence beyond coursework.",
    tags: ["NPTEL", "IIT", "Certification"],
    type: "cert",
  },
  {
    period: "Ongoing",
    role: "LeetCode Problem Solver",
    org: "LeetCode", // ← UPDATE: Add your handle
    description:
      "Consistent daily problem-solving discipline across algorithms and data structures. Streak preservation as a signal of engineering commitment and logical rigor.",
    tags: ["DSA", "Algorithms", "150+ Problems"],
    type: "achievement",
  },
];

// ─── GitHub Stats ───────────────────────────────────────────────────
export const GITHUB = {
  username: "gagan-aditya01", // ← UPDATE THIS
  profileUrl: "https://github.com/gagan-aditya01", // ← UPDATE THIS
  pinnedRepos: [
    {
      name: "multilingual-tts",
      description: "Generative AI multilingual text-to-speech pipeline",
      stars: 0,
      forks: 0,
      language: "Python",
    },
    {
      name: "parkinsons-prediction",
      description: "Gait-based Parkinson's disease classification engine",
      stars: 0,
      forks: 0,
      language: "Python",
    },
    {
      name: "event-management-system",
      description: "Full-stack event platform — Angular + PHP + MySQL",
      stars: 0,
      forks: 0,
      language: "TypeScript",
    },
  ],
};
