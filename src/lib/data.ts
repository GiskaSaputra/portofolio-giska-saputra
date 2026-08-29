// Semua konten portofolio Giska Saputra terpusat di sini.

export const profile = {
  name: "Giska Saputra",
  fullName: "Giska Saputra",
  role: "Full-Stack Developer",
  university: "State Polytechnic of Cilacap",
  headline: "I engineer scalable and",
  headlineHighlight: "robust web applications.",
  subtext:
    "Informatics Engineering Diploma (D3) student and Dual BNSP-Certified Web Developer specializing in Full-Stack Development. Proven capability in bridging responsive front-end ecosystems with robust back-end architectures.",
  avatar: "/images/hero-section.png",
  gpa: "3.69 / 4.00",
  location: "Cilacap Regency",
  email: "giskasaputra2005@gmail.com",
  linkedin: "https://www.linkedin.com/in/giska-saputra-6961482a6/",
  instagram: "https://www.instagram.com/_ghsksptr/",
  github: "https://github.com/GiskaSaputra",
};

export const about = {
  image: "/images/hero-section.png",
  paragraphs: [
    "I am an Informatics Engineering Diploma (D3) student at the State Polytechnic of Cilacap with a GPA of 3.65. I hold dual BNSP certifications as a Junior and Assistant Web Developer, showcasing my dedication to professional standards in software engineering.",
    "Specializing in Full-Stack Development, I have a proven track record of bridging responsive front-end ecosystems like React.js, Next.js, and Tailwind CSS with robust back-end architectures utilizing Laravel, CodeIgniter 4, Node.js, and MySQL. My experience encompasses the full Software Development Life Cycle (SDLC).",
    "Beyond coding, I am experienced in technical team leadership and have actively contributed to community projects, which was reinforced by securing 3rd Place in the GDG Project Championship. I am deeply committed to engineering scalable, secure, and high-uptime web applications that deliver exceptional user experiences."
  ],
};

export const education = [
  {
    degree: "D3 Informatics Engineering",
    school: "State Polytechnic of Cilacap",
    period: "2024 - Present",
    semester: null,
    score: "GPA 3.65",
    description: "Pursuing an Informatics Engineering Diploma with a strong focus on software development, database management, and system architecture.",
    tags: ["Software Engineering", "Web Development", "Databases", "SDLC"],
  },
  {
    degree: "Religious Studies",
    school: "MAN 1 Tegal",
    period: "2021 - 2024",
    semester: null,
    score: null,
    description: "Completed secondary education with a focus on religious studies, while actively participating in organizations and media management.",
    tags: ["Organization", "Media Management", "Communication"],
  },
];

export const achievements = [
  {
    title: "3rd Winner Member Project Championship",
    organizer: "Google Developer Groups on Campus",
    level: "National",
    year: "2026",
    rank: "3rd",
  },
  {
    title: "2nd Winner UI/UX Design",
    organizer: "State Polytechnic of Samarinda (IT FEST 2025)",
    level: "National",
    year: "2025",
    rank: "2nd",
  },
];

export const experience = [
  {
    number: "01",
    role: "Fullstack Developer",
    org: "PT. Teknologi Server Indonesia | Internship",
    period: "August 2026 - Present",
    type: "internship" as const,
    points: [
      "Spearheaded the modernization of a legacy native PHP system by migrating the entire codebase to the latest Laravel framework.",
      "Restructured the application into a robust MVC architecture and seamlessly integrated responsive front-end interfaces."
    ],
  },
  {
    number: "02",
    role: "Project Manager",
    org: "Himatris - JKB FEST | Project Based",
    period: "January 2026 - May 2026",
    type: "project-based" as const,
    points: [
      "Spearheaded a technical team of 7 in architecting and developing the competition's operational web system using Laravel and MySQL.",
      "Guaranteed 100% platform uptime and data integrity for 20+ concurrent active users during peak competition rounds."
    ],
  },
  {
    number: "03",
    role: "Front-End Developer",
    org: "Himatris - JKB FEST | Project Based",
    period: "January 2026 - May 2026",
    type: "project-based" as const,
    points: [
      "Translated over 30 pages of high-fidelity prototype designs (Figma) into an interactive and responsive website interface."
    ],
  },
  {
    number: "04",
    role: "Mentor",
    org: "Himatris - JKB Learning Center | Organization",
    period: "January 2026 - May 2026",
    type: "organization" as const,
    points: [
      "Intensively mentored 32 class participants on UI/UX fundamentals, user research, and wireframing using Figma.",
      "Assisted participants in producing functional digital application prototypes, achieving an 80% graduation rate."
    ],
  },
  {
    number: "05",
    role: "Member UX Design",
    org: "Google Developers Groups | Internship",
    period: "December 2025 - June 2026",
    type: "internship" as const,
    points: [
      "Designed 20+ solution-based application prototypes for various community projects using Figma.",
      "Collaborated with 5 developers, reducing design revisions during the coding phase by 30%."
    ],
  },
  {
    number: "05",
    role: "Research Assistant",
    org: "Politeknik Negeri Cilacap | Project Based",
    period: "October 2025 - December 2025",
    type: "project-based" as const,
    points: [
      "Conducted user research by interviewing 20 stakeholders to identify pain points related to mental health.",
      "Designed comprehensive user flow and interface for an AI mental health detection system using Figma."
    ],
  },
  {
    number: "06",
    role: "Coordinator of Kominfo Division",
    org: "PROTIC | Organization",
    period: "July 2025 - Present",
    type: "organization" as const,
    points: [
      "Led a team of 7 staff members in producing visuals, publication strategies, and managing social media.",
      "Increased the organization's social media engagement rate by 85% through regular publications."
    ],
  },
];

