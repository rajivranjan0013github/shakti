import { CheckCircle, FileText } from "lucide-react"
import { ServiceLayout } from "@/components/ui/service-layout"

export default function AccountingPage() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
          <FileText className="h-8 w-8 text-blue-600" />
        </div>
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Accounting Services</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Professional accounting services to help you maintain accurate financial records and make informed business decisions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Bookkeeping */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Bookkeeping</h3>
          <p className="mb-4 text-gray-600">
            Comprehensive bookkeeping services to maintain accurate financial records.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Daily transaction recording
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Bank reconciliation
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Accounts payable & receivable
            </li>
          </ul>
        </div>

        {/* Financial Statements */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Financial Statements</h3>
          <p className="mb-4 text-gray-600">
            Preparation and analysis of financial statements for better decision making.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Balance sheet preparation
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Income statement analysis
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Cash flow statements
            </li>
          </ul>
        </div>

        {/* Payroll Management */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Payroll Management</h3>
          <p className="mb-4 text-gray-600">
            End-to-end payroll processing and management services.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Salary processing
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Tax calculations
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              Compliance reporting
            </li>
          </ul>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16 rounded-lg bg-blue-50 p-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Why Choose Our Accounting Services?</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Expert Team</h3>
            <p className="text-gray-600">
              Our team of certified accountants brings years of experience across various industries.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Modern Technology</h3>
            <p className="text-gray-600">
              We use the latest accounting software and tools to ensure accuracy and efficiency.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-gray-900">Timely Service</h3>
            <p className="text-gray-600">
              We maintain strict deadlines and provide regular updates on your financial status.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
} 