import React from "react";
import { Pen, X } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";

const ToDo = ({ text, updateMode, deleteToDo }) => {
  return (
    <Card border="dark" className="mb-1 mt-1" style={{ width: "30rem", height: "7rem" }}>
      <Card.Header className="d-flex justify-content-end">
        <Pen className="icon me-1" onClick={updateMode} />
        <X className="icon" onClick={deleteToDo} />
      </Card.Header>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ToDo;
