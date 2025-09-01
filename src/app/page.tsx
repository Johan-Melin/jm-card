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

  const transparentWrap = "bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20"

  return (
    <div className={`min-h-screen ${theme.background} flex items-center justify-center`}>
      
      <div className="absolute top-8 flex items-center gap-4">
        <button 
          className={`${transparentWrap} cursor-pointer`}
          onClick={prevTheme}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className={`${transparentWrap} px-4 w-32 text-center`}>
          <p className="text-white text-sm font-medium">{theme.name}</p>
        </div>

        <button 
          className={`${transparentWrap} cursor-pointer`}
          onClick={prevTheme}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <Card theme={theme} />
    </div>
  );
}
