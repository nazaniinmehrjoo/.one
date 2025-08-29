export default function Field({
  label,
  as = "input",
  type = "text",
  rows = 4,
  icon,
  iconPos = "right",
  className = "",
  value,
  options = [],
  placeholder,
  dir = "rtl",
  ...props
}) {
  const isSelect = as === "select";
  const isTextarea = as === "textarea";
  const empty = value == null || value === "";
  const pad = iconPos === "right" ? "pr-12 pl-3" : "pl-12 pr-3";

  const wrapper =
    "relative group rounded-[12px] bg-white border transition-colors " +
    "border-gray-300 focus-within:border-black";

  const controlBase =
    `w-full bg-transparent outline-none text-[13px] ${pad} text-right ` +
    (isTextarea ? "h-[120px] resize-none py-2"
      : isSelect ? "h-11 appearance-none"
        : "h-11");

  return (
    <label className={`block ${className}`} dir={dir}>
      {label && (
        <span className="mb-1 block text-[12px] text-gray-600 text-right">
          {label}
        </span>
      )}

      <div className={wrapper}>
        {/* کنترل‌ها */}
        {isSelect ? (
          <select
            value={value}
            className={`${controlBase} ${empty ? "text-[#9F9F9F]" : "text-black"}`}
            {...props}
          >
            {placeholder && <option value="" disabled hidden>{placeholder}</option>}
            {options.map((opt) => (
              <option key={opt.value ?? opt.label} value={opt.value ?? opt.label}>
                {opt.label ?? opt.value}
              </option>
            ))}
          </select>
        ) : isTextarea ? (
          <textarea
            rows={rows}
            value={value}
            placeholder={placeholder}
            className={`${controlBase} focus:placeholder-transparent`}
            {...props}
          />
        ) : (
          <input
            type={type}
            value={value}
            placeholder={placeholder}
            className={`${controlBase} focus:placeholder-transparent`}
            {...props}
          />
        )}

        {icon && (
          <span
            className={
              "pointer-events-none absolute top-1/2 -translate-y-1/2 " +
              (iconPos === "right" ? "right-3" : "left-3") +
              " text-gray-400 group-focus-within:text-black"
            }
          >
            {icon === "user" && (
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4 0-8 2-8 5v1h16v-1c0-3-4-5-8-5Z" />
              </svg>
            )}
            {icon === "mail" && (
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path stroke="currentColor" d="M20 4H4v16h16V4Z" />
                <path stroke="currentColor" d="m5 7 7 5 7-5" />
              </svg>
            )}
            {icon === "phone" && (
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6 4l3 3-2 2a12 12 0 0 0 8 8l2-2 3 3-2 3c-8 1-15-6-14-14Z" />
              </svg>
            )}
            {icon === "edit" && (
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25Z" />
              </svg>
            )}
            {icon === "chevron" && (
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="m7 10 5 5 5-5" />
              </svg>
            )}
          </span>
        )}

        <span
          className={
            "pointer-events-none absolute top-1/2 -translate-y-1/2 h-4 w-px " +
            (iconPos === "right" ? "right-10" : "left-10") +
            " bg-gray-200 group-focus-within:bg-black"
          }
        />

        {!isSelect && empty && (
          <span
            className={
              "pointer-events-none absolute top-1/2 -translate-y-1/2 text-sm text-black " +
              (iconPos === "right" ? "right-[52px]" : "left-[52px]") +
              " opacity-0 group-focus-within:opacity-100 transition"
            }
          >
            …
          </span>
        )}
      </div>
    </label>
  );
}
