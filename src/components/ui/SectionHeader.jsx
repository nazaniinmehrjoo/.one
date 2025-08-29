export default function SectionHeader({
  eyebrow,
  caption,
  title,
  diamondAt = "left",
  lineWidthClass = "w-48",
  className = "",
  animated = true, 
}) {
  const aosProps = animated
    ? { "data-aos": "fade-down", "data-aos-duration": "700" }
    : {}; 

  return (
    <div className={`mb-10 text-right ${className}`} {...aosProps}>
      <div className="flex items-center justify-start gap-3" dir="rtl">
        <div className={`relative h-6 ${lineWidthClass}`}>
          <span className="absolute -top-3 right-0 text-[10px] font-semibold tracking-wider">
            {eyebrow}
          </span>

          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 block h-px bg-gray-300" />

          <span
            aria-hidden="true"
            className={
              "absolute top-1/2 -translate-y-1/2 h-[5px] w-[5px] rotate-45 bg-gray-400 " +
              (diamondAt === "left"
                ? "left-0 -translate-x-1/2"
                : "right-0 translate-x-1/2")
            }
          />
        </div>

        {caption && <span className="text-base text-gray-500">{caption}</span>}
      </div>

      <h3 className="mt-3 text-2xl md:text-2xl font-medium">{title}</h3>
    </div>
  );
}
