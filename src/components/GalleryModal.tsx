'use client';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  projectName: string;
  initialIndex?: number;
  projectUrl?: string;
}

export const GalleryModal = ({
  isOpen,
  onClose,
  images,
  projectName,
  initialIndex = 0,
  projectUrl,
}: GalleryModalProps) => {
  const slides = images.map((image) => ({
    src: image,
    alt: projectName,
    width: 1920,
    height: 1080,
  }));

  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      slides={slides}
      index={initialIndex}
      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      animation={{ fade: 300, swipe: 500 }}
      carousel={{
        finite: false,
        preload: 2,
      }}
      thumbnails={{
        position: "bottom",
        width: 120,
        height: 80,
        border: 2,
        borderRadius: 8,
        padding: 0,
        gap: 16,
        showToggle: true,
      }}
      slideshow={{
        autoplay: false,
        delay: 3000,
      }}
      zoom={{
        maxZoomPixelRatio: 3,
        zoomInMultiplier: 2,
        doubleTapDelay: 300,
        doubleClickDelay: 300,
        doubleClickMaxStops: 2,
        keyboardMoveDistance: 50,
        wheelZoomDistanceFactor: 100,
        pinchZoomDistanceFactor: 100,
        scrollToZoom: true,
      }}
      fullscreen={{
        auto: false,
      }}
      controller={{
        closeOnBackdropClick: true,
        closeOnPullDown: true,
        closeOnPullUp: true,
      }}
      styles={{
        container: {
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          backdropFilter: "blur(20px)",
        },
        thumbnailsContainer: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(10px)",
          padding: "16px",
        },
        thumbnail: {
          border: "2px solid transparent",
          borderRadius: "8px",
          transition: "all 0.3s ease",
        },
      }}
      toolbar={{
        buttons: [
          <div key="project-info" className="flex items-center gap-4 px-4">
            <span className="text-white font-semibold text-lg hidden sm:block">
              {projectName}
            </span>
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block"
              >
                <Button
                  size="sm"
                  variant="secondary"
                  className="gap-2 bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="hidden md:inline">Visit Site</span>
                </Button>
              </a>
            )}
          </div>,
          "close",
        ],
      }}
      render={{
        iconClose: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ),
        iconPrev: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        ),
        iconNext: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        ),
        iconZoomIn: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        ),
        iconZoomOut: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        ),
        iconEnterFullscreen: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        ),
        iconExitFullscreen: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <polyline points="4 14 10 14 10 20" />
            <polyline points="20 10 14 10 14 4" />
            <line x1="14" y1="10" x2="21" y2="3" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        ),
        iconSlideshowPlay: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        ),
        iconSlideshowPause: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ),
      }}
    />
  );
};