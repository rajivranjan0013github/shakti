import Image from "next/image"
import { Award, Clock, Shield, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Succoring Consultancy</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            As a newly established consultancy firm, we are committed to providing exceptional services
            to businesses of all sizes. Our dedication to precision and client success positions us
            as an emerging leader in the industry.
          </p>
        </div>
      </section>

      

      {/* Story Section */}
      <section className="px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Established in 2025, Succoring Consultancy began with a clear mission: to provide exceptional
                consultancy services that help businesses thrive. As a One Person Company (OPC), we bring
                focused expertise and personalized attention to every client engagement.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We combine professional expertise with modern technology to deliver comprehensive
                business solutions that drive growth and ensure compliance. Our commitment to excellence
                and client satisfaction sets us apart in the industry.
              </p>
            </div>
            <div>
              <Image
                alt="Our office and team"
                className="rounded-2xl shadow-lg"
                height="500"
                src="/s-1.jpg"
                width="600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 lg:px-8 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We strive for excellence in every service we provide, ensuring the highest standards of quality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Focus</h3>
              <p className="text-gray-600 text-sm">
                Our clients' success is our success. We build lasting relationships based on trust and results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">
                We conduct business with the highest ethical standards and complete transparency.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600 text-sm">
                You can count on us to deliver consistent, dependable service when you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower businesses with expert financial guidance, innovative solutions, and unwavering support that
                drives sustainable growth and success. We are committed to being the trusted financial partner that
                businesses rely on to navigate complex financial landscapes.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading chartered accountant firm recognized for excellence, innovation, and client success.
                We envision a future where every business has access to world-class financial expertise that enables
                them to achieve their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details Section */}
      <section className="px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Company Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">Company Name</h3>
                <p className="text-gray-600">SUCCORING CONSULTANCY (OPC) PRIVATE LIMITED</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">CIN</h3>
                <p className="text-gray-600">U69200BR2025OPC074670</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Registration Details</h3>
                <p className="text-gray-600">Registration Number: 074670</p>
                <p className="text-gray-600">Date of Incorporation: 27/03/2025</p>
                <p className="text-gray-600">ROC: Patna</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Contact Information</h3>
                <p className="text-gray-600">Email: succoringconsultancy@gmail.com</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">Registered Address</h3>
                <p className="text-gray-600">
                  HNO 107,A.N.PATH, NORTH, S.K. PURI, PATNA,<br />
                  Patliputra, Patna, Phulwari, Bihar, India, 800013
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Company Category</h3>
                <p className="text-gray-600">Company limited by shares</p>
                <p className="text-gray-600">Non-government company</p>
                <p className="text-gray-600">One Person Company</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Capital Information</h3>
                <p className="text-gray-600">Authorised Capital: ₹5,00,000</p>
                <p className="text-gray-600">Paid up Capital: ₹1,00,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
