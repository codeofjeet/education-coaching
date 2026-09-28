import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaImages,
  FaPhoneAlt,
} from "react-icons/fa";

const galleryImages = [
  {
    src: "/images/gallery/classroom-1.jpg",
    alt: "Gyan Kunj classroom",
    title: "Our Classroom",
    category: "Classroom",
  },
  {
    src: "/images/gallery/classroom-2.jpg",
    alt: "Gyan Kunj classroom learning",
    title: "Classroom Learning",
    category: "Classroom",
  },
  {
    src: "/images/gallery/students.jpg",
    alt: "Gyan Kunj students",
    title: "Student Learning",
    category: "Students",
  },
  {
    src: "/images/gallery/faculty.jpg",
    alt: "Gyan Kunj faculty",
    title: "Academic Guidance",
    category: "Faculty",
  },
  {
    src: "/images/gallery/activity-1.jpg",
    alt: "Gyan Kunj academic activity",
    title: "Academic Activity",
    category: "Activities",
  },
  {
    src: "/images/gallery/activity-2.jpg",
    alt: "Gyan Kunj student activity",
    title: "Student Activity",
    category: "Activities",
  },
];

export default function GalleryPage() {
  return (
    <main>

      {/* Page Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-700/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">

            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              <FaImages />
              Gyan Kunj Gallery
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Moments From
              <span className="block text-blue-400">
                Gyan Kunj
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Explore our classroom environment, students, faculty, and
              academic activities.
            </p>

          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
              Our Gallery
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Learning, Activities &
              <span className="text-blue-700">
                {" "}
                Academic Moments
              </span>
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Take a look at the environment and activities at Gyan Kunj
              Coaching Centre.
            </p>
          </div>

          {/* Image Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={index === 0 ? "eager" : "lazy"}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/0 transition duration-300 group-hover:bg-slate-950/20" />

                  {/* Number */}
                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-xs font-bold text-slate-800 shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-4 left-4 rounded-full bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                    {image.category}
                  </div>
                </div>

                {/* Content */}
                <div className="px-5 py-5">
                  <h3 className="text-lg font-bold text-slate-900">
                    {image.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Gyan Kunj Coaching Centre
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* More Photos CTA */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
            <FaImages className="text-2xl" />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
            More Moments Will Be Added
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            As Gyan Kunj grows, this gallery can be updated with new
            classroom moments, activities, events, and student achievements.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            <FaPhoneAlt className="text-xs" />
            Contact Gyan Kunj
          </Link>

        </div>
      </section>

      {/* Back to Home */}
      <section className="bg-slate-50 py-8">
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
          >
            <FaArrowLeft className="text-xs" />
            Back to Home
          </Link>
        </div>
      </section>

    </main>
  );
}