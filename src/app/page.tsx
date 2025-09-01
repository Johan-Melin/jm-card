"use client";

import { useState } from "react"
import { themes } from "@/lib/themes"
import Card from "@/components/Card"

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState(0)
  const theme = themes[currentTheme]

  const nextTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length)
  }

  const prevTheme = () => {
    setCurrentTheme((prev) => (prev - 1 + themes.length) % themes.length)
  }

  return (
    <div className={`min-h-screen ${theme.background} flex items-center justify-center`}>

      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
        <p className="text-white text-sm font-medium">{theme.name}</p>
      </div>

      <Card theme={theme} />
    </div>
  );
}
