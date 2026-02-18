import React, { useMemo, useState } from "react";

const CATEGORIES = [
  "Digital Therapeutics1",
  "Ethical Clinical Oversight",
  "Real-Time Monitoring & CPV",
  "Clinical Trial Management System",
  "Electronic Health/Medical Records",
  "Pharmaceutical Data Analytics & Production",
  "Trials Forecast Analytics",
  "Healthcare EdTech",
  "Medical Guidelines platform",
];

const CASE_STUDIES = [
  {
    id: "ampersand-healthsuite",
    category: "Digital Therapeutics",
    type: "Mobile App",
    title: "Self-management application solution for patients",
    company: "Ampersand Health",
    location: "UK",
    period: "May 2018 - Ongoing",
    tech: ["Swift", "Angular", "Kotlin", "+1"],
    href: "/case-studies", // replace with real route
    image: "/images/case-ampersand.jpg", // replace with your asset
  },
  {
    id: "harp-nhs",
    category: "Ethical Clinical Oversight",
    type: "Web APP",
    title: "HARP - Ethical review process system for NHS",
    company: "NHS UK",
    location: "United Kingdom",
    period: "Jul 2013 - Apr 2014",
    tech: ["Microsoft SQL Server", "ASP .Net Web API", "+2"],
    href: "/case-studies",
    image: "/images/case-harp.jpg",
  },
  {
    id: "drug-manufacturing-intel",
    category: "Real-Time Monitoring & CPV",
    type: "Web platform",
    title: "Drug Manufacturing Intelligence Solution",
    company: "Top 5 Pharmaceutical Company",
    location: "Switzerland",
    period: "3+ years",
    tech: ["MySQL", "Kendo UI", "Microsoft .NET", "+2"],
    href: "/case-studies",
    image: "/images/case-manufacturing.jpg",
  },
  {
    id: "clinicubes-ctms",
    category: "Clinical Trial Management System",
    type: "Web platform",
    title: "Clinical Trials Management System",
    company: "BGO Labs",
    location: "Bulgaria",
    period: "May 2018 - Ongoing",
    tech: ["Microsoft .NET", "Kendo UI", "AngularJS", "+2"],
    href: "/case-studies",
    image: "/images/case-ctms.jpg",
  },
  {
    id: "health-platform-modernization",
    category: "Electronic Health/Medical Records",
    type: "Web Platform",
    title: "Technology Leadership in the Modernization of a Healthcare Platform",
    company: "Curaden AG",
    location: "Switzerland",
    period: "2020 - Ongoing",
    tech: ["PHP", "NodeJS"],
    href: "/case-studies",
    image: "/images/case-modernization.jpg",
  },
  {
    id: "data-driven-pharma",
    category: "Pharmaceutical Data Analytics & Production",
    type: "Web platform",
    title: "Data-driven Pharma Manufacturing Solution",
    company: "Top 5 Pharmaceutical Company",
    location: "Switzerland",
    period: "In progress",
    tech: ["Microsoft .NET", "Angular", "Kendo UI", "+2"],
    href: "/case-studies",
    image: "/images/case-pharma.jpg",
  },
  {
    id: "trial-recruitment-forecasting",
    category: "Trials Forecast Analytics",
    type: "Web platform",
    title: "Digital Platform for Clinical Trial Recruitment Forecasting",
    company: "LabCorp Drug Development",
    location: "USA",
    period: "2021 - ongoing",
    tech: ["Microsoft .NET", "Angular", "Microsoft SQL Server"],
    href: "/case-studies",
    image: "/images/case-forecasting.jpg",
  },
  {
    id: "vr-med-learning",
    category: "Healthcare EdTech",
    type: "Web platform",
    title: "Revolutionizing Medical Learning: The Web App that Brings Virtual Reality to Students",
    company: "Medical Realities",
    location: "London, UK",
    period: "2022",
    tech: ["Microsoft .NET", "Microsoft Azure", "+2"],
    href: "/case-studies",
    image: "/images/case-vr.jpg",
  },
  {
    id: "medical-guidelines",
    category: "Medical Guidelines platform",
    type: "Web platform",
    title: "Digital platform for scientific medical guidelines",
    company: "Foundation MORE Darzalas",
    location: "Bulgaria",
    period: "2022 - Present",
    tech: ["NodeJS", "Docker"],
    href: "/case-studies",
    image: "/images/case-guidelines.jpg",
  },
];

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
      {children}
    </span>
  );
}

function MetaRow({ label, value }) {
  return (
    <div className="flex items-center gap-2 text-xs text-gray-600">
      <span className="h-1.5 w-1.5 rounded-full bg-gray-400" aria-hidden="true" />
      <span className="font-medium">{label}:</span>
      <span className="text-gray-700">{value}</span>
    </div>
  );
}

export default function FeaturedCaseStudies() {
  const [active, setActive] = useState("Digital Therapeutics");

  const filtered = useMemo(() => {
    return CASE_STUDIES.filter((c) => c.category === active);
  }, [active]);

  return (
    <section className="bg-white py-14 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Featured Case Studies
        </h2>

        {/* Pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={[
                  "rounded-full px-5 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-teal-500 text-white shadow-sm"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200",
                ].join(" ")}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(filtered.length ? filtered : CASE_STUDIES.slice(0, 6)).map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                {/* Replace with <img src={item.image} .../> when you have real assets */}
                <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">
                  image placeholder
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {item.type}
                </div>

                <h3 className="mt-2 line-clamp-2 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <div className="mt-4 space-y-2">
                  <MetaRow label="Company" value={item.company} />
                  <MetaRow label="Location" value={item.location} />
                  <MetaRow label="Period" value={item.period} />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((t, idx) => (
                    <Tag key={`${item.id}-${idx}`}>{t}</Tag>
                  ))}
                </div>

                <a
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-900"
                >
                  <span className="border-b border-transparent group-hover:border-gray-900 transition">
                    Explore Case Study
                  </span>
                  <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-3 rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            Explore Our Case Studies <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
