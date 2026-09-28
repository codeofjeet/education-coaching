import Link from "next/link";
import {
  FaArrowLeft,
  FaBookOpen,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaPhoneAlt,
  FaUserGraduate,
} from "react-icons/fa";

const facultyAreas = [
  {
    icon: FaBookOpen,
    title: "Mathematics",
    description:
      "Concept-focused teaching with regular practice and problem-solving guidance.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Science",
    description:
      "Clear explanation of concepts with an emphasis on understanding and application.",
  },
  {
    icon: FaLaptopCode,
    title: "Computer Science",
    description:
      "Practical computer education for Classes 11th and 12th covering Python, Networking and SQL.",
  },
];

export default function FacultyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-700/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              <FaChalkboardTeacher />
              Our Faculty
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Guidance That Supports
              <span className="block text-blue-400">
                Better Learning
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              At Gyan Kunj Coaching Centre, our teaching approach focuses on
              clear concepts, regular practice, academic guidance and
              individual attention.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
            Teaching Team
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Focused on
            <span className="text-blue-700"> Student Learning</span>
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Gyan Kunj is building a learning environment where students can
            understand concepts clearly, practice regularly and receive
            academic guidance throughout their learning journey.
          </p>
        </div>
      </section>

      {/* Faculty Areas */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Academic Areas
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Our Teaching
              <span className="text-blue-700"> Areas</span>
            </h2>

            <p className="mt-5 text-slate-600">
              Faculty information can be updated here as the coaching centre
              adds its complete teaching team.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {facultyAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="text-2xl" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Faculty Profiles Placeholder */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Meet Our
              <span className="text-blue-700"> Faculty</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Detailed faculty profiles will be added with verified
              information about each teacher.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <FaUserGraduate className="text-3xl" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  Faculty Member
                </h3>

                <p className="mt-2 text-sm font-medium text-blue-700">
                  Subject / Department
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Faculty profile details, qualification and experience will
                  be added after receiving the verified information.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="bg-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <FaChalkboardTeacher className="mx-auto text-4xl text-blue-400" />

          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            A Student-Focused Teaching Approach
          </h2>

          <p className="mt-5 leading-7 text-slate-300">
            Our approach is built around understanding concepts, asking
            questions, practicing regularly and improving step by step.
          </p>

          <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
            {[
              "Clear concept explanation",
              "Regular practice",
              "Problem-solving guidance",
              "Academic support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-sm font-medium text-slate-200"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-50 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Want to Know More About Gyan Kunj?
          </h2>

          <p className="mt-4 text-slate-600">
            Contact us to learn about classes, subjects and admission
            information.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800"
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