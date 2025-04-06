import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your needs.
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900">
            Professional Online Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            AARYA ENTERPRISES offers a wide range of online services and
            financial solutions to help individuals and businesses thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Government ID Services
            </h3>
            <p className="text-gray-600 mb-4">
              We assist in processing Aadhar cards, PAN cards, Voter IDs,
              Passport applications, and more with ease and efficiency.
            </p>
            <Link
              to="/services/government-id"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Business Registration
            </h3>
            <p className="text-gray-600 mb-4">
              Complete solutions for business registration including Shop
              Establishment, Food License, GST Registration, Company
              Registration, and more.
            </p>
            <Link
              to="/services/business-registration"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Financial Services
            </h3>
            <p className="text-gray-600 mb-4">
              Comprehensive financial services including Personal Loans, Gold
              Loans, Investment Advisory, and Insurance services from trusted
              institutions.
            </p>
            <Link
              to="/services/financial"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Tax Services
            </h3>
            <p className="text-gray-600 mb-4">
              Professional assistance with Income Tax Filing, TDS Refund Filing,
              GST compliance, and other tax-related matters.
            </p>
            <Link
              to="/services/tax"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Banking & Money Transfer
            </h3>
            <p className="text-gray-600 mb-4">
              Services include Bank Account Opening, Money Transfer, Cash
              Withdrawal via Aadhaar, and E-PF services with quick processing.
            </p>
            <Link
              to="/services/banking"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
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
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              NGO & Trust Registration
            </h3>
            <p className="text-gray-600 mb-4">
              Complete services for Society Registration, Trust/NGO
              Registration, and compliance management with personalized
              guidance.
            </p>
            <Link
              to="/services/ngo-trust"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Simple Process
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We make getting your services done as simple and hassle-free as
              possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              data-aos="fade-up"
            >
              <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Consultation
              </h3>
              <p className="text-gray-600">
                Contact us for a free consultation to understand your specific
                needs and requirements.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              data-aos="fade-up"
            >
              <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Documentation
              </h3>
              <p className="text-gray-600">
                We'll guide you through the required documentation process with
                clear instructions.
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              data-aos="fade-up"
            >
              <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Processing
              </h3>
              <p className="text-gray-600">
                Our team processes your application with relevant authorities
                and handles all follow-ups.
              </p>
            </div>

            {/* Step 4 */}
            <div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              data-aos="fade-up"
            >
              <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Delivery
              </h3>
              <p className="text-gray-600">
                We deliver the completed service directly to you and provide any
                necessary guidance for next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-blue-600 rounded-lg shadow-xl overflow-hidden">
          <div
            className="px-6 py-12 md:p-12 text-center text-white"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-extrabold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl max-w-xl mx-auto mb-8">
              Contact us today to discuss your requirements and how we can help
              you with our professional services.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
