import Image from "next/image"
import Link from "next/link"
import { Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Expert Team</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Meet our qualified chartered accountants and financial experts who bring decades of combined experience to
            serve your business needs with dedication and expertise.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border border-gray-200">
              <CardHeader>
                <Image
                  alt="CA Rajesh Kumar"
                  className="rounded-full mx-auto mb-4 border-4 border-gray-100"
                  height="120"
                  src="/placeholder.svg?height=120&width=120"
                  width="120"
                />
                <CardTitle className="text-xl text-gray-900">CA Rajesh Kumar</CardTitle>
                <CardDescription className="text-blue-600 font-medium">Senior Partner & Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  15+ years of expertise in taxation and financial consulting. Specialized in corporate tax planning,
                  compliance, and strategic financial advisory. Holds advanced certifications in international taxation.
                </p>
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-xs text-gray-500">
                  <p>B.Com, CA, CPA</p>
                  <p>Mumbai University</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200">
              <CardHeader>
                <Image
                  alt="CA Priya Sharma"
                  className="rounded-full mx-auto mb-4 border-4 border-gray-100"
                  height="120"
                  src="/placeholder.svg?height=120&width=120"
                  width="120"
                />
                <CardTitle className="text-xl text-gray-900">CA Priya Sharma</CardTitle>
                <CardDescription className="text-green-600 font-medium">Audit & Assurance Partner</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Expert in statutory audits, internal controls, and risk management. 12+ years of experience in audit
                  and assurance services across various industries including manufacturing and IT.
                </p>
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-xs text-gray-500">
                  <p>B.Com, CA, DISA</p>
                  <p>Delhi University</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200">
              <CardHeader>
                <Image
                  alt="CA Amit Patel"
                  className="rounded-full mx-auto mb-4 border-4 border-gray-100"
                  height="120"
                  src="/placeholder.svg?height=120&width=120"
                  width="120"
                />
                <CardTitle className="text-xl text-gray-900">CA Amit Patel</CardTitle>
                <CardDescription className="text-purple-600 font-medium">Financial Advisory Partner</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Specializes in financial planning, investment advisory, and wealth management. 10+ years of experience
                  in strategic financial consulting and business valuation services.
                </p>
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-xs text-gray-500">
                  <p>B.Com, CA, CFA</p>
                  <p>Gujarat University</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200">
              <CardHeader>
                <Image
                  alt="CA Sneha Reddy"
                  className="rounded-full mx-auto mb-4 border-4 border-gray-100"
                  height="120"
                  src="/placeholder.svg?height=120&width=120"
                  width="120"
                />
                <CardTitle className="text-xl text-gray-900">CA Sneha Reddy</CardTitle>
                <CardDescription className="text-red-600 font-medium">Tax Specialist</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Expert in GST, income tax, and international taxation. 8+ years of experience helping businesses
                  optimize their tax strategies and ensure compliance with evolving regulations.
                </p>
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-xs text-gray-500">
                  <p>B.Com, CA, LLB</p>
                  <p>Osmania University</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200">
              <CardHeader>
                <Image
                  alt="CA Vikram Singh"
                  className="rounded-full mx-auto mb-4 border-4 border-gray-100"
                  height="120"
                  src="/placeholder.svg?height=120&width=120"
                  width="120"
                />
                <CardTitle className="text-xl text-gray-900">CA Vikram Singh</CardTitle>
                <CardDescription className="text-indigo-600 font-medium">Corporate Finance Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Specializes in corporate restructuring, mergers & acquisitions, and financial due diligence. 9+ years
                  of experience in corporate finance and strategic advisory services.
                </p>
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-xs text-gray-500">
                  <p>B.Com, CA, MBA</p>
                  <p>Punjabi University</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200">
              <CardHeader>
                <Image
                  alt="CA Meera Joshi"
                  className="rounded-full mx-auto mb-4 border-4 border-gray-100"
                  height="120"
                  src="/placeholder.svg?height=120&width=120"
                  width="120"
                />
                <CardTitle className="text-xl text-gray-900">CA Meera Joshi</CardTitle>
                <CardDescription className="text-teal-600 font-medium">Compliance Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Expert in regulatory compliance, company law, and corporate governance. 7+ years of experience
                  ensuring businesses meet all statutory requirements and maintain good standing.
                </p>
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-xs text-gray-500">
                  <p>B.Com, CA, CS</p>
                  <p>Pune University</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Growing Team</h2>
          <p className="text-lg text-gray-600 mb-8">
            We're always looking for talented professionals to join our team. If you're passionate about finance and helping businesses succeed, we'd love to hear from you.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <Link href="mailto:careers@succoring.com">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Team Stats */}
      <section className="px-6 lg:px-8 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team by Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">6</div>
              <div className="text-gray-600">Chartered Accountants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">65+</div>
              <div className="text-gray-600">Combined Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Professional Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Clients Served</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
