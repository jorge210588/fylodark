import React from "react";
import "./TestimonialSection.scss";
import ClientTestimonial from "./ClientTestimonial/ClientTestimonial";
import client1Photo from "../../images/profile-1.jpg";
import client2Photo from "../../images/profile-2.jpg";
import client3Photo from "../../images/profile-3.jpg";

const TestimonialSection = () => {
  const client1 = {
    description:
      "Fylo has improved our team productivity by an order of magnitude. Since making the swith our team has become a well-oiled collaboration machine.",
    name: "Satish Patel",
    position: "Founder & CEO, Huddle",
    photo: client1Photo,
  };

  const client2 = {
    description:
      "Fylo has improved our team productivity by an order of magnitude. Since making the swith our team has become a well-oiled collaboration machine.",
    name: "Bruce McKenzie",
    position: "Founder & CEO, Huddle",
    photo: client2Photo,
  };

  const client3 = {
    description:
      "Fylo has improved our team productivity by an order of magnitude. Since making the swith our team has become a well-oiled collaboration machine.",
    name: "Iva Boyd",
    position: "Founder & CEO, Huddle",
    photo: client3Photo,
  };

  return (
    <section className="testimonial-section">
      <section className="center-div">
        <ClientTestimonial
          description={client1.description}
          name={client1.name}
          position={client1.position}
          photo={client1.photo}
        />
        <ClientTestimonial
          description={client2.description}
          name={client2.name}
          position={client2.position}
          photo={client2.photo}
        />
        <ClientTestimonial
          description={client3.description}
          name={client3.name}
          position={client3.position}
          photo={client3.photo}
        />
      </section>
    </section>
  );
};

export default TestimonialSection;
