import { useEffect, useRef, useState } from "react";
import CompanyGroup from "../../companies/CompanyGroup";
import { companiesData } from "../../../data/companies";
import Tower from "../../../assets/company/Tower.png";

export default function CompaniesSection() {
  const scrollRef = useRef(null);
  const trackRef = useRef(null);
  const [thumbStyle, setThumbStyle] = useState({ height: 63, top: 0 });

  const FIXED_THUMB = 80;

  const updateThumb = () => {
    const sc = scrollRef.current;
    const track = trackRef.current;
    if (!sc || !track) return;

    const { scrollTop, scrollHeight, clientHeight } = sc;
    const trackHeight = track.clientHeight;

    const thumbH = Math.min(FIXED_THUMB, trackHeight);

    const maxScroll = scrollHeight - clientHeight;
    const maxTop = trackHeight - thumbH;
    const top = maxScroll > 0 ? (scrollTop / maxScroll) * maxTop : 0;

    setThumbStyle({ height: thumbH, top });
  };

  useEffect(() => {
    updateThumb();
    const sc = scrollRef.current;
    if (!sc) return;
    const onResize = () => updateThumb();
    sc.addEventListener("scroll", updateThumb, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      sc.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="companies" dir="rtl" className="relative py-12 md:py-10">
      <div className="container relative mx-auto">
        <div
          className="hidden xl:block absolute w-[300px] h-[976px] pointer-events-none select-none"
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-once="true"
        >
          <img
            src={Tower}
            alt="OneTower"
            className="absolute right-6 top-0 h-full w-auto object-contain"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:pr-[320px]">
          <div
            className="relative rounded-3xl bg-[#F5F5F5] px-4 sm:px-6 md:px-8 py-6 md:py-10 h-[976px]
                      shadow-[0_4px_6px_rgba(0,0,0,0.08)]"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <div
              ref={scrollRef}
              className="
              h-full overflow-y-auto pr-3
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
            >
              <div className="space-y-28 pb-6">
                {companiesData.map((group) => (
                  <CompanyGroup
                    key={group.id}
                    title={group.title}
                    items={group.items}
                    classNameRoot="no-aos"
                  />
                ))}
                <div className="h-6" />
              </div>
            </div>

            <div
              ref={trackRef}
              className="
              pointer-events-none absolute
              right-3 top-16 bottom-6
              w-3 rounded-full bg-white
              shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]
            "
            >
              <div
                className="absolute left-0 right-0 mx-auto w-3 rounded-full bg-[#333]"
                style={{ height: thumbStyle.height, top: thumbStyle.top }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
