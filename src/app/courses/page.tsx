import Link from "next/link";
import {
  FaArrowRight,
  FaBook,
  FaCalculator,
  FaChalkboardTeacher,
  FaDatabase,
  FaFlask,
  FaGraduationCap,
  FaLaptopCode,
  FaNetworkWired,
} from "react-icons/fa";

const academicClasses = [
  {
    className: "Class 6",
    category: "Foundation",
    description:
      "Build a strong foundation in core academic subjects and develop effective study habits.",
    icon: FaBook,
  },
  {
    className: "Class 7",
    category: "Foundation",
    description:
      "Strengthen fundamental concepts through clear explanations and regular practice.",
    icon: FaCalculator,
  },
  {
    className: "Class 8",
    category: "Foundation",
    description:
      "Develop deeper understanding of subjects and prepare for the next academic level.",
    icon: FaFlask,
  },
  {
    className: "Class 9",
    category: "Academic Preparation",
    description:
      "Focus on strong concepts, consistent practice, and preparation for secondary education.",
    icon: FaGraduationCap,
  },
  {
    className: "Class 10",
    category: "Board Preparation",
    description:
      "Structured academic support to help students prepare for their Class 10 examinations.",
    icon: FaChalkboardTeacher,
  },
  {
    className: "Class 11",
    category: "Senior Secondary",
    description:
      "Develop deeper subject knowledge and prepare for higher academic studies.",
    icon: FaGraduationCap,
  },
  {
    className: "Class 12",
    category: "Senior Secondary",
    description:
      "Focused academic learning and preparation for Class 12 and future studies.",
    icon: FaGraduationCap,
  },
  {
    className: "Class 11 Computer",
    title: "Computer Studies",
    description:
      "Learn Python programming, Networking fundamentals, and SQL database concepts.",
    icon: FaLaptopCode,
    color: "blue",
    subjects: ["Python", "Networking", "SQL"],
  },
  {
    className: "Class 12 Computer",
    title: "Computer Studies",
    description:
      "Strengthen programming and database skills with Python, Networking, and SQL.",
    icon: FaDatabase,
    color: "orange",
    subjects: ["Python", "Networking", "SQL"],
  },
];

const computerSubjects = [
  {
    name: "Python",
    description:
      "Learn programming fundamentals, problem solving, and Python programming.",
    icon: FaLaptopCode,
  },
  {
    name: "Networking",
    description:
      "Understand computer networks, communication, protocols, and networking fundamentals.",
    icon: FaNetworkWired,
  },
  {
    name: "SQL",
    description:
      "Learn database concepts, SQL queries, data management, and relational databases.",
    icon: FaDatabase,
  },
];

export default function CoursesPage() {
  return (
    <main>

      {/* Page Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-700/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">

            <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              Our Courses
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Coaching for
              <span className="block text-blue-400">
                Classes 6th to 12th
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Explore the academic programs available at Gyan Kunj Coaching
              Centre, designed to support students through their different
              stages of learning.
            </p>

          </div>
        </div>
      </section>

      {/* Academic Classes */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
              Academic Classes
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Choose Your
              <span className="text-blue-700"> Class</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Gyan Kunj provides academic support for students from Class 6th
              to Class 12th with a focus on understanding, practice, and
              continuous improvement.
            </p>
          </div>

          {/* Class Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {academicClasses.map((course) => {
              const Icon = course.icon;

              return (
                <div
                  key={course.className}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                      <Icon className="text-2xl" />
                    </div>

                    <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                      {course.category}
                    </span>

                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {course.className}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {course.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
                  >
                    Enquire About This Class
                    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Computer Education */}
      <section className="bg-slate-900 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Content */}
            <div>

              <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                Computer Education
              </span>

              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                Computer Studies for
                <span className="text-orange-400">
                  {" "}
                  Classes 11th & 12th
                </span>
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                Students in Classes 11th and 12th can develop their computer
                knowledge through programming, networking, and database
                concepts.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <FaChalkboardTeacher className="text-xl text-orange-400" />

                <p className="text-sm text-slate-300">
                  Practical and concept-focused computer learning
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Enquire About Computer Classes
                <FaArrowRight className="text-xs" />
              </Link>

            </div>

            {/* Subjects */}
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">

              {computerSubjects.map((subject) => {
                const Icon = subject.icon;

                return (
                  <div
                    key={subject.name}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
                  >
                    <div className="flex items-start gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                        <Icon className="text-xl" />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {subject.name}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {subject.description}
                        </p>
                      </div>

                    </div>
                  </div>
                );
              })}

            </div>

          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

          <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Our Approach
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Learn. Practise. Improve.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Our courses are designed around clear concepts, regular practice,
            academic guidance, and continuous improvement. The aim is to help
            students develop understanding and confidence throughout their
            learning journey.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
              Clear Concepts
            </span>

            <span className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
              Regular Practice
            </span>

            <span className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
              Academic Guidance
            </span>

            <span className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
              Student Growth
            </span>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Have Questions About Our Classes?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Contact Gyan Kunj Coaching Centre to get information about
            subjects, batches, timings, and admissions.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Contact Us
            <FaArrowRight className="text-xs" />
          </Link>

        </div>
      </section>

    </main>
  );
}