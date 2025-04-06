import React from "react";
import { THEME } from "../../constants/colors";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className={`${THEME.background.primary} py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
          {title}
        </h1>
        <p
          className={`mt-4 text-xl ${THEME.text.light_muted} max-w-2xl mx-auto`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
