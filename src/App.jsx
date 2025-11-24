import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dogs from "./components/Dogs/Dogs.jsx";
import DogDetail from "./components/DogDetail/DogDetail.jsx";
import CreateCard from "./components/CreateCard/CreateCard.jsx";
import Paginatio from "./components/Pogination/Comp-Pagination.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Главная страница со списком собак */}
          <Route path="/" element={<Dogs />} />

          <Route path="/createElem" element={<CreateCard />} />

          {/* Страница деталей конкретной собаки */}
          <Route path="/dogs/:id" element={<DogDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
