export default function TagList({ items = [], aos, onMoreClick }) {
  const thumbs = Array.isArray(items) ? items.slice(0, 5) : [];

  return (
    <article
      data-aos={aos}
      dir="rtl"
      className="group relative h-[260px] overflow-hidden rounded-3xl"
    >
      <span aria-hidden="true" className="absolute inset-0 bg-[#F5F5F5]" />
      <span
        aria-hidden="true"
        className="
          absolute inset-0 bg-[#141414]
          opacity-0
          transition-opacity duration-[1400ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:opacity-100
        "
      />

      <div className="relative z-10 flex h-full flex-col p-4 sm:p-5">
        <button
          type="button"
          aria-label="مشاهده اخبار و مقالات بیشتر"
          onClick={onMoreClick}
          className="absolute left-6 top-[3rem] grid h-16 w-16 place-items-center rounded-2xl bg-white z-10"
        >
          <svg width="20" height="25" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 9.348L16 0 8.229 9.465 15.755 19 0 9.348Z" fill="black" />
          </svg>
        </button>

        <div className="flex-1 flex items-center justify-start text-center">
          <h5
            className="
              text-[18px] font-semibold leading-7 text-gray-900 text-right
              transition-colors duration-[1400ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:text-white
            "
          >
            مشاهده اخبار و<br />مقالات بیشتر
          </h5>
        </div>
        <div className="relative mt-3 overflow-hidden">
          <div className="flex flex-row-reverse items-center">
            {thumbs.map((it, i) => (
              <div
                key={it?.id ?? i}
                title={it?.title}
                style={{ backgroundImage: `url(${it?.image})` }}
                className={`
                  relative h-[80px] w-[74px] shrink-0 overflow-hidden
                  bg-center bg-cover
                  rounded-tl-2xl rounded-bl-2xl
                  ${i === 0 ? '' : 'me-[-14px]'}
                `}
              >
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute inset-0
                    opacity-100
                    transition-opacity duration-[1400ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:opacity-0
                  "
                  style={{
                    background:
                      'linear-gradient(270deg, #F5F5F5 0%, rgba(245,245,245,0) 100%)',
                  }}
                />
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute inset-0
                    opacity-0
                    transition-opacity duration-[1400ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:opacity-100
                  "
                  style={{
                    background:
                      'linear-gradient(270deg, #141414 13.32%, rgba(20,20,20,0) 100%)',
                  }}
                />
              </div>
            ))}

            <div aria-hidden="true" className="shrink-0 w-4 h-[80px]" />
          </div>

          <span
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-y-0 right-0 w-14 z-10
              opacity-100
              transition-opacity duration-[1400ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:opacity-0
            "
            style={{
              background:
                'linear-gradient(270deg, #F5F5F5 0%, rgba(245,245,245,0) 100%)',
            }}
          />
          <span
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-y-0 right-0 w-14 z-10
              opacity-0
              transition-opacity duration-[1400ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:opacity-100
            "
            style={{
              background:
                'linear-gradient(270deg, #141414 0%, rgba(20,20,20,0) 100%)',
            }}
          />
        </div>
      </div>
    </article>
  );
}
