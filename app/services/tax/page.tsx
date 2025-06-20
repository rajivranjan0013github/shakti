import { CheckCircle, Calculator } from "lucide-react"
import { ServiceLayout } from "@/components/ui/service-layout"

export default function TaxPage() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
          <Calculator className="h-8 w-8 text-blue-600" />
        </div>
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Tax Services</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Comprehensive tax planning, compliance, and advisory services to optimize your tax position and ensure regulatory compliance.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Direct Tax Services */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Direct Tax Services</h3>
          <p className="mb-4 text-gray-600">
            Expert assistance with direct tax planning and compliance.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Income Tax Returns
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Tax Planning & Advisory
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Tax Assessment Support
            </li>
          </ul>
        </div>

        {/* Indirect Tax Services */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Indirect Tax Services</h3>
          <p className="mb-4 text-gray-600">
            Comprehensive GST and indirect tax management.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              GST Compliance
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              GST Returns Filing
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Input Tax Credit
            </li>
          </ul>
        </div>

        {/* International Tax */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">International Tax</h3>
          <p className="mb-4 text-gray-600">
            Expert guidance on international tax matters.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Transfer Pricing
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              DTAA Advisory
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Cross-border Taxation
            </li>
          </ul>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16 rounded-lg bg-blue-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Tax Expertise</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Tax Optimization</h3>
            <p className="text-gray-600">
              We help you minimize tax liability while ensuring full compliance with tax laws.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Compliance Assurance</h3>
            <p className="text-gray-600">
              Stay compliant with all tax regulations and avoid penalties with our expert guidance.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Proactive Planning</h3>
            <p className="text-gray-600">
              Strategic tax planning to help you achieve your financial goals efficiently.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
} 