import Link from "next/link";
import {
  FaArrowLeft,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";

const contactDetails = [
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    value: "+91 XXXXXXXXXX",
    description: "Call us for course and admission enquiries.",
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    value: "info@gyankunj.com",
    description: "Send us your questions or enquiry.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    value: "Kota, Rajasthan, India",
    description: "Visit Gyan Kunj Coaching Centre.",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-700/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              <FaPhoneAlt />
              Contact Gyan Kunj
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s Start Your
              <span className="block text-blue-400">
                Academic Journey
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Have questions about classes, courses or admissions? Get in
              touch with Gyan Kunj Coaching Centre.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="text-xl" />
                  </div>

                  <h2 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h2>

                  <p className="mt-2 font-semibold text-blue-700">
                    {item.value}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enquiry Form + Map */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Form */}
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <div>
                <span className="inline-block rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
                  Enquiry Form
                </span>

                <h2 className="mt-4 text-3xl font-bold text-slate-900">
                  Send Us an
                  <span className="text-blue-700"> Enquiry</span>
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Fill in your details and we can get in touch with you about
                  classes and admissions.
                </p>
              </div>

              <form className="mt-8 space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Student / Parent Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Class */}
                <div>
                  <label
                    htmlFor="class"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Class
                  </label>

                  <select
                    id="class"
                    name="class"
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Select class
                    </option>
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your enquiry..."
                    className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  <FaPaperPlane className="text-xs" />
                  Submit Enquiry
                </button>

                <p className="text-center text-xs text-slate-400">
                  Online enquiry submission will be connected when the
                  backend is added.
                </p>
              </form>
            </div>

            {/* Map */}
            <div className="flex flex-col">
              <div>
                <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  Our Location
                </span>

                <h2 className="mt-4 text-3xl font-bold text-slate-900">
                  Find Gyan Kunj
                  <span className="text-blue-700"> in Kota</span>
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Visit our coaching centre for more information about
                  classes, courses and admissions.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 flex min-h-[420px] flex-1 items-center justify-center overflow-hidden rounded-3xl bg-slate-200 shadow-sm ring-1 ring-slate-200">
                <div className="max-w-sm px-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-700 shadow-sm">
                    <FaMapMarkerAlt className="text-2xl" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    Google Maps Location
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    The exact coaching centre location will be added here
                    after the client provides the Google Maps location or
                    exact address.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="bg-blue-700 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Have Questions About Admission?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Contact Gyan Kunj Coaching Centre to discuss classes, subjects,
            computer education and admission details.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              <FaPhoneAlt className="text-xs" />
              Call Us
            </a>

            <a
              href="mailto:info@gyankunj.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              <FaEnvelope className="text-xs" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="bg-white py-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
        >
          <FaArrowLeft className="text-xs" />
          Back to Home
        </Link>
      </section>
    </main>
  );
}