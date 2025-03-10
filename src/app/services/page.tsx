import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <Image
            src="/images/services-hero.jpg"
            alt="Interior design services"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            We offer comprehensive interior design solutions tailored to your
            unique style and needs. From concept to completion, our team of
            experts is dedicated to creating spaces that inspire.
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            What We Offer
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Comprehensive Design Solutions
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Our team of experienced designers provides end-to-end services to
            transform your space.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {services.map((service) => (
              <div key={service.name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fill
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  <span className="absolute inset-0" />
                  {service.name}
                </h3>
                <p className="text-base text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Our Process
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              How We Work
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Our proven design process ensures a smooth journey from concept to
              completion.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => (
                <div key={step.name} className="relative">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                    <span className="text-lg font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Pricing
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Design Packages
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Choose the package that best fits your needs and budget.
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {pkg.name}
                </h3>
                {pkg.mostPopular ? (
                  <p className="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                    Most popular
                  </p>
                ) : null}
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ${pkg.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold">{pkg.unit}</span>
                </p>
                <p className="mt-6 text-gray-500">{pkg.description}</p>

                <ul role="list" className="mt-6 space-y-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-indigo-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                  pkg.mostPopular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                }`}
              >
                Get started
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to transform your space?</span>
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

// Service data
const services = [
  {
    name: "Residential Design",
    description:
      "Transform your home into a personalized sanctuary that reflects your style and meets your needs.",
    imageSrc: "/images/residential.jpg",
    imageAlt: "Residential interior design",
  },
  {
    name: "Commercial Design",
    description:
      "Create functional and inspiring workspaces that enhance productivity and impress clients.",
    imageSrc: "/images/commercial.jpg",
    imageAlt: "Commercial interior design",
  },
  {
    name: "Space Planning",
    description:
      "Optimize your layout for flow, functionality, and aesthetics with our expert space planning.",
    imageSrc: "/images/space-planning.jpg",
    imageAlt: "Space planning and layout design",
  },
  {
    name: "Furniture Selection",
    description:
      "Find the perfect pieces to complement your space with our curated furniture selection service.",
    imageSrc: "/images/furniture.jpg",
    imageAlt: "Furniture selection and curation",
  },
  {
    name: "Color Consultation",
    description:
      "Discover the perfect color palette to set the mood and enhance your space.",
    imageSrc: "/images/color.jpg",
    imageAlt: "Color consultation and palette design",
  },
  {
    name: "Project Management",
    description:
      "Relax while we coordinate all aspects of your project from start to finish.",
    imageSrc: "/images/project-management.jpg",
    imageAlt: "Interior design project management",
  },
];

// Process steps
const process = [
  {
    name: "Consultation",
    description:
      "We begin with an in-depth discussion about your vision, needs, and budget to establish project goals.",
  },
  {
    name: "Concept Development",
    description:
      "Our designers create detailed concepts including space plans, color schemes, and material selections.",
  },
  {
    name: "Design Refinement",
    description:
      "We refine the design based on your feedback until every detail meets your expectations.",
  },
  {
    name: "Implementation",
    description:
      "Our team manages the execution of the design, ensuring quality and attention to detail throughout.",
  },
];

// Package options
const packages = [
  {
    name: "Basic Design",
    mostPopular: false,
    description:
      "Perfect for those who need design guidance but plan to implement themselves.",
    price: 1500,
    unit: "/room",
    features: [
      "Initial consultation",
      "Space planning",
      "Color scheme",
      "Furniture recommendations",
      "Shopping list",
    ],
  },
  {
    name: "Premium Design",
    mostPopular: true,
    description:
      "Our most popular package with full design services and partial implementation support.",
    price: 3500,
    unit: "/room",
    features: [
      "Everything in Basic",
      "3D renderings",
      "Custom furniture design",
      "Material selections",
      "Vendor coordination",
      "Two rounds of revisions",
    ],
  },
  {
    name: "Luxury Full-Service",
    mostPopular: false,
    description:
      "A comprehensive solution with white-glove service from concept to completion.",
    price: 7500,
    unit: "/room",
    features: [
      "Everything in Premium",
      "Project management",
      "Contractor coordination",
      "Purchasing assistance",
      "Installation supervision",
      "Unlimited revisions",
      "Post-installation styling",
    ],
  },
];