export const internship = {
  role: "Fullstack Developer Intern",
  org: "PT. Teknologi Server Indonesia",
  period: "Aug 2026 - Present",
  points: [
    "Spearheaded the modernization of a legacy native PHP system by migrating the entire codebase to the latest Laravel framework.",
    "Restructured the application into a robust MVC architecture.",
    "Integrated responsive front-end interfaces to significantly improve overall user experience.",
    "Ensured long-term scalability and security of the systems."
  ],
};

export const publicSpeaking = {
  mc: { desc: "", events: [] },
  moderator: { desc: "", events: [] },
};

export const skills = {
  hard: [
    { name: "React.js / Next.js", desc: "Building scalable and interactive front-end web applications.", emoji: "⚛️" },
    { name: "Laravel / CI4", desc: "Developing robust back-end systems and APIs.", emoji: "🐘" },
    { name: "Tailwind CSS", desc: "Crafting beautiful and responsive user interfaces rapidly.", emoji: "🎨" },
    { name: "MySQL", desc: "Designing and managing relational database schemas.", emoji: "🗄️" },
    { name: "UI/UX Design", desc: "Creating intuitive user flows and wireframes with Figma.", emoji: "✨" },
    { name: "System Architecture", desc: "Structuring MVC applications and ensuring software scalability.", emoji: "🏗️" },
  ],
  soft: [
    { name: "Leadership", desc: "Successfully managed technical and creative teams in various projects." },
    { name: "Problem Solving", desc: "Translating complex requirements into efficient technical solutions." },
    { name: "Team Collaboration", desc: "Working seamlessly with developers, designers, and stakeholders." },
    { name: "Communication", desc: "Clear articulation of ideas, as demonstrated in mentoring roles." },
    { name: "Adaptability", desc: "Quickly learning new frameworks and migrating legacy systems." },
    { name: "Time Management", desc: "Balancing academic studies, internships, organizations, and freelance work." },
  ],
};

export const projects = [
  {
    number: "01",
    title: "Angkara",
    category: "Web App",
    description: "The first tourist boat booking platform in Cilacap. Transparent, KSOP-verified, and trusted.",
    image: "/images/project-1.jpg",
    gradient: "from-blue-500 to-indigo-600",
    size: "large" as const,
    tags: ["Next JS", "React JS", "Node.js", "Tailwind CSS", ".NET"],
  },
  {
    number: "02",
    title: "JKB FEST 2026",
    category: "Web App",
    description: "A web-based event management platform designed for the JKB FEST 2026 Web Development Competition.",
    image: "/images/project-1.jpg",
    gradient: "from-indigo-500 via-purple-500 to-violet-600",
    size: "small" as const,
    tags: ["Laravel", "TailwindCSS", "MySQL"],
  },
  {
    number: "03",
    title: "HopeAI",
    category: "Web App",
    description: "An AI-powered platform focused on inclusive education with intelligent assistance and adaptive content.",
    image: "/images/project-1.jpg",
    gradient: "from-teal-500 to-cyan-600",
    size: "small" as const,
    tags: ["Next JS", "React JS", "Node.js", "Tailwind CSS"],
  },
  {
    number: "04",
    title: "PNC Career Center",
    category: "Web App",
    description: "A comprehensive web system managing industry placements, internships, and training for students.",
    image: "/images/project-1.jpg",
    gradient: "from-slate-600 to-blue-700",
    size: "small" as const,
    tags: ["Laravel", "TailwindCSS", "MySQL"],
  },
  {
    number: "05",
    title: "SIMAJA",
    category: "Web App",
    description: "Study jam activity management system for PROTIC student organization members.",
    image: "/images/project-1.jpg",
    gradient: "from-cyan-500 to-blue-600",
    size: "small" as const,
    tags: ["CI4", "Bootstrap", "MySQL"],
  },
  {
    number: "06",
    title: "RAKSA",
    category: "Web App",
    description: "e-Government system prototype for personal data protection and online fraud prevention.",
    image: "/images/project-1.jpg",
    gradient: "from-purple-500 to-pink-600",
    size: "small" as const,
    tags: ["ReactJS", "TailwindCSS"],
  },
  {
    number: "07",
    title: "AiDUC",
    category: "UI/UX Design",
    description: "Award-winning AI-based learning application prototype for students with and without disabilities.",
    image: "/images/project-1.jpg",
    gradient: "from-emerald-500 to-teal-600",
    size: "small" as const,
    tags: ["Figma"],
  },
  {
    number: "08",
    title: "SIPREKESWA.AI",
    category: "UI/UX Design",
    description: "Interface design for an AI-integrated mental health services application developed for RSUD Purbalingga.",
    image: "/images/project-1.jpg",
    gradient: "from-rose-500 to-pink-600",
    size: "small" as const,
    tags: ["Figma"],
  },
  {
    number: "09",
    title: "Green Up App",
    category: "UI/UX Design",
    description: "Environmental care application design with a simple and user-friendly interface.",
    image: "/images/project-1.jpg",
    gradient: "from-green-500 to-emerald-700",
    size: "small" as const,
    tags: ["Figma"],
  },
];

