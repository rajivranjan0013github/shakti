import { CheckCircle, TrendingUp } from "lucide-react"
import { ServiceLayout } from "@/components/ui/service-layout"

export default function AdvisoryPage() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <TrendingUp className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Business Advisory Services</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Strategic business advisory services to help you navigate challenges, identify opportunities, and achieve sustainable growth.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Strategic Planning */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Strategic Planning</h3>
          <p className="mb-4 text-gray-600">
            Develop comprehensive business strategies for sustainable growth.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Market analysis
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Growth strategy development
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Risk assessment
            </li>
          </ul>
        </div>

        {/* Financial Advisory */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Financial Advisory</h3>
          <p className="mb-4 text-gray-600">
            Expert financial guidance for better business decisions.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Investment planning
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Cash flow optimization
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Financial restructuring
            </li>
          </ul>
        </div>

        {/* Business Transformation */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Business Transformation</h3>
          <p className="mb-4 text-gray-600">
            Transform your business processes for improved efficiency.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Digital transformation
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Process optimization
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Change management
            </li>
          </ul>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16 rounded-lg bg-green-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Advisory Approach</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Customized Solutions</h3>
            <p className="text-gray-600">
              We develop tailored strategies that align with your unique business goals and challenges.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Industry Expertise</h3>
            <p className="text-gray-600">
              Our advisors bring deep industry knowledge and best practices to every engagement.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Measurable Results</h3>
            <p className="text-gray-600">
              We focus on delivering tangible outcomes and sustainable value for your business.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
} 