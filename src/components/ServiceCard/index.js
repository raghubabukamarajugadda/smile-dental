import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ServiceCard({ image, icon, title, desc, contain, href = "/service-details" }) {
  const iconIsImage = icon && /\.(png|jpe?g)$/i.test(icon);
  if (!image && iconIsImage) {
    image = icon;
    contain = true;
  }

  return (
    <div className="sh-service-card">
      {image && (
        <div className={`sh-service-card__media ${contain ? "is-contain" : ""}`}>
          <Image src={`/img/${image}`} alt={title || "Service"} fill sizes="120px" />
        </div>
      )}
      <div className="sh-service-card__body">
        <h4>{title || "General Treatment"}</h4>
        <p>{desc || "Comprehensive dental care tailored to your needs."}</p>
        <Link href={href} className="sh-service-card__link">
          Learn More <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
}
