export const personalInfo = {
  name: "Ijaz Ahammad Shaik",
  role: "Full-Stack / Backend-leaning Engineer",
  tagline: "React + AWS Serverless Specialist",
  location: "Hyderabad, India",
  originLocation: "Kurnool, Andhra Pradesh",
  email: "ijazahamed.cse@gmail.com",
  linkedin: "https://in.linkedin.com/in/ijazhamed108?trk=public_profile_browsemap",
  github: "https://github.com/ijazahamed108",
};

export const summary = [
  "Engineer with strong AWS serverless, React/TS, Node.js expertise, specializing in observability, performance optimization, and internationalization.",
  "Proven track record in real-time data ingestion, ETL/reporting orchestration, caching + GraphQL optimizations, and cost reduction via telemetry modernization.",
];

export const experience = [
  {
    id: 1,
    company: "Carrier Technologies Limited",
    logo: "/companyLogos/carrier-logo.svg",
    website: "https://www.carrier.com/commercial/en/in/about/about-carrier-india/",
    role: "Engineer (Senior Associate)",
    location: "Hyderabad",
    period: "Jun 2024 - Present",
    achievements: [
      "Built integration adapter using AWS Lambda, SQS, SNS, EventBridge, IoT Core for real-time sensor ingestion (Toshiba Carrier chillers)",
      "Built Gateway Replacement workflow: AWS IoT Core + Lambda re-map Chiller↔Gateway, preserve historical telemetry, auto email notifications",
      "Built serverless reporting microservice with Lambda + Step Functions; ETL telemetry from S3 via AWS Glue; linear interpolation for data gaps; generate PDF/Excel via Puppeteer + ExcelJS",
      "Migrated logs CloudWatch → New Relic via OpenTelemetry to reduce cloud costs by ~30%",
      "Implemented Redis caching + GraphQL query optimization: ~50% faster search, ~40% faster dashboard loads",
      "Implemented i18n and launched Japanese language support for UI + backend-generated emails/reports",
      "TDD with Jest; used Cody + Amazon Q for faster delivery",
    ],
    tech: ["AWS Lambda", "SQS", "SNS", "EventBridge", "IoT Core", "Step Functions", "S3", "Glue", "Redis", "GraphQL", "OpenTelemetry", "New Relic", "Jest"],
  },
  {
    id: 2,
    company: "Mintbook (K-Nomics Techno Solutions Pvt Ltd)",
    logo: "/companyLogos/mintbook-logo.webp",
    website: "https://mintbook.com/",
    role: "Software Developer",
    location: "Bengaluru",
    period: "Jul 2023 - May 2024",
    achievements: [
      "Built Digital Library for Bihar Dept of Education e-learning",
      "Built CMS + analytics in React + TypeScript + Node.js; content verification, encryption; stored/streamed from Azure; download usage reports",
      "Built utilization engine capturing 30K+ users daily activity metrics (ebooks/videos, time spent, trends) for analytics, recommendations, billing/license utilization",
    ],
    tech: ["React", "TypeScript", "Node.js", "Azure", "CMS"],
  },
  {
    id: 3,
    company: "BYJU'S (Think and Learn Pvt Ltd)",
    logo: "/companyLogos/Byju's_logo.svg.png",
    website: "https://byjus.com/",
    role: "Software Engineer",
    location: "Bengaluru",
    period: "Jul 2021 - Jun 2023",
    achievements: [
      "Owned Aakash CRP, Aakash Digital, BYJU's Exam Prep modules; designed schemas, scholarship/voucher logic; built from scratch; onboarded courses",
      "Redis caching improved product page load by ~80% in KART microservice",
      "Self-serve upload utility (React/Redux/TS) for pricing data seeding in Postgres; near-instant sync for Pricing Engine",
      "Integrated Razorpay & Bajaj payment gateways (EMI/non-EMI)",
      "Built AWS Lambda APIs reducing bulk order punching time by ~80%",
      "Built voucher/sales program rule engines with Java + Spring Boot",
      "Observability: Datadog + Coralogix; reduced MTTR by ~30%; refactored for efficiency",
      "Wrote reusable data-fix scripts to park erroneous orders and reprocess downstream",
    ],
    tech: ["React", "Redux", "TypeScript", "Node.js", "Java", "Spring Boot", "Redis", "PostgreSQL", "AWS Lambda", "Razorpay", "Datadog", "Coralogix"],
  },
  {
    id: 4,
    company: "Cognizant Technology Solutions",
    logo: "/companyLogos/cognizant_logo.png",
    website: "https://www.cognizant.com/in/en",
    role: "Programmer Analyst Trainee",
    location: "Chennai",
    period: "Nov 2020 - Jun 2021",
    achievements: [
      "Python data processing scripts for BNY Mellon to cleanse/transform datasets; refactored legacy SQL for performance",
    ],
    tech: ["Python", "SQL"],
  },
];

export const skills = {
  Languages: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "HTML5", "CSS3"],
  Frameworks: ["React", "Redux", "Node.js", "Express", "Jest", "Bootstrap", "Material UI"],
  Databases: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis"],
  "Cloud & Tools": ["AWS Lambda", "S3", "EC2", "SQS", "SNS", "API Gateway", "Docker", "Git"],
};

export const projects = [
  {
    id: 1,
    title: "Pocket Library",
    description: "Open-source eBook platform with authentication, RBAC, and CMS capabilities",
    tech: ["React", "Node.js", "MongoDB"],
    category: ["React", "Node.js"],
  },
  {
    id: 2,
    title: "Ad-free YouTube Viewer",
    description: "Clean YouTube viewing experience without advertisements",
    tech: ["React", "Node.js"],
    category: ["React", "Node.js"],
  },
  {
    id: 3,
    title: "MovieList App",
    description: "IMDB-style movie database with search and filtering",
    tech: ["React", "Bootstrap"],
    category: ["React"],
  },
  {
    id: 4,
    title: "Two-factor Authentication App",
    description: "Secure authentication system with JWT and OTP verification",
    tech: ["JWT", "OTP", "Node.js"],
    category: ["Node.js"],
  },
  {
    id: 5,
    title: "Expense Splitter",
    description: "Split expenses among groups with automatic calculations",
    tech: ["Express", "MongoDB"],
    category: ["Node.js"],
  },
  {
    id: 6,
    title: "Grameena Health Care Portal",
    description: "Rural healthcare portal with scheme info, doctor availability, video attendance, stock tracking",
    tech: ["React", "Node.js", "MongoDB"],
    category: ["React", "Node.js"],
  },
];

export const awards = [
  "6× Star of the Sprint",
  "1× Impactful Award",
  "Best In Class Award (2025 & 2026)",
];

export const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Rajeev Gandhi Memorial College of Engineering and Technology (Autonomous)",
    year: "2020",
    gpa: "8.0 GPA",
    subjects: ["Computer Networks", "Data Structures and Algorithms", "Operating Systems", "Android Programming", "Software Engineering", "DBMS"],
    leadership: [
      "Member of Technical Committee, RGMCET (2019-2020)",
      "Member of Environment Awareness Team - NSS",
      "Technical Coordinator - International Conference 2019-2020, RGMCET",
    ],
  },
  {
    degree: "Intermediate MPC",
    institution: "Smt. Theressa Junior College",
    year: "2016",
    gpa: "9.5 GPA",
    subjects: ["Mathematics", "Physics", "Chemistry"],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "De Paul High School",
    year: "Class I-X",
    gpa: "9.3 GPA",
  },
];
