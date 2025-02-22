import Link from "next/link";

import BlogCard from "@/components/BlogCard";
import BlogSidebar from "@/components/BlogSidebar";
import Breadcrumbs from "@/components/Breadcrumbs";

import BlogImg1 from "../../../public/img/blog1.jpg";
import BlogImg2 from "../../../public/img/blog2.jpg";
import BlogImg3 from "../../../public/img/blog3.jpg";
import Header from "@/components/Header/Header";

export default function BlogGrid() {
  return (
    <>
      <Header />

      <Breadcrumbs title="Blog Grid" menuText="Blog Grid" />

      <section className="blog grid section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <BlogCard
                    image={BlogImg1}
                    date="22 Aug, 2020"
                    title="Introducing Our Latest Dental Innovation"
                    desc="We are thrilled to announce our newest product, designed to revolutionize dental care. Experience faster recovery times and pain-free treatments with our cutting-edge technology."
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <BlogCard
                    image={BlogImg2}
                    date="15 Jul, 2020"
                    title="5 Effective Ways to Solve Common Dental Problems"
                    desc="From cavities to gum disease, discover five proven methods to tackle common dental issues and maintain a healthy, radiant smile."
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <BlogCard
                    image={BlogImg3}
                    date="05 Jan, 2020"
                    title="Transforming Dental Practices with Advanced Solutions"
                    desc="Our business solutions are tailored to modern dental practices, offering advanced tools and systems to enhance patient care and operational efficiency."
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <BlogCard
                    image={BlogImg3}
                    date="10 Mar, 2021"
                    title="The Importance of Regular Dental Checkups"
                    desc="Regular dental visits are crucial for maintaining oral health. Learn how routine checkups can prevent serious issues and keep your smile bright."
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <BlogCard
                    image={BlogImg1}
                    date="12 Sep, 2021"
                    title="Choosing the Right Toothbrush for Optimal Oral Health"
                    desc="Not all toothbrushes are created equal. Find out how to select the perfect toothbrush for your needs and ensure effective cleaning."
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <BlogCard
                    image={BlogImg2}
                    date="18 Nov, 2021"
                    title="The Benefits of Cosmetic Dentistry for a Confident Smile"
                    desc="Cosmetic dentistry can transform your smile and boost your confidence. Explore the benefits of procedures like teeth whitening, veneers, and more."
                  />
                </div>
                <div className="col-12">
                  <div className="pagination">
                    <ul className="pagination-list">
                      <li>
                        <Link href="#">
                          <i className="icofont-rounded-left"></i>
                        </Link>
                      </li>
                      <li className="active">
                        <Link href="#">1</Link>
                      </li>
                      <li>
                        <Link href="#">2</Link>
                      </li>
                      <li>
                        <Link href="#">3</Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="icofont-rounded-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
