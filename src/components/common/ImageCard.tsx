"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import LazyVideo from "./LazyVideo";
import Link from "next/link";

interface ImageCardProps {
  project: {
    title: string;
    image?: string;
    video?: string;
    description?: string;
    link?: string;
  };
}

const ImageCard = ({ project }: ImageCardProps) => {
  return (
    <Card
      className=" border-[1.808px] border-primary/10 hover:border-yellow-400 transition-all duration-300"
      style={{
        borderRadius: "12.056px",
        boxShadow: "3px 6px 8px 0 rgba(0, 0, 0, 0.06)",
      }}
    >
      <CardHeader>
        <h3 className="text-lg font-bold mb-2 text-foreground">
          {project.title}
        </h3>
        {
          project.description && (
            <p className="">{project.description}</p>
          )
        }
        {
          project.link && (
        <>
        <div className=" text-yellow-500 font-medium mt-4">
          <Link href="#">
            <span>View Details</span>
          </Link>
        </div>
        </>
          )
        }
      </CardHeader>
      <CardContent>
        {project.video ? (
          <LazyVideo
            src={project.video}
            className="object-cover w-full rounded-2xl max-h-80"
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
    </Card>
  );
};

export default ImageCard;
