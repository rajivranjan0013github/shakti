import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/logo-c.png" alt="Succoring Consultancy" height={40} width={40} className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-sm sm:text-md font-semibold">Succoring Consultancy</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner for comprehensive chartered accountant services.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services/tax" className="hover:text-white transition-colors inline-block">
                  Tax Planning
                </Link>
              </li>
              <li>
                <Link href="/services/advisory" className="hover:text-white transition-colors inline-block">
                  Financial Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/auditing" className="hover:text-white transition-colors inline-block">
                  Audit & Assurance
                </Link>
              </li>
              <li>
                <Link href="/services/registration" className="hover:text-white transition-colors inline-block">
                  GST Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors inline-block">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-white transition-colors inline-block">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-sm sm:text-base">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start">
                <span className="inline-block">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block break-all">succoringconsultancy@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block">HNO-17, A.N.PATH, NORTH S.K. PURI, PATNA, BIHAR - 800013</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">© 2025 Succoring Consultancy. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors" href="#">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
