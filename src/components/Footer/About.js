import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-footer">
          <h2>About Us</h2>
          <p>
            Dr. Kiran's Smile Group of Dental Hospitals has been transforming
            smiles since 1999. With 8+ clinics across India and Kuwait, we
            provide advanced, pain-free dental care for patients of all ages.
          </p>
          <ul className="social">
            <li>
              <Link href="#">
                <i className="icofont-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="icofont-instagram"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="icofont-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="icofont-youtube"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="icofont-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
