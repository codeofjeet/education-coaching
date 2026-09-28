import {
  FaChalkboardTeacher,
  FaCheckCircle,
  FaComments,
  FaLightbulb,
  FaBookReader,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    title: "Concept-Based Learning",
    description:
      "Students are encouraged to understand concepts clearly instead of relying only on memorisation.",
    icon: FaLightbulb,
  },
  {
    title: "Experienced Guidance",
    description:
      "Focused academic guidance helps students understand their subjects and improve their learning approach.",
    icon: FaChalkboardTeacher,
  },
  {
    title: "Regular Practice",
    description:
      "Consistent practice helps students strengthen concepts and develop confidence in their studies.",
    icon: FaBookReader,
  },
  {
    title: "Student-Focused Approach",
    description:
      "Teaching is designed around students' learning needs, questions, and academic development.",
    icon: FaComments,
  },
  {
    title: "Continuous Improvement",
    description:
      "Students can identify areas that need improvement and work progressively towards stronger understanding.",
    icon: FaChartLine,
  },
  {
    title: "Strong Foundation",
    description:
      "A strong academic foundation helps students prepare confidently for their next level of education.",
    icon: FaCheckCircle,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Gyan Kunj
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A Learning Approach Focused on
            <span className="text-blue-700">
              {" "}
              Student Growth
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            We aim to create a learning environment where students can
            understand their subjects, practise consistently, ask questions,
            and develop confidence.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Number */}
                <span className="absolute right-5 top-4 text-5xl font-black text-slate-100 transition group-hover:text-blue-50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                  <Icon className="text-2xl" />
                </div>

                {/* Content */}
                <h3 className="relative mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="relative mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-6 h-1 w-10 rounded-full bg-orange-400 transition-all duration-300 group-hover:w-16" />
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-blue-700">
          <div className="grid items-center gap-8 px-7 py-10 sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-12">

            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-orange-300">
                Our Teaching Philosophy
              </span>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Understand the concept.
                <br />
                Practise the skill.
                <br />
                Build the confidence.
              </h3>
            </div>

            <div>
              <p className="leading-7 text-blue-100">
                Every student learns differently. Our goal is to provide
                clear explanations, meaningful practice, and academic
                guidance that helps students become more confident in
                their learning journey.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                  Clear Concepts
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                  Regular Practice
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                  Academic Guidance
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}