/* ============================================================
   KANMI DAVID — SITE DATA
   This is the ONLY file you edit to update the site.

   To add a video:
   1. Drop the .mp4 into  assets/videos/   (e.g. assets/videos/glow-serum-ad.mp4)
   2. (Optional) drop a thumbnail into assets/posters/ (jpg/png) and set poster
   3. Copy one block in PROJECTS below, change the fields, save.

   cat must be one of: "motion" | "ai" | "ugc" | "dtc"
   Video shape (vertical / landscape) is detected automatically.
   File names must match EXACTLY, including capitals and spelling.
   ============================================================ */

window.SITE = {
  name: "Kanmi David",
  studio: "Kavi Studios",
  tagline: "I make things move, sell, and stop thumbs.",
  sub: "Motion designer · AI video creator · UGC & DTC video editor",
  email: "oyekanmiadewumi200@gmail.com",
  links: {
    instagram: "https://www.instagram.com/oyekanmidavid5",
    linkedin: "https://www.linkedin.com/in/oyekanmi-david-3757a3343",
    x: "",
    tiktok: "https://www.tiktok.com/@oyekanmi_david",
    website: ""
  },
  showreel: "assets/videos/showreel.mp4", // optional: hidden if the file is missing
  tools: [
    "After Effects", "Cinema 4D", "Blender", "Premiere Pro", "DaVinci Resolve",
    "Higgsfield", "Kling AI", "Seedance", "Nano Banana Pro", "CapCut"
  ],
  stats: [
    { n: "~7", l: "years editing" },
    { n: "4", l: "disciplines, 1 editor" },
    { n: "Africa + Global", l: "brands served" }
  ]
};

window.CATS = {
  motion: {
    page: "motion.html", num: "01", title: "Motion Design",
    blurb: "After Effects, Cinema 4D and Blender. Graphics that move on purpose."
  },
  ai: {
    page: "ai.html", num: "02", title: "AI Videos",
    blurb: "AI-native, human-directed. Higgsfield, Kling, Seedance and Nano Banana Pro."
  },
  ugc: {
    page: "ugc.html", num: "03", title: "UGC Edits",
    blurb: "Creator footage cut for the thumb-stop. Hooks, captions, pacing, proof."
  },
  dtc: {
    page: "dtc.html", num: "04", title: "DTC Videos",
    blurb: "Product-first ads and brand films built to convert on Meta and TikTok."
  }
};

