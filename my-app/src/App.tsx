import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Activate from "./Components/Password/Activate";
import Password from "./Components/Password/Password";
import Wrong from "./Components/wrongurl/Wrong";
import ForgetPass from "./Components/forgetpassword/ForgetPass";
import Home from "./Components/Homepage/Home";
import Bookshelf from "./Components/Homepage/bookshelf";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Register />}></Route>
        <Route path="/activate/:actcode" element={<Activate />}></Route>
        <Route path="/password" element={<Password />}></Route>
        <Route path="/forget" element={<ForgetPass />}></Route>
        <Route path="*" element={<Wrong />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/bookmyshelf" element={<Bookshelf />}></Route>
      </Routes>
    </div>
  );
};

export default App;
