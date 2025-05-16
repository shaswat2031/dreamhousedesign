import Image from "next/image";
import { getCloudinaryUrl } from "@/lib/cloudinary";

/**
 * CloudinaryImage component that properly handles sizing for Next.js Image
 */
export default function CloudinaryImage({
  publicId,
  cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  alt = "Image",
  fill = false,
  width,
  height,
  sizes = "100vw",
  className = "",
  priority = false,
  ...props
}) {
  // Handle full URLs or just publicIds
  const src = publicId.includes("cloudinary.com")
    ? publicId
    : `https://res.cloudinary.com/${cloudName}/image/upload/${publicId}`;

  // Common props for both fill and non-fill modes
  const commonProps = {
    alt,
    className,
    priority,
    ...props,
  };

  if (fill) {
    return <Image src={src} fill sizes={sizes} {...commonProps} />;
  }

  // Non-fill mode requires width and height
  return (
    <Image
      src={src}
      width={width || 800}
      height={height || 600}
      {...commonProps}
    />
  );
}
