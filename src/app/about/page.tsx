import Link from "next/link";
import {
  FaArrowRight,
  FaBookOpen,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaGraduationCap,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const approachPoints = [
  {
    title: "Understand the Concept",
    description:
      "Students are encouraged to understand the fundamentals before moving to more advanced topics.",
    icon: FaLightbulb,
  },
  {
    title: "Learn Through Practice",
    description:
      "Regular practice helps students apply what they learn and identify areas that need improvement.",
    icon: FaBookOpen,
  },
  {
    title: "Ask and Explore",
    description:
      "Students are encouraged to ask questions and participate actively in the learning process.",
    icon: FaUsers,
  },
  {
    title: "Build Confidence",
    description:
      "A supportive learning environment helps students approach their studies with greater confidence.",
    icon: FaGraduationCap,
  },
];

const focusPoints = [
  "Classes 6th to 12th",
  "Concept-based learning",
  "Regular academic practice",
  "Student-focused guidance",
  "Strong academic foundation",
  "Computer education for Classes 11th and 12th",
];

export default function AboutPage() {
  return (
    <main>

      {/* Page Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-700/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">

            <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              About Gyan Kunj
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Helping Students
              <span className="block text-blue-400">
                Learn With Confidence
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Gyan Kunj Coaching Centre, Kota focuses on helping students
              from Class 6th to 12th develop strong academic concepts,
              consistent study habits, and confidence in their learning.
            </p>

          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Visual */}
            <div className="relative">
              <div className="rounded-3xl bg-slate-100 p-5 sm:p-8">

                <div className="rounded-2xl bg-blue-700 p-8 shadow-xl sm:p-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-700">
                    <FaChalkboardTeacher className="text-3xl" />
                  </div>

                  <h2 className="mt-7 text-2xl font-bold text-white sm:text-3xl">
                    Learning With Purpose
                  </h2>

                  <p className="mt-4 leading-7 text-blue-100">
                    We aim to provide students with a focused learning
                    environment where they can understand concepts,
                    practise regularly, and develop their academic skills.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white/10 p-5">
                      <FaLightbulb className="text-2xl text-orange-300" />
                      <p className="mt-3 text-sm font-semibold text-white">
                        Clear Concepts
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/10 p-5">
                      <FaGraduationCap className="text-2xl text-orange-300" />
                      <p className="mt-3 text-sm font-semibold text-white">
                        Academic Growth
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                Who We Are
              </span>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                A focused learning centre for
                <span className="text-blue-700">
                  {" "}
                  Classes 6th to 12th
                </span>
              </h2>

              <p className="mt-6 leading-7 text-slate-600">
                Gyan Kunj Coaching Centre is a coaching centre in Kota
                dedicated to supporting students in their academic journey.
                Our approach focuses on clear explanations, regular
                practice, and meaningful academic guidance.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                We aim to help students build a strong foundation in their
                subjects so they can approach their studies with better
                understanding and confidence.
              </p>

              {/* Points */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {focusPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-blue-700" />

                    <span className="text-sm font-medium text-slate-700">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Our Direction
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Our Vision & Mission
            </h2>

            <p className="mt-5 text-slate-600">
              Our focus is to create a learning environment that encourages
              understanding, discipline, curiosity, and continuous academic
              improvement.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* Vision */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <FaLightbulb className="text-2xl" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Our Vision
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                To build a learning environment where students develop
                strong academic fundamentals, curiosity, confidence, and
                the ability to approach new challenges with clarity.
              </p>
            </div>

            {/* Mission */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <FaGraduationCap className="text-2xl" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Our Mission
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                To support students through clear teaching, regular
                practice, academic guidance, and a student-focused
                approach to learning.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Heading */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                Our Teaching Approach
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Learning is more than
                <span className="text-blue-700">
                  {" "}
                  memorising.
                </span>
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                We believe students learn better when they understand why
                something works and get opportunities to practise what they
                learn.
              </p>

              <Link
                href="/#courses"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Explore Our Classes
                <FaArrowRight className="text-xs" />
              </Link>
            </div>

            {/* Approach Cards */}
            <div className="grid gap-5 sm:grid-cols-2">
              {approachPoints.map((point, index) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                        <Icon className="text-xl" />
                      </div>

                      <span className="text-3xl font-bold text-slate-100">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-900">
                      {point.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Computer Education */}
      <section className="bg-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                Computer Education
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                Practical Computer Learning for
                <span className="text-orange-400">
                  {" "}
                  Classes 11th & 12th
                </span>
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                Students in Classes 11th and 12th can develop their
                computer knowledge through programming, networking, and
                database concepts.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white">
                  Python
                </span>

                <span className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white">
                  Networking
                </span>

                <span className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white">
                  SQL
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white/5 p-6 text-center">
                <p className="text-2xl font-bold text-blue-300">
                  Python
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Programming
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-6 text-center">
                <p className="text-2xl font-bold text-orange-300">
                  Network
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Fundamentals
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-6 text-center">
                <p className="text-2xl font-bold text-blue-300">
                  SQL
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Database
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Start the Learning Journey?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Contact Gyan Kunj Coaching Centre to learn more about classes,
            subjects, batches, and admission-related information.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Contact Gyan Kunj
            <FaArrowRight className="text-xs" />
          </Link>

        </div>
      </section>

    </main>
  );
}