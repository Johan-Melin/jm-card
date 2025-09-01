export type Theme = {
  name: string
  background: string
  pattern: string
  cardBg: string
  accent: string
  floatingColors: string[]
  previewColor: string
}

export const themes = [
  {
    name: "Cosmic Purple",
    background: "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
    pattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]",
    cardBg: "bg-gradient-to-br from-blue-600 to-purple-700",
    accent: "bg-gradient-to-br from-yellow-400 to-orange-500",
    floatingColors: ["bg-cyan-400", "bg-pink-400"],
    previewColor: "bg-gradient-to-br from-blue-600 to-purple-700",
  },
  {
    name: "Ocean Depths",
    background: "bg-gradient-to-br from-slate-900 via-teal-900 to-blue-900",
    pattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(56,178,172,0.1),transparent_50%)]",
    cardBg: "bg-gradient-to-br from-teal-600 to-blue-700",
    accent: "bg-gradient-to-br from-emerald-400 to-teal-500",
    floatingColors: ["bg-blue-400", "bg-emerald-400"],
    previewColor: "bg-gradient-to-br from-teal-600 to-blue-700",
  },
  {
    name: "Sunset Glow",
    background: "bg-gradient-to-br from-orange-900 via-red-900 to-pink-900",
    pattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_50%)]",
    cardBg: "bg-gradient-to-br from-orange-600 to-red-700",
    accent: "bg-gradient-to-br from-yellow-400 to-orange-500",
    floatingColors: ["bg-yellow-400", "bg-red-400"],
    previewColor: "bg-gradient-to-br from-orange-600 to-red-700",
  },
  {
    name: "Forest Night",
    background: "bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900",
    pattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]",
    cardBg: "bg-gradient-to-br from-green-600 to-emerald-700",
    accent: "bg-gradient-to-br from-lime-400 to-green-500",
    floatingColors: ["bg-lime-400", "bg-green-400"],
    previewColor: "bg-gradient-to-br from-green-600 to-emerald-700",
  },
];