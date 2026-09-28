import {
  FaAward,
  FaBookOpen,
  FaChartLine,
  FaGraduationCap,
  FaStar,
} from "react-icons/fa";

const goals = [
  {
    icon: FaBookOpen,
    title: "Strong Concepts",
    description:
      "Help students develop a clear understanding of important academic concepts.",
  },
  {
    icon: FaChartLine,
    title: "Continuous Improvement",
    description:
      "Encourage regular practice and steady academic progress throughout the year.",
  },
  {
    icon: FaStar,
    title: "Student Confidence",
    description:
      "Create a learning environment where students feel comfortable asking questions and learning.",
  },
  {
    icon: FaAward,
    title: "Academic Growth",
    description:
      "Support students in developing the knowledge and skills needed for their future studies.",
  },
];

export default function Results() {
  return (
    <section
      id="results"
      className="bg-slate-900 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Our Academic Goals
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Building the Foundation for
            <span className="text-orange-400">
              {" "}
              Future Success
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            As a growing coaching centre, our focus is on creating a strong
            academic foundation and helping every student progress with
            confidence.
          </p>
        </div>

        {/* Goals */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((goal) => {
            const Icon = goal.icon;

            return (
              <div
                key={goal.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                  <Icon className="text-2xl" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-white">
                  {goal.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {goal.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Highlight */}
        <div className="mt-12 grid overflow-hidden rounded-3xl border border-white/10 bg-white/5 lg:grid-cols-2">

          {/* Left */}
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
              <FaGraduationCap className="text-3xl" />
            </div>

            <h3 className="mt-7 text-2xl font-bold text-white sm:text-3xl">
              A Strong Start for a
              <span className="text-blue-300">
                {" "}
                Bright Academic Journey
              </span>
            </h3>

            <p className="mt-5 leading-7 text-slate-300">
              Gyan Kunj is beginning its journey with a focus on quality
              teaching, strong fundamentals, regular practice, and meaningful
              academic guidance for students from Class 6th to 12th.
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center bg-blue-700 p-8 sm:p-10 lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
                Looking Ahead
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Results will follow consistent learning.
              </h3>

              <p className="mt-4 leading-7 text-blue-100">
                As students progress through the academic year, this section
                can be updated with genuine achievements, examination
                results, student milestones, and other accomplishments.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                  Learning
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                  Progress
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                  Achievement
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}