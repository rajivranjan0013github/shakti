import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to transform your business with expert financial consultation? Contact us today for a free
            consultation and discover how we can help your business grow and thrive.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-lg text-gray-600">
                  We&apos;re here to help you with all your financial and accounting needs. Reach out to us through any of
                  the following channels.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 98765 43211</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">succoringconsultancy@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">HNO 107, A.N.PATH, NORTH S.K. PURI, PATNA, BIHAR - 800013</p>
                  </div>
                </div>
                {/* <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Business Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div> */}
              </div>
            </div>
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send us a message</CardTitle>
                <CardDescription className="text-gray-600">
                  We'll get back to you within 24 hours with a personalized consultation plan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name
                  </Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Mobile Number
                  </Label>
                  <Input id="phone" placeholder="Enter your mobile number" type="tel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements and how we can help you"
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 lg:px-8 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about our services and how we can help your business
            </p>
          </div>
          <div className="space-y-6">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">What services do you offer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We offer comprehensive chartered accountant services including tax planning and compliance, financial
                  consulting, audit and assurance, GST services, and business advisory. Our team specializes in helping
                  businesses of all sizes with their financial needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">How much do your services cost?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our pricing varies based on the specific services required and the complexity of your business needs.
                  We offer competitive rates and provide detailed quotes after understanding your requirements. Contact
                  us for a free consultation and personalized quote.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Do you work with small businesses?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we work with businesses of all sizes, from startups and small businesses to large corporations.
                  We understand that each business has unique needs and we tailor our services accordingly to provide
                  the best value and support.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">How quickly can you respond to urgent matters?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We understand that financial matters can be time-sensitive. For urgent matters, we typically respond
                  within 24 hours. For regular inquiries, we aim to respond within 48 hours. We also offer priority
                  support for our retainer clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
