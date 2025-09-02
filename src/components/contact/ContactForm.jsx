import { useState, useEffect, useRef } from "react";
import FakeCaptcha from "../ui/FakeCaptcha";

export default function ContactForm({ className = "" }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const onInput = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    console.log("Form values:", form);

    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", category: "", email: "", phone: "", message: "" });

    }, 400);
  };

  return (
    <div
      className={className}
      data-aos="fade-left"
      data-aos-duration="600"
      data-aos-once="true"
      dir="ltr"
    >
      <form
        onSubmit={handleSubmit}
        dir="rtl"
        className="
        relative max-w-[560px] w-full ml-auto
        rounded-[20px] bg-[#F5F5F5] border border-[#EDEDED]
        px-5 sm:px-7 md:px-8 py-6
        shadow-[0_8px_18px_rgba(0,0,0,0.06)]
      "
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field
            label="نام/نام شرکت:"
            name="name"
            value={form.name}
            onChange={onInput}
            placeholder="نام"
            icon="user"
          />

          <SelectField
            className="text-[#9F9F9F]"
            label="دسته‌بندی:"
            name="category"
            value={form.category}
            onChange={onInput}
            placeholder="دسته بندی را انتخاب کنید..."
            icon="grid"
            options={[
              { label: "موقعیت شغلی", value: "consulting" },
              { label: "ایده و طرح", value: "design" },
              { label: "انتقادات و پیشنهادات", value: "development" },
            ]}
          />

          <Field
            label="شماره تماس:"
            name="phone"
            value={form.phone}
            onChange={onInput}
            placeholder="شماره تماس"
            icon="phone"
            type="tel"
          />

          <Field
            label="ایمیل:"
            name="email"
            value={form.email}
            onChange={onInput}
            placeholder="ایمیل"
            icon="mail"
            type="email"
          />
        </div>

        <div className="mt-3">
          <label className="block text-[13px] text-gray-700 mb-2 text-right">درخواست:</label>
          <div className="relative group">
            <div className="absolute right-2 top-2 h-4 w-9 grid place-items-center text-gray-400 group-focus-within:text-black">
              <SvgIcon name="edit" />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={onInput}
              rows={5}
              placeholder="درخواست خود را بنویسید..."
              className="
              peer w-full h-[150px] pr-14 pl-3 py-2
              rounded-[12px] bg-white 
              text-[13px] placeholder:text-gray-400
              focus:outline-none focus:border border-black focus:placeholder-transparent
              text-right
            "
            />
            <span className="pointer-events-none absolute top-2 right-[45px] h-4 w-px bg-gray-200 group-focus-within:bg-black" />
            <span
              className="
              pointer-events-none absolute top-2 right-[52px]
              text-sm text-black opacity-0
              group-focus-within:opacity-100
              peer-[:not(:placeholder-shown)]:opacity-0
            "
            >
              …
            </span>
          </div>
        </div>

        <div dir="ltr" className="mt-5 flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">

          <button
            type="submit"
            disabled={submitting}
            className={`
           h-10 px-7 rounded-[12px] text-[13px] transition
              w-full sm:w-auto
              ${submitting
                ? "bg-gray-400 cursor-not-allowed text-white/80"
                : "bg-black text-white active:scale-[0.98]"}`}
          >
            {submitting ? "در حال ارسال..." : "ارسال"}
          </button>
          <div className="sm:ml-auto w-full sm:w-auto">
            <div className="flex sm:justify-end max-w-full overflow-hidden">
              <FakeCaptcha />
            </div>
          </div>

        </div>
      </form>
    </div>
  );
}

function Field({ label, icon, ...inputProps }) {
  return (
    <div>
      <label className="block text-[13px] text-gray-700 mb-2 text-right">{label}</label>

      <div className="relative group">
        <div className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-9 grid place-items-center text-gray-400 group-focus-within:text-black">
          <SvgIcon name={icon} />
        </div>

        <input
          {...inputProps}
          className="
            peer w-full h-11 pr-14 pl-3 rounded-[12px] bg-white
            text-[13px] placeholder:text-gray-400
            focus:outline-none focus:border border-black focus:placeholder-transparent
            text-right
          "
        />

        <span className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-[45px] h-4 w-px bg-gray-200 group-focus-within:bg-black" />

        <span
          className="
            pointer-events-none absolute top-1/2 -translate-y-1/2 right-[52px]
            text-sm text-black opacity-0
            group-focus-within:opacity-100
            peer-[:not(:placeholder-shown)]:opacity-0
          "
        >
          …
        </span>
      </div>
    </div>
  );
}

