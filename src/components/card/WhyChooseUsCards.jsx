// import React from "react";

// import isoIcons from "../../assets/iso-certifications-icon.svg";
// import hl7Logo from "../../assets/hl7-logo.svg";
// import databricksLogo from "../../assets/databricks-partner-logo.svg";

// import hipaaLogo from "../../assets/hipaa-logo.svg";
// import gmpLogo from "../../assets/gmp-logo.svg";
// import fdaLogo from "../../assets/fda-logo.svg";
// import gdprLogo from "../../assets/gdpr-logo.svg";
// import pciLogo from "../../assets/pci-logo.svg";

// import microsoftLogo from "../../assets/ms-gold-logo.svg";
// import nhsLogo from "../../assets/nhs-logo-p.svg";
// import progressBadge from "../../assets/progress-partner-badge-mobile.svg";
// import progressCertified from "../../assets/kendo-ui-certification.svg";
// import topDeveloper from "../../assets/top-software-developers.svg";

// import stragicPartnerbackground from "../../assets/strategic-partnerships-mask.svg";

// export default function WhyChooseUsCards() {
//   return (
//     <section className="bg-[#eef6f6] py-14">
//       <div className="mx-auto max-w-6xl px-4">
//         <div className="grid gap-8 md:grid-cols-3">
//           <DeepHealthcareCard />
//           <CompliantArchitectureCard />
//           <StrategicPartnershipsCard />
//         </div>
//       </div>
//     </section>
//   );
// }

// function DeepHealthcareCard() {
//   return (
//     <div className="rounded-3xl bg-[#eef2f1] p-10 shadow-sm">
//       <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
//         Deep Healthcare Expertise
//       </h3>

//       <p className="mt-6 text-[15px] leading-7 text-gray-700">
//         We seamlessly integrate to accelerate your teams, delivering{" "}
//         <span className="font-semibold text-gray-900">
//           world-class solutions on time and within budget.
//         </span>
//       </p>

//       <div className="mt-8">
//         <img
//           src={isoIcons}
//           alt="ISO certifications"
//           className="h-12 w-auto select-none"
//           draggable={false}
//         />
//       </div>

//       <div className="mt-10 flex items-center gap-6">
//         <div className="rounded-2xl bg-white p-4 shadow-sm">
//           <img src={hl7Logo} alt="HL7" className="h-10 w-auto" />
//         </div>

//         <div className="rounded-2xl bg-white p-4 shadow-sm">
//           <img
//             src={databricksLogo}
//             alt="Databricks Partner"
//             className="h-10 w-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// function CompliantArchitectureCard() {
//   return (
//     <div className="rounded-3xl bg-[#f2e7e2] p-10 shadow-sm">
//       <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
//         Compliant Architecture
//       </h3>

//       <p className="mt-6 text-[15px] leading-7 text-gray-700">
//         We develop solutions that are{" "}
//         <span className="font-semibold text-gray-900">
//           fully secure and compliant
//         </span>{" "}
//         with the globally established healthcare standards and requirements.
//       </p>

//       <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-7">
//         <img className="h-14 w-auto" src={hipaaLogo} alt="HIPAA" />
//         <img className="h-14 w-auto" src={gmpLogo} alt="GMP" />
//         <img className="h-14 w-auto" src={fdaLogo} alt="FDA" />
//         <img className="h-14 w-auto" src={gdprLogo} alt="GDPR" />
//         <img className="h-14 w-auto" src={pciLogo} alt="PCI" />
//       </div>
//     </div>
//   );
// }

// function StrategicPartnershipsCard() {
//   return (
//     <div className="relative overflow-hidden rounded-3xl border border-[#ff5a52] bg-white p-10 shadow-sm">
//       {/* ✅ Use your SVG as the background mask */}
//       <img
//         src={stragicPartnerbackground}
//         alt=""
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 h-full w-full object-cover"
//       />
//       {/* optional soft fade so text stays readable */}
//       <div className="pointer-events-none absolute inset-0 bg-white/35" />

//       <div className="relative">
//         <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
//           Strategic Partnerships
//         </h3>

//         <p className="mt-6 text-[15px] leading-7 text-gray-700">
//           Our partnership with leading organizations, ensures{" "}
//           <span className="font-semibold text-gray-900">
//             reliable, compliant, &amp; forward-thinking solutions
//           </span>{" "}
//           for enterprise needs.
//         </p>

//         {/* ✅ Real partner images */}
//         <div className="mt-10 grid grid-cols-2 gap-5">
//           <PartnerLogo src={microsoftLogo} alt="Microsoft Gold Partner" />
//           <PartnerLogo src={nhsLogo} alt="NHS Health Research Authority" />
//           <PartnerLogo src={progressBadge} alt="Progress Partner Badge" />
//           <PartnerLogo src={progressCertified} alt="Kendo UI Certified" />
//           <PartnerLogo
//             src={topDeveloper}
//             alt="Top Software Developers"
//             className="col-span-2"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// function PartnerLogo({ src, alt, className = "" }) {
//   return (
//     <div
//       className={[
//         "flex h-20 items-center justify-center rounded-2xl bg-white/85 shadow-sm ring-1 ring-gray-200",
//         className,
//       ].join(" ")}
//     >
//       <img
//         src={src}
//         alt={alt}
//         className="max-h-12 w-auto max-w-[85%] object-contain"
//         draggable={false}
//       />
//     </div>
//   );
// }


