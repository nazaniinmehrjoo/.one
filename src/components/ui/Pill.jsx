export default function Pill({ label, className = "", ...props }) {
    return (
        <button
            className={`
          group relative overflow-hidden w-full
          rounded-[16px] h-16 md:h-15 px-8 md:px-10
          bg-[#121212] text-white
          transition-colors duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          hover:bg-[#F5F5F5] hover:text-gray-900
          ring-1 ring-transparent outline-none
          transform-gpu [backface-visibility:hidden]
          ${className}
        `}
            dir="rtl"
            {...props}
        >
            <span
                className="
            pointer-events-none whitespace-nowrap
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            z-10 text-lg md:text-xl
            transition-[left,transform,color]
            duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:left-[calc(100%-15px)] group-hover:-translate-x-full
          "
            >
                {label}
            </span>
            <span
                className="
            pointer-events-none
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            z-10 transition-[left,transform,opacity]
            duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:left-[15px] group-hover:translate-x-0
          "
                aria-hidden="true"
            >
                <span
                    className="
            grid place-items-center h-10 w-10 rounded-lg
          bg-black text-white
            opacity-0 group-hover:opacity-100
            transition-opacity duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
            "
                >
                    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9.34823L16 0L8.22921 9.4647L15.7554 19L0 9.34823Z" fill="white" />
                    </svg>
                </span>
            </span>
        </button>
    );
}
