import React from "react";
import './ClientTestimonial.scss'

const ClientTestimonial = (props) => {
  const { description, name, position, photo } = props;
  return (
    <article className="client-card">
      <p className="client-description">{description}</p>
      <div className="client-info">
        <img src={photo} alt={name} className='client-photo' />
        <div className="client-data">
          <p className="client-name">{name}</p>
          <p className="client-position">{position}</p>
        </div>
      </div>
    </article>
  );
};

export default ClientTestimonial;
