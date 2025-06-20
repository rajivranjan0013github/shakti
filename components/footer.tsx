import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/logo-c.png" alt="Succoring Consultancy" height={40} width={40} />
              <span className="text-md font-semibold">Succoring Consultancy</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner for comprehensive chartered accountant services.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Tax Planning
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Financial Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Audit & Assurance
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  GST Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>+91 98765 43210</li>
              <li>succoringconsultancy@gmail.com</li>
              <li>HNO-17, A.N.PATH, NORTH S.K. PURI, PATNA, BIHAR - 800013</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 Succoring Consultancy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
