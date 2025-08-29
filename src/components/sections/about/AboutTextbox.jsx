import Polygon1 from "@/assets/about/Polygon3.png";
import Polygon2 from "@/assets/about/Polygon4.png";

export default function AboutTextbox() {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="250"
      dir="rtl"
      className="
        container relative isolate mt-12 overflow-hidden rounded-2xl bg-gray-100 shadow-sm
        px-4 sm:px-6 md:px-10 py-8 sm:py-10
        min-h-[160px] sm:min-h-[180px] md:min-h-[140px]
      "
    >
      <div
        aria-hidden
        className="
          pointer-events-none select-none
          absolute bottom-0 left-0
          flex items-end gap-2 sm:gap-3 md:gap-4
          pl-3 sm:pl-6 md:pl-8
          z-0
        "
      >
        <img
          src={Polygon2}
          alt=""
          className="
            w-10 xs:w-14 sm:w-20 md:w-28 lg:w-32
            filter contrast-150 brightness-90 mix-blend-multiply
          "
        />
        <img
          src={Polygon1}
          alt=""
          className="
            w-16 xs:w-20 sm:w-28 md:w-36 lg:w-44
            filter contrast-150 brightness-90 mix-blend-multiply
          "
        />

      </div>

      <div
        aria-hidden
        className="
          pointer-events-none select-none
          absolute bottom-0 right-0
          flex items-end gap-2 sm:gap-3 md:gap-4
          pr-3 sm:pr-6 md:pr-8
          z-0
        "
      >
        <img
          src={Polygon1}
          alt=""
          className="
            w-16 xs:w-20 sm:w-28 md:w-36 lg:w-44
            filter contrast-150 brightness-90 mix-blend-multiply
          "
        />
        <img
          src={Polygon2}
          alt=""
          className="
            w-10 xs:w-14 sm:w-20 md:w-28 lg:w-32
            filter contrast-150 brightness-90 mix-blend-multiply
          "
        />

      </div>

      <p className="relative z-10 mx-auto max-w-5xl text-center text-gray-900 md:text-[14px] leading-8 font-medium">
        ارزندگی، قطب نمای ما در ‌وان است و هر فعالیتی به سمت ارزش‌آفرینی و افزودن ارزشی به جهان امروز ؛ چرا که باور داریم:
        <br className="hidden md:block" />
        «فردا، فرزند امروز است.»
      </p>
    </div>
  );
}
