export type ProjectStatus = "Active" | "Looking for maintainers" | "Maintenance";
export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type Project = {
  id: string;
  slug: string;
  name: string;
  description: string;
  tags: string[];
  language: string;
  stars: number;
  forks: number;
  contributors: string[];
  maintainers: string[];
  status: ProjectStatus;
  difficulty: Difficulty;
  activityScore: number;
  lastUpdated: string;
  updatedAt: string;
  readme: string;
  techStack: string[];
};

export type Contributor = {
  id: string;
  name: string;
  role: string;
  initials: string;
  recentActivity: string;
};

export type Issue = {
  id: string;
  title: string;
  repo: string;
  labels: string[];
  status: "Open" | "Closed";
  difficulty: Difficulty;
  updatedAt: string;
};

export type ActivityItem = {
  id: string;
  actor: string;
  action: string;
  target: string;
  timeAgo: string;
  type: "merge" | "issue" | "release" | "comment" | "review";
};

export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  tags: string[];
};

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
};

export const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  Python: "#3572a5",
  Go: "#00add8",
  Rust: "#dea584",
  JavaScript: "#f1e05a",
  "C++": "#f34b7d",
  SystemVerilog: "#5e4fa2",
  Markdown: "#083fa1",
};

export const contributors: Contributor[] = [
  {
    id: "joonseo-park",
    name: "Joonseo Park",
    role: "Contributor",
    initials: "JP",
    recentActivity: "Active contributor",
  },
  {
    id: "boris-potapov",
    name: "Boris Potapov",
    role: "Contributor",
    initials: "BP",
    recentActivity: "Active contributor",
  },
  {
    id: "daniel-tao-huang",
    name: "Daniel Tao Huang",
    role: "Contributor",
    initials: "DTH",
    recentActivity: "Active contributor",
  },
  {
    id: "robert-saab",
    name: "Robert Saab",
    role: "Contributor",
    initials: "RS",
    recentActivity: "Active contributor",
  },
  {
    id: "yuxuan",
    name: "Yuxuan",
    role: "Contributor",
    initials: "Y",
    recentActivity: "Active contributor",
  },
  {
    id: "joe-dai",
    name: "Joe Dai",
    role: "Contributor",
    initials: "JD",
    recentActivity: "Active contributor",
  },
  {
    id: "edwyn-zhou",
    name: "Edwyn Zhou",
    role: "Contributor",
    initials: "EZ",
    recentActivity: "Active contributor",
  },
  {
    id: "diego-ciudad-real-escalante",
    name: "Diego Ciudad Real Escalante",
    role: "Contributor",
    initials: "DCRE",
    recentActivity: "Active contributor",
  },
  {
    id: "harshit-sohaney",
    name: "Harshit Sohaney",
    role: "Contributor",
    initials: "HS",
    recentActivity: "Active contributor",
  },
  {
    id: "seva-alipov",
    name: "Seva Alipov",
    role: "Contributor",
    initials: "SA",
    recentActivity: "Active contributor",
  },
  {
    id: "loago-zambe",
    name: "Loago Zambe",
    role: "Contributor",
    initials: "LZ",
    recentActivity: "Active contributor",
  },
  {
    id: "julian-poon",
    name: "Julian Poon",
    role: "Contributor",
    initials: "JP",
    recentActivity: "Active contributor",
  },
  {
    id: "abhishek-nimalan",
    name: "Abhishek Nimalan",
    role: "Contributor",
    initials: "AN",
    recentActivity: "Active contributor",
  },
  {
    id: "apurva-agrawal",
    name: "Apurva Agrawal",
    role: "Contributor",
    initials: "AA",
    recentActivity: "Active contributor",
  },
  {
    id: "janice-nahyun-ahn",
    name: "Janice (Nahyun) Ahn",
    role: "Contributor",
    initials: "JNA",
    recentActivity: "Active contributor",
  },
];

