import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import LazyVideo from "./LazyVideo";


enum ImageSide {
  LEFT = "left",
  RIGHT = "right",
}

interface SectionWithLeftImageProps {
  video?: string;
  image?: string;
  heading?: string;
  text: string[];
  buttonInfo?: {
    label: string;
    link: string;
  };
  imageSide?: ImageSide; // "left" or "right"
  sectionId?: string;
}

const SectionWithImage = ({
  video,
  image,
  heading,
  text,
  buttonInfo,
  imageSide = ImageSide.LEFT,
  sectionId,
}: SectionWithLeftImageProps) => {
  // Render media content (either image or video)
  const renderMedia = () => {
    if (video) {
      return (
        <LazyVideo
          src={video}
          className="w-full h-auto rounded-lg"
          width={500}
          height={500}
        />
      );
    }
    
    if (image) {
      return (
        <Image
          src={image}
          alt={heading || ""}
          width={500}
          height={500}
          className="w-full h-auto"
        />
      );
    }
    
    return null;
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden" id={sectionId || ""}>
      <Container>
        {/* Top Section - Heading with Image/Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {imageSide === "left" && renderMedia()}
          
          {/* Text Content */}
          <div>
            {heading && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  mb-6 md:w-10/12">
                {heading}
              </h2>
            )}
            {text.map((paragraph, index) => (
              <p
                key={index}
                className="text-base md:text-lg leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
            {buttonInfo && (
              <Link href={buttonInfo.link}>
                <Button className="mt-6 text-md font-medium md:px-8" size="lg">
                  {buttonInfo.label}
                </Button>
              </Link>
            )}
          </div>

          {imageSide === "right" && renderMedia()}
        </div>
      </Container>
    </section>
  );
};

export default SectionWithImage;
