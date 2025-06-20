import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CareerPage() {
  const jobs = [
    {
      title: "Data Entry Operator",
      type: "Full-time",
      experience: "1+ years or fresher",
      requirements: [
        "Strong typing skills",
        "Accurate data input capabilities",
        "Record maintenance skills",
        "Minimum Graduation Required"
      ],
    },
    {
      title: "Chartered Accountant (CA)",
      type: "Full-time",
      experience: "2+ years",
      requirements: [
        "Financial reporting experience",
        "Compliance management",
        "Strategic financial planning",
        "Post-qualification experience required"
      ],
    },
    {
      title: "Team Leader",
      type: "Full-time",
      experience: "1+ year in leadership",
      requirements: [
        "Team management experience",
        "Performance monitoring skills",
        "Process optimization abilities",
        "Leadership experience required"
      ],
    },
    {
      title: "Accountant",
      type: "Full-time",
      experience: "2+ years",
      requirements: [
        "Financial transaction management",
        "Report preparation skills",
        "Compliance knowledge",
        "Accounting experience required"
      ],
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Career Opportunities</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Join our team of professionals and grow your career with Succoring Consultancy
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6">
            {jobs.map((job, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div>{job.type}</div>
                        <div>Experience: {job.experience}</div>
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                      <Link href="/contact">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Info */}
      <section className="px-6 lg:px-8 py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <p className="text-gray-600 mb-6">
            If you are passionate about your work and meet the above criteria, please send your resume to:
          </p>
          <p className="text-blue-600 font-medium">
           succoringconsultancy@gmail.com
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Please include "Application for [Position Name]" in the subject line.
            Only shortlisted candidates will be contacted.
          </p>
        </div>
      </section>
    </>
  )
}
