import SectionHead from "@/components/SectionHead";
import BlogCard from "@/components/BlogCard";

import BlogImg1 from "../../../../public/img/blog1.jpg";
import BlogImg2 from "../../../../public/img/blog2.jpg";
import BlogImg3 from "../../../../public/img/blog3.jpg";

export default function Blog() {
  return (
    <>
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="Stay Updated with the Latest in Dental Care"
                desc="Explore our blog for expert tips, news, and insights on maintaining a healthy smile and the latest advancements in dental treatments."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <BlogCard
                image={BlogImg1}
                date="22 Aug, 2023"
                title="5 Tips for Maintaining Oral Health During Festive Seasons"
                desc="Learn how to enjoy sweets and treats without compromising your dental health. Discover simple habits to keep your smile bright and healthy."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <BlogCard
                image={BlogImg2}
                date="15 Jul, 2023"
                title="The Benefits of Invisalign: A Clear Path to Straighter Teeth"
                desc="Explore how Invisalign aligners work, their advantages over traditional braces, and why they’re a popular choice for teens and adults."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <BlogCard
                image={BlogImg3}
                date="05 Jan, 2023"
                title="Understanding Dental Implants: A Permanent Solution for Missing Teeth"
                desc="Everything you need to know about dental implants, from the procedure to aftercare, and why they’re the gold standard for tooth replacement."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
