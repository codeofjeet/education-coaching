"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBookOpen,
  FaChevronLeft,
  FaChevronRight,
  FaGraduationCap,
  FaLaptopCode,
  FaPause,
  FaPlay,
  FaSyncAlt,
} from "react-icons/fa";

type HeroMode = "static" | "slider";

const slides = [
  {
    id: 1,
    badge: "Classes 6th to 12th",
    title: "Build Your",
    highlight: "Strong Academic Future",
    description:
      "Focused academic coaching with clear concepts, regular practice and student-focused guidance for Classes 6th to 12th.",
    buttonText: "Explore Courses",
    buttonHref: "/courses",
    image: "/images/slider/slider-1.jpg",
  },
  {
    id: 2,
    badge: "Computer Education",
    title: "Learn Computer Science",
    highlight: "With Practical Skills",
    description:
      "Computer education for Classes 11th and 12th covering Python, Networking and SQL.",
    buttonText: "View Computer Courses",
    buttonHref: "/courses",
    image: "/images/slider/slider-2.jpg",
  },
  {
    id: 3,
    badge: "Student-Focused Learning",
    title: "Learn Today",
    highlight: "Grow Tomorrow",
    description:
      "Develop strong fundamentals through concept-based learning, practice and continuous academic guidance.",
    buttonText: "Know More",
    buttonHref: "/about",
    image: "/images/slider/slider-3.jpg",
  },
];

export default function Hero() {
  const [heroMode, setHeroMode] = useState<HeroMode>("static");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /*
   * Change Hero mode
   */
  const changeHeroMode = (mode: HeroMode) => {
    setHeroMode(mode);
  };

  /*
   * Automatic slider
   *
   * Slider changes every 5 seconds.
   */
  useEffect(() => {
    if (heroMode !== "slider" || isPaused) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroMode, isPaused]);

  /*
   * Next slide
   */
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  /*
   * Previous slide
   */
  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  /*
   * Current slider data
   */
  const slide = slides[currentSlide];

  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* =========================================================
          HERO MODE SWITCH
      ========================================================== */}

      <div className="absolute right-4 top-4 z-50 sm:right-6 sm:top-6">
        <div className="flex items-center gap-1 rounded-full border border-white/20 bg-slate-950/80 p-1 shadow-lg backdrop-blur-md">
          {/* Static Button */}
          <button
            type="button"
            onClick={() => changeHeroMode("static")}
            className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
              heroMode === "static"
                ? "bg-white text-slate-900"
                : "text-white hover:bg-white/10"
            }`}
          >
            Static
          </button>

          {/* Slider Button */}
          <button
            type="button"
            onClick={() => changeHeroMode("slider")}
            className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
              heroMode === "slider"
                ? "bg-orange-500 text-white"
                : "text-white hover:bg-white/10"
            }`}
          >
            Slider
          </button>
        </div>
      </div>

      {/* Background decoration */}

      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-700/30 blur-3xl" />

      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />

      {/* =========================================================
          STATIC HERO
      ========================================================== */}

      {heroMode === "static" && (
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}

            <div>
              {/* Badge */}

              <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                <FaGraduationCap />

                Classes 6th to 12th
              </span>

              {/* Heading */}

              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Build Your

                <span className="block text-blue-400">
                  Strong Academic Future
                </span>
              </h1>

              {/* Description */}

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Focused academic coaching with clear concepts, regular
                practice and student-focused guidance for Classes 6th to
                12th.
              </p>

              {/* Buttons */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  Explore Courses

                  <FaArrowRight className="text-xs" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Visual */}

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/gallery/classroom-1.jpg"
                    alt="Gyan Kunj classroom"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-slate-950/35" />

                  <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-slate-950/70 p-5 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white">
                        <FaBookOpen />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Concept-Based Learning
                        </p>

                        <p className="mt-1 text-xs text-slate-300">
                          Learn • Practice • Improve
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Computer Card */}

              <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <FaLaptopCode />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      Computer Classes
                    </p>

                    <p className="text-sm font-bold text-slate-900">
                      Python • SQL • Networking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          SLIDER HERO
      ========================================================== */}

      {heroMode === "slider" && (
        <div className="relative min-h-[650px]">
          {/* Slider Background Image */}

          <div className="absolute inset-0">
            <Image
              key={slide.image}
              src={slide.image}
              alt={slide.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-slate-950/75" />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
          </div>

          {/* Slider Content */}

          <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
            <div
              key={slide.id}
              className="max-w-3xl"
            >
              {/* Badge */}

              <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                <FaGraduationCap />

                {slide.badge}
              </span>

              {/* Heading */}

              <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                {slide.title}

                <span className="block text-blue-400">
                  {slide.highlight}
                </span>
              </h2>

              {/* Description */}

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                {slide.description}
              </p>

              {/* Buttons */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={slide.buttonHref}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  {slide.buttonText}

                  <FaArrowRight className="text-xs" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* =====================================================
              SLIDER CONTROLS
          ====================================================== */}

          <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
            {/* Previous */}

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/60 text-white transition hover:bg-white hover:text-slate-900"
            >
              <FaChevronLeft />
            </button>

            {/* Play / Pause */}

            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? "Play slider" : "Pause slider"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/60 text-white transition hover:bg-white hover:text-slate-900"
            >
              {isPaused ? <FaPlay /> : <FaPause />}
            </button>

            {/* Next */}

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/60 text-white transition hover:bg-white hover:text-slate-900"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Slide Dots */}

          <div className="absolute bottom-9 right-6 z-20 hidden items-center gap-2 sm:flex lg:right-10">
            {slides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  currentSlide === index
                    ? "w-8 bg-orange-500"
                    : "w-2.5 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* =========================================================
          RESET HERO
      ========================================================== */}

      <button
        type="button"
        onClick={() => {
          setHeroMode("static");
          setCurrentSlide(0);
          setIsPaused(false);
        }}
        className="absolute bottom-3 right-4 z-50 hidden items-center gap-1 text-[10px] text-white/40 transition hover:text-white sm:flex"
      >
        <FaSyncAlt />
        Reset
      </button>
    </section>
  );
}