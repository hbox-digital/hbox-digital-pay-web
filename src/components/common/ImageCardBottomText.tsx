"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import LazyVideo from "./LazyVideo";

interface ImageCardProps {
  project: {
    title?: string;
    image?: string;
    video?: string;
  };
}

const ImageCardBottomText = ({ project }: ImageCardProps) => {
  return (
    <Card
      className="border-[1.808px] border-primary/10 hover:border-yellow-400 transition-all duration-300"
      style={{
        borderRadius: "12.056px",
        boxShadow: "3px 6px 8px 0 rgba(0, 0, 0, 0.06)",
      }}
    >
      <CardContent>
        {project.video ? (
          <LazyVideo
            src={project.video}
            className="object-cover h-60 w-full rounded-2xl"
            width={600}
            height={600}
          />
        ) : (
          <Image
            src={project.image || "/images/placeholder-image.webp"}
            alt={project.title || "Project Image"}
            width={600}
            height={600}
            className="object-contain rounded-2xl h-full w-full"
          />
        )}
      </CardContent>
      <CardFooter>
        <p className="text-sm md:text-base font-medium leading-snug max-w-[300px]">
          {project.title}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ImageCardBottomText;
