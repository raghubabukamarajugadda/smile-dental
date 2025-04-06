import Link from "next/link";

export default function ServiceCard(props) {
  const { icon, title, desc } = props;

  return (
    <div className="single-service text-left">
      <div className="icon mb-4">
        {typeof icon === "string" ? (
          <i className={icon}></i>
        ) : (
          <span className="custom-icon">{icon}</span>
        )}
      </div>
      <h4>
        <Link href="/service-details">
          {title ? title : "General Treatment "}
        </Link>
      </h4>
      <p>
        {desc
          ? desc
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet."}
      </p>
    </div>
  );
}
