import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaChalkboardTeacher,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const points = [
  "Concept-focused teaching",
  "Regular academic guidance",
  "Individual attention to students",
  "Strong foundation for higher classes",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            About Gyan Kunj
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Building Strong Concepts for a
            <span className="text-blue-700"> Better Academic Future</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Gyan Kunj Coaching Centre is a learning centre in Kota focused
            on helping students build strong academic fundamentals through
            clear concepts, regular practice, and proper guidance.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">

          {/* Left Visual */}
          <div className="relative">
            <div className="rounded-3xl bg-slate-100 p-5 sm:p-8">

              <div className="rounded-2xl bg-blue-700 p-8 shadow-xl sm:p-10">

                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-lg">
                  <FaChalkboardTeacher className="text-4xl" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white sm:text-3xl">
                  Learning That Builds Confidence
                </h3>

                <p className="mt-4 leading-7 text-blue-100">
                  Our approach focuses on understanding concepts instead of
                  simply memorising answers. Students are encouraged to ask
                  questions, practise regularly, and develop confidence in
                  their subjects.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">

                  <div className="rounded-xl bg-white/10 p-5">
                    <FaLightbulb className="text-2xl text-orange-300" />

                    <p className="mt-3 text-sm font-semibold text-white">
                      Clear Concepts
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-5">
                    <FaUsers className="text-2xl text-orange-300" />

                    <p className="mt-3 text-sm font-semibold text-white">
                      Student Focus
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -right-3 hidden rounded-xl bg-white p-4 shadow-xl sm:block md:-right-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <FaCheckCircle />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Our Focus
                  </p>

                  <p className="text-sm font-bold text-slate-800">
                    Strong Foundation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Our Approach
            </span>

            <h3 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Helping students understand,
              <span className="text-blue-700"> learn and grow.</span>
            </h3>

            <p className="mt-5 leading-7 text-slate-600">
              At Gyan Kunj, we believe that a strong academic foundation
              helps students approach their studies with greater clarity
              and confidence. Our teaching approach is designed around
              understanding, practice, and continuous improvement.
            </p>

            {/* Points */}
            <div className="mt-7 space-y-4">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="shrink-0 text-lg text-blue-700" />

                  <span className="text-sm font-medium text-slate-700 sm:text-base">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Know More About Us
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}