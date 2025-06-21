import { cn } from "@/lib/utils"

interface ServiceLayoutProps {
  children: React.ReactNode
  className?: string
}

export function ServiceLayout({ children, className }: ServiceLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-[20%] sm:-left-[10%] -top-[20%] sm:-top-[10%] h-[50%] sm:h-[40%] w-[50%] sm:w-[40%] rounded-full bg-gradient-to-br from-blue-200/20 via-indigo-300/20 to-purple-400/20 blur-3xl" />
        <div className="absolute -bottom-[20%] sm:-bottom-[10%] -right-[20%] sm:-right-[10%] h-[50%] sm:h-[40%] w-[50%] sm:w-[40%] rounded-full bg-gradient-to-br from-purple-200/20 via-pink-300/20 to-red-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800A_1px,transparent_1px)] bg-[size:10px_10px] sm:bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#8080800A_1px,transparent_1px)] bg-[size:10px_10px] sm:bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={cn("py-6 sm:py-8 md:py-12", className)}>
          {children}
        </div>
      </div>
    </div>
  )
} 