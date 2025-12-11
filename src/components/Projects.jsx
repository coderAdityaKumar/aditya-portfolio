const projects = [
  {
    logo: "public/images/chess-logo.svg",
    title: "Real-Time Chess Game",
    description:
      "A real-time multiplayer chess application that lets two players play live while others spectate. Built with Node.js, Express, and Socket.io, it validates moves using chess.js and synchronizes board state across all connected clients.",
    image:
      "https://raw.githubusercontent.com/coderAdityaKumar/aditya-portfolio/main/src/assets/chess.png",
    tags: ["Node.js", "Express", "Socket.io", "chess.js", "EJS", "WebSockets"],
    demoUrl: "http://localhost:3000/",
    githubUrl: "https://github.com/coderAdityaKumar/Real-Time-Chess-Game",
    features: [
      "Real-time multiplayer gameplay using Socket.io",
      "Automatic player role assignment (White / Black) and spectator mode",
      "Legal move validation with chess.js",
      "Live board synchronization for all connected clients",
      "Simple EJS-based frontend with static assets served from public",
    ],
  },
  {
    logo: "public/images/tracker-logo.svg",
    title: "Real-Time Device Tracker",
    description:
      "A real-time location tracking application that displays multiple users' geographic locations on a live interactive map. Built with Node.js, Express, and Socket.io, it uses the Geolocation API to continuously track device positions and Leaflet.js for dynamic map rendering with instant synchronization across all connected clients.",
    image:
      "https://raw.githubusercontent.com/coderAdityaKumar/aditya-portfolio/main/src/assets/realtime-tracker.png",
    tags: [
      "Node.js",
      "Express",
      "Socket.io",
      "Leaflet.js",
      "Geolocation API",
      "OpenStreetMap",
      "EJS",
      "WebSockets",
    ],
    demoUrl: "http://localhost:3200/",
    githubUrl: "https://github.com/coderAdityaKumar/Real-Time-Device-Tracking-",
    features: [
      "Real-time location tracking using Geolocation API with watchPosition()",
      "Automatic marker creation and updates for connected users",
      "Live map synchronization across all clients using Socket.io",
      "User disconnect handling with automatic marker removal",
      "Interactive Leaflet.js map with OpenStreetMap tile layer",
      "Responsive UI with animated status indicator",
      "High-accuracy GPS tracking with continuous position updates",
    ],
  },
  {
    logo: "public/images/sadhna-logo.svg",
    title: "Sadhna Tracker - Backend API",
    description:
      "A comprehensive REST API for tracking spiritual practices and daily goals. Built with Node.js, Express, and MongoDB, it provides secure user authentication, sadhna progress tracking, and daily goal management with JWT-based authorization and email verification.",
    image:
      "https://raw.githubusercontent.com/coderAdityaKumar/aditya-portfolio/main/src/assets/sadhna-tracker.png",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Mongoose",
      "Nodemailer",
      "Bcrypt",
      "Socket.io",
    ],
    demoUrl: "http://your-deployed-url.com/",
    githubUrl: "https://github.com/your-username/Sadhna-Tracker-App-Backend",
    features: [
      "Secure user authentication with JWT tokens and email verification",
      "Bcrypt password hashing and reset functionality with secure tokens",
      "Daily sadhna tracking with Mangala Arti, study hours, chanting rounds, and book reading",
      "Role-based access control (User/Admin) with protected routes",
      "Daily goals management with progress checking and validation",
      "CORS-enabled API with rate limiting and Helmet security headers",
      "MongoDB Mongoose ODM with comprehensive data validation",
      "Email notifications for password recovery and user verification",
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
                src={project.image}
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
