
const projects = [
  {
    logo: "src/assets/sadhnaTracker.svg",
    title: "Sadhna Tracker App",
    description:
      "Sadhna Tracker is a simple yet powerful platform designed to help spiritual seekers stay consistent in their daily practices. It allows you to record, monitor, and reflect on your meditation, chanting, reading, or other sadhna activities — turning discipline into a joyful journey. With clean visuals and easy tracking, it keeps you motivated while offering insights into your progress over time.",
    image: "https://res.cloudinary.com/ddecgpmqp/image/upload/v1763883052/sadhnaTracker_tne3dw.png",
    tags: ["React.js", "Node.js", "Express.js", "Mongo DB", "Tailwind CSS"],
    demoUrl: "https://sadhna-tracker-app-frontend.vercel.app/",
    githubUrl: "",
    features: [
      "Daily activity logging for meditation, chanting, and reading",
      "Progress visualization with streaks and performance insights",
    ],
  },
  {
    logo: "/englishexpresswayLogo.svg",
    title: "Hostel Complain Management System",
    description:
      "🏠 Hostel Complaint Management System simplifies how students raise issues and staff resolve them. Complaints about facilities like electricity, Wi-Fi, or mess services can be submitted, tracked, and updated in real time, ensuring faster resolutions, transparency, and smoother communication between students and administrators.",
    image: "https://res.cloudinary.com/ddecgpmqp/image/upload/v1763883053/complaintTracking_vhtjfn.png",
    tags: ["Node.js", "NextAuth.js", "Tailwind CSS", "MongoDB", "React.js"],
    demoUrl: "#",
    githubUrl: "",
    features: [
      "Role-based access for students, wardens, chief wardens, and supervisors",
      "Easy complaint submission with category and priority options",
      "Real-time tracking of complaint status",
      "Student dashboard to view and manage submitted complaints",
      "Warden dashboard for assigning and resolving complaints",
      "Chief Warden dashboard for overseeing and managing complaints across hostels",
      "Supervisor dashboard for monitoring and resolving assigned complaints",
      "Centralized database integration for efficient communication and record-keeping",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-10 max-w-6xl mx-auto px-5 mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group transition duration-500 hover:shadow-lg hover:translate-y-1"
          >
            {/* Project Image */}
            <div className="overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Project Details */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-2">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-700 dark:text-gray-300"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-2">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition flex items-center"
                >
                  🔗 Live
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-sm rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center"
                  >
                    💻 Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
