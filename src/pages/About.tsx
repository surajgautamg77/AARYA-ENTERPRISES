import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            About AARYA ENTERPRISES
          </h1>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            Learn more about our company, our mission, and our team.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              AARYA ENTERPRISES is Online Services & Financial Services
              Consultancy. Company that provides All Types Of Online Services
              for Personal and Business Growth. At the same time it offers to
              customers All types of Governments Scheme. Also offers good
              Interest rates on small and large Investments.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              AARYA ENTERPRISES provide Support to Personal loan, Gold loan from
              National Banks, NBFC & Financial Institution of India. The Company
              has full authority to perform all the functions such as
              Registering customers for Advisory of All types of loan, Daily
              savings and all kinds of Investments for keeping in touch with
              customers.
            </p>
            <p className="text-lg text-gray-600">
              AARYA ENTERPRISES is a professional Advisory platform. Company
              provides all types of online services such as Aadhar card, Pan
              card, Passport, Voting Card, Bank Accounts, Driving License, Shop
              Establishment License, Food License, Police Verification, Udyam,
              Gazette Notification, GST Registration, Income Tax Filing, TDS
              Refund Filing, Money Transfer, Cash Withdrawal by Aadhar from all
              types of banks, E-PF Services, Company Registration, Society
              Registration, Trust/NGO Registration, Insurance services, and all
              types of investments and loans from National Banks, NBFC &
              Financial Institutions of India.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Our Office"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Vision, Mission and Values
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We are guided by a clear mission and strong core values that shape
              everything we do.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Our Vision
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
              To Create more than 1lac Entrepreneurs across Maharashtra in the
              next Fifteen Years through AARYA ENTERPRISES Company and provide
              them with Business ideas and vocational Education along with
              financial Advisory.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
              The company offers a Great Way for the Budding House wife's and
              Educated Unemployed in the country to Become Entrepreneurs.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              To motivate Housewife's and well-educated Unemployed persons who
              are not Engaged in Business due to Financial Reasons or lack of
              Business knowledge, Despite their Determination and Desire. At the
              same time, they are provided with a Business Education and
              Financing Company with Business idea. Thus, the company makes a
              huge Contribution to Reduce Unemployment in the Country.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              To create more Entrepreneurs by providing financial and Vocational
              Guidance to the Budding people to reduce Unemployment in the
              Country. And all types of Online services can be easily delivered
              door to door. By advisor all types of work of customers can be
              done easy and fast services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Excellence
              </h4>
              <p className="text-gray-600 text-center">
                We strive for excellence in everything we do, delivering
                high-quality solutions that exceed expectations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Integrity
              </h4>
              <p className="text-gray-600 text-center">
                We provide services in an honest, ethical, open, courteous,
                caring and concerned manner, respecting people and the free
                exchange of ideas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Innovation
              </h4>
              <p className="text-gray-600 text-center">
                We embrace creative thinking and innovative approaches to solve
                complex business challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Employee Focus
              </h4>
              <p className="text-gray-600 text-center">
                To our employees, we are committed to offering a rewarding
                workplace that encourages mutual respect, communication,
                openness to challenge, and the opportunity for both personal and
                professional growth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Teamwork
              </h4>
              <p className="text-gray-600 text-center">
                We value the contribution our employees make in achieving our
                mission and we support and encourage teamwork and personal
                development to ensure a high level of competence, expertise, and
                satisfaction.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Customer Satisfaction
              </h4>
              <p className="text-gray-600 text-center">
                To our customers, we are committed to providing quality products
                and services that consistently represent an exceptional value
                and result in high customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Founders</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the visionaries behind AARYA ENTERPRISES.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto max-w-2xl">
          {/* Founder 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Pradeep Kumar"
              className="w-full h-80 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Pradeep Kumar
              </h3>
              <p className="text-blue-600 mb-4">Founder</p>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Reena Jaiswar"
              className="w-full h-80 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Reena Jaiswar
              </h3>
              <p className="text-blue-600 mb-4">Co-founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-6">
            Want to join our team?
          </h2>
          <p className="text-xl max-w-xl mx-auto mb-8">
            We're always looking for talented professionals to join our growing
            team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/career"
              className="px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100"
            >
              View Career Opportunities
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
