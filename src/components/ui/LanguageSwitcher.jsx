import { useEffect, useRef, useState } from "react";

const LANGS = [
  { code: "fa", native: "فارسی", abbr: "فا" },
  { code: "en", native: "English", abbr: "En" },
  { code: "ar", native: "Arabic", abbr: "Ar" },
  { code: "ru", native: "Russian", abbr: "Ru" },
  { code: "tr", native: "Turkish", abbr: "Tr" },
];

const WIDTH = 88; // px

const ITEM_DURATION = 220; // ms
const ITEM_STAGGER = 80;  // ms
const MENU_FADE = 140; // ms
const ITEM_HEIGHT = 40;  // px  
const LIST_PAD_Y = 16;  // px  
const DIVIDER_PX = 1;   // px

const MIN_OPACITY_OPEN = 0.35;
const CAP_OPACITY_OPEN = 0.90;

const OPEN_TOTAL_MS = (LANGS.length - 1) * ITEM_STAGGER + ITEM_DURATION + 80;

export default function LanguageSwitcher({ value = "fa", onChange }) {
  const [selected, setSelected] = useState(() =>
    LANGS.some(l => l.code === value) ? value : LANGS[0].code
  );

  useEffect(() => {
    if (value && LANGS.some(l => l.code === value)) {
      setSelected(value);
    }
  }, [value]);

  const [phase, setPhase] = useState("closed");
  const [visibleCount, setVisibleCount] = useState(0);
  const ref = useRef(null);
  const rafRef = useRef(0);
  const stepTimer = useRef(0);
  const finishTimer = useRef(0);
  const closingStartCount = useRef(LANGS.length);

  const current = LANGS.find(l => l.code === selected) ?? LANGS[0];

  const looksUnified = phase === "pre-opening" || phase === "opening" || phase === "open" || phase === "closing";
  const isMounted = phase !== "closed";

  const closeProgress =
    phase === "closing"
      ? (closingStartCount.current - Math.max(visibleCount, 0)) / Math.max(closingStartCount.current, 1)
      : 0;

  const openProgress =
    phase === "opening"
      ? Math.min(visibleCount / LANGS.length, 1)
      : phase === "open"
        ? 1
        : 0;

  useEffect(() => {
    const onDoc = (e) => { if (!ref.current?.contains(e.target)) startClose(); };
    const onKey = (e) => { if (e.key === "Escape") startClose(); };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
      cancelAnimationFrame(rafRef.current);
      clearTimeout(stepTimer.current);
      clearTimeout(finishTimer.current);
    };
  }, []);

  const startOpen = () => {
    clearTimeout(stepTimer.current);
    clearTimeout(finishTimer.current);
    cancelAnimationFrame(rafRef.current);
    setVisibleCount(0);
    setPhase("pre-opening");

    rafRef.current = requestAnimationFrame(() => {
      setPhase("opening");
      const tick = (count) => {
        setVisibleCount(count);
        if (count < LANGS.length) {
          stepTimer.current = setTimeout(() => tick(count + 1), ITEM_STAGGER);
        } else {
          finishTimer.current = setTimeout(() => setPhase("open"), MENU_FADE);
        }
      };
      tick(1);
    });
  };

  const startClose = () => {
    if (phase === "closing" || phase === "closed") return;
    clearTimeout(stepTimer.current);
    clearTimeout(finishTimer.current);
    cancelAnimationFrame(rafRef.current);

    closingStartCount.current = Math.max(visibleCount, 1);
    setPhase("closing");

    const tick = (count) => {
      setVisibleCount(count);
      if (count > 0) {
        stepTimer.current = setTimeout(() => tick(count - 1), ITEM_STAGGER);
      } else {
        finishTimer.current = setTimeout(() => setPhase("closed"), 10);
      }
    };
    tick(Math.min(visibleCount || LANGS.length, LANGS.length));
  };

  const handlePick = (code) => {
    setSelected(code);
    onChange?.(code);
    startClose();
  };

  const menuHeight =
    LIST_PAD_Y + (visibleCount > 0 ? DIVIDER_PX : 0) + visibleCount * ITEM_HEIGHT;

  return (
    <div ref={ref} className="relative inline-block">
      <button dir="rtl"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={looksUnified}
        onClick={() => (looksUnified ? startClose() : startOpen())}
        className={`
          relative
          inline-flex items-center justify-between gap-2
          px-5 h-[35px]
          transition text-base focus:outline-none focus:ring-none
          rounded-t-[12px]
          rounded-b-[var(--rb)]
          ${looksUnified
            ? "bg-white shadow-none"
            : "bg-white/90 shadow-sm hover:bg-[#777] hover:text-white"}
        `}
        style={{
          width: WIDTH,
          '--rb': looksUnified
            ? (phase === 'closing'
              ? `${0.75 * closeProgress}rem`
              : '0rem')
            : '12px',
          transitionProperty: 'border-radius, background-color, color, box-shadow, transform',
          transitionDuration: `${ITEM_STAGGER + 120}ms`,
          transitionTimingFunction: 'ease-out',
        }}
      >
        <span>{current.abbr}</span>
        <svg
          viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"
          className={`transition-transform duration-200 ease-out ${looksUnified ? "rotate-180" : "rotate-0"}`}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>

        <span
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 -bottom-px h-px bg-gray-200"
          style={{
            opacity: phase === "closing" ? closeProgress : 0,
            transition: `opacity ${ITEM_STAGGER + 120}ms linear`,
          }}
        />
      </button>

      {isMounted && (
        <div
          role="listbox"
          aria-label="انتخاب زبان"
          className={`
            absolute left-0 top-full -mt-px
            rounded-b-[12px]
            bg-white shadow-lg z-50 overflow-hidden origin-top
            will-change-[opacity,height]
            transition-[opacity,height] ease-out
            ${phase === "pre-opening" ? "opacity-0 pointer-events-none" : "opacity-100"}
            ${phase === "closing" ? "pointer-events-none" : "pointer-events-auto"}
          `}
          style={{
            width: WIDTH,
            transitionDuration: `${phase === "opening" ? OPEN_TOTAL_MS : MENU_FADE
              }ms, ${ITEM_DURATION}ms`,
            height: `${menuHeight}px`,
            opacity:
              phase === "opening"
                ? MIN_OPACITY_OPEN + (CAP_OPACITY_OPEN - MIN_OPACITY_OPEN) * openProgress
                : phase === "open"
                  ? 1
                  : phase === "closing"
                    ? 0.55 + 0.45 * (1 - closeProgress)
                    : undefined,
          }}
        >
          <div className="h-0.5 bg-gray-200 ml-2 mr-2" />

          <ul className="py-2 text-base" dir="rtl">
            {LANGS.map((l, i) => {
              const active = l.code === current.code;
              const shouldShow = i < visibleCount;
              const idxOpen = i;
              const idxClose = LANGS.length - 1 - i;
              const delay = (phase === "opening" || phase === "open" ? idxOpen : idxClose) * ITEM_STAGGER;

              return (
                <li key={l.code}>
                  <button
                    role="option"
                    aria-selected={active}
                    onClick={() => handlePick(l.code)}
                    className={`
                      w-full h-10 px-2 grid grid-cols-2 items-center
                      hover:bg-gray-100 active:bg-transparent 
                      transition-all ease-[cubic-bezier(.22,1,.36,1)] gap-10
                      will-change-[opacity,transform,background-color]
                      ${shouldShow ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}
                    `}
                    style={{
                      transitionDuration: `${ITEM_DURATION}ms`,
                      transitionDelay: `${delay}ms`,
                    }}
                  >
                    <span className={`font-semibold justify-self- ${active ? "text-gray-900 font-medium" : "text-gray-900"}`}>
                      {l.abbr}
                    </span>
                    <span className="justify-self-end text-[12px] font-thin truncate text-gray-900">{l.native}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
