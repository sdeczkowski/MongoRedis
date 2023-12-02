import React from "react";
import { Container, Row, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import ToDo from "../components/ToDo";
import "./css/Todopage.css";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "../utils/HandleApiMongo";
import Particles from "../components/ParticleBackground";

function Todo() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };
  return (
    <Container>
      <Row>
        <h1 className="text-light text-center mt-2">TodoList MongoDB</h1>
        <Form className="d-flex mt-2 flex-row justify-content-center ">
          <Form.Group className="mb-2 text-light">
            <Form.Control
              type="text"
              placeholder="Add ToDos..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="ms-1 text-light">
            <Button
              variant="info"
              className="add shadow p-2 rounded bt__"
              onClick={
                isUpdating
                  ? () => updateToDo(toDoId, text, setToDo, setIsUpdating, setText)
                  : () => addToDo(text, setText, setToDo)
              }>
              {isUpdating ? "Update" : "Add"}
            </Button>
          </Form.Group>
        </Form>
      </Row>
      <Row className="d-flex flex-column align-content-center" style={{ overflow: "auto" }}>
        {toDo.map((item) => (
          <ToDo
            key={item._id}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deleteToDo={() => deleteToDo(item._id, setToDo)}
          />
        ))}
      </Row>
      <Particles />
    </Container>
  );
}

export default Todo;
