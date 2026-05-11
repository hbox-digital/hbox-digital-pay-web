'use client';

import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const iconMap = Object.entries(LucideIcons).reduce((acc, [name, Icon]) => {
  // Filter out internal helpers or the default export
  if (typeof Icon === 'function' || (typeof Icon === 'object' && 'displayName' in Icon)) {
    acc[name] = Icon as LucideIcon;
  }
  return acc;
}, {} as Record<string, LucideIcon>);