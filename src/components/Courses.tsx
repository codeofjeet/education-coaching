import Link from "next/link";
import {
  FaArrowRight,
  FaBook,
  FaCalculator,
  FaFlask,
  FaGraduationCap,
  FaLaptopCode,
  FaNetworkWired,
  FaDatabase,
  FaLanguage,
  FaUniversity,
} from "react-icons/fa";

const courses = [
  {
    className: "Class 6",
    title: "Foundation",
    description:
      "Build strong academic fundamentals with clear concepts and regular practice.",
    icon: FaBook,
    color: "blue",
  },
  {
    className: "Class 7",
    title: "Foundation",
    description:
      "Strengthen subject knowledge and develop effective learning habits.",
    icon: FaCalculator,
    color: "orange",
  },
  {
    className: "Class 8",
    title: "Foundation",
    description:
      "Develop strong concepts and prepare for the academic challenges ahead.",
    icon: FaFlask,
    color: "blue",
  },
  {
    className: "Class 9",
    title: "Academic Preparation",
    description:
      "Focus on concepts, practice, and preparation for secondary-level studies.",
    icon: FaGraduationCap,
    color: "orange",
  },
  {
    className: "Class 10",
    title: "Board Preparation",
    description:
      "Structured learning and practice to help students prepare for Class 10.",
    icon: FaUniversity,
    color: "blue",
  },
  {
    className: "Class 11",
    title: "Senior Secondary",
    description:
      "Develop deeper subject understanding and prepare for higher studies.",
    icon: FaGraduationCap,
    color: "orange",
  },
  {
    className: "Class 12",
    title: "Senior Secondary",
    description:
      "Focused academic support for Class 12 studies and future academic goals.",
    icon: FaLanguage,
    color: "blue",
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

export default function Courses() {
  return (
    <section
      id="courses"
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Classes
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Coaching for
            <span className="text-blue-700">
              {" "}
              Classes 6th to 12th
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Our academic programs are designed to help students understand
            their subjects, strengthen fundamentals, and develop consistent
            study habits.
          </p>
        </div>

        {/* Course Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon;
            const isBlue = course.color === "blue";

            return (
              <div
                key={course.className}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Icon + Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${
                      isBlue
                        ? "bg-blue-50 text-blue-700"
                        : "bg-orange-50 text-orange-500"
                    }`}
                  >
                    <Icon className="text-2xl" />
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      isBlue
                        ? "bg-blue-50 text-blue-700"
                        : "bg-orange-50 text-orange-600"
                    }`}
                  >
                    {course.title}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {course.className}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {course.description}
                </p>

                {/* Computer Subjects */}
                {"subjects" in course && course.subjects && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {course.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bottom Link */}
                <Link
                  href="/contact"
                  className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition ${
                    isBlue
                      ? "text-blue-700 hover:text-blue-800"
                      : "text-orange-600 hover:text-orange-700"
                  }`}
                >
                  Enquire About This Class
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Looking for more information about classes, subjects, or batches?
          </p>

          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Contact Gyan Kunj
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

      </div>
    </section>
  );
}