import React from "react";

export default function DeepHealthcareCard() {
  return (
    <div className="bg-[#eef2f1] rounded-3xl p-10 shadow-sm hover:shadow-md transition duration-300">
      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
        Deep Healthcare Expertise
      </h3>

      {/* Description */}
      <p className="mt-6 text-gray-700 leading-relaxed text-base">
        We seamlessly integrate to accelerate your teams, delivering{" "}
        <span className="font-semibold text-black">
          world-class solutions on time and within budget.
        </span>
      </p>

      {/* Certifications Section */}
      <div className="mt-8 flex flex-wrap items-center gap-6">
        {/* ISO Badge */}
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm">
          <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-sm">
            ✓
          </div>
          <span className="text-xs font-semibold text-gray-800">
            ISO 9001 Certified
          </span>
        </div>

        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm">
          <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-sm">
            ✓
          </div>
          <span className="text-xs font-semibold text-gray-800">
            ISO 13485 Certified
          </span>
        </div>

        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm">
          <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-sm">
            ✓
          </div>
          <span className="text-xs font-semibold text-gray-800">
            ISO 27001 Certified
          </span>
        </div>
      </div>

      {/* Bottom Partner Logos Placeholder */}
      <div className="mt-8 flex flex-wrap items-center gap-8">
        <div className="text-red-600 font-bold text-2xl">HL7</div>
        <div className="text-gray-700 font-semibold text-sm">
          Databricks Partner
        </div>
      </div>
    </div>
  );
}







