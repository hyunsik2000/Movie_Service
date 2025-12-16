import { useState } from "react";
import { useLazyImage } from "@/hooks/useLazyImage";

export function CommonThumbnail({
  src: dataSrc,
  alt,
  width,
  height = "240px",
  propsClass = "",
  objectFit = "object-cover",
}) {
  const [loaded, setLoaded] = useState(false);
  const { imgRef, src, setFallback } = useLazyImage();

  return (
    <div
      className={`rounded bg-gray-300 dark:bg-[#1E2024] ${propsClass}`}
      style={{ width, height }}
    >
      <img
        ref={imgRef}
        src={src}
        data-src={dataSrc}
        alt={alt}
        onError={() => {
          setFallback();
          setLoaded(true);
        }}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full ${objectFit} transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
