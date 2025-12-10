import { Book, Competency } from "./types";
import stickRudder from "@assets/generated_images/vintage_aviation_book_cover_style,_stick_and_rudder.png";
import bigJets from "@assets/generated_images/modern_technical_aviation_book_cover,_handling_the_big_jets.png";
import checklist from "@assets/generated_images/clean_minimalist_book_cover,_the_checklist_manifesto.png";
import fate from "@assets/generated_images/dramatic_aviation_memoir_cover,_fate_is_the_hunter.png";
import crm from "@assets/generated_images/academic_textbook_cover,_crew_resource_management.png";

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
    authorLink: "https://en.wikipedia.org/wiki/Wolfgang_Langewiesche",
    summary: "The classic explanation of the art of flying. It explains precisely what the pilot does when he flies, how he does it, and why.",
    relevance: "Langewiesche deconstructs the physical act of flying into simple, immutable laws. For Manual Flight Path Management, this book strips away the complexity of modern avionics and returns to the pure physics of angle of attack and energy management, essential for recovering from upsets or flying visually.",
    excerpt: "The airplane is a creature of the air; it is supported by the air, it is controlled by the air. It has no contact with the ground. It is not a ground vehicle. It is not an automobile.",
    competencyIds: ["manual-flight"],
    links: {
      amazon: "#",
      audible: "#"
    },
    coverImage: stickRudder,
    coverColor: "bg-amber-700"
  },
  {
    id: "handling-the-big-jets",
    title: "Handling the Big Jets",
    author: "D.P. Davies",
    authorLink: "https://en.wikipedia.org/wiki/David_P._Davies",
    summary: "A comprehensive guide to the handling characteristics of large transport aircraft.",
    relevance: "Written by the chief test pilot of the UK CAA, this is the bible for understanding high-altitude aerodynamics, stability, and control. It explains *why* big jets behave differently than light aircraft, crucial for both Manual Flight and monitoring Automated Flight.",
    excerpt: "The jet transport is a different breed of cat. It is not just a bigger propeller airplane. It has different handling qualities, different performance characteristics, and different operational problems.",
    competencyIds: ["manual-flight", "auto-flight"],
    links: {
      amazon: "#"
    },
    coverImage: bigJets,
    coverColor: "bg-blue-800"
  },
  {
    id: "checklist-manifesto",
    title: "The Checklist Manifesto",
    author: "Atul Gawande",
    authorLink: "http://atulgawande.com/",
    summary: "A compelling argument for the checklist, demonstrating how it can help us handle complex tasks correctly.",
    relevance: "Gawande uses aviation as the gold standard for procedure following. This book validates the pilot's reliance on SOPs, explaining that checklists aren't crutches for the weak, but necessary tools for the expert to manage complexity and Application of Procedures.",
    excerpt: "Under conditions of complexity, not only are checklists a help, they are required for success. There must always be room for judgment, but judgment aided—and even enhanced—by procedure.",
    competencyIds: ["procedures", "workload"],
    links: {
      amazon: "#",
      audible: "#"
    },
    coverImage: checklist,
    coverColor: "bg-red-700"
  },
  {
    id: "fate-is-the-hunter",
    title: "Fate is the Hunter",
    author: "Ernest K. Gann",
    authorLink: "https://en.wikipedia.org/wiki/Ernest_K._Gann",
    summary: "A memoir of the early days of commercial aviation, highlighting the challenges and raw skills required.",
    relevance: "Gann's stories are terrifyingly real lessons in Situation Awareness. He shows how quickly 'normal' can turn into disaster through subtle accumulation of threats. It teaches respect for the environment and the importance of never becoming complacent.",
    excerpt: "The sky is a canvas of infinite depth, and the clouds are the mountains of the air. To fly among them is to know the true meaning of solitude and the fragility of human existence.",
    competencyIds: ["situation-awareness", "manual-flight"],
    links: {
      amazon: "#"
    },
    coverImage: fate,
    coverColor: "bg-slate-700"
  },
  {
    id: "crew-resource-management",
    title: "Crew Resource Management",
    author: "Barbara Kanki",
    authorLink: "https://www.sciencedirect.com/book/9780128129951/crew-resource-management",
    summary: "The definitive reference on CRM, covering communication, teamwork, and human factors.",
    relevance: "This is the academic foundation of modern airline safety. It moves beyond 'stories' to the science of Communication and Leadership. It explains the mechanics of error trapping, shared mental models, and how to effectively challenge authority gradients.",
    excerpt: "CRM is not about being nice; it is about being effective. It is the utilization of all available resources—information, equipment, and people—to achieve safe and efficient flight operations.",
    competencyIds: ["communication", "leadership"],
    links: {
      amazon: "#"
    },
    coverImage: crm,
    coverColor: "bg-emerald-700"
  },
  {
    id: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    authorLink: "https://kahneman.princeton.edu/",
    summary: "Explores the two systems that drive the way we think: System 1 (fast, intuitive) and System 2 (slow, deliberative).",
    relevance: "Essential for Problem Solving & Decision Making. Pilots often rely on System 1 (intuition) when they should use System 2 (analysis). Kahneman explains cognitive biases like 'confirmation bias' and 'startle effect' that lead to accidents.",
    excerpt: "We are prone to overestimate how much we understand about the world and to underestimate the role of chance in events.",
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
    authorLink: "https://askthepilot.com/",
    summary: "Everything you ever wanted to know about air travel, answering questions and debunking myths.",
    relevance: "Excellent for Communication. It teaches pilots how to explain complex technical concepts to non-pilots (passengers, cabin crew) clearly and without jargon, a key skill for captains.",
    excerpt: "Turbulence is not dangerous. It is uncomfortable, but it is not dangerous. The airplane is built to withstand forces far greater than anything you will ever experience in flight.",
    competencyIds: ["communication", "situation-awareness"],
    links: {
      amazon: "#"
    },
    coverColor: "bg-sky-700"
  }
];
