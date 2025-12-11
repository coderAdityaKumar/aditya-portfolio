export default function DSA() {
  return (
    <section id="dsa" className="py-12 max-w-6xl mx-auto px-5">
      <h2 className="text-3xl font-bold mb-4">DSA & Low-Level Design</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        I practice Data Structures & Algorithms using TypeScript and work on
        Low-Level Design (LLD) problems to prepare for backend interviews and
        system design discussions. Below are topics I focus on and ways to
        explore my work.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Core Topics</h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
            <li>Arrays, Strings, Linked Lists</li>
            <li>Trees, Graphs, Heaps</li>
            <li>Sorting, Searching, Two-pointers</li>
            <li>Dynamic Programming & Greedy</li>
            <li>Design patterns for systems and services (LLD)</li>
          </ul>
        </div>

        <div className="p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Where to find my work</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">I keep solutions and design notes in GitHub repos and personal notes. Recommended next steps:</p>
          <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
            <li>Add a `dsA-typescript` folder in your GitHub with solved problems.</li>
            <li>Include short explanations and complexity analysis for each solution.</li>
            <li>Create 2–3 LLD notes (Parking Lot, Rate Limiter, URL Shortener) with diagrams and class sketches.</li>
          </ul>
          <div className="mt-3">
            <a href="https://github.com/coderAdityaKumar" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-gray-800 text-white rounded-md text-sm">GitHub</a>
            <a href="https://leetcode.com/u/AdityaKumarr/" target="_blank" rel="noopener noreferrer" className="ml-3 px-3 py-1.5 border rounded-md text-sm">LeetCode</a>
          </div>
        </div>
      </div>
    </section>
  )
}
