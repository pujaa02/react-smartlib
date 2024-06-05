import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import "./password.css";
import axios from "axios";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { propState, PassData } from "../interfacefile";
import { Validatepass } from "../interfacefile";

const Password: React.FC = () => {
    const location = useLocation();
    const navigate: NavigateFunction = useNavigate();
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [PassData, setPassData] = useState<PassData>({
        pass: "",
        repass: "",
    });
    const [validaterr, setValidateerr] = useState<Validatepass>({
        password: "",
        confirmpass: ""
    });
    useEffect(() => {
        if (location.state) {
            const { user_id } = location.state as propState;
            setValue(user_id);
        }
    }, [location.state])

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setPassData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const validateform = (data: PassData) => {
        const validaterr: Validatepass = {
            password: "",
            confirmpass: ""
        };
        if (!data.pass) {
            validaterr.password = 'Password is required';
        } else if (data.pass.length < 8) {
            validaterr.password = `Password must be at 
                    least 8 characters long`;
        }
        if (data.repass !== data.pass) {
            validaterr.confirmpass = 'Passwords do not match';
        }
        return validaterr;
    }
    const handlePassword = (e: FormEvent) => {
        e.preventDefault();
        setError("");
        const newerrors = validateform(PassData);
        setValidateerr(newerrors);

        if (newerrors.password.length === 0 && newerrors.confirmpass.length === 0) {
            axios({
                url: `http://localhost:3000/password/${value}`,
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    PassData
                }),
            })
                .then(async (res) => {
                    const result = await res.data.msg;
                    if (result === "Success") {
                        navigate("/login");
                    } else {
                        setError("Something Went Wrong!!")
                    }
                })
                .catch((err) => console.log(err));
        } else {
            console.log("validation error!!");
        }
    };

    if (!location.state) {
        return (
            <div className="denied">
                <h1 >Can't Access!!</h1>
            </div>
        )
    }
    return (
        <div className="container-pass">
            <form onSubmit={handlePassword} className="pass-form">
                <div className="pass-form-div">
                    <label htmlFor="pass">Passowrd:</label>
                    <input
                        type="password"
                        id="pass"
                        name="pass"
                        value={PassData.pass}
                        onChange={handleChange}
                        className="form-control"
                    />
                    {validaterr.password && <span className="error-message">{validaterr.password}</span>}
                </div>
                <div className="pass-form-div">
                    <label htmlFor="repass">Re-Passowrd:</label>
                    <input
                        type="password"
                        id="repass"
                        name="repass"
                        value={PassData.repass}
                        onChange={handleChange}
                        className="form-control"
                    />
                    {validaterr.confirmpass && <span className="error-message">{validaterr.confirmpass}</span>}
                </div>
                <button type="submit" className="passbtn btn-primary">
                    Set Password
                </button>
            </form>
            <p id="mismatch">{error}</p>
        </div>
    );

}

export default Password;