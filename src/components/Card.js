import React from "react";
import "../components/Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card-title">
        <h3>Company: {props.company.name}</h3>
      </div>
      <div className="card-header">
        <p className="title">Phone: </p>
        <p className="card-phone"> {props.phone}</p>
        <p className="title">Website: </p>
        <p className="card-website">{props.website}</p>
      </div>
      <div className="card-body">
        {/* currently obmitting username from contact card, can be added by uncommenting below */}
        {/* <p>Username: {props.username}</p> */}
        <div className="personal-details">
          <div className="name">
            <p className="title">Name:</p>
            <p>{props.name}</p>
          </div>
          <div className="display-email">
            <p>
              Email: <a>{props.email}</a>
            </p>
          </div>
          <p>
            Address: {props.address.street}, {props.address.suite}
            {", "}
            {props.address.city}, {props.address.zipcode}
          </p>
          <p>
            Geo: {props.address.geo.lat}, {props.address.geo.lng}
          </p>
        </div>
        <div className="company-details">
          <p>Catch Phrase: {props.company.catchPhrase}</p>
          <p>BS: {props.company.bs}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
