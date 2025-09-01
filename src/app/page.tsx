"use client";

import { useState } from "react"
import { themes } from "@/lib/themes"
import Card from "@/components/Card"

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState(0)
  const theme = themes[currentTheme]

  return (
    <div className={`min-h-screen ${theme.background} flex items-center justify-center`}>
      <Card theme={theme} />
    </div>
  );
}
