import { useEffect } from "react";
import AOS from "aos";

export default function FeaturedNewsCard({
  image,
  title,
  excerpt,
  tags = [],
  date,
  time,
  aos = "fade-up",
}) {
  useEffect(() => {
    AOS.refresh();
  }, [aos]);

  return (
    <article
      data-aos={aos}
      className="group relative h-[260px] overflow-hidden rounded-3xl"
    >
      <span aria-hidden="true" className="absolute inset-0 bg-[#F5F5F5]" />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[#141414] opacity-0 transition-opacity duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
      />

      <div className="relative z-10 flex h-full flex-col md:flex-row-reverse">
        <div className="relative h-full md:w-5/12 md:shrink-0 p-3">
          <div className="relative h-full w-full overflow-hidden rounded-l-3xl">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01]"
            />

            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0 z-10
                opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:opacity-0
              "
              style={{
                background:
                  "linear-gradient(270deg, #F5F5F5 0%, rgba(245,245,245,0) 100%)",
              }}
            />

            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute inset-0 z-20
                opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:opacity-100
              "
              style={{
                background:
                  "linear-gradient(270deg, #141414 13.32%, rgba(20,20,20,0) 100%)",
              }}
            />

            <button
              type="button"
              aria-label="مشاهده"
              className="absolute bottom-3 left-4 z-30 grid w-11 h-11 place-items-center rounded-xl bg-white"
            >
              <svg width="20" height="22" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 9.348L16 0 8.229 9.465 15.755 19 0 9.348Z" fill="black" />
              </svg>
            </button>
          </div>
        </div>

        <div className="md:w-7/12 p-5 sm:p-6 lg:p-7 flex h-full min-h-0 min-w-0 flex-col gap-2">
          <div className="flex flex-wrap flex-row-reverse justify-end gap-2 shrink-0">
            {tags.map((t, i) => (
              <span
                key={i}
                className="
                  inline-block rounded-full bg-white px-3 py-1 text-[11px] text-gray-700 font-thin
                  transition-colors duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:bg-white/90 group-hover:text-gray-800
                "
              >
                {t}
              </span>
            ))}
          </div>

          <h4
            className="
              mt-1 line-clamp-2 text-[18px] font-semibold leading-7 text-gray-900
              transition-colors duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:text-white
            "
          >
            {title}
          </h4>

          {excerpt && (
            <p
              className="
                line-clamp-5 text-[14px] text-gray-600
                transition-colors duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:text-gray-300
              "
            >
              {excerpt}
            </p>
          )}

          <div
            className="
              mt-auto pt-4 flex items-center gap-3 text-xs text-gray-500 shrink-0
              transition-colors duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:text-gray-400
            "
          >
            <span className="flex items-center gap-1 group-hover:text-white transition-colors duration-700">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M4.667 1.167V2.917M9.333 1.167V2.917M2.042 5.303H11.959M11.206 9.199L9.141 11.264c-.082.082-.157.233-.174.345l-.111.787c-.041.286.158.484.443.443l.787-.111c.111-.018.27-.094.345-.176l2.065-2.065c.356-.356.525-.77 0-1.295-.519-.519-.933-.35-1.289.006Z"
                  stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.908 9.497c.175.63.665 1.12 1.295 1.296" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 12.833H4.667C2.625 12.833 1.75 11.667 1.75 9.917V4.958C1.75 3.208 2.625 2.042 4.667 2.042H9.333C11.375 2.042 12.25 3.208 12.25 4.958V7" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.997 7.992h.006M4.838 7.992h.005M4.838 9.742h.005" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {date}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
