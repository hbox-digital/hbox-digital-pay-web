"use client";

import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface LazyVideoProps {
  src: string;
  className?: string;
  width?: number;
  height?: number;
  poster?: string;
}

const LazyVideo = ({ src, className, width, height, poster }: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsInView(true);
            setHasLoaded(true);
          }
        });
      },
      {
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [hasLoaded]);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Skeleton Loader */}
      {(isLoading && isInView) || (!isInView && !poster) ? (
        <Skeleton className={className} />
      ) : null}
      
      {/* Video Element */}
      <video
        ref={videoRef}
        autoPlay={isInView}
        loop
        muted
        playsInline
        preload="none"
        poster={poster}
        onLoadedData={handleVideoLoad}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        width={width}
        height={height}
      >
        {isInView && <source src={src} type="video/mp4" />}
      </video>
    </>
  );
};

export default LazyVideo;
