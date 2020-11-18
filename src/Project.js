import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Project.css";

const Project = ({ items }) => {
  return (
    <div className="projects">
      {items.map((menuItem) => {
        const { title, img, live_link, repo_link } = menuItem;
        return (
          <article>
            <Card class style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src={img}
                style={{ height: "12rem" }}
                className="pic"
              />
              <Card.Body>
                <Card.Title className="title">{title}</Card.Title>
                <div className="links">
                  <Card.Link
                    className="link"
                    href={live_link}
                    style={{ display: "table-cell" }}
                    target="_blank"
                  >
                    <Button className="btn-dark">Live</Button>
                  </Card.Link>
                  <Card.Link
                    className="link"
                    href={repo_link}
                    style={{ display: "table-cell" }}
                    target="_blank"
                  >
                    <Button className="btn-dark">Github</Button>
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </article>
        );
      })}
    </div>
  );
};

export default Project;
