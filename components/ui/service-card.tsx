import { ArrowRight, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  showArrow?: boolean;
}

export function ServiceCard({ title, description, features, showArrow = true }: ServiceCardProps) {
  return (
    <Card className="group relative h-full overflow-hidden border-none bg-gradient-to-br from-white/80 to-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />
      <CardHeader className="relative z-10 space-y-2 pb-4 sm:pb-6">
        <CardTitle className="text-xl sm:text-2xl font-bold">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {title}
          </span>
          {showArrow && (
            <ArrowRight className="absolute right-4 sm:right-6 top-6 sm:top-8 h-4 sm:h-5 w-4 sm:w-5 transform text-blue-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
          )}
        </CardTitle>
        <CardDescription className="text-sm sm:text-base text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="relative z-10">
        <ul className="space-y-2 sm:space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-3.5 sm:h-4 w-3.5 sm:w-4 shrink-0 text-blue-600" />
              <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
} 