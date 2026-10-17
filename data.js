/* ============================================================
   KANMI DAVID — SITE DATA
   This is the ONLY file you edit to update the site.

   To add a video:
   1. Drop the .mp4 into  assets/videos/   (e.g. assets/videos/glow-serum-ad.mp4)
   2. (Optional) drop a thumbnail into assets/posters/ (jpg/png) and set poster
   3. Copy one block in PROJECTS below, change the fields, save.

   cat must be one of: "motion" | "ai" | "aiugc" | "ugc" | "dtc"
   Video shape (vertical / landscape) is detected automatically.
   File names must match EXACTLY, including capitals and spelling.
   ============================================================ */

window.SITE = {
  name: "Kanmi David",
  studio: "Kavi Studios",
  tagline: "I make things move, sell, and stop thumbs.",
  sub: "Motion designer · AI video creator · UGC & DTC video editor",
  email: "kanmi@kavistudios.co",
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
    { n: "5", l: "disciplines, 1 editor" },
    { n: "Africa + Global", l: "brands served" }
  ]
};

/* ============== TRUSTED BY (home page logo strip) ==============
   Put each logo in assets/logos/ (PNG or SVG, transparent background; it is shown in white).
   If a logo file is missing, the company name shows as text instead.
   Only list real clients you have permission to show. Not spec work.
   To add one: copy a line, change name and logo. Optional: url: "https://..." */
window.TRUSTED = [
  { name: "ASC",             logo: "assets/logos/asc.png" },
  { name: "Jemirae",         logo: "assets/logos/jemirae.png" },
  { name: "Kava TV",         logo: "assets/logos/kava-tv.png" },
  { name: "Wellat",          logo: "assets/logos/wellat.png" },
  { name: "iSpace",          logo: "assets/logos/ispace.png" },
  { name: "Trendify Africa", logo: "assets/logos/trendify-africa.png" },
  { name: "NALA",            logo: "assets/logos/nala.png" },
  { name: "Translo AI",      logo: "assets/logos/translo-ai.png" },
  { name: "Kira AI",         logo: "assets/logos/kira-ai-2.png" },
  { name: "Locked In HQ",    logo: "assets/logos/locked-in-hq.png" }
];

