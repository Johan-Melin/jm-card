"use client";

import { useState } from "react"
import { themes } from "@/lib/themes"
import Card from "@/components/Card"

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState(0)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const theme = themes[currentTheme]

  const selectTheme = (index: number) => {
    setCurrentTheme(index)
    setIsDropdownOpen(false)
  }

  const buttonTransition = "hover:scale-110 transition-all duration-100 cursor-pointer"

  return (
    <div className={`min-h-screen ${theme.background} flex items-center justify-center`}>
      
      <div className="absolute top-8 right-8">
        <div className="relative">
          
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`w-10 h-10 ${theme.previewColor} rounded-full border-2 border-white/30 shadow-lg ${buttonTransition}`}
            aria-label="Select theme"
          />

          {isDropdownOpen && (
            <div className="absolute top-14 right-0">
              {themes.map((themeOption, index) => (
                index !== currentTheme &&
                <button
                  key={index}
                  onClick={() => selectTheme(index)}
                  className={`w-10 h-10 ${themeOption.previewColor} rounded-full border-2 border-white/30 ${buttonTransition}`}
                  aria-label={`Select ${themeOption.name} theme`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <Card theme={theme} />
    </div>
  );
}
