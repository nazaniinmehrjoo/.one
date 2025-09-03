import { useEffect, useRef, useState } from "react";
import CompanyGroup from "../../companies/CompanyGroup";
import { companiesData } from "../../../data/companies";
import Tower from "../../../assets/company/Tower.png";

export default function CompaniesSection() {
  const scrollRef = useRef(null);
  const trackRef = useRef(null);
  const thumbRef = useRef(null);

  const [thumbStyle, setThumbStyle] = useState({ height: 63, top: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ y: 0, top: 0 });

  const FIXED_THUMB = 80;

  const updateThumb = () => {
    const sc = scrollRef.current;
    const track = trackRef.current;
    if (!sc || !track) return;

    const { scrollTop, scrollHeight, clientHeight } = sc;
    const trackHeight = track.clientHeight;

    const thumbH = Math.min(FIXED_THUMB, trackHeight);
    const maxScroll = Math.max(0, scrollHeight - clientHeight);
    const maxTop = Math.max(0, trackHeight - thumbH);
    const top = maxScroll > 0 ? (scrollTop / maxScroll) * maxTop : 0;

    setThumbStyle({ height: thumbH, top });
  };

  useEffect(() => {
    updateThumb();
    const sc = scrollRef.current;
    if (!sc) return;

    const onResize = () => updateThumb();
    const onScroll = () => updateThumb();

    sc.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      sc.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const onMove = (clientY) => {
      const sc = scrollRef.current;
      const track = trackRef.current;
      if (!sc || !track) return;

      const trackRect = track.getBoundingClientRect();
      const trackHeight = trackRect.height;
      const thumbH = Math.min(FIXED_THUMB, trackHeight);
      const maxTop = Math.max(0, trackHeight - thumbH);
      const delta = clientY - dragStart.y;
      const newTop = Math.min(Math.max(0, dragStart.top + delta), maxTop);

      const { scrollHeight, clientHeight } = sc;
      const maxScroll = Math.max(0, scrollHeight - clientHeight);
      const ratio = maxTop > 0 ? newTop / maxTop : 0;

      sc.scrollTop = ratio * maxScroll;
    };

    const handleMouseMove = (e) => {
      if (!dragging) return;
      e.preventDefault();
      onMove(e.clientY);
    };
    const handleMouseUp = () => setDragging(false);

    const handleTouchMove = (e) => {
      if (!dragging) return;
      const t = e.touches[0];
      if (!t) return;
      e.preventDefault();
      onMove(t.clientY);
    };
    const handleTouchEnd = () => setDragging(false);

    document.addEventListener("mousemove", handleMouseMove, { passive: false });
    document.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [dragging, dragStart]);

  const startDragMouse = (e) => {
    e.preventDefault();
    setDragging(true);
    setDragStart({ y: e.clientY, top: thumbStyle.top });
  };

  const startDragTouch = (e) => {
    const t = e.touches[0];
    if (!t) return;
    e.preventDefault();
    setDragging(true);
    setDragStart({ y: t.clientY, top: thumbStyle.top });
  };

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
              tabIndex={-1}
              className="h-full overflow-y-hidden pr-3"
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
                ref={thumbRef}
                className={`
                  absolute left-0 right-0 mx-auto w-3 rounded-full bg-[#333]
                  pointer-events-auto select-none
                `}
                style={{ height: thumbStyle.height, top: thumbStyle.top }}
                onMouseDown={startDragMouse}
                onTouchStart={startDragTouch}
                role="slider"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={0}
                aria-label="اسکرول محتوا"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
