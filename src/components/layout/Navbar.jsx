import LanguageSwitcher from "../ui/LanguageSwitcher";
import logo from "@/assets/brand/DotOne-Logo.png";

export default function Navbar() {
    const links = [
        { label: "درباره ما", id: "about" },
        { label: "وبلاگ", id: "news" },
        { label: "معرفی شرکت‌ها", id: "companies" },
        { label: "تماس با ما", id: "contact" },
        { label: "موقعیت‌های شغلی", id: "jobs" },
    ];

    return (
        <header className="absolute top-4 left-0 right-0 z-50">
            <div className="mx-auto max-w-6xl px-4">
                <div dir="rtl" className="
            grid grid-cols-[auto_1fr_auto] items-center
            h-14 md:h-16 px-2 md:px-6 justify-self-end
            rounded-2xl bg-white/30 backdrop-blur-sm">

                    <a href="#" className="justify-self-start inline-flex items-center">
                        <img src={logo} alt="DotOne" className="h-8 w-auto md:h-10" />
                    </a>

                    <nav className="justify-self-center" dir="rtl">
                        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-800">
                            {links.map(({ label, id }) => (
                                <li key={id}>
                                    <a href={`#${id}`} className="hover:text-gray-900">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <LanguageSwitcher />

                </div>
            </div>
        </header>
    );
}
