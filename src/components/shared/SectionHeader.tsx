import React from "react";
import { THEME } from "../../constants/colors";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  center?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  center = true,
  className = "",
}) => {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""} ${className}`}>
      <h2 className={`text-3xl font-bold ${THEME.text.dark}`}>{title}</h2>
      <p
        className={`mt-4 text-xl ${THEME.text.muted} ${
          center ? "max-w-3xl mx-auto" : ""
        }`}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
