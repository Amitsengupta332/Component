import React, { useState } from "react";

export default function FeaturedCaseStudies() {
  const categories = [
    "Digital Therapeutics",
    "Ethical Clinical Oversight",
    "Real-Time Monitoring & CPV",
    "Clinical Trial Management System",
    "Electronic Health/Medical Records",
    "Pharmaceutical Data Analytics & Production",
    "Trials Forecast Analytics",
    "Healthcare EdTech",
    "Medical Guidelines platform",
  ];

  const [active, setActive] = useState("Digital Therapeutics");

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Featured Case Studies
        </h2>

        {/* Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {categories.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(item)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  active === item
                    ? "bg-teal-500 text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