import React from "react";

import isoIcons from "../../assets/iso-certifications-icon.svg";
import hl7Logo from "../../assets/hl7-logo.svg";
import databricksLogo from "../../assets/databricks-partner-logo.svg";

import hipaaLogo from "../../assets/hipaa-logo.svg";
import gmpLogo from "../../assets/gmp-logo.svg";
import fdaLogo from "../../assets/fda-logo.svg";
import gdprLogo from "../../assets/gdpr-logo.svg";
import pciLogo from "../../assets/pci-logo.svg";

import microsoftLogo from "../../assets/ms-gold-logo.svg";
import nhsLogo from "../../assets/nhs-logo-p.svg";
import progressBadge from "../../assets/progress-partner-badge-mobile.svg";
import progressCertified from "../../assets/kendo-ui-certification.svg";
import topDeveloper from "../../assets/top-software-developers.svg";

import stragicPartnerbackground from "../../assets/strategic-partnerships-mask.svg";

export default function WhyChooseUsCards() {
  return (
    <section className="bg-[#eef6f6] py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <DeepHealthcareCard />
          <CompliantArchitectureCard />
          <StrategicPartnershipsCard />
        </div>
      </div>
    </section>
  );
}

function DeepHealthcareCard() {
  return (
    <div className="rounded-3xl bg-[#eef2f1] p-10 shadow-sm">
      <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
        Deep Healthcare Expertise
      </h3>

      <p className="mt-6 text-[15px] leading-7 text-gray-700">
        We seamlessly integrate to accelerate your teams, delivering{" "}
        <span className="font-semibold text-gray-900">
          world-class solutions on time and within budget.
        </span>
      </p>

      <div className="mt-8">
        <img
          src={isoIcons}
          alt="ISO certifications"
          className="h-12 w-auto select-none"
          draggable={false}
        />
      </div>

      <div className="mt-10 flex items-center gap-6">
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <img src={hl7Logo} alt="HL7" className="h-10 w-auto" />
        </div>

        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <img
            src={databricksLogo}
            alt="Databricks Partner"
            className="h-10 w-auto"
          />
        </div>
      </div>
    </div>
  );
}

function CompliantArchitectureCard() {
  return (
    <div className="rounded-3xl bg-[#f2e7e2] p-10 shadow-sm">
      <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
        Compliant Architecture
      </h3>

      <p className="mt-6 text-[15px] leading-7 text-gray-700">
        We develop solutions that are{" "}
        <span className="font-semibold text-gray-900">
          fully secure and compliant
        </span>{" "}
        with the globally established healthcare standards and requirements.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-7">
        <img className="h-14 w-auto" src={hipaaLogo} alt="HIPAA" />
        <img className="h-14 w-auto" src={gmpLogo} alt="GMP" />
        <img className="h-14 w-auto" src={fdaLogo} alt="FDA" />
        <img className="h-14 w-auto" src={gdprLogo} alt="GDPR" />
        <img className="h-14 w-auto" src={pciLogo} alt="PCI" />
      </div>
    </div>
  );
}

function StrategicPartnershipsCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#ff5a52] bg-white p-10 shadow-sm">
      {/* background mask like screenshot */}
      <img
        src={stragicPartnerbackground}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-white/35" />

      <div className="relative">
        <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Strategic Partnerships
        </h3>

        <p className="mt-6 text-[15px] leading-7 text-gray-700">
          Our partnership with leading organizations, ensures{" "}
          <span className="font-semibold text-gray-900">
            reliable, compliant, &amp; forward-thinking solutions
          </span>{" "}
          for enterprise needs.
        </p>

        {/* logos arranged like screenshot: 2 on top, 3 on bottom */}
        <div className="mt-10 space-y-6">
          <div className="flex items-center justify-between gap-5">
            <PartnerLogo src={microsoftLogo} alt="Microsoft Gold Partner" />
            <PartnerLogo src={nhsLogo} alt="NHS Health Research Authority" />
          </div>

          <div className="flex items-center justify-between gap-4">
            <PartnerLogo
              src={progressBadge}
              alt="Progress Partner Badge"
              size="sm"
            />
            <PartnerLogo
              src={progressCertified}
              alt="Kendo UI Certified"
              size="sm"
            />
            <PartnerLogo
              src={topDeveloper}
              alt="Top Software Developers"
              size="sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PartnerLogo({ src, alt, size = "md" }) {
  const box =
    size === "sm"
      ? "h-16 w-full rounded-2xl"
      : "h-20 w-full rounded-2xl";

  const img =
    size === "sm" ? "max-h-9 max-w-[85%]" : "max-h-12 max-w-[85%]";

  return (
    <div
      className={[
        "flex flex-1 items-center justify-center bg-white/85 shadow-sm ring-1 ring-gray-200",
        box,
      ].join(" ")}
    >
      <img
        src={src}
        alt={alt}
        className={[img, "w-auto object-contain"].join(" ")}
        draggable={false}
      />
    </div>
  );
}
