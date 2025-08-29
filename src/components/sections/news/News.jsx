import FeaturedNewsCard from "../../news/FeaturedNewsCard";
import { topNews, bottomNews } from "../../../data/news";
import SectionHeader from "../../ui/SectionHeader";
import NewsCard from "../../news/NewsCard";
import TagList from "../../news/TagList";

export default function NewsSection() {
  const allNews = [...topNews, ...bottomNews];

  return (
    <section id="news" className="py-12 md:py-16 " dir="rtl">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">

        <div className="container">
          <SectionHeader
            eyebrow="ONE GROUP"
            caption="مشاهده اخبار و مقالات بیشتر"
            title="جدیدترین نوشته‌ها و خبرها"
            diamondAt="left"
            lineWidthClass="w-48"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <FeaturedNewsCard {...topNews[0]} imageSide="right" aos="fade-left" />
            <FeaturedNewsCard {...topNews[1]} imageSide="left" aos="fade-right" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {bottomNews.slice(0, 2).map((item, index) => (
              <NewsCard
                key={item.id}
                {...item}
                aos={index === 0 ? "fade-left" : "fade-up"}
              />
            ))}

            <TagList items={allNews} aos="fade-right" />

          </div>
        </div>
      </div>
    </section>
  );
}
