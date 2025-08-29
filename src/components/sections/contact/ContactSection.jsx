"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BgPattern from "../../../assets/contact/Contact-bg-pattern.png";
import ContactForm from "../../contact/ContactForm";
import ContactIllustration from "../../contact/ContactIllustration";
import SectionHeader from "../../ui/SectionHeader";

export default function ContactSection() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="contact"
      dir="rtl"
      className="relative pt-16 md:pt-20 overflow-hidden"
    >
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-left"
          data-aos-delay="250"
          data-aos-duration="700"
          data-aos-easing="ease-out"
          data-aos-once="true"
        >
          <div className="container">
            <SectionHeader
              eyebrow="ONE GROUP"
              caption="تماس با ما"
              title="با ما در تماس باشید."
              diamondAt="left"
              lineWidthClass="w-48"
              className="mb-2"
            />

            <div className="flex justify-start">
              <p className="max-w-[560px] text-[14px] leading-6 text-gray-600 text-right mb-8">
                گفت‌وگو، آغاز هر پیوند است.
                <br />
                اگر پرسشی دارید یا درباره ما یا ایده‌ای
                در ذهن دارید، خوشحال می‌شویم از شما بشنویم.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="order-2 lg:order-1">
                <ContactForm />
              </div>

              <ContactIllustration className="pl-5 order-1 lg:order-2 lg:-translate-x-8 xl:-translate-x-12 2xl:-translate-x-16" />
            </div>
          </div>
        </div>
      </div>

      <div className="-mt-8 h-[260px] flex justify-center relative z-0">
        <img
          src={BgPattern}
          alt=""
          className="h-full w-auto opacity-30"
        />
      </div>
    </section>
  );
}
