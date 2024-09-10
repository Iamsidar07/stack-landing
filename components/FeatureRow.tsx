import React from "react";
import FeatureCard, { FeatureCardProps } from "./FeatureCard";

interface FeatureRowProps {
  features: FeatureCardProps[];
}

const FeatureRow = ({ features }: FeatureRowProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </>
  );
};

export default FeatureRow;
