import {
  FaBookOpen,
  FaCalculator,
  FaFlask,
  FaLanguage,
  FaLaptopCode,
  FaNetworkWired,
  FaDatabase,
  FaAtom,
  FaDna,
} from "react-icons/fa";

const subjects = [
  {
    name: "Mathematics",
    description:
      "Build logical thinking, problem-solving skills, and strong mathematical concepts.",
    icon: FaCalculator,
    color: "blue",
  },
  {
    name: "Science",
    description:
      "Understand scientific concepts through clear explanations and practical learning.",
    icon: FaFlask,
    color: "orange",
  },
  {
    name: "Physics",
    description:
      "Develop a strong understanding of physical concepts, principles, and applications.",
    icon: FaAtom,
    color: "blue",
  },
  {
    name: "Chemistry",
    description:
      "Learn chemical concepts, reactions, and fundamentals with structured guidance.",
    icon: FaFlask,
    color: "orange",
  },
  {
    name: "Biology",
    description:
      "Understand biological concepts through systematic and concept-based learning.",
    icon: FaDna,
    color: "blue",
  },
  {
    name: "English",
    description:
      "Improve grammar, comprehension, writing, communication, and language skills.",
    icon: FaLanguage,
    color: "orange",
  },
  {
    name: "Python",
    description:
      "Learn programming fundamentals and problem-solving using Python.",
    icon: FaLaptopCode,
    color: "blue",
  },
  {
    name: "Networking",
    description:
      "Understand computer networks, communication, protocols, and networking fundamentals.",
    icon: FaNetworkWired,
    color: "orange",
  },
  {
    name: "SQL",
    description:
      "Learn databases, SQL queries, data management, and database concepts.",
    icon: FaDatabase,
    color: "blue",
  },
];

export default function Subjects() {
  return (
    <section
      id="subjects"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
            Subjects We Cover
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Learn With
            <span className="text-blue-700"> Strong Concepts</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Our teaching approach focuses on helping students understand
            important concepts, practise regularly, and develop confidence
            across their subjects.
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => {
            const Icon = subject.icon;
            const isBlue = subject.color === "blue";

            return (
              <div
                key={subject.name}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">

                  {/* Icon */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                      isBlue
                        ? "bg-blue-50 text-blue-700"
                        : "bg-orange-50 text-orange-600"
                    }`}
                  >
                    <Icon className="text-xl" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {subject.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {subject.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Computer Education Highlight */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-slate-900">
          <div className="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:p-12">

            {/* Content */}
            <div>
              <span className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                Computer Education
              </span>

              <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                Build Practical Computer Skills
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                For Classes 11 and 12, students can develop their computer
                knowledge through programming, networking, and database
                concepts.
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

            {/* Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="grid grid-cols-3 gap-4">

                <div className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-white/10 text-white sm:h-28 sm:w-28">
                  <FaLaptopCode className="text-3xl text-blue-300" />
                  <span className="mt-2 text-xs font-semibold">
                    Python
                  </span>
                </div>

                <div className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-white/10 text-white sm:h-28 sm:w-28">
                  <FaNetworkWired className="text-3xl text-orange-300" />
                  <span className="mt-2 text-xs font-semibold">
                    Network
                  </span>
                </div>

                <div className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-white/10 text-white sm:h-28 sm:w-28">
                  <FaDatabase className="text-3xl text-blue-300" />
                  <span className="mt-2 text-xs font-semibold">
                    SQL
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}