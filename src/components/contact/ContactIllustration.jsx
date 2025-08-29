import ContactHero from "../../assets/contact/contact-hero.png";
import SocialLinks from "./SocialLinks";

export default function ContactIllustration({ className = "" }) {
  return (
    <div
      className={className}
      data-aos="fade-right"
      data-aos-duration="600"
      data-aos-once="true"
      dir="ltr"
    >
      <div className="relative max-w-[380px]">
        <img
          src={ContactHero}
          alt=""
          className="w-full h-auto object-contain select-none pointer-events-none"
        />
      </div>

      <SocialLinks className="mt-20" />
    </div>
  );
}
