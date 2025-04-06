import { useState } from "react";

const Career = () => {
  const jobs = [
    {
      id: 1,
      title: "Financial Consultant",
      department: "Financial Services",
      location: "Mumbai, India",
      type: "Full-time",
      description:
        "We are looking for an experienced Financial Consultant to join our team. The ideal candidate will have a strong background in financial planning, investment strategies, and client relationship management.",
      responsibilities: [
        "Develop comprehensive financial strategies for clients",
        "Conduct financial analysis and prepare reports",
        "Build and maintain strong client relationships",
        "Stay updated on market trends and investment opportunities",
        "Work collaboratively with other departments to deliver integrated solutions",
      ],
      requirements: [
        "Bachelor's degree in Finance, Economics, or related field",
        "Minimum 3 years of experience in financial consulting",
        "Strong analytical and problem-solving skills",
        "Excellent communication and presentation abilities",
        "Relevant certifications (CFA, CFP) preferred",
      ],
    },
    {
      id: 2,
      title: "Business Development Manager",
      department: "Business Development",
      location: "New Delhi, India",
      type: "Full-time",
      description:
        "We are seeking a dynamic Business Development Manager to drive our growth initiatives. The successful candidate will identify new business opportunities, develop growth strategies, and build strong partnerships.",
      responsibilities: [
        "Identify and develop new business opportunities",
        "Create and implement business development strategies",
        "Build and maintain relationships with key partners and clients",
        "Collaborate with marketing to develop effective campaigns",
        "Track and report on business development metrics",
      ],
      requirements: [
        "Bachelor's degree in Business, Marketing, or related field",
        "Minimum 5 years of experience in business development",
        "Proven track record of meeting and exceeding targets",
        "Strong negotiation and relationship-building skills",
        "Excellent communication and presentation abilities",
      ],
    },
    {
      id: 3,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Mumbai, India",
      type: "Full-time",
      description:
        "We are looking for a creative and data-driven Marketing Specialist to join our team. The ideal candidate will help develop and implement marketing strategies to promote our services and enhance our brand.",
      responsibilities: [
        "Develop and implement marketing campaigns across various channels",
        "Create engaging content for digital platforms",
        "Analyze marketing metrics and optimize strategies accordingly",
        "Collaborate with other departments to ensure consistent messaging",
        "Stay updated on industry trends and best practices",
      ],
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "Minimum 2 years of experience in marketing",
        "Proficiency in digital marketing tools and platforms",
        "Strong analytical and creative skills",
        "Excellent written and verbal communication abilities",
      ],
    },
    {
      id: 4,
      title: "HR Manager",
      department: "Human Resources",
      location: "Bangalore, India",
      type: "Full-time",
      description:
        "We are seeking an experienced HR Manager to oversee our human resources operations. The successful candidate will manage recruitment, employee relations, training programs, and contribute to organizational development.",
      responsibilities: [
        "Develop and implement HR strategies and initiatives",
        "Manage the recruitment and selection process",
        "Oversee employee relations and resolve workplace issues",
        "Develop and conduct training programs",
        "Ensure compliance with labor laws and regulations",
      ],
      requirements: [
        "Bachelor's degree in Human Resources, Business Administration, or related field",
        "Minimum 5 years of experience in HR management",
        "Strong knowledge of labor laws and HR best practices",
        "Excellent interpersonal and conflict resolution skills",
        "Strong organizational and leadership abilities",
      ],
    },
  ];

  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log(formData);
    setFormSubmitted(true);
    // Reset form data
    setFormData({
      name: "",
      email: "",
      phone: "",
      resume: "",
      coverLetter: "",
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Career Opportunities
          </h1>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            Join our team and help us build exceptional solutions for
            businesses.
          </p>
        </div>
      </div>

      {/* Why Join Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Join Arya Enterprises?
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a dynamic work environment where talent thrives and
              innovation is encouraged.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Growth Opportunities
              </h3>
              <p className="text-gray-600">
                We invest in your professional development with training,
                mentorship, and advancement opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-center">
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Collaborative Culture
              </h3>
              <p className="text-gray-600">
                Work in a supportive environment where teamwork and knowledge
                sharing are encouraged.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-center">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Competitive Benefits
              </h3>
              <p className="text-gray-600">
                We offer competitive compensation, health insurance, retirement
                plans, and additional perks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-center">
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
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Work-Life Balance
              </h3>
              <p className="text-gray-600">
                We value your well-being and promote a healthy balance between
                work and personal life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Current Openings
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our current job opportunities and find your next career
              challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {job.department}
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {job.location}
                    </span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <button
                    onClick={() => setSelectedJob(job.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {jobs
                .filter((job) => job.id === selectedJob)
                .map((job) => (
                  <div key={job.id}>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {job.title}
                        </h2>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {job.department}
                          </span>
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {job.location}
                          </span>
                          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedJob(null)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Job Description
                      </h3>
                      <p className="text-gray-600">{job.description}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Responsibilities
                      </h3>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        {job.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Requirements
                      </h3>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        {job.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {!formSubmitted ? (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Apply for This Position
                        </h3>
                        <form onSubmit={handleSubmit}>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Full Name *
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Email *
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="resume"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Resume URL (LinkedIn or Google Drive) *
                            </label>
                            <input
                              type="url"
                              id="resume"
                              name="resume"
                              value={formData.resume}
                              onChange={handleInputChange}
                              required
                              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                              placeholder="https://"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="coverLetter"
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              Cover Letter
                            </label>
                            <textarea
                              id="coverLetter"
                              name="coverLetter"
                              value={formData.coverLetter}
                              onChange={handleInputChange}
                              rows={4}
                              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                          </div>
                          <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            Submit Application
                          </button>
                        </form>
                      </div>
                    ) : (
                      <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4">
                        <div className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <h3 className="text-lg font-medium">
                            Application Submitted!
                          </h3>
                        </div>
                        <p className="mt-2">
                          Thank you for your interest. We'll review your
                          application and contact you soon.
                        </p>
                        <button
                          onClick={() => {
                            setFormSubmitted(false);
                            setSelectedJob(null);
                          }}
                          className="mt-4 py-2 px-4 bg-green-700 text-white font-medium rounded hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          Close
                        </button>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Team Culture Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Team Culture
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We foster a collaborative, innovative, and supportive environment
              where everyone can thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team Collaboration"
                className="rounded-lg shadow-lg mb-4"
              />
              <img
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team Building"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What Our Team Says
              </h3>

              <div className="mb-8">
                <blockquote className="italic text-gray-600 border-l-4 border-blue-500 pl-4">
                  "Working at AARYA ENTERPRISES has been a transformative
                  experience. The collaborative culture, opportunities for
                  growth, and supportive management have helped me develop both
                  professionally and personally."
                </blockquote>
                <p className="mt-2 text-gray-800 font-medium">
                  - Priya Sharma, Financial Consultant
                </p>
              </div>

              <div className="mb-8">
                <blockquote className="italic text-gray-600 border-l-4 border-blue-500 pl-4">
                  "I joined AARYA ENTERPRISES three years ago, and it has been
                  an amazing journey. The company truly invests in its employees
                  and provides a platform to innovate and make a meaningful
                  impact."
                </blockquote>
                <p className="mt-2 text-gray-800 font-medium">
                  - Vikram Mehta, Business Development Manager
                </p>
              </div>

              <div>
                <blockquote className="italic text-gray-600 border-l-4 border-blue-500 pl-4">
                  "The work-life balance and growth opportunities at AARYA
                  ENTERPRISES are exceptional. I've been able to advance my
                  career while maintaining a healthy balance with my personal
                  life."
                </blockquote>
                <p className="mt-2 text-gray-800 font-medium">
                  - Anjali Patel, HR Specialist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-6">
            Don't see a role that fits your profile?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            We're always on the lookout for talented individuals to join our
            team. Send us your resume, and we'll reach out when a suitable
            position becomes available.
          </p>
          <a
            href="mailto:careers@aaryaenterprises.com"
            className="px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100"
          >
            Send Your Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default Career;
