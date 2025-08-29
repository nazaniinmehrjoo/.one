"use client";

import { useState, useRef } from "react";
import bg from "@/assets/hero/bg-hero.png";
import videoSrc from "@/assets/brand/DotOne.mp4";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setShowVideo(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100); 
  };

  return (
    <section className="relative isolate h-[520px] md:h-[650px] overflow-hidden">
      {!showVideo ? (
        <img
          src={bg}
          alt="DotOneCompany"
          loading="eager"
          className="
            absolute inset-0 z-0 h-full w-full object-cover
            object-[50%_12%] md:object-[50%_9%] lg:object-[50%_7%]
          "
        />
      ) : (
        <video
          ref={videoRef}
          src={videoSrc}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          playsInline
          muted
          loop
        />
      )}

      <div className="absolute inset-0 z-10 bg-black/10" />

      {!showVideo && (
        <div className="container relative z-20 grid place-items-center h-full pt-16 md:pt-20">
          <button
            type="button"
            onClick={handlePlay}
            aria-label="پخش ویدیو"
            className="relative grid place-items-center h-24 w-24 rounded-full bg-white shadow-lg"
          >
            <span className="absolute inset-3 rounded-full bg-gray-400" />
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10"
            >
              <path
                d="M3.46521 1.5459C5.16953 0.551713 7.22476 0.551713 8.92908 1.5459L8.93103 1.54688L16.4232 5.86133C18.1534 6.85684 19.1648 8.62521 19.1176 10.6084V10.6201C19.1176 12.6101 18.1031 14.3572 16.3969 15.3535L8.90564 19.668L8.90271 19.6689C8.05151 20.1654 7.13136 20.4023 6.18396 20.4023C5.26127 20.4023 4.31545 20.1649 3.46521 19.6689C1.75889 18.6735 0.742617 16.9007 0.742554 14.9346V6.28027C0.742554 4.28953 1.75785 2.54198 3.46521 1.5459Z"
                fill="black"
                stroke="black"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
