import React, { ReactNode } from "react";
import { THEME } from "../../constants/colors";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  className = "",
}) => {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-lg ${className}`}
      data-aos="fade-up"
    >
      {icon && (
        <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
          {icon}
        </div>
      )}
      <h3
        className={`text-xl font-semibold ${THEME.text.dark} mb-2 text-center`}
      >
        {title}
      </h3>
      <p className={`${THEME.text.muted} text-center`}>{description}</p>
    </div>
  );
};

export default Card;
