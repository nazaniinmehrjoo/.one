import { useEffect } from "react";
import AOS from "aos";

import FooterContactRow from "./FooterContactRow";
import FooterLinkColumn from "./FooterLinkColumn";
import FooterBottom from "./FooterBottom";
import Logo from "../../../assets/brand/DotOne-Logo.png";

export default function Footer() {
  useEffect(() => {
    AOS.refresh(); 
  }, []);

  return (
    <footer className="container bg-white mt-0">
      <div className="mx-auto px-4">
        <div
          className="flex justify-center"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-offset="40"
          data-aos-once="true"
        >
          <img
            src={Logo}
            alt="DotOne"
            className="h-16 sm:h-32 -translate-y-6 sm:-translate-y-8 select-none pointer-events-none"
          />
        </div>
      </div>

      <div
        className="pt-2 sm:pt-4"
        data-aos="fade-up"
        data-aos-duration="650"
        data-aos-delay="75"
        data-aos-offset="40"
        data-aos-once="true"
      >
        <FooterContactRow
          items={[
            { id: "phone",    icon: "phone", title: "021-42101000" },
            { id: "location", icon: "pin",   title: "تهران، جهان کودک، برج دات وان" },
            { id: "email",    icon: "mail",  title: "info1@one-holding.ir" },
          ]}
        />
      </div>

      <div className="mx-auto px-4 pb-10" dir="rtl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center text-center">
          <div
            data-aos="fade-up"
            data-aos-duration="650"
            data-aos-delay="120"
            data-aos-offset="40"
            data-aos-once="true"
          >
            <FooterLinkColumn
              title="دسترسی سریع"
              links={["تماس با ما","درباره ما","شرکت‌ما","استخدام","اخبار"]}
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="650"
            data-aos-delay="160"
            data-aos-offset="40"
            data-aos-once="true"
          >
            <FooterLinkColumn title="لینک ها" links={["www.link.com","www.link.com","www.link.com","www.link.com","www.link.com"]} />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="650"
            data-aos-delay="200"
            data-aos-offset="40"
            data-aos-once="true"
          >
            <FooterLinkColumn title="لینک ها" links={["www.link.com","www.link.com","www.link.com","www.link.com","www.link.com"]} />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="650"
            data-aos-delay="240"
            data-aos-offset="40"
            data-aos-once="true"
          >
            <FooterLinkColumn title="لینک ها" links={["www.link.com","www.link.com","www.link.com","www.link.com","www.link.com"]} />
          </div>
        </div>
        <div>
          <FooterBottom text=" @ هر واژه، هر تصویر، هر پیوند، متعلق به گروه ارزش آفرینی وان است" />
        </div>
      </div>

    </footer>
  );
}
