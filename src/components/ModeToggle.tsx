"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="sm"
      className="
        relative w-12 md:h-10 p-0 
        border-primary/20 
        hover:border-yellow-400
        hover:bg-yellow-400
        transition-all duration-300 ease-in-out
      "
    >
      {/* Sun Icon */}
      <Sun
        className="
          absolute h-[1.2rem] w-[1.2rem] 
          rotate-0 scale-100 
          transition-all duration-300 
          dark:-rotate-90 dark:scale-0 
          text-primary
        "
      />

      {/* Moon Icon */}
      <Moon
        className="
          absolute h-[1.2rem] w-[1.2rem] 
          rotate-90 scale-0 
          transition-all duration-300 
          dark:rotate-0 dark:scale-100 
          text-primary
        "
      />

      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
