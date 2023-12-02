import axios from "axios";

const baseUrl = "http://localhost:3002/api/todo";

const getAllToDo = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
    setToDo(data);
  });
};

const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (toDoId, text, setToDo, setIsUpdating, setText) => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text: text })
    .then((data) => {
      getAllToDo(setToDo);
      setIsUpdating(false);
      setText("");
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
