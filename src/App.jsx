import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Layout from "@components/Layout";
import Detail from "@pages/Detail";
import { Search } from "@/pages/Search";
import { SignUp } from "./pages/Signup";
import { Login } from "./pages/Login";
import { MovieDetailSkeleton } from "./components/MovieDetail/MovieDetailSkeleton";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="details/:id" element={<Detail />} />
        <Route path="search" element={<Search />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="detail" element={<MovieDetailSkeleton />} />
      </Route>
    </Routes>
  );
}

export default App;
