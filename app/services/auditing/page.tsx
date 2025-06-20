import { CheckCircle, ArrowRight, Building2, Shield, LineChart } from "lucide-react"
import { ServiceLayout } from "@/components/ui/service-layout"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AuditingPage() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
          <Shield className="h-8 w-8 text-purple-600" />
        </div>
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Audit & Assurance Services</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Comprehensive audit and assurance services to help you maintain transparency, compliance, and financial integrity.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Statutory Audit */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Statutory Audit</h3>
          <p className="mb-4 text-gray-600">
            Mandatory annual audits as per regulatory requirements.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Financial Statement Audit
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Compliance Review
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Regulatory Reporting
            </li>
          </ul>
        </div>

        {/* Internal Audit */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Internal Audit</h3>
          <p className="mb-4 text-gray-600">
            Comprehensive internal control and process audits.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Process Review
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Risk Assessment
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Control Evaluation
            </li>
          </ul>
        </div>

        {/* Special Audits */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Special Audits</h3>
          <p className="mb-4 text-gray-600">
            Specialized audit services for specific requirements.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Due Diligence
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Forensic Audit
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Stock Audit
            </li>
          </ul>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16 rounded-lg bg-purple-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Audit Approach</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Risk-Based Methodology</h3>
            <p className="text-gray-600">
              We focus on key risk areas to provide meaningful insights and recommendations.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Quality Assurance</h3>
            <p className="text-gray-600">
              Rigorous quality control processes to ensure accurate and reliable audit reports.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Industry Expertise</h3>
            <p className="text-gray-600">
              Deep understanding of industry-specific regulations and best practices.
            </p>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="grid gap-8 py-16 md:grid-cols-2">
        <Card className="overflow-hidden bg-gradient-to-br from-white/80 to-white/50 shadow-lg">
          <CardContent className="p-8">
            <h2 className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent">
              Our Auditing Expertise
            </h2>
            <ul className="grid gap-4">
              {[
                "Statutory Central Audits",
                "Branch Audits",
                "Revenue Audits",
                "Stock Audits",
                "Concurrent Audits",
                "Government Audits",
                "Bank Audits"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden bg-gradient-to-br from-white/80 to-white/50 shadow-lg">
          <CardContent className="p-8">
            <h2 className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent">
              Key Benefits
            </h2>
            <ul className="grid gap-4">
              {[
                "Comprehensive audit coverage",
                "Expert team with extensive experience",
                "Compliance with regulatory requirements",
                "Detailed reporting and analysis",
                "Risk assessment and management",
                "Quality assurance"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-blue-600" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Why Choose Us */}
      <div className="py-16">
        <Card className="overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
          <CardContent className="p-8">
            <h2 className="mb-12 text-center text-3xl font-semibold text-gray-800">
              Why Choose Our Auditing Services?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group space-y-4 rounded-xl bg-white/50 p-6 transition-all hover:bg-white hover:shadow-lg">
                <h3 className="text-xl font-medium text-gray-800">Experience</h3>
                <p className="text-gray-600">
                  Years of expertise in handling complex audits across various sectors and industries.
                </p>
                <ArrowRight className="h-5 w-5 text-blue-600 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="group space-y-4 rounded-xl bg-white/50 p-6 transition-all hover:bg-white hover:shadow-lg">
                <h3 className="text-xl font-medium text-gray-800">Methodology</h3>
                <p className="text-gray-600">
                  Systematic approach ensuring thorough coverage and accurate reporting.
                </p>
                <ArrowRight className="h-5 w-5 text-blue-600 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="group space-y-4 rounded-xl bg-white/50 p-6 transition-all hover:bg-white hover:shadow-lg">
                <h3 className="text-xl font-medium text-gray-800">Compliance</h3>
                <p className="text-gray-600">
                  Up-to-date knowledge of regulatory requirements and industry standards.
                </p>
                <ArrowRight className="h-5 w-5 text-blue-600 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 px-8 py-16 text-center backdrop-blur-sm">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Ready to Get Started?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-600">
          Contact us today to learn more about how our professional auditing services can help ensure your business compliance and growth.
        </p>
        <Link 
          href="/contact"
          className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        >
          Get in Touch
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </ServiceLayout>
  )
} 