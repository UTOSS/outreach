import type { LeadershipProfile } from "@/components/leadership-accordion";

export const leadershipIds = [
  "joonseo-park",
  "boris-potapov",
  "daniel-tao-huang",
  "yuxuan",
  "joe-dai",
  "diego-ciudad-real-escalante",
  "edwyn-zhou",
  "harshit-sohaney",
  "robert-saab",
] as const;

export const leadership: readonly LeadershipProfile[] = [
  {
    id: "joonseo-park",
    name: "Joonseo Park",
    role: "Student Leader",
    blurb:
      "Add a short 1-2 sentence blurb about Joonseo's work, leadership, and the kinds of UTOSS projects or teams he helps guide.",
    imageSrc: null,
    initials: "JP",
  },
  {
    id: "boris-potapov",
    name: "Boris Potapov",
    role: "Student Leader",
    blurb:
      "Use this space for a concise editorial introduction to Boris, focusing on what he contributes technically and how he supports the community.",
    imageSrc: null,
    initials: "BP",
  },
  {
    id: "daniel-tao-huang",
    name: "Daniel Tao Huang",
    role: "Student Leader",
    blurb:
      "You can mention Daniel's technical interests, project work, or the parts of UTOSS he helps organize and build.",
    imageSrc: null,
    initials: "DTH",
  },
  {
    id: "yuxuan",
    name: "Yuxuan",
    role: "Student Leader",
    blurb:
      "Add a short blurb about Yuxuan's focus areas, leadership style, and the projects or events they help move forward.",
    imageSrc: null,
    initials: "Y",
  },
  {
    id: "joe-dai",
    name: "Joe Dai",
    role: "Student Leader",
    blurb:
      "Use this space to describe Joe's work within UTOSS and the kinds of technical or community efforts he contributes to.",
    imageSrc: null,
    initials: "JD",
  },
  {
    id: "diego-ciudad-real-escalante",
    name: "Diego Ciudad Real Escalante",
    role: "Software/Firefox Lead",
    blurb:
      "I'm Diego. I like open source software, playing Skyrim, and tennis. My favorite player is Rafa Nadal. VAMOS!!! Year of study: PEY in between third and fourth year.",
    imageSrc: "/diego.png",
    initials: "DCRE",
  },
  {
    id: "edwyn-zhou",
    name: "Edwyn Zhou",
    role: "Software Team, Firefox",
    blurb:
      "Contribute to open source! Indy 2T7.",
    imageSrc: "/edwyn.png",
    initials: "EZ",
  },
  {
    id: "harshit-sohaney",
    name: "Harshit Sohaney",
    role: "Student Leader",
    blurb:
      "Use this space to describe Harshit's contributions, strengths, and the ways he supports projects or mentors other contributors.",
    imageSrc: null,
    initials: "HS",
  },
  {
    id: "holly-liu",
    name: "Holly Liu",
    role: "Student Leader",
    blurb:
      "Add a short blurb about Holly's role in UTOSS, the projects or events she helps lead, and the perspective she brings to the team.",
    imageSrc: null,
    initials: "HL",
  },
  {
    id: "chris-cao",
    name: "Chris Cao",
    role: "Student Leader",
    blurb:
      "Use this space to describe Chris's contributions, technical interests, and the kinds of work or community efforts he helps drive.",
    imageSrc: null,
    initials: "CC",
  },
  {
    id: "robert-saab",
    name: "Robert Saab",
    role: "Student Leader",
    blurb:
      "Add a short blurb about Robert's role in UTOSS, the projects he supports, and how he helps shape the broader leadership team.",
    imageSrc: null,
    initials: "RS",
  },
] as const;
