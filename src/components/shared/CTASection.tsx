import React from "react";
import { Link } from "react-router-dom";
import { THEME } from "../../constants/colors";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  className = "",
}) => {
  return (
    <section className={`py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div
        className={`max-w-7xl mx-auto ${THEME.background.primary} rounded-lg shadow-xl overflow-hidden`}
      >
        <div
          className="px-6 py-12 md:p-12 text-center text-white"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-extrabold mb-6">{title}</h2>
          <p className="text-xl max-w-xl mx-auto mb-8">{description}</p>
          <Link
            to={buttonLink}
            className={`inline-block px-8 py-4 border border-transparent text-base font-medium rounded-md ${THEME.text.primary} bg-white hover:bg-gray-100`}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
