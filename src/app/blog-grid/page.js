import Link from "next/link";
import { getAllBlogs } from "@/lib/blogs";  // Function to fetch blogs
import BlogCard from "@/components/BlogCard";
import BlogSidebar from "@/components/BlogSidebar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header/Header";

export default function BlogGrid({ blogs }) {
  const postsPerPage = 6; // Define the number of posts per page
  const currentPage = 1; // This can be dynamic for pagination later (you'll handle this)

  // Get the sliced blogs for the current page (Pagination logic)
  const currentBlogs = blogs.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <>
      <Header />
      <Breadcrumbs title="Blog Grid" menuText="Blog Grid" />

      <section className="blog grid section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="row">
                {currentBlogs.map((blog) => (
                  <div key={blog.id} className="col-lg-6 col-md-6 col-12">
                    <BlogCard
                      image={blog.image}
                      date={blog.date}
                      title={blog.title}
                      desc={blog.desc}
                    />
                  </div>
                ))}
                {/* Pagination controls */}
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

// Static Generation with Data Fetching
export async function getStaticProps() {
  const blogs = getAllBlogs(); // Fetch blog data

  return {
    props: {
      blogs,  // Passing the blogs to the component
    },
  };
}
