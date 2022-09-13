import React from "react";
import FeatureItem from "./FeatureItem/FeatureItem";
import "./FeaturesSection.scss";

const FeaturesSection = () => {
  const feature1 = {
    title: "Access your files, anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    image: "access-anywhere",
  };

  const feature2 = {
    title: "Security you can trust",
    description:
      "2-factor authentication and user-controlled encryption are just a couble of the security features we allow to help secure your files.",
    image: "security",
  };

  const feature3 = {
    title: "Real-time collaboration",
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    image: "collaboration",
  };

  const feature4 = {
    title: "Store any type of file",
    description:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowingfor all file types to be securely stored and shared.",
    image: "any-file",
  };

  return (
    <section className="features-section">
      <section className="features-row">
        <FeatureItem
          title={feature1.title}
          description={feature1.description}
          image={feature1.image}
        />
        <FeatureItem
          title={feature2.title}
          description={feature2.description}
          image={feature2.image}
        />
      </section>
      <section className="features-row features-bottom-row">
        <FeatureItem
          title={feature3.title}
          description={feature3.description}
          image={feature3.image}
        />
        <FeatureItem
          title={feature4.title}
          description={feature4.description}
          image={feature4.image}
        />
      </section>
    </section>
  );
};

export default FeaturesSection;
