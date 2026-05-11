import {
  Target,
  BarChart3,
  Workflow,
  Cpu,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import type { ReactNode } from "react";

export const iconMap: Record<string, ReactNode> = {
  Target: <Target className="w-5 h-5 text-[#facc15]" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-[#facc15]" />,
  Workflow: <Workflow className="w-5 h-5 text-[#facc15]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#facc15]" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-[#facc15]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#facc15]" />,
};