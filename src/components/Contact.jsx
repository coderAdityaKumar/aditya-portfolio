
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSuccess(false)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error(data.message || "Failed to send message")
      }
    } catch (error) {
      alert(error.message || "Failed to send message")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-10 max-w-6xl mx-auto px-5 mx-auto">
      <h2 className="text-3xl font-bold mb-10">Contact Me</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Get In Touch</h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">📧</div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:haquedot@gmail.com" className="font-medium hover:underline">
                  asr341025@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">📞</div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <a href="tel:7502461630" className="font-medium hover:underline">
                  +91 9784258968
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">📍</div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">Kota, India</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">💼</div>
              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <a
                  href="www.linkedin.com/in/dev-aditya-kumar"
                  target="_blank"
                  className="font-medium hover:underline"
                >
                  linkedin.com/in/dev-aditya-kumar
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        {/* <div>
          {isSuccess ? (
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800 text-center">
              <div className="flex flex-col items-center gap-4">
                <span className="text-4xl">✅</span>
                <h3 className="text-xl font-semibold">Message Sent Successfully!</h3>
                <p className="text-gray-500">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm">
                      Name
                    </label>
                    <input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 justify-center">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 
                          5.291A7.962 7.962 0 014 12H0c0 3.042 
                          1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Submit Message"
                  )}
                </button>
              </form>
            </>
          )}
        </div> */}
      </div>
    </section>
  )
}