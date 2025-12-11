const experiences = [
  {
    title: "Web Developer Intern",
    company: "Expelee IT Solutions",
    period: "May 22, 2025 - July 21, 2025",
    responsibilities: [
      "Built backend APIs that let different apps talk to each other using Node.js and Express.",
      "Added user login and security features so only authorized users can access data.",
      "Organized and managed data in MongoDB databases and made queries faster.",
      "Tested my code thoroughly to catch bugs before they reach users.",
      "Packaged services in Docker containers so the app works the same everywhere (local, staging, production).",
    ],
    skills: ["Node.js", "Express", "TypeScript", "MongoDB", "Docker"],
  },
  {
    title: "Web Developer Intern",
    company: "Nestiko Business Solutions Pvt. Ltd.",
    period: "June 1, 2024 - July 17, 2024",
    responsibilities: [
      "Connected frontend to backend services by calling APIs and displaying data on screen.",
      "Worked with backend team to decide what data the API should return and how to format it.",
      "Made the app run faster by sending heavy tasks to the backend instead of slowing down the user's browser.",
    ],
    skills: ["React", "API Integration", "JavaScript", "TypeScript"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-10 max-w-6xl mx-auto px-5 mx-auto">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="space-y-4 transform transition duration-500 hover:translate-y-1 hover:opacity-95"
          >
            {/* Title + Company + Period */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {exp.company}
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {exp.period}
              </p>
            </div>

            {/* Responsibilities */}
            <ul className="list-disc pl-5 space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-700 dark:text-gray-300"
                >
                  {resp}
                </li>
              ))}
            </ul>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs border rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
