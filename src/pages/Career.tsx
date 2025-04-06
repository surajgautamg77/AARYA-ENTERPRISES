import { useState } from "react";
import PageHeader from "../components/shared/PageHeader";
import SectionHeader from "../components/shared/SectionHeader";
import Card from "../components/shared/Card";
import CTASection from "../components/shared/CTASection";

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
      <PageHeader
        title="Career Opportunities"
        subtitle="Join our team and help us build exceptional solutions for businesses."
      />

      {/* Why Join Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Why Join Arya Enterprises?"
            subtitle="We offer a dynamic work environment where talent thrives and innovation is encouraged."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              title="Growth Opportunities"
              description="We invest in your professional development with training, mentorship, and advancement opportunities."
              icon={
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
              }
            />

            <Card
              title="Collaborative Culture"
              description="Work in a supportive environment where teamwork and knowledge sharing are encouraged."
              icon={
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
              }
            />

            <Card
              title="Competitive Benefits"
              description="We offer competitive compensation, health insurance, retirement plans, and additional perks."
              icon={
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
              }
            />

            <Card
              title="Work-Life Balance"
              description="We promote a healthy work-life balance with flexible schedules and remote work options when possible."
              icon={
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
              }
            />
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Open Positions"
            subtitle="Explore our current job openings and find the perfect role for your skills and aspirations."
          />

          <div className="space-y-8">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                data-aos="fade-up"
              >
                <div className="p-6 flex flex-col lg:flex-row justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                        {job.location}
                      </span>
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <button
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      onClick={() =>
                        setSelectedJob(selectedJob === job.id ? null : job.id)
                      }
                    >
                      {selectedJob === job.id ? "Hide Details" : "View Details"}
                    </button>
                  </div>
                </div>

                {selectedJob === job.id && (
                  <div className="p-6 border-t border-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Responsibilities
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          {job.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Requirements
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          {job.requirements.map((requirement, index) => (
                            <li key={index}>{requirement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-8 text-center">
                      <button
                        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        onClick={() => {
                          const applicationForm =
                            document.getElementById("application-form");
                          applicationForm?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }}
                      >
                        Apply for this position
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        id="application-form"
      >
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            title="Apply for a Position"
            subtitle="Submit your application for any of our open positions. We look forward to learning more about you."
          />

          {formSubmitted ? (
            <div
              className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center"
              data-aos="fade-up"
            >
              <svg
                className="w-12 h-12 text-green-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="text-2xl font-bold mb-2">
                Application Submitted!
              </h3>
              <p className="text-lg mb-4">
                Thank you for your interest in joining our team. We will review
                your application and contact you soon.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-lg p-8"
              data-aos="fade-up"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="resume"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Resume/CV Link <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="resume"
                  id="resume"
                  value={formData.resume}
                  onChange={handleInputChange}
                  placeholder="Paste a link to your resume (Google Drive, Dropbox, etc.)"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="coverLetter"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Cover Letter
                </label>
                <textarea
                  name="coverLetter"
                  id="coverLetter"
                  rows={6}
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  placeholder="Tell us why you're interested in this position and why you'd be a good fit."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit Application
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Not seeing the right position?"
        description="We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Career;
