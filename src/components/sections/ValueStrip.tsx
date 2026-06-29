"use client";

const COUNTRIES = [
  "Nigeria", "China", "Ghana", "Kenya", "South Africa", "Egypt",
  "Ethiopia", "Tanzania", "Senegal", "Côte d'Ivoire", "Cameroon",
  "Angola", "Mozambique", "Uganda", "Rwanda", "Zimbabwe", "Morocco",
  "Algeria", "Tunisia", "Benin", "Togo", "Mali", "Guinea", "DR Congo",
  "Zambia", "Botswana", "Namibia", "Sierra Leone", "Guangzhou",
  "Shanghai", "Beijing", "Shenzhen", "Chengdu", "Wuhan", "Xi'an",
  "Hangzhou", "Nanjing", "Tianjin", "Liberia", "Niger", "Chad",
  "Sudan", "Gabon", "Congo", "Burundi", "Somalia", "Malawi",
];

// Duplicate for seamless infinite loop
const ROW_A = [...COUNTRIES, ...COUNTRIES];
const ROW_B = [...COUNTRIES].reverse().concat([...COUNTRIES].reverse());

export default function ValueStrip() {
  return (
    <div
      className="relative overflow-hidden py-5 select-none"
      style={{ background: "#050806", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      aria-label="Participating countries"
    >
      {/* Left + right fade edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32"
        style={{ background: "linear-gradient(to right, #050806 0%, transparent 100%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32"
        style={{ background: "linear-gradient(to left, #050806 0%, transparent 100%)" }}
        aria-hidden="true"
      />

      {/* Row A, scrolls left */}
      <div className="flex gap-0 whitespace-nowrap marquee-left mb-3">
        {ROW_A.map((country, i) => (
          <span key={i} className="inline-flex shrink-0 items-center gap-3 px-4">
            <span
              className="h-1 w-1 shrink-0 rounded-full"
              style={{ background: "#2FD07A" }}
              aria-hidden="true"
            />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#9DA89F]">
              {country}
            </span>
          </span>
        ))}
      </div>

      {/* Row B, scrolls right */}
      <div className="flex gap-0 whitespace-nowrap marquee-right">
        {ROW_B.map((country, i) => (
          <span key={i} className="inline-flex shrink-0 items-center gap-3 px-4">
            <span
              className="h-1 w-1 shrink-0 rounded-full"
              style={{ background: "#D2A74F" }}
              aria-hidden="true"
            />
            <span className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#9DA89F]">
              {country}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
