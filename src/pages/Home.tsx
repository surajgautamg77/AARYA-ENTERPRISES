import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        {/* Announcement Banner */}
        <div className="bg-blue-800 py-2 px-4" data-aos="fade-up">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500">
                NEW
              </span>
              <p className="text-sm font-medium">
                Latest News: Now offering doorstep service for Aadhar Card & PAN
                Card registration!
              </p>
            </div>
            <div className="flex items-center">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-400 text-blue-900">
                OFFER
              </span>
              <span className="ml-2 text-sm font-medium">
                Special 20% discount on business registration services until
                June 30th
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start">
          <div className="lg:w-1/2 lg:pr-12" data-aos="fade-up">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Welcome to AARYA ENTERPRISES
            </h1>
            <p className="text-xl max-w-xl mb-8">
              Your trusted partner for comprehensive online services and
              financial solutions. We help individuals and businesses grow and
              succeed.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <Link
                to="/services"
                className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Our Services
              </Link>
              <a
                href="https://wa.me/918149113151?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0 space-y-6">
            {/* Current Offers Card */}
            <div className="bg-white rounded-lg shadow-md p-4 text-gray-800 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <h3 className="text-lg font-bold text-blue-600 mb-2">
                Current Offers
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-sm sm:text-base">
                    50% off on GST Registration for first-time entrepreneurs
                  </span>
                </li>
                <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-sm sm:text-base">
                    Free consultation for all financial advisory services
                  </span>
                </li>
                <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-sm sm:text-base">
                    Bundle discount on Aadhar Card, PAN Card & Voting Card
                    services
                  </span>
                </li>
              </ul>
            </div>

            {/* Latest News */}
            <div className="bg-blue-800 rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <h3 className="text-lg font-bold text-white mb-2">Latest News</h3>
              <div className="space-y-3">
                <div className="flex items-start sm:items-center transition-transform duration-200 hover:translate-x-1">
                  <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded flex-shrink-0">
                    May 15, 2023
                  </span>
                  <p className="ml-2 text-sm text-blue-100">
                    AARYA ENTERPRISES expands services to Nallasopara West area
                  </p>
                </div>
                <div className="flex items-start sm:items-center transition-transform duration-200 hover:translate-x-1">
                  <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded flex-shrink-0">
                    Apr 28, 2023
                  </span>
                  <p className="ml-2 text-sm text-blue-100">
                    New entrepreneur program launched - supporting 50+ women
                    entrepreneurs
                  </p>
                </div>
                <div className="flex items-start sm:items-center transition-transform duration-200 hover:translate-x-1">
                  <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded flex-shrink-0">
                    Apr 10, 2023
                  </span>
                  <p className="ml-2 text-sm text-blue-100">
                    Partnership with local banks for improved loan advisory
                    services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We offer a wide range of services to help individuals and businesses
            grow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            data-aos="fade-up"
          >
            <div className="p-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 transition-colors duration-300 hover:bg-blue-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Online Services
              </h3>
              <p className="text-gray-600 mb-4">
                Complete range of government and documentation services for
                individuals and businesses.
              </p>
              <ul className="mb-4 text-gray-600 space-y-2">
                <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                  <svg
                    className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Aadhar card & Pan card</span>
                </li>
                <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                  <svg
                    className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Passport & Voting Card</span>
                </li>
                <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                  <svg
                    className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Business Licenses & Registrations</span>
                </li>
              </ul>
              <Link
                to="/services"
                className="mt-4 inline-flex items-center font-medium text-blue-600 hover:text-blue-500 transition-all duration-300 transform hover:translate-x-1"
              >
                Learn more
                <svg
                  className="ml-1 h-5 w-5"
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
          </div>

          {/* Service 2 */}
          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            data-aos="fade-up"
          >
            <div className="p-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Financial Services
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive financial solutions from national banks, NBFCs,
                and financial institutions.
              </p>
              <ul className="mb-4 text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Life & Health Insurance</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Loans & Investment Advisory</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Money Transfer & E-PF Services</span>
                </li>
              </ul>
              <Link
                to="/financial"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more →
              </Link>
            </div>
          </div>

          {/* Service 3 */}
          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            data-aos="fade-up"
          >
            <div className="p-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Business Registration
              </h3>
              <p className="text-gray-600 mb-4">
                Complete business registration and compliance services for
                entrepreneurs.
              </p>
              <ul className="mb-4 text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>GST Registration</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Shop Establishment License</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Company Registration</span>
                </li>
              </ul>
              <Link
                to="/services"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <Link
            to="/services"
            className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Hear from some of the satisfied clients who have used our
              services.
            </p>
          </div>

          <div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            data-aos="fade-up"
          >
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                    alt="Customer"
                    className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Rahul Sharma
                  </h4>
                  <p className="text-gray-600 text-sm">Small Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "AARYA ENTERPRISES made my GST registration process so smooth
                and hassle-free. Their professional approach and guidance at
                every step were commendable. Highly recommended!"
              </p>
              <div className="mt-4 flex items-center">
                <div className="flex text-yellow-400">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                    alt="Customer"
                    className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Priya Patel
                  </h4>
                  <p className="text-gray-600 text-sm">Entrepreneur</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I was struggling to get a business loan until I approached
                AARYA ENTERPRISES. Their expert advice and assistance throughout
                the process helped me secure the funding I needed. Great
                service!"
              </p>
              <div className="mt-4 flex items-center">
                <div className="flex text-yellow-400">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                    alt="Customer"
                    className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Vikram Singh
                  </h4>
                  <p className="text-gray-600 text-sm">Shop Owner</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The team at AARYA ENTERPRISES is very professional and prompt.
                They helped me get all the necessary business licenses for my
                shop in record time. Their thorough knowledge of the processes
                saved me a lot of time."
              </p>
              <div className="mt-4 flex items-center">
                <div className="flex text-yellow-400">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We've been helping individuals and businesses succeed since 2015.
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          data-aos="fade-up"
        >
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">
              5000+
            </div>
            <div className="text-gray-600">Documentation Services</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">
              1200+
            </div>
            <div className="text-gray-600">Business Registrations</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">
              3500+
            </div>
            <div className="text-gray-600">Satisfied Clients</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">
              800+
            </div>
            <div className="text-gray-600">Financial Consultations</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-6" data-aos="fade-up">
            Ready to get started with AARYA ENTERPRISES?
          </h2>
          <p className="text-xl mb-8" data-aos="fade-up">
            Contact us today to learn more about our services and how we can
            help you with your documentation and financial needs.
          </p>
          <div
            className="flex flex-wrap justify-center gap-4"
            data-aos="fade-up"
          >
            <Link
              to="/contact"
              className="px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
