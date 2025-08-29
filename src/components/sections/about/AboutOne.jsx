import AboutTextbox from "./AboutTextbox";

export default function AboutOne() {
  return (
    <section id="about" dir="rtl" className="px-16 py-8 overflow-x-clip">
      <div className="container mt-4 grid lg:grid-cols-12 items-start">
        <div data-aos="fade-left" className="lg:col-span-4 text-right">
          <h2 className="text-[34px] md:text-4xl leading-tight">
            گروه
          </h2>
          <p className="mt-3 md:text-[34px] text-[34px]">ارزش‌آفرین وان</p>
        </div>

        <div
          data-aos="fade-right"
          data-aos-delay="150"
          className="lg:col-span-8 text-justify leading-8 text-gray-700 text-[14px]"
        >
          <p>
            وان، یک گروه اقتصادی ارزش آفرین است (آوان) به واسطه سرمایه گذاری هوشمندانه و ساماندهی خردمندانه، زیرساخت های لازم برای آبادانی و سودرسانی همگانی را فراهم می آورد، تا کسانی که پویا و کوشا هستند، مجال زایش و رویش بیابند.گروه ارزش‌آفرین وان یک سازمان دوراندیش است که با شعار»آسایش برای همگان« نقشی محوری در زمینه‌های کلیدی مانند حمل و نقل، پولی-مالی، سرمایه‌گذاری، کارآفرینی، توسعه تجارت بین‌المللی، رسانه، فناوری و ارتباطات ایفا خواهد نمود.
          </p>
        </div>
      </div>

      <AboutTextbox />
    </section>
  );
}
