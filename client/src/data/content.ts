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

export const books = [
  {
    id: "stick-and-rudder",
    title: "Stick and Rudder",
    author: "Wolfgang Langewiesche",
    authorLink: "https://en.wikipedia.org/wiki/Wolfgang_Langewiesche",
    summary:
      "The classic explanation of the art of flying. It explains precisely what the pilot does when he flies, how he does it, and why.",
    relevance:
      "Langewiesche deconstructs the physical act of flying into simple, immutable laws. For Manual Flight Path Management, this book strips away the complexity of modern avionics and returns to the pure physics of angle of attack and energy management, essential for recovering from upsets or flying visually.",
    excerpt:
      "The airplane is a creature of the air; it is supported by the air, it is controlled by the air. It has no contact with the ground. It is not a ground vehicle. It is not an automobile.",
    competencyIds: ["manual-flight"],

    // Based on the book's Part structure (Parts I–VII)
    competencyIndex: [
      {
        competencyId: "manual-flight",
        chapterPage: "Part I (Wings) + Part IV (Basic Maneuvers) + Part V (Getting Down)",
        oneSentence:
          "Angle of attack, stalls, turns, and landing judgement—pure hand-flying fundamentals with zero avionics fluff."
      }
    ],

    links: {
      amazon: "https://amzn.to/456bc5s",
      audible: "#"
    },
    coverImage: "https://covers.openlibrary.org/b/isbn/9780070362406-L.jpg",
    coverColor: "bg-amber-700"
  },

  {
    id: "handling-the-big-jets",
    title: "Handling the Big Jets",
    author: "D.P. Davies",
    authorLink: "https://en.wikipedia.org/wiki/David_P._Davies",
    summary: "A comprehensive guide to the handling characteristics of large transport aircraft.",
    relevance:
      "Written by the chief test pilot of the UK CAA, this is the bible for understanding high-altitude aerodynamics, stability, and control. It explains *why* big jets behave differently than light aircraft, crucial for both Manual Flight and monitoring Automated Flight.",
    excerpt:
      "The jet transport is a different breed of cat. It is not just a bigger propeller airplane. It has different handling qualities, different performance characteristics, and different operational problems.",
    competencyIds: ["manual-flight", "auto-flight"],

    // Editions vary; these are stable topic areas in the book
    competencyIndex: [
      {
        competencyId: "manual-flight",
        chapterPage: "Chapters on handling qualities, stability/control, and approach/landing handling",
        oneSentence:
          "Explains how big jets *actually* behave: inertia, energy management, stability, and the handling traps that bite in real ops."
      },
      {
        competencyId: "auto-flight",
        chapterPage: "Chapters on jet transport handling in different regimes + asymmetric/abnormal handling (edition-dependent)",
        oneSentence:
          "Makes you better at automation monitoring by teaching what the aircraft is doing underneath the modes—and where modes can mislead."
      }
    ],

    links: {
      amazon: "#"
    },
    coverImage: "https://covers.openlibrary.org/b/isbn/0903083019-L.jpg",
    coverColor: "bg-blue-800"
  },

  {
    id: "checklist-manifesto",
    title: "The Checklist Manifesto",
    author: "Atul Gawande",
    authorLink: "http://atulgawande.com/",
    summary:
      "A compelling argument for the checklist, demonstrating how it can help us handle complex tasks correctly.",
    relevance:
      "Gawande uses aviation as the gold standard for procedure following. This book validates the pilot's reliance on SOPs, explaining that checklists aren't crutches for the weak, but necessary tools for the expert to manage complexity and Application of Procedures.",
    excerpt:
      "Under conditions of complexity, not only are checklists a help, they are required for success. There must always be room for judgment, but judgment aided—and even enhanced—by procedure.",
    competencyIds: ["procedures", "workload"],

    // Chapters are consistent in TOC
    competencyIndex: [
      {
        competencyId: "procedures",
        chapterPage: "Ch. 1–2 (Extreme Complexity; The Checklist) + Appendix (Example Checklists)",
        oneSentence:
          "Gives the why and how of checklists—what belongs on them, what doesn’t, and how to make them work under pressure."
      },
      {
        competencyId: "workload",
        chapterPage: "Ch. 3–7 (design, iteration, rollout and testing of checklists)",
        oneSentence:
          "Shows how standardisation reduces cognitive load and prevents task-saturation mistakes when things get busy."
      }
    ],

    links: {
      amazon: "#",
      audible: "#"
    },
    coverImage: "https://covers.openlibrary.org/b/isbn/9780312430009-L.jpg",
    coverColor: "bg-red-700"
  },

  {
    id: "fate-is-the-hunter",
    title: "Fate is the Hunter",
    author: "Ernest K. Gann",
    authorLink: "https://en.wikipedia.org/wiki/Ernest_K._Gann",
    summary:
      "A memoir of the early days of commercial aviation, highlighting the challenges and raw skills required.",
    relevance:
      "Gann's stories are terrifyingly real lessons in Situation Awareness. He shows how quickly 'normal' can turn into disaster through subtle accumulation of threats. It teaches respect for the environment and the importance of never becoming complacent.",
    excerpt:
      "The sky is a canvas of infinite depth, and the clouds are the mountains of the air. To fly among them is to know the true meaning of solitude and the fragility of human existence.",
    competencyIds: ["situation-awareness", "manual-flight"],

    competencyIndex: [
      {
        competencyId: "situation-awareness",
        chapterPage: "Key episodes involving weather, fuel margins, fatigue and compounding threats (throughout)",
        oneSentence:
          "A masterclass in seeing the ‘quiet’ threats early—before they stack into an unrecoverable mess."
      },
      {
        competencyId: "manual-flight",
        chapterPage: "Hand-flying / raw airmanship segments under adverse conditions (throughout)",
        oneSentence:
          "Reinforces fundamentals by showing what competent hands and calm judgement look like when margins are thin."
      }
    ],

    links: {
      amazon: "#"
    },
    coverImage: "https://covers.openlibrary.org/b/isbn/9780671636036-L.jpg",
    coverColor: "bg-slate-700"
  },

  {
    id: "crew-resource-management",
    title: "Crew Resource Management",
    author: "Barbara Kanki",
    authorLink: "https://www.sciencedirect.com/book/9780128129951/crew-resource-management",
    summary:
      "The definitive reference on CRM, covering communication, teamwork, and human factors.",
    relevance:
      "This is the academic foundation of modern airline safety. It moves beyond 'stories' to the science of Communication and Leadership. It explains the mechanics of error trapping, shared mental models, and how to effectively challenge authority gradients.",
    excerpt:
      "CRM is not about being nice; it is about being effective. It is the utilization of all available resources—information, equipment, and people—to achieve safe and efficient flight operations.",
    competencyIds: ["communication", "leadership"],

    competencyIndex: [
      {
        competencyId: "communication",
        chapterPage: "Sections on communication models, briefings, assertiveness, and monitoring/cross-check",
        oneSentence:
          "Turns ‘communicate better’ into concrete behaviours: briefing structure, assertive challenge, and closed-loop communication."
      },
      {
        competencyId: "leadership",
        chapterPage: "Sections on teamwork, authority gradient, leadership behaviours, and organisational/culture effects",
        oneSentence:
          "Explains how leaders shape team performance and error-trapping—especially around hierarchy and decision ownership."
      }
    ],

    links: {
      amazon: "#"
    },
    coverImage: "https://covers.openlibrary.org/b/isbn/9780123749468-L.jpg",
    coverColor: "bg-emerald-700"
  },

  {
    id: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    authorLink: "https://kahneman.princeton.edu/",
    summary:
      "Explores the two systems that drive the way we think: System 1 (fast, intuitive) and System 2 (slow, deliberative).",
    relevance:
      "Essential for Problem Solving & Decision Making. Pilots often rely on System 1 (intuition) when they should use System 2 (analysis). Kahneman explains cognitive biases like 'confirmation bias' and 'startle effect' that lead to accidents.",
    excerpt:
      "We are prone to overestimate how much we understand about the world and to underestimate the role of chance in events.",
    competencyIds: ["problem-solving"],

    // Parts/chapters are consistent in TOC
    competencyIndex: [
      {
        competencyId: "problem-solving",
        chapterPage: "Part I (Two Systems) + Part II (Heuristics & Biases) + risk/choice chapters in later parts",
        oneSentence:
          "Gives you a named toolkit for pilot-grade decision traps: cognitive ease, anchoring, availability, and ‘jumping to conclusions’."
      }
    ],

    links: {
      amazon: "#",
      audible: "#"
    },
    coverImage: "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg",
    coverColor: "bg-indigo-700"
  },

  // --- Risk book stays exactly as you already have it ---

  {
    id: "risk-a-users-guide",
    title: "Risk: A User’s Guide",
    author: "Stanley McChrystal",
    authorLink: "https://en.wikipedia.org/wiki/Stanley_McChrystal",
    summary:
      "A practical framework for understanding how risk is created, amplified, and controlled inside complex teams and organisations.",
    relevance:
      "McChrystal reframes risk as a product of internal factors like communication speed, bias, decision tempo, and leadership behaviour. For pilots, it sharpens situational awareness, improves decision making under uncertainty, and reinforces CRM fundamentals by showing how small internal failures compound into major events.",
    excerpt: "Risk is not the enemy; risk is the price of doing something new or important.",
    competencyIds: ["communication", "situation-awareness", "workload", "problem-solving", "leadership"],
    competencyIndex: [
      {
        competencyId: "communication",
        chapterPage: "Ch. 4, pp. ~70–95",
        oneSentence: "Shows how slow, unclear, or filtered communication dramatically increases overall system risk."
      },
      {
        competencyId: "situation-awareness",
        chapterPage: "Ch. 2–3, pp. ~30–70",
        oneSentence: "Explains how bias and narrow perspectives degrade accurate perception of unfolding situations."
      },
      {
        competencyId: "problem-solving",
        chapterPage: "Ch. 7, pp. ~160–185",
        oneSentence: "Demonstrates that delayed decisions often create more danger than timely imperfect ones."
      },
      {
        competencyId: "workload",
        chapterPage: "Intro & Conclusion, pp. ~1–20, ~230–245",
        oneSentence: "Shows how risk compounds gradually and why early recognition prevents workload escalation."
      },
      {
        competencyId: "leadership",
        chapterPage: "Ch. 5–6, pp. ~95–160",
        oneSentence: "Illustrates how leadership behaviour and team structure improve resilience and error trapping."
      }
    ],
    links: { amazon: "#", audible: "#" },
    coverImage: "https://covers.openlibrary.org/b/isbn/9780593084637-L.jpg",
    coverColor: "bg-slate-800"
  },

  {
    id: "cockpit-confidential",
    title: "Cockpit Confidential",
    author: "Patrick Smith",
    authorLink: "https://askthepilot.com/",
    summary:
      "Everything you ever wanted to know about air travel, answering questions and debunking myths.",
    relevance:
      "Excellent for Communication. It teaches pilots how to explain complex technical concepts to non-pilots (passengers, cabin crew) clearly and without jargon, a key skill for captains.",
    excerpt:
      "Turbulence is not dangerous. It is uncomfortable, but it is not dangerous. The airplane is built to withstand forces far greater than anything you will ever experience in flight.",
    competencyIds: ["communication", "situation-awareness"],

    competencyIndex: [
      {
        competencyId: "communication",
        chapterPage: "Passenger Q&A / myth-busting sections (throughout)",
        oneSentence:
          "Trains you to explain complex aviation topics without jargon—ideal for PA’s and calming nervous flyers."
      },
      {
        competencyId: "situation-awareness",
        chapterPage: "Operational realities: turbulence, weather, routing, safety margins, and ‘how it really works’ (throughout)",
        oneSentence:
          "Improves operational SA by linking everyday threats and misconceptions to what actually matters in the system."
      }
    ],

    links: { amazon: "#" },
    coverImage: "https://covers.openlibrary.org/b/isbn/1402280912-L.jpg",
    coverColor: "bg-sky-700"
  }
];
