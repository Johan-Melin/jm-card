"use client";

import { useState } from "react"
import { themes } from "@/lib/themes"
import Card from "@/components/Card"
import GlassPanel from "@/components/GlassPanel"

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
      
      <div className="absolute top-8 flex items-center gap-4">
        <GlassPanel 
          variant="button"
          onClick={prevTheme}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </GlassPanel>

        <GlassPanel style={{width: '128px'}} >
          <p className="text-white text-sm font-medium">{theme.name}</p>
        </GlassPanel>

        <GlassPanel 
          variant="button"
          onClick={nextTheme}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </GlassPanel>
      </div>

      <Card theme={theme} />
    </div>
  );
}
