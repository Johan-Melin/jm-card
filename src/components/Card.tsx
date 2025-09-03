import React, { useState } from "react"
import type { Theme } from "@/lib/themes"
import GlassPanel from "@/components/GlassPanel"

type CardProps = {
  theme: Theme
}

const Card: React.FC<CardProps> = ({ theme }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const flipCard = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="relative w-96 h-64"
      style={{
        transform: `rotateY(${isFlipped ? 180 : 0}deg)`,
        transformStyle: "preserve-3d",
        transition: "transform 0.6s ease-in-out",
      }}
    >
      <div className={`absolute inset-0 ${theme.cardBg} rounded-2xl shadow-2xl`} />
      
      {/* Front face */}
      <div className="absolute top-6 left-6 [backface-visibility:hidden]">
        <h3 className="text-white text-xl font-bold mb-1">Johan Melin</h3>
        <p className="text-white/80 text-sm">Full Stack Developer</p>
      </div>
      <div className="absolute bottom-6 left-6 [backface-visibility:hidden]">
        <a href="https://www.linkedin.com/in/johan-melin/" target="_blank" className="text-white/80 hover:underline">
          <p className="text-white/80 text-sm">Linkedin</p>
        </a>
        <a href="https://github.com/Johan-Melin" target="_blank" className="text-white/80 hover:underline">
          <p className="text-white/80 text-sm">Github</p>
        </a>
      </div>

      {/* Back face */}
      <div className="absolute inset-0 [backface-visibility:hidden] p-6"
        style={{
          transform: "rotateY(180deg)"
        }}
      >
        <h3 className="text-white text-xl font-bold mb-1">Skills</h3>
        <p className="text-white/80 text-sm font-bold">Frontend</p>
        <p className="text-white/80 text-sm mb-1">React | TypeScript | React Native | Vue </p>
        <p className="text-white/80 text-sm font-bold">Backend</p>
        <p className="text-white/80 text-sm mb-1">Node.js | REST APIs | PHP | SQL</p>
      </div>

        <div className="absolute bottom-2 right-2">
          <GlassPanel 
            variant="button"
            onClick={flipCard}
          >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </GlassPanel>
      </div>
    </div>
  )
}
export default Card;