function SelectField({ label, icon, options = [], placeholder, name, value, onChange, className = "" }) {
  const [open, setOpen] = useState(false);
  const [hoverIdx, setHoverIdx] = useState(-1);
  const btnRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
        setHoverIdx(-1);
      }
    }
    function onEsc(e) { if (e.key === "Escape") setOpen(false); }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const color = value ? "text-gray-900" : "text-[#9F9F9F]";
  const selected = options.find((o) => o.value === value);

  return (
    <div>
      <label className="block text-[13px] text-gray-700 mb-2 text-right">{label}</label>

      <div className="relative">
        <button
          ref={btnRef}
          type="button"
          onClick={() => setOpen((o) => !o)}
          className={`
            group relative w-full h-11 pr-14 pl-10 rounded-[12px] bg-white text-[13px] text-right
            border border-transparent focus:border-black
            outline-none transition-[border-color] duration-150
            ${color} ${className}
          `}
          aria-expanded={open}
          aria-haspopup="listbox"
        >
          <span className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-9 grid place-items-center text-gray-400">
            <SvgIcon name={icon} />
          </span>

          <span className="
            pointer-events-none absolute top-1/2 -translate-y-1/2 right-[45px] h-4 w-px
            bg-gray-200 group-hover:bg-black group-focus:bg-black
          " />

          <span className="truncate">{selected ? selected.label : placeholder}</span>

          <span className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}>
            <svg width="20" height="20" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
          </span>
        </button>

        {open && (
          <div
            ref={panelRef}
            className="
              absolute z-50 left-0 right-0 top-[calc(100%+8px)]
              rounded-[16px] border border-[#EDEDED] bg-white
              shadow-[0_8px_18px_rgba(0,0,0,0.06)] p-2
            "
            role="listbox"
          >
            {options.map((opt, i) => {
              const active = value === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onMouseEnter={() => setHoverIdx(i)}
                  onMouseLeave={() => setHoverIdx(-1)}
                  onClick={() => {
                    onChange({ target: { name, value: opt.value } });
                    setOpen(false);
                  }}
                  className="group relative w-full text-right px-3 py-2.5 rounded-[12px] text-[15px] transition"
                  role="option"
                  aria-selected={active}
                >
                  <span
                    aria-hidden
                    className={`
                      absolute inset-x-2 inset-y-1 rounded-[12px] bg-[#F5F5F5]
                      transition-opacity ${active || hoverIdx === i ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                    `}
                  />
                  <span className={`relative z-10 ${active ? "font-semibold" : "font-medium"} text-gray-900`}>
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}


function SvgIcon({ name }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" };

  switch (name) {
    case "user":
      return (
        <svg {...common} width="20" height="20" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.11992 8.1525C9.04492 8.145 8.95492 8.145 8.87242 8.1525C7.08742 8.0925 5.66992 6.63 5.66992 4.83C5.66992 2.9925 7.15492 1.5 8.99992 1.5C10.8374 1.5 12.3299 2.9925 12.3299 4.83C12.3224 6.63 10.9049 8.0925 9.11992 8.1525Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.37004 10.92C3.55504 12.135 3.55504 14.115 5.37004 15.3225C7.43254 16.7025 10.815 16.7025 12.8775 15.3225C14.6925 14.1075 14.6925 12.1275 12.8775 10.92C10.8225 9.5475 7.44004 9.5475 5.37004 10.92Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "grid":
      return (
        <svg {...common} width="20" height="20" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.75 7.5H5.25C6.75 7.5 7.5 6.75 7.5 5.25V3.75C7.5 2.25 6.75 1.5 5.25 1.5H3.75C2.25 1.5 1.5 2.25 1.5 3.75V5.25C1.5 6.75 2.25 7.5 3.75 7.5Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.75 7.5H14.25C15.75 7.5 16.5 6.75 16.5 5.25V3.75C16.5 2.25 15.75 1.5 14.25 1.5H12.75C11.25 1.5 10.5 2.25 10.5 3.75V5.25C10.5 6.75 11.25 7.5 12.75 7.5Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.75 16.5H14.25C15.75 16.5 16.5 15.75 16.5 14.25V12.75C16.5 11.25 15.75 10.5 14.25 10.5H12.75C11.25 10.5 10.5 11.25 10.5 12.75V14.25C10.5 15.75 11.25 16.5 12.75 16.5Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.75 16.5H5.25C6.75 16.5 7.5 15.75 7.5 14.25V12.75C7.5 11.25 6.75 10.5 5.25 10.5H3.75C2.25 10.5 1.5 11.25 1.5 12.75V14.25C1.5 15.75 2.25 16.5 3.75 16.5Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "mail":
      return (
        <svg {...common} width="20" height="20" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.75 15.375H5.25C3 15.375 1.5 14.25 1.5 11.625V6.375C1.5 3.75 3 2.625 5.25 2.625H12.75C15 2.625 16.5 3.75 16.5 6.375V11.625C16.5 14.25 15 15.375 12.75 15.375Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.75 6.75L10.4025 8.625C9.63 9.24 8.3625 9.24 7.59 8.625L5.25 6.75" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "phone":
      return (
        <svg {...common} width="20" height="20" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4775 13.7475C16.4775 14.0175 16.4175 14.295 16.29 14.565C16.1625 14.835 15.9975 15.09 15.78 15.33C15.4125 15.735 15.0075 16.0275 14.55 16.215C14.1 16.4025 13.6125 16.5 13.0875 16.5C12.3225 16.5 11.505 16.32 10.6425 15.9525C9.78 15.585 8.9175 15.09 8.0625 14.4675C7.2 13.8375 6.3825 13.14 5.6025 12.3675C4.83 11.5875 4.1325 10.77 3.51 9.915C2.895 9.06 2.4 8.205 2.04 7.3575C1.68 6.5025 1.5 5.685 1.5 4.905C1.5 4.395 1.59 3.9075 1.77 3.4575C1.95 3 2.235 2.58 2.6325 2.205C3.1125 1.7325 3.6375 1.5 4.1925 1.5C4.4025 1.5 4.6125 1.545 4.8 1.635C4.995 1.725 5.1675 1.86 5.3025 2.055L7.0425 4.5075C7.1775 4.695 7.275 4.8675 7.3425 5.0325C7.41 5.19 7.4475 5.3475 7.4475 5.49C7.4475 5.67 7.395 5.85 7.29 6.0225C7.1925 6.195 7.05 6.375 6.87 6.555L6.3 7.1475C6.2175 7.23 6.18 7.3275 6.18 7.4475C6.18 7.5075 6.1875 7.56 6.2025 7.62C6.225 7.68 6.2475 7.725 6.2625 7.77C6.3975 8.0175 6.63 8.34 6.96 8.73C7.2975 9.12 7.6575 9.5175 8.0475 9.915C8.4525 10.3125 8.8425 10.68 9.24 11.0175C9.63 11.3475 9.9525 11.5725 10.2075 11.7075C10.245 11.7225 10.29 11.745 10.3425 11.7675C10.4025 11.79 10.4625 11.7975 10.53 11.7975C10.6575 11.7975 10.755 11.7525 10.8375 11.67L11.4075 11.1075C11.595 10.92 11.775 10.7775 11.9475 10.6875C12.12 10.5825 12.2925 10.53 12.48 10.53C12.6225 10.53 12.7725 10.56 12.9375 10.6275C13.1025 10.695 13.275 10.7925 13.4625 10.92L15.945 12.6825C16.14 12.8175 16.275 12.975 16.3575 13.1625C16.4325 13.35 16.4775 13.5375 16.4775 13.7475Z" stroke="currentColor" strokeMiterlimit="10" />
        </svg>
      );

    case "edit":
      return (
        <svg {...common} width="20" height="20" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 6.375C1.5 3.75 3 2.625 5.25 2.625H12.75C15 2.625 16.5 3.75 16.5 6.375V11.625C16.5 14.25 15 15.375 12.75 15.375H5.25" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.75 6.75L10.4025 8.625C9.63 9.24 8.3625 9.24 7.59 8.625L5.25 6.75" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 12.375H6" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 9.375H3.75" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    default:
      return null;
  }
}
