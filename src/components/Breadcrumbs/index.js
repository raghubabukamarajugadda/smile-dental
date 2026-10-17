import Link from "next/link";

export default function Breadcrumbs(props) {
  const { title, menuText } = props;

  return (
    <div className="sh-crumb-hero">
      <div className="sh-container">
        <nav className="sh-about-hero__crumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>&gt;</span>
          <strong>{menuText || title || "Page"}</strong>
        </nav>
        {title && <h1>{title}</h1>}
      </div>
    </div>
  );
}
