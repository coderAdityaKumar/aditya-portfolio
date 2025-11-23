"use client"

const education = [
  {
    institution: "Rajasthan Technical University",
    degree: "B.Tech, Information Technology",
    period: "2022 - 2026",
    gpa: "8.65 till 6th sem",
    icon: "🎓",
  },
  {
    institution: "CBSE Board",
    degree: "XII (Senior Secondary), Science",
    period: "2021",
    gpa: "79.20%",
    icon: "🏫",
  },
  {
    institution: "RBSE Board",
    degree: "X (Secondary)",
    period: "2019",
    gpa: "84.50%",
    icon: "🏫",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-10 max-w-6xl mx-auto px-5 mx-auto">
      <h2 className="text-3xl font-bold mb-10">Education</h2>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="flex gap-4 transform transition duration-500 hover:translate-y-1 hover:opacity-95"
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-xl">
              {edu.icon}
            </div>

            {/* Details */}
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">{edu.institution}</h3>
              <p className="text-gray-600 dark:text-gray-400">{edu.degree}</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span>{edu.period}</span>
                {edu.gpa && (
                  <>
                    <span className="hidden sm:inline">•</span>
                    <span>{edu.gpa}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}