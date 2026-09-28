import Link from "next/link";
import {
  FaArrowRight,
  FaBookOpen,
  FaGraduationCap,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Decorative shapes */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100 opacity-60 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-100 opacity-60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

        {/* Left Content */}
        <div>
          {/* Small Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <FaGraduationCap />
            Classes 6th to 12th
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build Your
            <span className="block text-blue-700">
              Strong Academic Future
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Welcome to Gyan Kunj Coaching Centre, Kota. We focus on
            concept-based learning, personal guidance, and a strong
            academic foundation for students from Class 6th to 12th.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-800"
            >
              Explore Courses
              <FaArrowRight className="text-xs" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-700 hover:text-blue-700"
            >
              <FaPhoneAlt className="text-xs" />
              Contact Us
            </Link>
          </div>

          {/* Quick Points */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <FaBookOpen />
              </span>
              Concept-Based Learning
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <FaGraduationCap />
              </span>
              Classes 6th – 12th
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative mx-auto w-full max-w-lg lg:ml-auto">

          {/* Main Card */}
          <div className="relative overflow-hidden rounded-3xl bg-blue-700 p-6 shadow-2xl sm:p-8">

            {/* Pattern */}
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-orange-400/20" />

            <div className="relative">

              {/* Illustration area */}
              <div className="flex min-h-[320px] items-center justify-center rounded-2xl bg-white/10 p-6">
                <div className="text-center text-white">

                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">
                    <FaGraduationCap className="text-5xl text-blue-700" />
                  </div>

                  <h2 className="mt-7 text-2xl font-bold sm:text-3xl">
                    Learn. Grow. Succeed.
                  </h2>

                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-blue-100">
                    A focused learning environment for students to strengthen
                    their concepts and academic skills.
                  </p>
                </div>
              </div>

              {/* Bottom information */}
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/10 p-4 text-center">
                  <p className="text-2xl font-bold text-white">6–12</p>
                  <p className="mt-1 text-xs text-blue-100">
                    Classes
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-4 text-center">
                  <p className="text-2xl font-bold text-white">
                    Kota
                  </p>
                  <p className="mt-1 text-xs text-blue-100">
                    Rajasthan
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-5 -left-4 hidden rounded-xl bg-white p-4 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <FaBookOpen />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Focus on
                </p>
                <p className="text-sm font-bold text-slate-800">
                  Strong Concepts
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}