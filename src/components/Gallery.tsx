import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaImages } from "react-icons/fa";

const galleryImages = [
  {
    src: "/images/gallery/classroom-1.jpg",
    alt: "Gyan Kunj classroom",
    title: "Our Classroom",
  },
  {
    src: "/images/gallery/classroom-2.jpg",
    alt: "Students learning in classroom",
    title: "Classroom Learning",
  },
  {
    src: "/images/gallery/students.jpg",
    alt: "Gyan Kunj students",
    title: "Student Learning",
  },
  {
    src: "/images/gallery/faculty.jpg",
    alt: "Gyan Kunj faculty",
    title: "Academic Guidance",
  },
  {
    src: "/images/gallery/activity-1.jpg",
    alt: "Gyan Kunj academic activity",
    title: "Academic Activities",
  },
  {
    src: "/images/gallery/activity-2.jpg",
    alt: "Gyan Kunj student activity",
    title: "Student Activities",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
            <FaImages />
            Our Gallery
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Moments From
            <span className="text-blue-700"> Gyan Kunj</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Take a look at our classrooms, learning environment, faculty,
            and academic activities.
          </p>
        </div>

        {/* Gallery Grid */}
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

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-slate-950/0 transition duration-300 group-hover:bg-slate-950/20" />

                {/* Number */}
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-xs font-bold text-slate-800 shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {image.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Gyan Kunj Coaching Centre
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                  <FaImages className="text-sm" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            More moments from Gyan Kunj will be added to our gallery.
          </p>

          <Link
            href="/gallery"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            View Full Gallery
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

      </div>
    </section>
  );
}