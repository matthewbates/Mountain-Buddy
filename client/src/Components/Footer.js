import React, { useState, useEffect, Fragment } from "react";
import { Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import Disclaimer from "./Disclaimer";

function Footer({ currentUser }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className="home-footer">
      <MDBFooter
        About
        the
        developer
        className="text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4" }}
      >
        <div className="container p-2 pb-0">
          <section className="mb-4">
            <h6 className="footer-text text-light">
              <b>Developer Links</b>
            </h6>{" "}
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com/in/matthew-bates-71b7bb79/"
              role="button"
              size="lg"
            >
              <MDBIcon fab icon="linkedin-in" size="lg" />
            </a>{" "}
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="#https://github.com/matthewbates"
              role="button"
              size="lg"
            >
              <MDBIcon fab icon="github" size="lg" />
            </a>{" "}
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#bababa" }}
              href="https://medium.com/me/stories/public"
              role="button"
              size="lg"
            >
              <MDBIcon fab icon="medium" size="lg" />
            </a>
          </section>
        </div>
        <b>
          <p className="time-color">{time.toString()}</p>
        </b>
      </MDBFooter>
    </div>
  );
}
export default Footer;
