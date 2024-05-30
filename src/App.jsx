import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginForm from "./pages/Login/LoginForm";
import SignupForm from "./pages/Login/SignupForm";
import Dashboard from "./pages/DashBoard/Dashboard";
import SearchBar from "./components/SearchBar";
import ListMovie from "./components/ListMovie";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/user" element={<Dashboard />}>
          <Route path="search" element={<SearchBar />} />
          <Route path="playlist" element={<ListMovie />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
