import {
  FaChalkboardTeacher,
  FaGraduationCap,
  FaUserTie,
} from "react-icons/fa";

const faculty = [
  {
    name: "Faculty Member",
    subject: "Mathematics",
    qualification: "Qualification to be added",
    experience: "Experience to be added",
    icon: FaChalkboardTeacher,
  },
  {
    name: "Faculty Member",
    subject: "Science",
    qualification: "Qualification to be added",
    experience: "Experience to be added",
    icon: FaGraduationCap,
  },
  {
    name: "Faculty Member",
    subject: "Computer Science",
    qualification: "Qualification to be added",
    experience: "Experience to be added",
    icon: FaUserTie,
  },
];

export default function Faculty() {
  return (
    <section
      id="faculty"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
            Our Faculty
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Meet the People Behind
            <span className="text-blue-700">
              {" "}
              the Learning
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Our faculty section will introduce the teachers and academic
            mentors who guide students throughout their learning journey.
          </p>
        </div>

        {/* Faculty Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faculty.map((teacher) => {
            const Icon = teacher.icon;

            return (
              <div
                key={`${teacher.subject}-${teacher.name}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image Placeholder */}
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100" />

                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg transition duration-300 group-hover:scale-105">
                    <Icon className="text-5xl" />
                  </div>

                  {/* Subject Badge */}
                  <span className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-blue-700 shadow-md">
                    {teacher.subject}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    {teacher.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-blue-700">
                    {teacher.subject} Faculty
                  </p>

                  <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                    <div className="flex items-start gap-3">
                      <FaGraduationCap className="mt-0.5 shrink-0 text-blue-700" />

                      <div>
                        <p className="text-xs text-slate-400">
                          Qualification
                        </p>

                        <p className="text-sm font-medium text-slate-700">
                          {teacher.qualification}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <FaChalkboardTeacher className="mt-0.5 shrink-0 text-orange-500" />

                      <div>
                        <p className="text-xs text-slate-400">
                          Experience
                        </p>

                        <p className="text-sm font-medium text-slate-700">
                          {teacher.experience}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Faculty Information CTA */}
        <div className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center sm:p-8">
          <h3 className="text-xl font-bold text-slate-900">
            Want to know more about our faculty?
          </h3>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Contact Gyan Kunj Coaching Centre to learn more about the
            teachers, subjects, batches, and academic guidance available
            for students.
          </p>
        </div>

      </div>
    </section>
  );
}