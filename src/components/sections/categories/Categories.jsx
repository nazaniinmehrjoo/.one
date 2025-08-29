import Pill from "../../ui/Pill";
import Lines from "../../../assets/categories/Vector.png";
import SectionHeader from "../../ui/SectionHeader";

const itemsRow1 = ["ترابری", "ترابری", "رسانه", "مالی اعتباری", "ترابری"];
const itemsRow2 = ["ترابری", "ترابری", "رسانه", "مالی اعتباری", "ترابری"];

export default function Categories() {
  return (
    <section
      className="relative isolate overflow-hidden px-4 md:px-6 lg:px-8 py-16"
    >
      <img
        src={Lines}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-0 top-0 -z-10 h-full w-auto max-w-none opacity-15 md:opacity-20"
      />

      <div className="container">
        <SectionHeader
          eyebrow="ONE GROUP"
          caption="دسته‌بندی شرکت‌ها"
          title="جمله کوتاه یا یک تایتل"
          diamondSide="left"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {itemsRow1.map((label, i) => (
            <div
              key={i}
              className="flex justify-center"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <Pill label={label} />
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {itemsRow2.map((label, i) => (
            <div
              key={i}
              className="flex justify-center"
              data-aos="fade-up"
              data-aos-delay={i * 80 + 120}
            >
              <Pill label={label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
