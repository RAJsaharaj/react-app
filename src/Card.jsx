import React from "react";
// import web from "../src/images/s1.jpg";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt="alt text" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
             
            </p>
            <NavLink activeClassName="menu_active"
                        to="/about" className="btn btn-primary nav-link">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
