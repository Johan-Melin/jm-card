import type React from "react"
import type { Theme } from "@/lib/themes"

type CardProps = {
  theme: Theme
}

const Card: React.FC<CardProps> = ({ theme }) => {

  return (
    <div className="relative w-96 h-64">
      <div className={`absolute inset-0 ${theme.cardBg} rounded-2xl shadow-2xl`} />
    </div>
  )
}
export default Card;