import { FALLBACK_IMG } from "@/constants/tmdb";
import { useEffect, useRef, useState } from "react";

export function useLazyImage() {
  const imgRef = useRef(null);
  const [src, setSrc] = useState();

  useEffect(() => {
    const imgNode = imgRef.current;
    if (!imgNode) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lazySrc = imgNode.dataset.src;
            if (lazySrc) setSrc(lazySrc);
            observer.unobserve(imgNode);
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(imgNode);
    return () => observer.disconnect();
  }, []);

  const setFallback = () => {
    setSrc(FALLBACK_IMG);
  };

  return { imgRef, src, setFallback };
}
