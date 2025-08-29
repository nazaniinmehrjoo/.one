import CompanyCard from "./CompanyCard";
import SectionHeader from "../ui/SectionHeader";

export default function CompanyGroup({ title, items = [] }) {
  return (
    <section dir="rtl" className="relative">
      <button
        type="button"
        aria-label="More"
        className="absolute left-2 top-[43px] z-10 opacity-70 hover:opacity-100 transition"
      >
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.000512895 14.7604L25.2637 0L12.994 14.9443L24.8775 30L0.000512895 14.7604Z" fill="black" />
        </svg>
      </button>

      <SectionHeader
        eyebrow="ONE GROUP"
        caption="معرفی شرکت‌ها"
        title={title}
        diamondAt="left"
        lineWidthClass="w-40"
        className="mb-6 mt-3"
        animated={false}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((it, idx) => (
          <CompanyCard key={it.id || idx} logo={it.logo} excerpt={it.excerpt} />
        ))}
      </div>
    </section>
  );
}
