import React from "react";
import "./FeatureItem.scss";
import accessIcon from "../../../images/icon-access-anywhere.svg";
import securityIcon from "../../../images/icon-security.svg";
import collaborationIcon from "../../../images/icon-collaboration.svg";
import anyFileIcon from "../../../images/icon-any-file.svg";

const FeatureItem = (props) => {
  const { title, description, image } = props;
  let imageIcon = accessIcon;

  switch (image) {
    case "security":
      imageIcon = securityIcon;
      break;
    case "collaboration":
      imageIcon = collaborationIcon;
      break;
    case "any-file":
      imageIcon = anyFileIcon;
      break;
  }

  return (
    <article className={"feature-item"}>
      <img src={imageIcon} alt={image}/>
      <div className="feature-title">{title}</div>
      <div className="feature-description">{description}</div>
    </article>
  );
};

export default FeatureItem;