export const projects: Project[] = [
  {
    id: "risc-v-cpu",
    slug: "risc-v-cpu",
    name: "risc-v-cpu",
    description:
      "Open source RV32I CPU project progressing from a functional multi-cycle core toward a pipelined Linux-capable design.",
    tags: ["Hardware", "Computer Architecture", "Open Source"],
    language: "SystemVerilog",
    stars: 58,
    forks: 9,
    contributors: [
      "joonseo-park",
      "boris-potapov",
      "daniel-tao-huang",
      "robert-saab",
      "joe-dai",
    ],
    maintainers: ["Joonseo Park", "Boris Potapov"],
    status: "Active",
    difficulty: "Advanced",
    activityScore: 95,
    lastUpdated: "2 days ago",
    updatedAt: "2026-03-10",
    readme:
      "# RISC-V CPU\n\nUTOSS's flagship hardware effort is an open source RV32I CPU built in public.\n\n## Current status\n- Functional multi-cycle core\n- FPGA prototype running arithmetic workloads\n- Clean regression flow using open source verification tools\n\n## Next milestones\n- Expand ISA support with bit-manipulation and CSR features\n- Move to a pipelined core\n- Work toward a Fall 2026 tapeout and long-term Linux boot target",
    techStack: ["SystemVerilog", "Verilator", "SVLint", "RISCOF", "FPGA"],
  },
  {
    id: "firefox",
    slug: "firefox",
    name: "firefox",
    description:
      "Firefox contribution track focused on upstream bug fixes, smoke-test workflows, and shipping security-preserving browser features.",
    tags: ["Software", "Browser", "Beginner-friendly"],
    language: "JavaScript",
    stars: 84,
    forks: 16,
    contributors: [
      "edwyn-zhou",
      "diego-ciudad-real-escalante",
      "harshit-sohaney",
      "seva-alipov",
      "loago-zambe",
    ],
    maintainers: ["Edwyn Zhou", "Diego Ciudad Real Escalante"],
    status: "Active",
    difficulty: "Beginner",
    activityScore: 91,
    lastUpdated: "1 day ago",
    updatedAt: "2026-03-11",
    readme:
      "# Firefox\n\nUTOSS contributors work on one of the world's largest open source codebases in collaboration with Mozilla engineers.\n\n## What members do\n- Contribute upstream bug fixes\n- Build and maintain Selenium-based smoke tests\n- Work on security-preserving features such as Copy-Clean-Link\n\n## Why it matters\nMembers gain experience with industry-standard review, testing, and debugging workflows while contributing directly to a production browser.",
    techStack: ["JavaScript", "Selenium", "PyTest", "Mozilla Tooling"],
  },
  {
    id: "fpga-devboard",
    slug: "fpga-devboard",
    name: "fpga-devboard",
    description:
      "Open FPGA development board initiative covering schematic design, component selection, PCB layout, and public hardware documentation.",
    tags: ["Hardware", "PCB", "Open Source"],
    language: "C++",
    stars: 41,
    forks: 7,
    contributors: [
      "julian-poon",
      "abhishek-nimalan",
      "apurva-agrawal",
      "janice-nahyun-ahn",
      "yuxuan",
    ],
    maintainers: ["Julian Poon", "Yuxuan Seah"],
    status: "Active",
    difficulty: "Intermediate",
    activityScore: 82,
    lastUpdated: "4 days ago",
    updatedAt: "2026-03-07",
    readme:
      "# FPGA Development Board\n\nThis hardware track is designing an open FPGA development board that other students and teams can learn from, replicate, and eventually use for RTL prototyping.\n\n## Current work\n- Component and peripheral selection\n- Clocking, power, and voltage planning\n- Schematic capture and early layout work\n\n## Open source approach\nThe team uses KiCad and plans to publish research notes, schematics, and board documentation as the design matures.",
    techStack: ["KiCad", "PCB Design", "FPGA", "Hardware Bring-up"],
  },
];

