import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";
import { RegData } from "../interfacefile";
import { ValidateRegdata } from "../interfacefile";

const Register: React.FC = () => {

  const navigate: NavigateFunction = useNavigate();
  const [display, setDisplay] = useState(false);
  const [error, setError] = useState("");
  const [validaterr, setValidateerr] = useState<ValidateRegdata>({
    fn: "",
    ln: "",
    mail: "",
    number: "",
    gen: "",
    dob: ""
  })
  const [actcode, setactcode] = useState("");
  const [id, setid] = useState("")
  const [RegData, setRegData] = useState<RegData>({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    gender: "",
    bd: "",
  });
  const changepage = () => {
    navigate(`/activate/${actcode}`, { state: { user_id: id, actcode: actcode } })
  }
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setRegData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const validateform = (data: RegData) => {
    const validaterr: ValidateRegdata = {} as ValidateRegdata;
    if (!data.fname.trim()) {
      validaterr.fn = "FirstName is Required!!"
    }
    if (!data.lname.trim()) {
      validaterr.ln = "LastName is Required!!"
    }
    if (!data.email.trim()) {
      validaterr.mail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      validaterr.mail = 'Email is invalid';
    }
    if (!data.phone.trim()) {
      validaterr.number = "Number is Required!!"
    } else if (!/^\d{10}$/.test(data.phone)) {
      validaterr.number = "Please enter valid number!!"
    }
    if (!data.gender.trim()) {
      validaterr.gen = "Gender is Required!!"
    }
    if (!data.bd.trim()) {
      validaterr.dob = 'Birthday Date is Required!!'
    }
    return validaterr;
  }
  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    const newerrors = validateform(RegData);
    setValidateerr(newerrors);

    // if (newerrors.fn.length === 0 && newerrors.ln.length === 0 && newerrors.mail.length === 0 && newerrors.number.length === 0 && newerrors.gen.length === 0 && newerrors.dob.length === 0) {
    if ((Object.values(newerrors)).length === 0) {
      const result = await axios.get(`http://localhost:3000/finduser/${RegData.email}`, { withCredentials: true });
      const checkuser = result.data.msg;
      console.log(checkuser);
      if (checkuser === "Success") {
        setError("Email Exists!!")
      } else {
        await axios.post('http://localhost:3000/register', RegData)
          .then(async (res) => {
            const result = await res.data;
            if (result.message === "success") {
              setid(result.user_id);
              setactcode(result.actcode);
              setDisplay(true);
            } else if (result.message === "failed") {
              setError("something wrong!!")
            }

          })
          .catch((err) => console.log(err));
      }

    } else {
      console.log("validation error!!");
    }


  }
  return (
    <div className="register-form-container">
      <h2>Registration Page</h2>
      <form onSubmit={handleRegister} className="register-form">
        <div className="row">
          <div className="col form-group">
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={RegData.fname}
              onChange={handleChange}
              className="form-control"
            />
            {validaterr.fn && <span className="error-message">{validaterr.fn}</span>}
          </div>
          <div className="col form-group">
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={RegData.lname}
              onChange={handleChange}
              className="form-control"
            />
            {validaterr.ln && <span className="error-message">{validaterr.ln}</span>}
          </div>
        </div>
        <div className="row">
          <div className="col form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={RegData.email}
              onChange={handleChange}
              className="form-control"
            />
            {validaterr.mail && <span className="error-message">{validaterr.mail}</span>}
          </div>
          <div className="col form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={RegData.phone}
              onChange={handleChange}
              className="form-control"
            />
            {validaterr.number && <span className="error-message">{validaterr.number}</span>}
          </div>
        </div>
        <div className="row">
          <div className="col form-group">
            <label htmlFor="bd">DOB:</label>
            <input
              type="date"
              id="bd"
              name="bd"
              value={RegData.bd}
              onChange={handleChange}
              className="form-control"
            /> <br />
            {validaterr.dob && <span className="error-message">{validaterr.dob}</span>}
          </div>
          <div className="col formgender">
            <label id="genderbold">Gender:</label> <br />
            <div className="genderflex">
              <div className="radio">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={RegData.gender === "male"}
                  onChange={handleChange}
                  className="form-check-input"
                />
                <label htmlFor="male" className="form-check-label">Male</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  checked={RegData.gender === "female"}
                  className="form-check-input"
                />
                <label htmlFor="female" className="form-check-label">Female</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  onChange={handleChange}
                  checked={RegData.gender === "other"}
                  className="form-check-input"
                />
                <label htmlFor="other" className="form-check-label">Other</label>
              </div>
            </div>
            {validaterr.gen && <span className="error-message">{validaterr.gen}</span>}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <div className="flex">
          <p>Already Have an Account? <Link to="/login">Login</Link></p>
        </div>
        {display && <div className="activatebtn">
          <p onClick={changepage}>Click Here</p>
        </div>}
        <p id="error">{error}</p>
      </form>
    </div>
  );
};
export default Register;


