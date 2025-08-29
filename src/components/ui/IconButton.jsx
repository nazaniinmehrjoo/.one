export default function DiamondArrowButton({
    size = 40,            
    rounded = "lg",       
    className = "",
    ...props
  }) {
    return (
      <button
        type="button"
        className={`grid place-items-center bg-white text-black rounded-${rounded} shadow-md hover:shadow-lg transition ${className}`}
        style={{ width: size, height: size }}
        {...props}
      >
        <svg
          width={Math.round(size * 0.4)}
          height={Math.round(size * 0.475)}
          viewBox="0 0 16 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0 9.34823L16 0L8.22921 9.4647L15.7554 19L0 9.34823Z"
            fill="currentColor"
          />
        </svg>
      </button>
    );
  }
  