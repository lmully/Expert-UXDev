import { Book, Competency } from "./types";

export const competencies: Competency[] = [
  {
    id: "manual-flight",
    title: "Manual Flight Path Management",
    description: "Control the aircraft flight path through manual flight inputs.",
    icon: "Joystick",
  },
  {
    id: "auto-flight",
    title: "Automated Flight Path Management",
    description: "Control the aircraft flight path through automation and mode selection.",
    icon: "Cpu",
  },
  {
    id: "communication",
    title: "Communication",
    description: "Exchange information clearly and accurately.",
    icon: "Radio",
  },
  {
    id: "procedures",
    title: "Application of Procedures",
    description: "Identify and apply procedures in accordance with published operating instructions.",
    icon: "BookOpen",
  },
  {
    id: "situation-awareness",
    title: "Situation Awareness",
    description: "Perceive and comprehend all relevant information regarding the aircraft and its environment.",
    icon: "Radar",
  },
  {
    id: "workload",
    title: "Workload Management",
    description: "Manage available resources to maintain safety and efficiency.",
    icon: "Activity",
  },
  {
    id: "problem-solving",
    title: "Problem Solving & Decision Making",
    description: "Identify risks and resolve problems using a structured decision-making process.",
    icon: "BrainCircuit",
  },
  {
    id: "leadership",
    title: "Leadership & Teamwork",
    description: "Influence others to contribute to a shared goal and collaborate effectively.",
    icon: "Users",
  },
];

export const books: Book[] = [
  {
    id: "stick-and-rudder",
    title: "Stick and Rudder",
    author: "Wolfgang Langewiesche",
    summary: "The classic explanation of the art of flying. It explains precisely what the pilot does when he flies, how he does it, and why.",
    relevance: "Fundamental understanding of aerodynamics and manual handling characteristics that applies to all aircraft types.",
    competencyIds: ["manual-flight"],
    links: {
      amazon: "#",
      audible: "#"
    },
    coverColor: "bg-amber-700"
  },
  {
    id: "handling-the-big-jets",
    title: "Handling the Big Jets",
    author: "D.P. Davies",
    summary: "A comprehensive guide to the handling characteristics of large transport aircraft.",
    relevance: "Essential reading for understanding inertia, stability, and control in heavy jet transport aircraft.",
    competencyIds: ["manual-flight", "auto-flight"],
    links: {
      amazon: "#"
    },
    coverColor: "bg-blue-800"
  },
  {
    id: "checklist-manifesto",
    title: "The Checklist Manifesto",
    author: "Atul Gawande",
    summary: "A compelling argument for the checklist, demonstrating how it can help us handle complex tasks correctly.",
    relevance: "Directly addresses the psychology and importance of discipline in Application of Procedures.",
    competencyIds: ["procedures", "workload"],
    links: {
      amazon: "#",
      audible: "#"
    },
    coverColor: "bg-red-700"
  },
  {
    id: "fate-is-the-hunter",
    title: "Fate is the Hunter",
    author: "Ernest K. Gann",
    summary: "A memoir of the early days of commercial aviation, highlighting the challenges and raw skills required.",
    relevance: "A masterclass in Situation Awareness and respect for the environment.",
    competencyIds: ["situation-awareness", "manual-flight"],
    links: {
      amazon: "#"
    },
    coverColor: "bg-slate-700"
  },
  {
    id: "crew-resource-management",
    title: "Crew Resource Management",
    author: "Barbara Kanki",
    summary: "The definitive reference on CRM, covering communication, teamwork, and human factors.",
    relevance: "The academic backbone of modern Communication and Leadership & Teamwork competencies.",
    competencyIds: ["communication", "leadership"],
    links: {
      amazon: "#"
    },
    coverColor: "bg-emerald-700"
  },
  {
    id: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    summary: "Explores the two systems that drive the way we think: System 1 (fast, intuitive) and System 2 (slow, deliberative).",
    relevance: "Critical for understanding Decision Making processes and cognitive biases in the cockpit.",
    competencyIds: ["problem-solving"],
    links: {
      amazon: "#",
      audible: "#"
    },
    coverColor: "bg-indigo-700"
  },
  {
    id: "cockpit-confidential",
    title: "Cockpit Confidential",
    author: "Patrick Smith",
    summary: "Everything you ever wanted to know about air travel, answering questions and debunking myths.",
    relevance: "Broadens general aviation knowledge which supports Communication with passengers and crew.",
    competencyIds: ["communication", "situation-awareness"],
    links: {
      amazon: "#"
    },
    coverColor: "bg-sky-700"
  }
];
