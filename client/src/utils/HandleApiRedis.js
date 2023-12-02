import axios from "axios";

const baseUrl = "http://localhost:3001/api/todo";

const getAllToDo = (setToDo) => {
  axios.get(`${baseUrl}/list`).then(({ data }) => {
    setToDo(data);
  });
};

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/redis`, { text: text })
    .then((data) => {
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (toDoId, text, setToDo, setIsUpdating, setText) => {
  axios
    .put(`${baseUrl}/update/${toDoId}`, { text: text })
    .then((data) => {
      getAllToDo(setToDo);
      setText("");
      setIsUpdating(false);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id, setToDo) => {
  axios
    .delete(`${baseUrl}/delete/${_id}`)
    .then((data) => {
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
