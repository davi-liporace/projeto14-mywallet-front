import GlobalStyle from "./GlobalStyle";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContext from "./auth";
import Entradas from "./Entradas";
import Home from "./Home";
import Saidas from "./Saidas";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function App() {
  const [user, setUser] = useState("");

  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Entradas" element={<Entradas />} />
          <Route path="/Saidas" element={<Saidas />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}