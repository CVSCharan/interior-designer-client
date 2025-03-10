import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Modern interior design"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-48 sm:px-6 lg:px-8 lg:py-56">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transform Your Space Into Something Extraordinary
            </h1>
            <p className="mt-6 text-xl text-white">
              We create beautiful, functional spaces tailored to your lifestyle
              and preferences. Our expert designers bring your vision to life
              with attention to every detail.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Our Portfolio
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Featured Projects
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Explore some of our recent interior design projects that showcase
              our expertise and creativity.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-200">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50 hover:bg-indigo-100"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/about-image.jpg"
                alt="Interior designer at work"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-10 lg:mt-0">
              <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
                About Us
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">
                Passionate About Creating Beautiful Spaces
              </p>
              <p className="mt-4 text-lg text-gray-500">
                With over 15 years of experience in interior design, our team
                brings expertise, creativity, and attention to detail to every
                project. We believe that well-designed spaces have the power to
                transform how people live and work.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Our approach combines aesthetic vision with practical
                functionality, ensuring that each space not only looks beautiful
                but also works perfectly for your lifestyle or business needs.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-indigo-600">200+</p>
                  <p className="mt-2 text-gray-500">Projects Completed</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-indigo-600">15+</p>
                  <p className="mt-2 text-gray-500">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Our Services
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              What We Offer
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Comprehensive interior design services tailored to your unique
              needs and preferences.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-indigo-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-gray-500">{service.description}</p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
                >
                  Learn more
                  <svg
                    className="ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Testimonials
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              What Our Clients Say
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-4 flex text-indigo-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to transform your space?</span>
            <span className="block">Let&apos;s start a conversation.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Contact us today for a free consultation and let us help you create
            the space of your dreams.
          </p>
          <Link
            href="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}

// Featured Projects Data
const featuredProjects = [
  {
    title: "Modern Minimalist Apartment",
    description:
      "A clean, contemporary design for an urban apartment focusing on functionality and style.",
    imageSrc: "/images/project1.jpg",
  },
  {
    title: "Luxury Villa Renovation",
    description:
      "Complete redesign of a spacious villa with elegant finishes and custom furniture.",
    imageSrc: "/images/project2.jpg",
  },
  {
    title: "Boutique Office Space",
    description:
      "Creative workspace design that balances productivity and aesthetic appeal.",
    imageSrc: "/images/project3.jpg",
  },
];

// Services Data
const services = [
  {
    name: "Residential Design",
    description:
      "Transform your home into a personalized sanctuary that reflects your style and meets your needs.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    name: "Commercial Design",
    description:
      "Create functional and inspiring workspaces that enhance productivity and impress clients.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-7 10v-2a2 2 0 012-2h6a2 2 0 012 2v2"
        />
      </svg>
    ),
  },
  {
    name: "Space Planning",
    description:
      "Optimize your layout for flow, functionality, and aesthetics with our expert space planning.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
];

// Testimonials Data
const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Homeowner",
    quote:
      "Working with this interior design team was a dream. They transformed our outdated living space into a modern, functional home that perfectly reflects our style.",
    avatar: "/images/testimonial1.jpg",
  },
  {
    name: "Michael Chen",
    title: "Business Owner",
    quote:
      "The commercial design for our new office exceeded all expectations. Our employees love the space, and clients are always impressed when they visit.",
    avatar: "/images/testimonial2.jpg",
  },
  {
    name: "Emily Rodriguez",
    title: "Apartment Resident",
    quote:
      "Even with my limited budget, they created a stunning design for my small apartment. Their creativity and attention to detail made all the difference.",
    avatar: "/images/testimonial3.jpg",
  },
];
