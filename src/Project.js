import React from "react";
import image from "./assets/react-covid-tracker.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Project.css";

const Project = () => {
  return (
    <article>
      <Card class style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src={image}
          style={{ height: "12rem" }}
          className="pic"
        />
        <Card.Body>
          <Card.Title className="title">Title</Card.Title>
          <div className="links">
            <Card.Link className="link" href="#">
              <Button className="btn-dark">Live</Button>
            </Card.Link>
            <Card.Link className="link" href="#">
              <Button className="btn-dark">Github</Button>
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
    </article>
  );
};

export default Project;
