import { useState } from "react";
import PageHeader from "../components/shared/PageHeader";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Our Office Headquarters",
      description: "Our modern office space in the heart of the city.",
      category: "office",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Team Meeting",
      description: "Our team collaborating on new business strategies.",
      category: "team",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Client Consultation",
      description:
        "Our financial advisors meeting with clients to discuss investment strategies.",
      category: "clients",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Business Analytics",
      description:
        "Our team analyzing business data to develop effective strategies.",
      category: "work",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Team Collaboration",
      description:
        "Our diverse team working together to solve complex business challenges.",
      category: "team",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Office Reception",
      description: "The welcoming reception area of our main office.",
      category: "office",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Strategy Session",
      description:
        "Our team developing innovative business strategies for our clients.",
      category: "work",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Modern Workspace",
      description:
        "Our collaborative workspace designed for productivity and innovation.",
      category: "office",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Client Meeting",
      description:
        "Our consultants discussing business solutions with clients.",
      category: "clients",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Financial Planning",
      description:
        "Our financial team working on comprehensive financial strategies.",
      category: "work",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Team Building",
      description:
        "Our annual team building retreat to strengthen collaboration.",
      category: "team",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Workshop Session",
      description:
        "Knowledge sharing workshop with our team and industry experts.",
      category: "work",
    },
  ];

  const [filter, setFilter] = useState("all");

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === filter);

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Header */}
      <PageHeader
        title="Our Gallery"
        subtitle="Take a visual journey through our offices, team, and client engagements."
      />

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-12"
          data-aos="fade-up"
        >
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-md ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("office")}
            className={`px-4 py-2 rounded-md ${
              filter === "office"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Office
          </button>
          <button
            onClick={() => setFilter("team")}
            className={`px-4 py-2 rounded-md ${
              filter === "team"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Team
          </button>
          <button
            onClick={() => setFilter("clients")}
            className={`px-4 py-2 rounded-md ${
              filter === "clients"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Clients
          </button>
          <button
            onClick={() => setFilter("work")}
            className={`px-4 py-2 rounded-md ${
              filter === "work"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Work
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => openModal(image.src)}
              data-aos="fade-up"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-bold text-gray-900">
                  {image.title}
                </h3>
                <p className="mt-2 text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="max-w-4xl max-h-full">
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-black"
              onClick={closeModal}
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
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-h-[80vh] max-w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Quote Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
          <blockquote className="text-2xl font-medium text-gray-900 italic">
            "A picture is worth a thousand words. Our gallery showcases our
            journey, our people, and our commitment to excellence."
          </blockquote>
          <p className="mt-4 text-lg text-gray-600">— Pradeep Kumar, Founder</p>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
