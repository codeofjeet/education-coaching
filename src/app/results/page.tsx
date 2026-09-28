import Link from "next/link";
import {
  FaArrowLeft,
  FaBook,
  FaChartLine,
  FaCheckCircle,
  FaPhoneAlt,
  FaStar,
  FaUserGraduate,
} from "react-icons/fa";

const academicGoals = [
  {
    icon: FaBook,
    title: "Strong Concepts",
    description:
      "Build a clear understanding of fundamental concepts before moving to advanced topics.",
  },
  {
    icon: FaChartLine,
    title: "Continuous Improvement",
    description:
      "Encourage students to identify their learning gaps and improve through regular practice.",
  },
  {
    icon: FaUserGraduate,
    title: "Student Confidence",
    description:
      "Help students become more confident in understanding and solving academic problems.",
  },
  {
    icon: FaStar,
    title: "Academic Growth",
    description:
      "Focus on consistent academic progress through structured learning and guidance.",
  },
];

const learningFocus = [
  "Concept clarity",
  "Regular practice",
  "Problem solving",
  "Revision",
  "Academic guidance",
  "Continuous improvement",
];

export default function ResultsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-700/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              <FaChartLine />
              Academic Progress
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building a Strong
              <span className="block text-blue-400">
                Academic Foundation
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              At Gyan Kunj, our focus is on helping students understand
              concepts, practice consistently and make steady academic
              progress.
            </p>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
            Our Beginning
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Growing With Our
            <span className="text-blue-700"> Students</span>
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Gyan Kunj Coaching Centre is at the beginning of its academic
            journey. As the centre grows, verified student achievements,
            examination results and academic milestones can be added to this
            page.
          </p>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <FaCheckCircle className="mx-auto text-3xl text-blue-700" />

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Focus on Genuine Academic Progress
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              We believe academic achievements should be presented using
              genuine and verifiable information.
            </p>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Academic Goals
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              What We Aim to
              <span className="text-blue-700"> Achieve</span>
            </h2>

            <p className="mt-5 text-slate-600">
              Our academic approach focuses on long-term learning rather than
              only examination preparation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {academicGoals.map((goal) => {
              const Icon = goal.icon;

              return (
                <div
                  key={goal.title}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="text-2xl" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {goal.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {goal.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Focus */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-block rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
              Learning Focus
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Steps Toward
              <span className="text-blue-700"> Better Results</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Good academic results are supported by consistent learning,
              practice and revision. Our teaching process aims to help
              students develop these habits.
            </p>

            <Link
              href="/courses"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Explore Courses
            </Link>
          </div>

          <div className="rounded-3xl bg-slate-900 p-7 sm:p-9">
            <h3 className="text-xl font-bold text-white">
              Our Learning Priorities
            </h3>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {learningFocus.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 p-4"
                >
                  <FaCheckCircle className="shrink-0 text-blue-400" />
                  <span className="text-sm font-medium text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Results */}
      <section className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <FaChartLine className="mx-auto text-4xl text-blue-700" />

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            Results & Achievements
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Verified examination results, student achievements, academic
            milestones and other genuine accomplishments can be displayed
            here as they become available.
          </p>

          <div className="mt-7 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-blue-100">
            <p className="text-sm font-medium text-slate-700">
              No results or achievement figures have been published yet.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Start Your Academic Journey With Gyan Kunj
          </h2>

          <p className="mt-4 text-slate-300">
            Contact us to learn more about classes, courses and admission
            information.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            <FaPhoneAlt className="text-xs" />
            Contact Us
          </Link>
        </div>
      </section>

      {/* Back */}
      <section className="bg-white py-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          <FaArrowLeft className="text-xs" />
          Back to Home
        </Link>
      </section>
    </main>
  );
}