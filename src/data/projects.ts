export interface TechGroup {
  label: string;
  items: string[];
}

export interface WarxProject {
  slug: string;
  index: string;
  name: string;
  type: string;
  year: string;
  role: string;
  color: string;
  problem: string;
  solution: string;
  overview: string;
  features: string[];
  impact: string[];
  tags: string[];
  techGroups: TechGroup[];
}

export const warxProjects: WarxProject[] = [
  {
    slug: "drillu",
    index: "01",
    name: "DrillU",
    type: "EdTech Platform",
    year: "2024",
    role: "Backend Developer (Sole)",
    color: "#2563EB",
    problem:
      "Institutions had no single platform to manage courses, assessments, and run proctored coding tests online.",
    solution:
      "Unified EdTech platform — institution registration, course creation, student enrollment, live in-browser proctored coding tests via OneCompiler API, and role-based access: Admin, Institution, Instructor, Student.",
    overview:
      "DrillU is a full-featured EdTech platform built to connect educational institutions, instructors, and students in one unified system. As the sole backend developer, I architected and built the complete backend from scratch using CodeIgniter 3 and MySQL, integrating multiple third-party services for proctored assessments and secure authentication.",
    features: [
      "Live in-browser proctored coding tests with real-time execution via OneCompiler API",
      "Role-based access control: Admin, Institution, Instructor, Student",
      "Institution registration, verification, and admin approval workflow",
      "Course creation, module structuring, and student enrollment system",
      "Cloudinary-powered media uploads for course materials and resources",
      "Google OAuth single sign-on for frictionless login",
      "Assessment builder with automated scoring and result tracking",
    ],
    impact: [
      "Enabled institutions to run proctored coding tests at scale without additional infrastructure",
      "Reduced institution onboarding time with automated multi-step approval workflow",
      "Supported complex multi-role hierarchies within a single platform",
    ],
    tags: ["PHP", "CI3", "MySQL", "OneCompiler API", "Cloudinary", "Google OAuth", "RBAC"],
    techGroups: [
      { label: "Backend", items: ["PHP", "CodeIgniter 3"] },
      { label: "Database", items: ["MySQL"] },
      { label: "Auth", items: ["Google OAuth", "RBAC"] },
      { label: "APIs", items: ["OneCompiler API"] },
      { label: "Storage", items: ["Cloudinary"] },
    ],
  },
  {
    slug: "lifeboat",
    index: "02",
    name: "LifeBoat",
    type: "Scholarship Management SaaS",
    year: "2024",
    role: "Backend Developer (Sole)",
    color: "#7C3AED",
    problem:
      "Scholarship management was entirely manual — paper applications, spreadsheet tracking, offline payments and no way to connect students, institutions, and donors efficiently.",
    solution:
      "Centralised platform connecting students, institutions, donors, and admins for the full scholarship lifecycle — application to disbursement — with automated communications, MFA, and multi-OAuth.",
    overview:
      "LifeBoat is a SaaS platform that digitises the entire scholarship lifecycle. Students apply, institutions verify eligibility, donors fund scholarships, and admins oversee disbursement — all in one system. Built as the sole backend developer using CI3, with Firebase OTP and multi-OAuth for secure access and ZeptoMail for automated communications.",
    features: [
      "End-to-end scholarship lifecycle: application, verification, approval, disbursement",
      "Multi-factor authentication using Firebase OTP for critical actions",
      "Google OAuth and Zoho OAuth integration for institutional logins",
      "Role-based portal: Student, Institution, Donor, Admin",
      "Automated transactional email communications via ZeptoMail",
      "Application status tracking with real-time notifications",
      "Donor dashboard with funding allocation and scholarship sponsorship controls",
    ],
    impact: [
      "Eliminated manual paper-based scholarship processes end to end",
      "Enabled real-time status tracking for all stakeholders simultaneously",
      "Reduced communication overhead with automated email triggers",
    ],
    tags: ["PHP", "CI3", "MySQL", "Firebase OTP", "Zoho OAuth", "Google OAuth", "MFA", "ZeptoMail"],
    techGroups: [
      { label: "Backend", items: ["PHP", "CodeIgniter 3"] },
      { label: "Database", items: ["MySQL"] },
      { label: "Auth", items: ["Firebase OTP", "Google OAuth", "Zoho OAuth", "MFA"] },
      { label: "Email", items: ["ZeptoMail"] },
    ],
  },
  {
    slug: "swastik-erp",
    index: "03",
    name: "Swastik ERP",
    type: "Enterprise ERP & GST Compliance",
    year: "2024",
    role: "Backend Developer (Sole)",
    color: "#0891B2",
    problem:
      "Auditors relied on spreadsheets for GST invoicing and manual attendance — error-prone, slow, and non-compliant with government e-invoicing regulations.",
    solution:
      "Full enterprise ERP with GST e-Invoice and e-Way Bill generation via Taxpro API, biometric attendance sync from hardware, Firebase real-time notifications, and chunked large-report exports.",
    overview:
      "Swastik ERP is a comprehensive enterprise resource planning system built for Swastik Industries. It handles GST compliance (e-Invoice and e-Way Bill generation via government-registered IRP APIs), employee attendance sync from biometric devices, real-time Firebase notifications for business events, and performance-optimised exports for large data sets.",
    features: [
      "GST e-Invoice generation via Taxpro API (government-registered IRP)",
      "e-Way Bill creation, management, and cancellation",
      "Biometric attendance device sync from Etimeoffice hardware in real time",
      "Firebase real-time database notifications for critical business events",
      "Chunked streaming export for large reports (10,000+ row Excel files)",
      "AJAX-powered dynamic UI for fast interaction without page reloads",
      "Multi-branch support with consolidated reporting",
    ],
    impact: [
      "Achieved full GST e-invoicing compliance under the government IRP mandate",
      "Eliminated manual attendance data entry via automated biometric device sync",
      "Cut report generation time from hours to minutes via chunked streaming",
    ],
    tags: ["PHP", "CI3", "MySQL", "Taxpro API", "Etimeoffice", "Firebase RT", "AJAX"],
    techGroups: [
      { label: "Backend", items: ["PHP", "CodeIgniter 3"] },
      { label: "Database", items: ["MySQL"] },
      { label: "Compliance APIs", items: ["Taxpro API (GST e-Invoice / e-Way Bill)"] },
      { label: "Hardware", items: ["Etimeoffice Biometric Sync"] },
      { label: "Real-time", items: ["Firebase Real-time DB"] },
      { label: "Frontend", items: ["AJAX", "jQuery"] },
    ],
  },
  {
    slug: "swastik-ecommerce",
    index: "04",
    name: "Swastik Ecommerce",
    type: "B2B Industrial Storefront",
    year: "2024",
    role: "Frontend Developer (React)",
    color: "#059669",
    problem:
      "Industrial buyers had no self-serve way to browse machines with their correct contractual pricing — every order started with a manual sales call.",
    solution:
      "React B2B ecommerce consuming Swastik ERP REST APIs. Buyers see their correct price tier (Dealer, Wholesale, MOP) and can generate formal Sales Quotations without contacting sales.",
    overview:
      "Swastik Ecommerce is a B2B React frontend that consumes the Swastik ERP REST API layer. It serves different classes of industrial buyers — Dealers, Wholesalers, and MOP buyers — each seeing their contractual price tier. Buyers can browse the machinery catalogue, filter by category and specification, and generate formal PDF Sales Quotations for procurement.",
    features: [
      "Multi-tier pricing display: Dealer, Wholesale, MOP based on authenticated buyer role",
      "Full industrial product catalogue with category and specification filtering",
      "Sales Quotation generation with GST-compliant PDF download",
      "Live integration with Swastik ERP REST APIs for inventory and pricing",
      "Role-based product visibility — catalogue filtered by buyer contract type",
      "Responsive design optimised for procurement teams on desktop and mobile",
    ],
    impact: [
      "Reduced sales call volume by enabling fully self-serve product browsing",
      "Streamlined procurement quotation from days of back-and-forth to minutes",
      "Extended Swastik ERP data to buyer-facing workflows without manual re-entry",
    ],
    tags: ["React", "ERP REST APIs", "MySQL", "B2B", "GST Pricing", "Multi-tier Pricing"],
    techGroups: [
      { label: "Frontend", items: ["React", "TypeScript"] },
      { label: "Integration", items: ["Swastik ERP REST API"] },
      { label: "Database", items: ["MySQL (via ERP API)"] },
    ],
  },
  {
    slug: "surge",
    index: "05",
    name: "Surge",
    type: "Instagram Automation Tool",
    year: "2024",
    role: "Full-Stack (React + CI3 Backend)",
    color: "#E11D48",
    problem:
      "Brands get hundreds of comments on posts but cannot reply at scale — every manual reply costs time and delayed responses lose engagement momentum.",
    solution:
      "Full-stack automation monitoring every comment via Meta Graph API webhooks, verifying follower status, and auto-sending both public reply and private DM in real time.",
    overview:
      "Surge is a real-time Instagram automation platform built for brands and creators. It connects to Instagram via Meta's Graph API, listens for webhook events on new comments, verifies follower status, and automatically sends targeted public replies and private DMs. Built full-stack: React dashboard frontend for campaign management and a CI3 webhook backend for real-time processing.",
    features: [
      "Meta Graph API and Instagram webhook integration for real-time comment detection",
      "Automated public reply triggered by comment keywords or post rules",
      "Automated private DM sent immediately after comment detection",
      "Follower verification before DM dispatch (avoids DM restrictions on non-followers)",
      "Campaign-based automation rules: keywords, post IDs, reply templates",
      "React dashboard for campaign creation, management, and performance analytics",
      "Webhook event logging and replay for debugging and audit trails",
    ],
    impact: [
      "Enabled brands to respond to 100% of comments automatically without manual effort",
      "Reduced community management time to near zero during campaign periods",
      "Improved post engagement rate by ensuring instant, consistent replies at scale",
    ],
    tags: ["React", "PHP", "CI3", "MySQL", "Meta Graph API", "Instagram Webhooks"],
    techGroups: [
      { label: "Frontend", items: ["React", "TypeScript"] },
      { label: "Backend", items: ["PHP", "CodeIgniter 3"] },
      { label: "Database", items: ["MySQL"] },
      { label: "APIs", items: ["Meta Graph API", "Instagram Webhooks"] },
    ],
  },
];
