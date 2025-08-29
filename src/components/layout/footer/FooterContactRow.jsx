import { IconMail, IconPhone, IconPin } from "./icons";

const ICONS = {
  mail: IconMail,
  phone: IconPhone,
  pin: IconPin,
};

export default function FooterContactRow({ items = [] }) {
  return (
    <div className=" mx-auto px-4 pb-20">
      <div dir="rtl" className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {items.map((it) => {
          const Icon = ICONS[it.icon] ?? (() => null);
          return (
            <div key={it.id} className="flex flex-col items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-black ">
                <Icon className="w-10 h-10" />
              </span>
              <div className="text-sm text-gray-700">{it.title}</div>
              {it.sub ? (
                <div className="text-xs text-gray-500">{it.sub}</div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
