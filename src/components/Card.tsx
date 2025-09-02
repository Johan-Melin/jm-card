import React, { useState } from "react"
import type { Theme } from "@/lib/themes"

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

      <button
        onClick={flipCard}
        className="absolute bottom-2 right-2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 cursor-pointer"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </button>
    </div>
  )
}
export default Card;