"use client"

const skillCategories = [
  {
    title: "Languages & Core",
    skills: [
      { name: "TypeScript", icon: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000" },
      { name: "JavaScript", icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000" },
    ],
  },
  {
    title: "Frameworks & APIs",
    skills: [
      { name: "Node.js", icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" },
      { name: "Express.js", icon: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000" },
      { name: "NestJS", icon: "https://img.icons8.com/?size=100&id=9ESZMOeUioJS&format=png&color=000000" },
    ],
  },
  {
    title: "Databases & Caching",
    skills: [
      { name: "MongoDB", icon: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" },
      { name: "Redis", icon: "https://img.icons8.com/?size=100&id=pHS3eRpynIRQ&format=png&color=000000" },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: "https://img.icons8.com/?size=100&id=22813&format=png&color=000000" },
      { name: "Kubernetes", icon: "https://img.icons8.com/?size=100&id=cvzmaEA4kC0o&format=png&color=000000" },
      { name: "AWS", icon: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000" },
    ],
  },
  {
    title: "Testing & Tools",
    skills: [
      { name: "Jest", icon: "https://img.icons8.com/?size=100&id=7xG5LhKApf4C&format=png&color=000000" },
      { name: "Supertest", icon: "https://img.icons8.com/?size=100&id=122581&format=png&color=000000" },
      { name: "Git", icon: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" },
    ],
  },
  {
    title: "Algorithms & Design",
    skills: [
      { name: "DSA (TypeScript)", icon: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000" },
      { name: "Low-Level Design", icon: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000" },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-5 mx-auto">
      <h2 className="text-3xl font-bold mb-6 animate-fadeIn">My Skills</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-10 animate-fadeIn delay-200">
        Technologies and tools I've worked with throughout my projects and experience
      </p>

      <div className="grid gap-10">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="space-y-4 transform transition duration-500 hover:translate-x-1"
          >
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 group animate-fadeInUp"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div
                    className="w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xl 
                    group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors duration-300 
                    border border-transparent group-hover:border-blue-400"
                  ><img src={skill.icon} alt="icon" className="w-10 h-10" />
                    
                  </div>
                  <span className="text-xs text-center text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

