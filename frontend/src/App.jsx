import "./App.css";
import DetailsPage from "./components/Details";
import Edit from "./components/Edit";
import ManageBooks from "./components/ManageBooks";
import Create from "./components/create";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/manage" element={<ManageBooks />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/details/:id" element={<DetailsPage/>} />
      </Routes>
    </>
  );
}

export default App;