export const issues: Issue[] = [
  {
    id: "issue-1",
    title: "Add onboarding checklist to Maple Portal",
    repo: "maple-portal",
    labels: ["good-first-issue", "docs"],
    status: "Open",
    difficulty: "Beginner",
    updatedAt: "3 hours ago",
  },
  {
    id: "issue-2",
    title: "Fix dark mode contrast in cards",
    repo: "utoss-ui-kit",
    labels: ["bug", "good-first-issue"],
    status: "Open",
    difficulty: "Beginner",
    updatedAt: "1 day ago",
  },
  {
    id: "issue-3",
    title: "Add dataset caching layer",
    repo: "openlab-os",
    labels: ["feature", "help-wanted"],
    status: "Open",
    difficulty: "Advanced",
    updatedAt: "2 days ago",
  },
  {
    id: "issue-4",
    title: "Document infra module setup",
    repo: "infra-blueprint",
    labels: ["docs", "good-first-issue"],
    status: "Open",
    difficulty: "Beginner",
    updatedAt: "4 days ago",
  },
  {
    id: "issue-5",
    title: "Improve CLI completion performance",
    repo: "campus-cli",
    labels: ["performance", "help-wanted"],
    status: "Open",
    difficulty: "Intermediate",
    updatedAt: "5 days ago",
  },
  {
    id: "issue-6",
    title: "Add contributor spotlight section",
    repo: "good-first-issues",
    labels: ["feature"],
    status: "Closed",
    difficulty: "Beginner",
    updatedAt: "1 week ago",
  },
  {
    id: "issue-7",
    title: "Refactor signal preprocessing pipeline",
    repo: "signal-lab",
    labels: ["refactor", "help-wanted"],
    status: "Open",
    difficulty: "Advanced",
    updatedAt: "2 weeks ago",
  },
  {
    id: "issue-8",
    title: "Add tagging support to graph search",
    repo: "knowledge-graph",
    labels: ["feature", "help-wanted"],
    status: "Open",
    difficulty: "Intermediate",
    updatedAt: "1 week ago",
  },
  {
    id: "issue-9",
    title: "Update API docs with new endpoints",
    repo: "openlab-os",
    labels: ["docs"],
    status: "Closed",
    difficulty: "Beginner",
    updatedAt: "3 days ago",
  },
  {
    id: "issue-10",
    title: "Add analytics dashboard skeleton",
    repo: "maple-portal",
    labels: ["feature", "good-first-issue"],
    status: "Open",
    difficulty: "Beginner",
    updatedAt: "6 days ago",
  },
  {
    id: "issue-11",
    title: "Improve hover states for buttons",
    repo: "utoss-ui-kit",
    labels: ["design", "good-first-issue"],
    status: "Open",
    difficulty: "Beginner",
    updatedAt: "8 days ago",
  },
  {
    id: "issue-12",
    title: "Audit security baseline",
    repo: "infra-blueprint",
    labels: ["security"],
    status: "Open",
    difficulty: "Advanced",
    updatedAt: "9 days ago",
  },
  {
    id: "issue-13",
    title: "Add new dataset loader",
    repo: "signal-lab",
    labels: ["feature"],
    status: "Closed",
    difficulty: "Intermediate",
    updatedAt: "2 weeks ago",
  },
  {
    id: "issue-14",
    title: "Rewrite install script",
    repo: "campus-cli",
    labels: ["bug"],
    status: "Open",
    difficulty: "Intermediate",
    updatedAt: "3 weeks ago",
  },
  {
    id: "issue-15",
    title: "Standardize release notes",
    repo: "good-first-issues",
    labels: ["docs", "help-wanted"],
    status: "Open",
    difficulty: "Beginner",
    updatedAt: "5 days ago",
  },
  {
    id: "issue-16",
    title: "Add search suggestions",
    repo: "knowledge-graph",
    labels: ["feature"],
    status: "Open",
    difficulty: "Intermediate",
    updatedAt: "6 days ago",
  },
  {
    id: "issue-17",
    title: "Upgrade notebooks to new kernel",
    repo: "signal-lab",
    labels: ["maintenance"],
    status: "Open",
    difficulty: "Advanced",
    updatedAt: "1 month ago",
  },
  {
    id: "issue-18",
    title: "Add auto-sync for events feed",
    repo: "maple-portal",
    labels: ["feature", "help-wanted"],
    status: "Open",
    difficulty: "Intermediate",
    updatedAt: "1 day ago",
  },
  {
    id: "issue-19",
    title: "Improve markdown lint rules",
    repo: "utoss-docs",
    labels: ["docs"],
    status: "Open",
    difficulty: "Beginner",
    updatedAt: "2 days ago",
  },
  {
    id: "issue-20",
    title: "Add login auditing",
    repo: "infra-blueprint",
    labels: ["security", "help-wanted"],
    status: "Open",
    difficulty: "Advanced",
    updatedAt: "2 weeks ago",
  },
];

