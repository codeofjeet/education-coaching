import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Courses", href: "/#courses" },
  { name: "Faculty", href: "/#faculty" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Contact Us", href: "/contact" },
];

const courseLinks = [
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">

            <Link href="/" className="inline-block">
              <div className="rounded-lg bg-white px-4 py-2">
                <Image
                  src="/images/logo/gyan-kunj-logo.png"
                  alt="Gyan Kunj Coaching Centre"
                  width={220}
                  height={90}
                  className="h-16 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Gyan Kunj Coaching Centre, Kota is focused on helping students
              from Class 6th to 12th build strong concepts, develop
              confidence, and grow academically.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-blue-700 hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-pink-600 hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-red-600 hover:text-white"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                  >
                    <FaArrowRight className="text-[10px] text-orange-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h3 className="text-base font-bold text-white">
              Classes
            </h3>

            <ul className="mt-5 space-y-3">
              {courseLinks.map((course) => (
                <li key={course}>
                  <Link
                    href="/#courses"
                    className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                  >
                    <FaArrowRight className="text-[10px] text-orange-400" />
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-5">

              {/* Address */}
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-orange-400" />

                <p className="text-sm leading-6 text-slate-400">
                  Kota, Rajasthan, India
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 shrink-0 text-orange-400" />

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  +91 XXXXXXXXXX
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 shrink-0 text-orange-400" />

                <a
                  href="mailto:info@gyankunj.com"
                  className="break-all text-sm text-slate-400 transition hover:text-white"
                >
                  info@gyankunj.com
                </a>
              </div>

            </div>

            {/* Enquiry */}
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Make an Enquiry
              <FaArrowRight className="text-xs" />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">

          <p className="text-xs text-slate-500 sm:text-sm">
            © {new Date().getFullYear()} Gyan Kunj Coaching Centre. All
            rights reserved.
          </p>

          <div className="flex justify-center gap-5 md:justify-end">
            <Link
              href="/privacy-policy"
              className="text-xs text-slate-500 transition hover:text-white sm:text-sm"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-slate-500 transition hover:text-white sm:text-sm"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}