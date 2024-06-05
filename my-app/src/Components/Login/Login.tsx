import React, { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { LoginData } from "../interfacefile";
import { Validatelogin } from "../interfacefile";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [validaterr, setValidateerr] = useState<Validatelogin>({
    mail: "",
    pass: ""
  })
  const [LoginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const validateform = (data: LoginData) => {
    const validaterr: Validatelogin = {
      pass: "",
      mail: ""
    };
    if (!data.password) {
      validaterr.pass = 'Password is required';
    }
    if (!data.email) {
      validaterr.mail = 'Email is required';
    }
    return validaterr;
  }
  const handleSubmit = async () => {
    const newerrors: Validatelogin = validateform(LoginData);
    setValidateerr(newerrors);
    if (newerrors.mail.length === 0 && newerrors.pass.length === 0) {
      const result = await axios.get(`http://localhost:3000/checkuser/${LoginData.email}/${LoginData.password}`, { withCredentials: true });
      const res: string = result.data.msg;
      console.log(res, "res");
      if (res === "Success") {
        // navigate("/form");
        navigate("/bookmyshelf", { state: { user_id: result.data.user_id } });
      } else if (res === "wrong Data") {
        setError("wrong Data!!")
      } else {
        setError("No data found!!")
      }
    } else {
      console.log("validation error!!");
    }
  };
  const frgtpass = () => {
    navigate('/forget')
  }
  return (
    <div className="container">
      <form className="form">
        <h2>Login</h2>
        <div className="form-div">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={LoginData.email}
            onChange={handleChange}
            className="form-control"
          />
          {validaterr.mail && <span className="error-message">{validaterr.mail}</span>}
        </div>
        <div className="form-div">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={LoginData.password}
            onChange={handleChange}
            className="form-control"
          />
          {validaterr.pass && <span className="error-message">{validaterr.pass}</span>}
        </div>
        <div className="flex">
          <p id="frgtpass" onClick={frgtpass}>Forgot Password</p>
          <p id="loginbtn" onClick={handleSubmit}>
            Login
          </p>
        </div>
        <div className="flex">
          <p>Don't have an Acoount? <Link to="/">Register</Link></p>
        </div>
        <p id="error">{error}</p>
      </form>
    </div>
  );
};

export default Login;