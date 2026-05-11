"use client";

import React from "react";
import Link from "next/link";
import {
  Layout,
  PlayCircle,
  Box,
  Smartphone,
  Globe,
  Megaphone,
  BrainCircuit,
  Users,
  Briefcase,
  BarChart3,
  Network,
} from "lucide-react";

interface Category {
  title: string;
  href?: string; // Optional: link for the category itself
  links: { name: string; href: string }[];
}

interface CategoryCardProps {
  category: Category;
  onClose: () => void;
}

const getIcon = (title: string, size: number = 18) => {
  switch (title) {
    case "Design":
      return <Layout size={size} />;
    case "Animation":
      return <PlayCircle size={size} />;
    case "Modeling":
      return <Box size={size} />;
    case "Mobile App Development":
      return <Smartphone size={size} />;
    case "Custom Software Development":
      return <Globe size={size} />;
    case "Digital Marketing Agency":
      return <Megaphone size={size} />;
    case "Game Development":
      return <PlayCircle size={size} />;
    case "Staff Augmentation":
      return <Briefcase   size={size} />;
    case "Blockchain App Development":
      return <Network  size={size} />;
    case "Artificial Intelligence":
      return <BrainCircuit size={size} />;
    case "Get Us to Know":
      return <Users size={size} />;
    case "Work With Us":
      return <Briefcase  size={size} />;
    case "Insights":
      return <BarChart3  size={size} />;
    default:
      return <Smartphone size={size} />;
  }
};
export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onClose,
}) => {
  return (
    <div className="space-y-2">
      {/* Category Title with Icon */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 flex items-center justify-center bg-black/5 dark:bg-white/5 rounded-full border border-black/5 dark:border-white/10 text-yellow-600 dark:text-yellow-400">
          {getIcon(category.title)}
        </div>

        {/* Make the title clickable if category.href exists */}
        {category.href ? (
          <Link
            href={category.href}
            onClick={onClose}
            className="text-yellow-600 dark:text-yellow-400 font-bold font-orbitron uppercase text-[12px] lg:text-[12px] xl:text-[16px] tracking-wide hover:underline"
          >
            {category.title}
          </Link>
        ) : (
          <h3 className="text-yellow-600 dark:text-yellow-400 font-bold font-orbitron uppercase text-[12px] lg:text-[12px] xl:text-[16px] tracking-wide">
            {category.title}
          </h3>
        )}
      </div>

      {/* Category Links */}
      <ul className="space-y-0 pl-2">
        {category.links.map((link, idx) => (
          <li key={idx} className="flex items-center gap-3 group">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 dark:bg-yellow-400 group-hover:scale-150 transition-all shadow-[0_0_8px_rgba(202,138,4,0.3)]" />
            <Link
              href={link.href}
              onClick={onClose}
              className="group-hover:text-black dark:group-hover:text-white transition-colors text-sm"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
