import React, { Component } from "react";
import "./css/Address.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

export class Address extends Component {
  render() {
    return (
      <div className="address">
        <div className="box1">
          <FontAwesomeIcon
            className="location"
            size="2x"
            icon={faLocationArrow}
          />
          <h1>Address</h1>
          <p className="ad">
            Pokhara-1, Bagar
            <br />
            Tudikhel marga
          </p>
        </div>

        
      </div>
    );
  }
}

export default Address;
