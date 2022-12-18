import React from "react";
import { Link } from "react-router-dom";
import "../components/WorkCardstyles.css";
const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img
        src={props.imgsrc}
        alt="image-ecommerce"
      />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-buttons">
          <Link className="btn" to={props.view}>
            View
          </Link>
          <Link className="btn" to="/">
            Source
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
