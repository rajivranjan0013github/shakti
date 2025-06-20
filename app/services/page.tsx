import Link from "next/link"
import { ServiceCard } from "@/components/ui/service-card"
import { ServiceLayout } from "@/components/ui/service-layout"

const services = [
  {
    title: "Auditing Services",
    description: "Comprehensive auditing solutions for private and public sector units, including various banking institutions.",
    features: [
      "Statutory central and branch audits",
      "Bank audits (nationalized and private)",
      "Revenue Audit",
      "Stock Audit",
      "Concurrent Audits"
    ],
    href: "/services/auditing"
  },
  {
    title: "Accounting Services",
    description: "Full-service accounting solutions to help businesses focus on their core operations.",
    features: [
      "Day-to-day back-office operations",
      "Accounting framework support",
      "Control and reporting systems",
      "Statutory compliance requirements"
    ],
    href: "/services/accounting"
  },
  {
    title: "Registration & Start-ups",
    description: "Complete business registration and startup support services.",
    features: [
      "Company registration",
      "GST compliances",
      "Business setup support",
      "Legal documentation",
      "Regulatory compliance"
    ],
    href: "/services/registration"
  },
  {
    title: "Accounting Advisory Support",
    description: "Expert financial advisory services for businesses at all stages of growth.",
    features: [
      "Financial reporting advice",
      "Mergers and acquisitions support",
      "IPO assistance",
      "System changes consultation",
      "Business strategy advisory"
    ],
    href: "/services/advisory"
  },
  {
    title: "Annual Tax & Statutory Compliances",
    description: "Comprehensive tax services and compliance management solutions.",
    features: [
      "Income Tax services",
      "Tax assistance and planning",
      "Direct Tax Consultancy",
      "Tax Compliances",
      "Tax Representation services"
    ],
    href: "/services/tax"
  }
]

export default function ServicesPage() {
  return (
    <ServiceLayout>
      <div className="flex min-h-screen flex-col items-center justify-start py-16">
        <div className="mb-16 max-w-4xl text-center">
          <h1 className="relative mb-6 text-5xl font-bold">
            <span className="absolute -left-8 -top-8 h-16 w-16 rounded-full bg-blue-500/10 blur-xl" />
            <span className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-purple-500/10 blur-xl" />
            <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="mx-auto text-lg text-gray-600">
            Complete business solutions under one roof. Our experienced professionals help you manage your business&apos; Financial, Accounts, Taxes, and Legal Issues with expertise and precision.
          </p>
        </div>

        <div className="grid w-full max-w-7xl gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="transition-transform duration-300 hover:scale-[1.02]">
              <ServiceCard
                title={service.title}
                description={service.description}
                features={service.features}
              />
            </Link>
          ))}
        </div>

        <div className="mt-24 flex w-full max-w-7xl flex-col items-center rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 px-6 py-12 text-center backdrop-blur-sm">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">Ready to Get Started?</h2>
          <p className="mb-8 max-w-2xl text-gray-600">
            Contact us today to learn more about how our professional services can help your business grow and succeed.
          </p>
          <Link 
            href="/contact"
            className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </ServiceLayout>
  )
}