export const activities: ActivityItem[] = [
  {
    id: "activity-1",
    actor: "Alice Wong",
    action: "merged PR",
    target: "maple-portal#42",
    timeAgo: "20m ago",
    type: "merge",
  },
  {
    id: "activity-2",
    actor: "Bob Chen",
    action: "opened issue",
    target: "openlab-os#221",
    timeAgo: "1h ago",
    type: "issue",
  },
  {
    id: "activity-3",
    actor: "Sarah Patel",
    action: "commented on",
    target: "utoss-ui-kit#88",
    timeAgo: "2h ago",
    type: "comment",
  },
  {
    id: "activity-4",
    actor: "Mohit Verma",
    action: "tagged release",
    target: "infra-blueprint v1.3",
    timeAgo: "4h ago",
    type: "release",
  },
  {
    id: "activity-5",
    actor: "Lina Alvarez",
    action: "triaged issue",
    target: "good-first-issues#12",
    timeAgo: "6h ago",
    type: "issue",
  },
  {
    id: "activity-6",
    actor: "Andre Novak",
    action: "merged PR",
    target: "openlab-os#310",
    timeAgo: "9h ago",
    type: "merge",
  },
  {
    id: "activity-7",
    actor: "Fatima Noor",
    action: "updated design",
    target: "utoss-ui-kit#104",
    timeAgo: "11h ago",
    type: "comment",
  },
  {
    id: "activity-8",
    actor: "Jay Nguyen",
    action: "opened PR",
    target: "campus-cli#66",
    timeAgo: "13h ago",
    type: "review",
  },
  {
    id: "activity-9",
    actor: "Rachel Kim",
    action: "closed issue",
    target: "signal-lab#55",
    timeAgo: "1d ago",
    type: "issue",
  },
  {
    id: "activity-10",
    actor: "Diego Santos",
    action: "added docs",
    target: "good-first-issues#18",
    timeAgo: "2d ago",
    type: "comment",
  },
  {
    id: "activity-11",
    actor: "Megan Liu",
    action: "reviewed PR",
    target: "utoss-docs#31",
    timeAgo: "3d ago",
    type: "review",
  },
  {
    id: "activity-12",
    actor: "Tom Riley",
    action: "opened issue",
    target: "utoss-ui-kit#112",
    timeAgo: "4d ago",
    type: "issue",
  },
];

