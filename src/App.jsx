import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Detail from "./pages/Detail";
import { Search } from "./pages/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="details/:id" element={<Detail />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