window.CATS = {
  motion: {
    page: "motion.html", num: "01", title: "Motion Design",
    blurb: "After Effects, Cinema 4D and Blender. Graphics that move on purpose."
  },
  ai: {
    page: "ai.html", num: "02", title: "AI Videos",
    blurb: "AI-native, human-directed. Higgsfield, Kling, Seedance and Nano Banana Pro."
  },
  aiugc: {
    page: "ai-ugc.html", num: "03", title: "AI UGC",
    blurb: "UGC-style ads with AI-generated creators. Scripted, directed and edited by hand."
  },
  ugc: {
    page: "ugc.html", num: "04", title: "UGC Edits",
    blurb: "Creator footage cut for the thumb-stop. Hooks, captions, pacing, proof."
  },
  dtc: {
    page: "dtc.html", num: "05", title: "DTC Videos",
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

  /* ========================== AI UGC ========================== */
  {
    cat: "aiugc",
    title: "Faceted: AI UGC Ad",
    client: "Faceted (my own product)",
    year: "2026",
    role: "Creative director, AI video creator and editor",
    tools: ["Higgsfield", "Seedance 2.0", "Nano Banana Pro", "CapCut"],
    video: "assets/videos/faceted-aiugc.mp4",
    poster: "",
    brief: "A UGC-style ad for Faceted, my own skincare skin-type guide, made without a camera crew or a hired creator. I designed an AI creator, wrote the script around a hook, a short proof of how the quiz works and a clear call to action, then generated the selfie-style shots and B-roll with Seedance and Nano Banana Pro. Cut by hand for native pacing, with the product shown exactly as it is. The creator is AI-generated and fictional."
  },
  {
    cat: "aiugc",
    title: "Vitamin C Serum: AI UGC Ad",
    client: "Sample concept (unbranded product)",
    year: "2026",
    role: "Creative director, AI video creator and editor",
    tools: ["Higgsfield", "Seedance 2.0", "Nano Banana Pro", "CapCut"],
    video: "assets/videos/skincare-aiugc.mp4",
    poster: "",
    brief: "A sample skincare UGC ad built to test how real an AI creator can feel. I wrote a simple hook-and-routine script, designed the creator and the product, and generated a selfie-style talking shot plus self-filmed B-roll for texture and proof. Cut by hand with natural jump cuts and captions. The creator and the unbranded product are AI-generated and fictional."
  },
  {
    cat: "aiugc",
    title: "Greens Powder: AI UGC Ad",
    client: "Sample concept (unbranded product)",
    year: "2026",
    role: "Creative director, AI video creator and editor",
    tools: ["Higgsfield", "Seedance 2.0", "Nano Banana Pro", "CapCut"],
    video: "assets/videos/greens-powder-aiugc.mp4",
    poster: "",
    brief: "A sample wellness UGC ad in a relaxed kitchen setting. I scripted a relatable morning-routine hook, generated the creator and the product, and directed a natural handheld talking shot, then edited it for native pacing and captions. Claims are kept mild on purpose. The creator and the unbranded product are AI-generated and fictional."
  },
  {
    cat: "aiugc",
    title: "Oversized Hoodie: AI UGC Ad",
    client: "Sample concept (unbranded product)",
    year: "2026",
    role: "Creative director, AI video creator and editor",
    tools: ["Higgsfield", "Seedance 2.0", "Nano Banana Pro", "CapCut"],
    video: "assets/videos/hoodie-aiugc.mp4",
    poster: "",
    brief: "A sample fashion UGC ad filmed mirror-selfie style with an AI-generated male creator. I wrote a short review-style script around a common complaint, then directed the shot and edited it to feel like a real customer clip. The creator and the plain, unbranded hoodie are AI-generated and fictional."
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
    title: "Water Dispenser: Pidgin DTC Ad",
    client: "Water dispenser brand (name withheld)",
    year: "2025",
    role: "Scriptwriter, voice-over artist and video editor",
    tools: ["CapCut"],
    video: "assets/videos/water-dispenser-pidgin-dtc.mp4",
    poster: "",
    brief: "A short-form ad for a water dispenser brand, made for a specific local audience. I wrote the hook and script in Pidgin and recorded the voice-over myself, so it feels native to the people it is meant for, and the edit runs on a trending sound. The footage changes about every 3 seconds to keep the pacing tight, and the call to action is clear and explicit. It reached 927K views on TikTok organically, with 867 shares and 1,309 saves. That is organic reach, not paid ad data."
  },
  {
    cat: "dtc",
    title: "Water Dispenser: English DTC Ad",
    client: "Water dispenser brand (name withheld)",
    year: "2025",
    role: "Scriptwriter, voice-over artist and video editor",
    tools: ["CapCut"],
    video: "assets/videos/water-dispenser-english-dtc.mp4",
    poster: "",
    brief: "A second ad for the same water dispenser brand, kept in plain English for a broader audience. I wrote the hook and script, recorded the voice-over and edited it with tight pacing: a new shot about every 3 seconds, the product shown clearly, and an obvious, explicit call to action at the end."
  },
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

/* ============== CUSTOM PICKS (tailored pages for applications) ==============
   Each pick makes its own page. Add one: copy ai-performance.html, change
   data-pick, then add a block here. items = project titles, in the order shown. */
window.PICKS = {
  "ai-performance": {
    title: "AI Video & Performance Ads",
    blurb: "A focused selection: UGC and DTC ad edits for paid social, plus AI-animated films and ads made with Higgsfield, Kling and Seedance.",
    items: [
      "Water Dispenser: Pidgin DTC Ad",
      "Water Dispenser: English DTC Ad",
      "ClickUp Brain: DTC Ad",
      "Faceted: AI UGC Ad",
      "Vitamin C Serum: AI UGC Ad",
      "Greens Powder: AI UGC Ad",
      "Oversized Hoodie: AI UGC Ad",
      "ClickUp: UGC Ad",
      "BlossomUp: UGC Ad",
      "NALA Ghana: Animated Ad",
      "NALA Nigeria: Animated Ad",
      "Not Again!",
      "Making of a Nala Ad: Breakdown Reel"
    ]
  }
};
