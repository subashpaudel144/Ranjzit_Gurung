import React, { Component } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import { Card } from "react-bootstrap";
import "./css/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPhone,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";

export class Contact extends Component {
  render() {
    function sendEmail(e) {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_8hvt0ug",
          "template_vwebjxr",
          e.target,
          "user_KcsPQtYmpmePze6Dj3teU"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
    }

    return (
      <div className="contact">
        <div className="ban">
          <Banner />
        </div>
        <div className="cdetails">
          <h1>CONTACT ME</h1>
          <p className="para">
            If you want to contact me.. please feel free to contact me in my
            phone number below, address below, email below,
            <br /> or you can also contact me through facebook, instagram etc
            from the above icons.
          </p>
        </div>
        <div className="pdetails">
          <Card className="bg-dark m-2 p-3 text-center round">
            <FontAwesomeIcon
              className="location"
              size="2x"
              icon={faLocationArrow}
            />
            <h1>Address</h1>
            <p className="ad">
              Pokhara-15
              <br />
              Nayagaun
            </p>
          </Card>
          <Card className="bg-dark m-2 p-3 text-center">
            <FontAwesomeIcon className="location" size="2x" icon={faPhone} />
            <h1>Phone</h1>
            <p className="ad">+9779856012929</p>
          </Card>
          <Card className="bg-dark m-2 p-3 text-center">
            <FontAwesomeIcon className="location" size="2x" icon={faMailBulk} />
            <h1>Email</h1>
            <p className="ad">gurungranjit39@gmail.com</p>
          </Card>
          <Card className="bg-dark m-2 p-3 text-center">
            <FontAwesomeIcon className="location" size="2x" icon={faGoogle} />
            <h1>Website</h1>
            <p className="ad">www.ranjitgurung.com.np</p>
          </Card>
        </div>
        <form onSubmit={sendEmail}>
          <div className="message">
            <input type="text" name="name" placeholder="Your full name" />
            <br />
            <input type="text" name="email" placeholder="Your Email" />
            <br />
            <input type="text" name="subject" placeholder="Subject" />
            <br />
            <input type="text" name="phone" placeholder="Phone" />
            <br />
            <textarea name="message" id="textbox" cols="30" rows="10">
              Message:
            </textarea>
            <br />
            <button type="submit">Send message</button>
          </div>
        </form>
        <Footer />
      </div>
    );
  }
}

export default Contact;
