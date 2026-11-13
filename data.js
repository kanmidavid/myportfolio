/* ============================================================
   KANMI DAVID — SITE DATA
   This is the ONLY file you edit to update the site.

   To add a video:
   1. Drop the .mp4 into  assets/videos/   (e.g. assets/videos/glow-serum-ad.mp4)
   2. (Optional) drop a thumbnail into assets/posters/ (jpg/png) and set poster
   3. Copy one block in PROJECTS below, change the fields, save.

   cat must be one of: "talking" | "events" | "ugc" | "aiugc" | "dtc" | "motion" | "ai"
   Video shape (vertical / landscape) is detected automatically.
   File names must match EXACTLY, including capitals and spelling.
   ============================================================ */

window.SITE = {
  name: "Kanmi David",
  studio: "Kavi Studios",
  tagline: "I make things move, sell, and stop thumbs.",
  sub: "Professional video editor · motion designer · AI video creator",
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
    "CapCut", "After Effects", "Premiere Pro", "DaVinci Resolve", "Cinema 4D", "Blender",
    "Higgsfield", "Kling AI", "Seedance", "Nano Banana Pro"
  ],
  stats: [
    { n: "~7", l: "years editing" },
    { n: "7", l: "specialities, 1 editor" },
    { n: "Africa + Global", l: "brands served" }
  ]
};

window.CATS = {
  talking: {
    page: "talking-head.html", num: "01", title: "Talking Head",
    blurb: "Face-to-camera content cut to hold attention. Tight pacing, stylised captions and motion graphics that make the message land."
  },
  events: {
    page: "event-recaps.html", num: "02", title: "Event Recaps",
    blurb: "Fast, cinematic recaps that carry the energy of the day. Cut for pace, finished with motion graphics and VFX."
  },
  ugc: {
    page: "ugc.html", num: "03", title: "UGC Edits",
    blurb: "Creator footage cut for the thumb-stop. Hooks, captions, pacing, proof."
  },
  aiugc: {
    page: "ai-ugc.html", num: "04", title: "AI UGC",
    blurb: "AI creators that look and sound native. Scripted, directed and edited for the scroll."
  },
  dtc: {
    page: "dtc.html", num: "05", title: "DTC Videos",
    blurb: "Product-first ads and brand films built to convert on Meta and TikTok."
  },
  motion: {
    page: "motion.html", num: "06", title: "Motion Design",
    blurb: "After Effects, Cinema 4D and Blender. Graphics that move on purpose."
  },
  ai: {
    page: "ai.html", num: "07", title: "AI Videos",
    blurb: "AI-native, human-directed. Higgsfield, Kling, Seedance and Nano Banana Pro."
  }
};