window.PROJECTS = [

  /* ===================== MOTION DESIGN ===================== */
  {
    cat: "motion",
    title: "Fiscal Guard: Motion Design",
    client: "Fiscal Guard",
    year: "2026",
    role: "Motion designer",
    tools: ["After Effects"],
    video: "assets/videos/fiscalguard-motion.mp4",
    poster: "",
    brief: "A commissioned motion design piece for Fiscal Guard, a tax software built for freelancers and remote workers. The aim was to take a subject most people find dry and stressful and make it feel clear and approachable through motion and 3D. Designed and animated end to end in After Effects, including the 3D elements."
  },
  {
    cat: "motion",
    title: "Kava TV: One Year Anniversary",
    client: "Kava TV",
    year: "2026",
    role: "Motion designer",
    tools: ["After Effects"],
    video: "assets/videos/kavatv-anniversary-motion.mp4",
    poster: "",
    brief: "A one-year anniversary piece for Kava TV, the Nollywood streaming platform launched in Nigeria in August 2025. The goal was to show how far the platform has come in its first year and celebrate the films and audience behind it, with motion that feels as cinematic as the content it carries."
  },
  {
    cat: "motion",
    title: "Jemirae Logo Animation",
    client: "Jemirae",
    year: "2026",
    role: "Senior motion designer",
    tools: ["After Effects"],
    video: "assets/videos/jemirae-animation-motion.mp4",
    poster: "",
    brief: "A short logo animation for Jemirae, a design, marketing and engineering agency based in Tokyo. Built to open and close the agency's videos, the animation keeps the mark clean, precise and recognisable in just a few seconds."
  },
  {
    cat: "motion",
    title: "Making of a Nala Ad: Breakdown Reel",
    client: "Kavi Studios",
    year: "2026",
    role: "Director and motion designer",
    tools: ["After Effects", "Higgsfield"],
    video: "assets/videos/kavi-breakdown-motion.mp4",
    poster: "",
    brief: "A fast sizzle-style breakdown showing the key stages behind Kavi Studios' AI-animated ad for NALA, from idea to finished film. Cut to highlight the process rather than explain every step."
  },
  {
    cat: "motion",
    title: "Framer Logo Animation (Recreation)",
    client: "Personal study",
    year: "2025",
    role: "Motion designer",
    tools: ["After Effects"],
    video: "assets/videos/framer-logoanimation-motion.mp4",
    poster: "",
    brief: "A recreation of Framer's logo animation, made as a study in timing, easing and shape motion. Not a client project. Framer's logo and brand belong to Framer."
  },

  /* ========================= AI VIDEOS ========================= */
  {
    cat: "ai",
    title: "NALA Ghana: Animated Ad",
    client: "NALA Ghana",
    year: "2026",
    role: "AI video creator and motion designer",
    tools: ["Higgsfield", "Seedance", "Nano Banana Pro", "After Effects"],
    video: "assets/videos/nala-ghana-ai.mp4",
    poster: "",
    brief: "A Pixar-style 3D animated ad for NALA, the fintech that lets families send money home to Ghana from abroad. The story keeps the focus on the family on both ends of the transfer. Characters and scenes were designed and generated shot by shot with AI, then edited, sound-designed and finished by hand."
  },
  {
    cat: "ai",
    title: "NALA Nigeria: Animated Ad",
    client: "NALA Nigeria",
    year: "2026",
    role: "AI video creator and motion designer",
    tools: ["Higgsfield", "Seedance", "Nano Banana Pro", "After Effects"],
    video: "assets/videos/nala-nigeria-ai.mp4",
    poster: "",
    brief: "The Nigeria version of NALA's animated campaign, in the same Pixar-style 3D look but localised for Nigerian audiences and families receiving money from abroad. Same pipeline as the Ghana ad: AI-generated shots, directed and edited by hand for a consistent, premium finish."
  },
  {
    cat: "ai",
    title: "Not Again!",
    client: "Kavi Studios Originals",
    year: "2026",
    role: "Director and editor",
    tools: ["Higgsfield", "Seedance", "Nano Banana Pro"],
    video: "assets/videos/kavi-originals-ai.mp4",
    poster: "",
    brief: "\"Not Again!\" is a short AI-generated film from Kavi Studios Originals. It was built shot by shot with locked characters and a consistent look, then cut, scored and graded in-house. It shows our approach: AI-native, human-directed."
  },

  /* ========================== UGC EDITS ========================== */
  {
    cat: "ugc",
    title: "BlossomUp: UGC Ad",
    client: "BlossomUp",
    year: "2026",
    role: "Video editor (spec edit)",
    tools: ["CapCut", "Premiere Pro"],
    video: "assets/videos/blossomup-ugc.mp4",
    poster: "",
    brief: "A spec UGC edit for BlossomUp, an online personal-growth platform built around quizzes that help people understand and improve their personality. Cut in a native, creator-style format with a strong opening hook, captions and tight pacing, made as a test edit to show how the product's quizzes can land in a short-form ad."
  },
  {
    cat: "ugc",
    title: "ClickUp: UGC Ad",
    client: "ClickUp",
    year: "2026",
    role: "Video editor (spec edit)",
    tools: ["CapCut", "Premiere Pro"],
    video: "assets/videos/clickup-ugc.mp4",
    poster: "",
    brief: "A spec UGC-style edit for ClickUp, the all-in-one work platform. Built around a clear hook, relatable pacing and on-screen captions, and made as a test edit to show how an everyday-work pain point can be turned into a scroll-stopping short-form ad."
  },

  /* ========================== DTC VIDEOS ========================== */
  {
    cat: "dtc",
    title: "ClickUp Brain: DTC Ad",
    client: "ClickUp",
    year: "2026",
    role: "Video editor (spec edit)",
    tools: ["Premiere Pro", "After Effects"],
    video: "assets/videos/clickup-dtc.mp4",
    poster: "",
    brief: "A spec product-led ad for ClickUp's AI agent, which helps draft spreadsheets, organise processes and write reports so teams spend less time on busywork. Edited to put the benefit up front, show the product in action and end on a clear call to action, made as a test edit."
  }
];
