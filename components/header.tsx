"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="px-6 lg:px-8 h-16 flex items-center border-b border-gray-100 bg-white sticky top-0 z-50">
      <Link className="flex items-center space-x-2" href="/">
        <Image src="/logo.png" alt="Succoring Consultancy" height={50} width={50} />
        <span className="text-xl font-semibold text-gray-900">Succoring Consultancy</span>
      </Link>
      
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="ml-auto md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {/* Desktop navigation */}
      <nav className="ml-auto hidden md:flex gap-8">
        {navigation.map((item) => (
          <Link
            key={item.name}
            className={`text-sm font-medium transition-colors ${
              pathname === item.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
            }`}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white md:hidden">
          <nav className="flex flex-col p-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                className={`py-3 text-lg font-medium transition-colors ${
                  pathname === item.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                }`}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