window.PROJECTS = [

  /* ===================== TALKING HEAD ===================== */
  {
    cat: "talking",
    title: "Know Your Rep, Ep. 1: Who Is Your Rep?",
    client: "Michael Adesanya (MLK)",
    year: "2026",
    role: "Video editor and motion designer",
    tools: ["CapCut", "After Effects"],
    video: "assets/videos/kyr-ep1-talking-head.mp4",
    poster: "",
    brief: "Episode one of Know Your Rep (KYR), a 10-part civic-education talking-head series fronted by Michael Adesanya, who is running for public office. The episode opens on street interviews asking people who their representative is, then moves into a direct-to-camera explainer on what a representative does and how voters choose one. Major cuts were made in CapCut, then the piece was finished in After Effects with motion graphics, VFX and stylised captions, including animated on-screen text for the key facts and a Yoruba line that speaks to the local audience."
  },
  {
    cat: "talking",
    title: "Know Your Rep, Ep. 5: The Budget, Whose Money Is It?",
    client: "Michael Adesanya (MLK)",
    year: "2026",
    role: "Video editor and motion designer",
    tools: ["CapCut", "After Effects"],
    video: "assets/videos/kyr-ep5-talking-head.mp4",
    poster: "",
    brief: "Episode five of Know Your Rep (KYR). It opens with a naira note in hand and a simple idea: this is your money. The episode then explains where Nigeria's budget money comes from and how the National Assembly approves it. Cut in CapCut for a clean, fast rhythm, then finished in After Effects with motion graphics, VFX and stylised captions, including an animated flow that traces the money from taxes to the budget to the projects it funds."
  },
  {
    cat: "talking",
    title: "Adewale Student Conference: Grand Finale Announcement",
    client: "Adewale Student Conference",
    year: "2026",
    role: "Video editor and motion designer",
    tools: ["CapCut", "After Effects"],
    video: "assets/videos/asc-grand-finale-announcement.mp4",
    poster: "",
    brief: "An announcement video for the Grand Finale of the Adewale Students' Conference (ASC), the STEM competition for secondary school students across Ogun State. In its sixth year, the finale moves to Abeokuta for the first time, to the June 12 Cultural Center on 19 November, under the theme \"The Gateway Generation: Engineering the Future of Ogun State\". Built for impact: a deliberate hook, fast captions with wiggle effects, speed ramps and 3D text VFX. Major cuts were made in CapCut, then the piece was finished in After Effects."
  },

  /* ======================= EVENT RECAPS ======================= */
  {
    cat: "events",
    title: "Adewale Student Conference: Day 3 Recap",
    client: "Adewale Student Conference",
    year: "2026",
    role: "Video editor and motion designer",
    tools: ["CapCut", "After Effects"],
    video: "assets/videos/adewale-conference-day3-recap.mp4",
    poster: "",
    brief: "A recap of Day 3 of the Adewale Student Conference, the students' competition and scholarship conference held in Shagamu, Ogun State, in October 2026 and sponsored by Gala (UAC Foods). Cut in CapCut to keep the day's momentum, then finished in After Effects with motion graphics, VFX and stylised captions."
  },

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

  /* ========================== AI UGC ========================== */
  {
    cat: "aiugc",
    title: "Thinbi NAD+: Test Edit",
    client: "Thinbi (test edit)",
    year: "2026",
    role: "Video editor (test edit)",
    tools: ["CapCut"],
    video: "assets/videos/thinbi-nad-ugc.mp4",
    poster: "",
    brief: "A test edit for Thinbi, a supplement brand, built around its NAD+ capsule: a daily capsule that combines resveratrol and urolithin A with 12 actives in total, positioned around cellular energy and mitochondrial support. Cut in a native, creator-style format with a strong opening hook, captions and tight pacing so the product's key points land inside a single scroll."
  },
  {
    cat: "aiugc",
    title: "Green Powder: AI UGC Ad",
    client: "Spec edit",
    year: "2026",
    role: "AI video creator and editor (spec edit)",
    tools: ["Higgsfield", "Seedance", "Nano Banana Pro", "CapCut"],
    video: "assets/videos/green-powder-ai-ugc.mp4",
    poster: "",
    brief: "A spec AI UGC ad for a greens powder, made as a test edit. An AI-generated creator speaks straight to camera with the product, built around a strong opening hook, bold captions and tight pacing in a native, creator-style format."
  },
  {
    cat: "aiugc",
    title: "Faceted: AI UGC Ad",
    client: "Faceted (Kavi Studios venture)",
    year: "2026",
    role: "AI video creator and editor (spec edit)",
    tools: ["Higgsfield", "Seedance", "Nano Banana Pro", "CapCut"],
    video: "assets/videos/faceted-ai-ugc.mp4",
    poster: "",
    brief: "An AI UGC ad for Faceted, a skincare product that matches people to the right skin type and ingredients. An AI-generated creator talks straight to camera, with a clear hook, captions and tight pacing."
  },
  {
    cat: "aiugc",
    title: "Hoodie: AI UGC Ad",
    client: "Spec edit",
    year: "2026",
    role: "AI video creator and editor (spec edit)",
    tools: ["Higgsfield", "Seedance", "Nano Banana Pro", "CapCut"],
    video: "assets/videos/hoodie-ai-ugc.mp4",
    poster: "",
    brief: "A spec AI UGC ad for a hoodie brand, made as a test edit. An AI-generated creator shows and wears the product in a native, creator-style format with a sharp hook, captions and tight pacing."
  },
  {
    cat: "aiugc",
    title: "Serum: AI UGC Ad",
    client: "Spec edit",
    year: "2026",
    role: "AI video creator and editor (spec edit)",
    tools: ["Higgsfield", "Seedance", "Nano Banana Pro", "CapCut"],
    video: "assets/videos/serum-ai-ugc.mp4",
    poster: "",
    brief: "A spec AI UGC ad for a skincare serum, made as a test edit. An AI-generated creator speaks to camera with the product in hand, built around a strong hook, bold captions and tight pacing."
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