// EXTRA DATA UNTUK GISKA SAPUTRA
export const listSertifikat = [
  {
    id: 1,
    gambar: "",
    nama: "Assistant Web Developer (BNSP)",
    penerbit: "Badan Nasional Sertifikasi Profesi",
    desk: "Passed the technical competency test for Assistant Web Developer. (September 2025)",
  },
  {
    id: 2,
    gambar: "",
    nama: "Junior Web Developer (BNSP)",
    penerbit: "Badan Nasional Sertifikasi Profesi",
    desk: "Passed the technical competency test for Junior Web Developer. (September 2025)",
  },
  {
    id: 3,
    gambar: "",
    nama: "Junior Web Developer (VSGA)",
    penerbit: "BPSDMP Yogyakarta / Komdigi",
    desk: "Completed the Vocational School Graduate Academy program for Junior Web Developer. (August 2025)",
  },
  {
    id: 4,
    gambar: "",
    nama: "CCNA: Introduction to Network",
    penerbit: "Cisco Networking Academy",
    desk: "Fundamental knowledge in computer networking. (July 2025)",
  },
  {
    id: 5,
    gambar: "",
    nama: "Operating Systems Basics",
    penerbit: "Cisco Networking Academy",
    desk: "Fundamental knowledge of operating systems. (July 2025)",
  },
  {
    id: 6,
    gambar: "",
    nama: "IT Essentials",
    penerbit: "Cisco Networking Academy",
    desk: "Hardware and software essentials. (January 2025)",
  },
  {
    id: 7,
    gambar: "",
    nama: "Learning Basic JavaScript Programming",
    penerbit: "Dicoding Indonesia",
    desk: "JavaScript fundamentals and basic programming concepts. (January 2026)",
  },
  {
    id: 8,
    gambar: "",
    nama: "Learning to Build Front-End Web for Beginners",
    penerbit: "Dicoding Indonesia",
    desk: "Building responsive front-end applications. (January 2026)",
  },
  {
    id: 9,
    gambar: "",
    nama: "Learning Basic Web Programming",
    penerbit: "Dicoding Indonesia",
    desk: "HTML, CSS, and structural web design. (January 2026)",
  },
  {
    id: 10,
    gambar: "",
    nama: "Learning Basic AI",
    penerbit: "Dicoding Indonesia",
    desk: "Introduction to Artificial Intelligence concepts. (November 2025)",
  },
];

export const listTools = [
  { id: 1, nama: "VS Code", ket: "Code Editor", img: "/images/tools/vscode.svg" },
  { id: 2, nama: "React JS", ket: "Framework", img: "/images/tools/react.svg" },
  { id: 3, nama: "Next JS", ket: "Framework", img: "/images/tools/nextjs.svg" },
  { id: 4, nama: "Tailwind CSS", ket: "Framework", img: "/images/tools/tailwindcss.svg" },
  { id: 5, nama: "Bootstrap", ket: "Framework", img: "/images/tools/bootstrap.svg" },
  { id: 6, nama: "Javascript", ket: "Language", img: "/images/tools/javascript.svg" },
  { id: 7, nama: "Node JS", ket: "Runtime", img: "/images/tools/nodejs.svg" },
  { id: 8, nama: "Github", ket: "Repository", img: "/images/tools/github.svg" },
  { id: 9, nama: "AI Tools", ket: "Productivity", img: "/images/tools/aitools.svg" },
  { id: 10, nama: "Canva", ket: "Design App", img: "/images/tools/canva.svg" },
  { id: 11, nama: "Figma", ket: "Design App", img: "/images/tools/figma.svg" },
  { id: 12, nama: "Laravel", ket: "PHP Framework", img: "/images/tools/laravel.svg" },
  { id: 13, nama: "CodeIgniter 4", ket: "PHP Framework", img: "/images/tools/codeigniter.svg" },
  { id: 14, nama: "PHP", ket: "Language", img: "/images/tools/php.svg" },
];
