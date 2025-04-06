import Link from "next/link";
import Image from "next/image"; // Import Image from next/image

export default function ServiceCard(props) {
  const { icon, title, desc } = props;

  return (
    <>
      <div className="single-service" style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        {/* Wrapper for icon and title to use flexbox */}
        <div className="service-icon-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          {/* Conditionally render the image or icon */}
          {icon && (icon.includes('.png') || icon.includes('.jpg') || icon.includes('.jpeg')) ? (
            <Image
              src={`/img/${icon}`} // Assuming the image is in the public/img folder
              alt={title}
              width={50}
              height={50}
              style={{ objectFit: 'contain' }} // Optional style to maintain aspectratio
            />
          ) : (
            <i className={icon ? icon : "icofont icofont-prescription"}></i> // Render the icon if not an image
          )}

          {/* Title */}
          <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '600' }}>
            <Link href="/service-details">
              {title ? title : "General Treatment"}
            </Link>
          </h4>
        </div>
        {/* Description */}
        <p style={{ marginTop: '10px', fontSize: '1rem', color: '#555' }}>
          {desc
            ? desc
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet."}
        </p>
      </div>
    </>
  );
}
