/* =========================================================
   Careers Flow — shared config + job data
   Edit this file only to add/change vacancies.
   IMPORTANT: Only list vacancies you are authorized to
   represent. The three jobs below are SAMPLE DRAFTS.
   ========================================================= */

const SITE = {
  name: "Careers Flow",
  email: "careersflows@gmail.com",
  linkedin: "https://www.linkedin.com/company/careers-flow",
  uploadEndpoint: "https://script.google.com/macros/s/AKfycbxaD2kWYJ9yDW-Pv9atJH6f4mvqHnw-fHnQ-bS-MSQYtWZk8EEA8vubDN1G8gcWnEgJ2A/exec",
  tallyUrl: "https://tally.so/r/your-form-id",
  responseTime: "7 working days"
};

const JOBS = [
  {
    id: "production-supervisor-solid-dosage",
    title: "Production Supervisor (Solid Dosage)",
    company: "Confidential Pharmaceutical Partner",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    level: "Mid–Senior",
    experience: "5+ years",
    industry: "Pharmaceutical",
    salary: "Negotiable",
    posted: "2026-10-09",
    deadline: "2026-10-31",
    summary: "Lead a shift team running tablet compression and coating lines in a cGMP-regulated facility, owning output, quality and compliance.",
    responsibilities: [
      "Supervise day-to-day operation of compression, coating and packing lines",
      "Ensure batch records are completed accurately and on time",
      "Drive OEE improvement and reduce changeover time",
      "Coach operators and keep training records current",
      "Support deviation, CAPA and audit readiness activities"
    ],
    requirements: [
      "Bachelor's or diploma in Pharmacy, Chemical or Mechanical Engineering",
      "5+ years in solid dosage manufacturing",
      "Working knowledge of cGMP and documentation practices",
      "Hands-on experience with tablet coating or compression equipment",
      "Able to lead a shift team of 10+ people"
    ],
    niceToHave: [
      "Experience with IMA, Glatt or similar equipment",
      "Exposure to FDA / MHRA audits",
      "Lean or Six Sigma training"
    ],
    benefits: [
      "Competitive salary, negotiable on experience",
      "Festival bonus and performance bonus",
      "Provident fund and medical coverage",
      "Structured career path in a growing manufacturer"
    ],
    process: [
      "Submit your profile (about 3 minutes)",
      "Initial screening against employer criteria",
      "Shortlisted profiles are forwarded to the employer's HR panel",
      "The employer contacts you directly for interviews"
    ]
  },
  {
    id: "qa-officer-pharma",
    title: "QA Officer (In-Process Quality)",
    company: "Confidential Pharmaceutical Partner",
    location: "Gazipur, Bangladesh",
    type: "Full-time",
    level: "Junior–Mid",
    experience: "2–4 years",
    industry: "Pharmaceutical",
    salary: "Negotiable",
    posted: "2026-10-09",
    deadline: "2026-10-28",
    summary: "Monitor in-process quality on the shop floor, review batch documentation and support a strong quality culture.",
    responsibilities: [
      "Perform line clearance and in-process checks",
      "Review batch manufacturing records",
      "Report and follow up on deviations",
      "Support validation and calibration activities"
    ],
    requirements: [
      "B.Pharm / M.Pharm or relevant science degree",
      "2+ years in pharmaceutical QA",
      "Good understanding of cGMP and data integrity",
      "Clear written and spoken English"
    ],
    niceToHave: ["Experience with internal audits", "Basic knowledge of QMS software"],
    benefits: ["Competitive salary", "Transport facility", "Annual bonus", "Training opportunities"],
    process: [
      "Submit your profile",
      "Initial screening against employer criteria",
      "Shortlisted profiles forwarded to the employer",
      "The employer contacts you directly"
    ]
  },
  {
    id: "maintenance-engineer-utilities",
    title: "Maintenance Engineer (Utilities & HVAC)",
    company: "Confidential Manufacturing Partner",
    location: "Narayanganj, Bangladesh",
    type: "Full-time",
    level: "Mid",
    experience: "4+ years",
    industry: "Manufacturing",
    salary: "Negotiable",
    posted: "2026-10-09",
    deadline: "2026-11-05",
    summary: "Keep critical utilities and HVAC systems running reliably through preventive maintenance and fast, documented breakdown response.",
    responsibilities: [
      "Plan and execute preventive maintenance schedules",
      "Troubleshoot HVAC, compressors, chillers and boilers",
      "Maintain equipment history and spare parts records",
      "Coordinate with vendors and production teams"
    ],
    requirements: [
      "B.Sc. in Mechanical or Electrical Engineering",
      "4+ years in utilities or HVAC maintenance",
      "Understanding of preventive maintenance systems",
      "Willing to work in shifts when required"
    ],
    niceToHave: ["Experience in a regulated industry", "CMMS experience"],
    benefits: ["Competitive salary", "Overtime pay", "Medical coverage", "Festival bonus"],
    process: [
      "Submit your profile",
      "Initial screening against employer criteria",
      "Shortlisted profiles forwarded to the employer",
      "The employer contacts you directly"
    ]
  }
];

/* Small helpers shared by pages */
function getParam(k) { return new URLSearchParams(location.search).get(k); }
function findJob(id) { return JOBS.find(j => j.id === id); }
function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}
function fmtDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}
function daysLeft(iso) {
  return Math.ceil((new Date(iso + "T23:59:59") - new Date()) / 86400000);
}
