import { useState } from "react";

export default function Hero() {
  return (
    <section className="py-6 md:py-10 px-5 mx-auto">
      <div className="grid md:grid-cols-3 gap-10 items-center max-w-6xl mx-auto">
        {/* Left Content */}
        <div className="space-y-6 md:col-span-2 animate-fadeIn">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Aditya Kumar
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              Backend Developer — Node.js & TypeScript
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <span>
                <img
                  src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
                  alt="gmail"
                  className="w-5 h-5"
                />
              </span>
              <a href="mailto:haquedot@gmail.com">asr341025@gmail.com</a>
            </div>
            <div className="flex items-center gap-1">
              <span>
                <img
                  src="https://img.icons8.com/?size=100&id=13800&format=png&color=000000"
                  alt="pin"
                  className="w-5 h-5"
                />
              </span>
              <span>Kota, Rajasthan , India</span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Backend-focused developer building scalable APIs, reliable data
            systems and production-ready services using Node.js, TypeScript,
            SQL/NoSQL databases, Docker and cloud platforms. Practicing DSA in
            TypeScript and learning Low-Level Design (LLD) to strengthen system
            design and interview readiness.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <a
              href="https://drive.google.com/file/d/1pu0TdnJEzQCdIYGqnFEHgrDW_ldtmgK3/view?usp=sharing"
              target="_blank"
              download
              className="px-3 py-1.5 text-xs sm:text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition flex gap-2"
            >
              <img
                src="https://img.icons8.com/?size=100&id=115635&format=png&color=000000"
                alt="logo"
                className="w-5 h-5"
              />{" "}
              Resume
            </a>
              <a
                href="https://github.com/coderAdityaKumar"
                target="_blank"
                className="px-3 py-1.5 text-xs sm:text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition flex gap-2"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000"
                  alt="logo"
                  className="w-5 h-5"
                /> GitHub
              </a>
            <a
              href="mailto:asr341025@gmail.com"
              target="_blank"
              className="px-3 py-1.5 text-xs sm:text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition flex gap-2"
            >
              <img
                src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
                alt="logo"
                className="w-5 h-5"
              />{" "}
              Mail
            </a>
            <a
              href="www.linkedin.com/in/aditya-kumar-backend"
              target="_blank"
              className="px-3 py-1.5 text-xs sm:text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition flex gap-2"
            >
              <img
                src="https://img.icons8.com/?size=100&id=108786&format=png&color=000000"
                alt="logo"
                className="w-5 h-5"
              /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right Tech Grid */}
        <div className="flex justify-center h-48 md:h-auto animate-zoomIn">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
            {/* Tech Grid */}
            <div className="absolute inset-0 grid grid-cols-2 gap-2 sm:gap-4 p-2 sm:p-4">
                {/* Tech tiles - Backend focused */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center">
                  <span className="text-4xl">
                    <img
                      src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
                      alt="nodejs"
                      className="w-10 h-10 animate-pulse"
                    />
                  </span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center">
                  <span className="text-4xl">
                    <img
                      src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"
                      alt="typescript"
                      className="w-10 h-10 animate-pulse"
                    />
                  </span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center">
                  <span className="text-4xl">
                    <img
                      src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
                      alt="database"
                      className="w-10 h-10 animate-pulse"
                    />
                  </span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center">
                  <span className="text-4xl">
                    <img
                      src="https://img.icons8.com/?size=100&id=22813&format=png&color=000000"
                      alt="docker"
                      className="w-10 h-10 animate-pulse"
                    />
                  </span>
                </div>
            </div>

            {/* Floating Badges */}
            <span className="absolute -top-3 -left-3 bg-white dark:bg-gray-900 dark:text-white px-2 py-1 rounded-full text-xs shadow-md border animate-bounce delay-1000">
              Node Js
            </span>
            <span className="absolute -bottom-3 -right-3 bg-white dark:bg-gray-900 dark:text-white px-2 py-1 rounded-full text-xs shadow-md border animate-bounce delay-1000">
              Docker
            </span>
            <span className="absolute -top-3 -right-3 bg-white dark:bg-gray-900 dark:text-white px-2 py-1 rounded-full text-xs shadow-md border animate-bounce delay-1000">
              Typescript
            </span>
            <span className="absolute -bottom-3 -left-3 bg-white dark:bg-gray-900 dark:text-white px-2 py-1 rounded-full text-xs shadow-md border animate-bounce delay-1000">
              MongoDB
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
