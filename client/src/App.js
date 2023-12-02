import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navi from "./components/Navi";
import TodoMongo from "./pages/TodopageMongo";
import TodoRedis from "./pages/TodopageRedis";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Navi />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/TodopageMongo" exact element={<TodoMongo />} />
        <Route path="/TodopageRedis" exact element={<TodoRedis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
