import React from "react";
import "./TitleSection.scss";

const TitleSection = () => {
  return (
    <section className="get-started-section">
      <div className="main-img" />
      <h1 className="section-title">
        All your files in one secure location, accesible anywhere.
      </h1>
      <article className="title-text">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </article>
      <div className="get-started-btn">
        <a href="#" className="get-started-link">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default TitleSection;