export const events: EventItem[] = [
  {
    id: "event-1",
    title: "UTOSS Spring Kickoff",
    date: "Mar 12, 2026",
    time: "6:00 PM",
    location: "Bahen Centre, Room 1190",
    description: "Meet the core team, learn about ongoing OSS projects, and pick a squad.",
    tags: ["Community", "Onboarding"],
  },
  {
    id: "event-2",
    title: "Open Source Design Jam",
    date: "Mar 20, 2026",
    time: "5:00 PM",
    location: "Design Lab",
    description: "Collaborative design sprint to improve UTOSS UI components.",
    tags: ["Design", "Workshop"],
  },
  {
    id: "event-3",
    title: "Infrastructure Night",
    date: "Mar 27, 2026",
    time: "7:30 PM",
    location: "Online",
    description: "Hands-on session for deployment pipelines and infra templates.",
    tags: ["Infra", "Hands-on"],
  },
  {
    id: "event-4",
    title: "AI Research Roundtable",
    date: "Apr 3, 2026",
    time: "4:00 PM",
    location: "Myhal Centre",
    description: "Lightning talks from UTOSS AI projects and open discussion.",
    tags: ["AI", "Talks"],
  },
  {
    id: "event-5",
    title: "Docs Sprint",
    date: "Apr 10, 2026",
    time: "6:30 PM",
    location: "Gerstein Library",
    description: "Collaborate on documentation updates across all repositories.",
    tags: ["Docs", "Collaboration"],
  },
  {
    id: "event-6",
    title: "UTOSS Demo Day",
    date: "Apr 17, 2026",
    time: "5:30 PM",
    location: "Hart House",
    description: "Showcase project milestones, community awards, and next steps.",
    tags: ["Showcase", "Community"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Welcome to UTOSS Spring 2026",
    date: "Mar 4, 2026",
    tags: ["Community", "Onboarding"],
    content:
      "We are kicking off a new semester with a refreshed set of open source tracks. This year we are doubling down on mentorship, pairing first-time contributors with project maintainers from day one. Expect a faster path from onboarding to your first merged pull request. We are also expanding our project mix to include systems, AI research tooling, and documentation sprints that make our work accessible to everyone. If you have been curious about open source, this is the best time to join.",
  },
  {
    id: "post-2",
    title: "Shipping Maple Portal v2",
    date: "Feb 24, 2026",
    tags: ["Release", "Web"],
    content:
      "Maple Portal v2 brings a sharper focus on student onboarding with a new contributor journey, improved project discovery, and a rebuilt event feed. The redesign includes faster search, consistent UI tokens, and a refreshed dashboard for maintainers. We also added a good-first-issue signal so new contributors can find the right place to start in minutes. Thanks to everyone who tested the release and wrote feedback that made the launch smoother.",
  },
  {
    id: "post-3",
    title: "How We Triage Issues as a Team",
    date: "Feb 10, 2026",
    tags: ["Process", "Docs"],
    content:
      "Our triage sessions run every week and are designed to be beginner friendly. We start by labeling new issues, clarifying scope, and identifying blockers. From there we assign a difficulty level and tag opportunities that are a good first issue. The goal is to make it easy for new members to pick meaningful tasks. We also keep a close eye on stale issues and close them with context so the backlog stays healthy and reliable.",
  },
  {
    id: "post-4",
    title: "OpenLab OS: Building a Reproducible ML Stack",
    date: "Jan 28, 2026",
    tags: ["AI", "Infra"],
    content:
      "OpenLab OS is our reproducible research environment for machine learning projects. We standardized experiment templates, added dataset registries, and created a simple pipeline runner that keeps results consistent across contributors. The project is focused on making research collaboration easier for students with different levels of experience. We are actively looking for contributors who want to help with tooling, evaluation dashboards, and documentation.",
  },
  {
    id: "post-5",
    title: "Community Spotlight: UTOSS Docs Sprint",
    date: "Jan 12, 2026",
    tags: ["Docs", "Community"],
    content:
      "Our docs sprint brought together contributors from across the society to improve the clarity of our onboarding and project guides. We reorganized the contributor handbook, added architecture diagrams, and created small task checklists for new members. The best part was seeing first-year students open their first PRs and get them merged within the hour. Documentation is core infrastructure, and we are proud of the progress the team made.",
  },
];

export const stats = {
  projects: 3,
  contributors: 126,
  commitsThisMonth: 412,
  openIssues: 64,
};

export const labels = [
  "good-first-issue",
  "help-wanted",
  "bug",
  "feature",
  "docs",
  "security",
  "design",
  "performance",
  "maintenance",
  "refactor",
];

export const tags = [
  "Beginner-friendly",
  "Software",
  "Hardware",
  "Computer Architecture",
  "Browser",
  "PCB",
  "Open Source",
];

export const languages = ["SystemVerilog", "JavaScript", "C++", "Markdown"];



