import { CheckCircle, FileText } from "lucide-react"
import { ServiceLayout } from "@/components/ui/service-layout"

export default function RegistrationPage() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
          <FileText className="h-8 w-8 text-purple-600" />
        </div>
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Business Registration Services</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Comprehensive business registration and compliance services to help you start and operate your business legally.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Company Registration */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Company Registration</h3>
          <p className="mb-4 text-gray-600">
            Complete company incorporation and registration services.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Private Limited Company
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Limited Liability Partnership
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              One Person Company
            </li>
          </ul>
        </div>

        {/* License Registration */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">License Registration</h3>
          <p className="mb-4 text-gray-600">
            Essential business licenses and permits registration.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Trade License
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              FSSAI Registration
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Industry-specific Permits
            </li>
          </ul>
        </div>

        {/* Tax Registration */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Tax Registration</h3>
          <p className="mb-4 text-gray-600">
            Complete tax registration and compliance services.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              GST Registration
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              PAN & TAN Registration
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Professional Tax Registration
            </li>
          </ul>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16 rounded-lg bg-purple-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Why Choose Our Registration Services?</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">End-to-End Support</h3>
            <p className="text-gray-600">
              We handle all aspects of registration from documentation to final approval.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Expert Guidance</h3>
            <p className="text-gray-600">
              Our team ensures compliance with all regulatory requirements and deadlines.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Fast Processing</h3>
            <p className="text-gray-600">
              Quick and efficient processing of all registration applications.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
} 