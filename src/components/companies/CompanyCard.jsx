import DefaultLogo from "../../assets/company/Rectangle.png";

export default function CompanyCard({ logo, excerpt, aos }) {
  const logoSrc = logo || DefaultLogo;

  const handleIconClick = () => {
    console.log("Clicked");
  };

  return (
    <article
      dir="rtl"
      data-aos={aos}
      className="
        relative isolate bg-white rounded-[28px] px-6 py-6 min-h-[142px]
        flex flex-col items-center justify-center text-center
        mb-14 sm:mb-16 md:mb-0
      "
    >
      <img
        src={logoSrc}
        alt="Company"
        className="h-[100px] w-auto object-contain mb-4"
        loading="lazy"
      />
      <p className="text-[14px] text-gray-900">{excerpt}</p>

      <div
        className="
          absolute bottom-[-40px] left-1/2 -translate-x-1/2
          w-[88px] h-[40px] bg-white clip-path-polygon
          flex flex-col items-center justify-center cursor-pointer leading-[0.5]
          z-10
        "
        onClick={handleIconClick}
        aria-label="درباره شرکت"
        role="button"
      >
        <div className="flex flex-col items-center justify-center space-y-2 text-gray-900 text-[12px]">
          <p className="font-thin">درباره شرکت</p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.94165 12.0252L9.99998 17.0835L15.0583 12.0252" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
            <path d="M10 2.91689L10 16.9419" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </article>
  );
}
