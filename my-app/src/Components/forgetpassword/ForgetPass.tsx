import { ChangeEvent, useState } from "react";
import "./forgetpass.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgetPass: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("")
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setEmail(e.target.value);
    };
    const submitmail = async () => {
        setError("");
        if (!email) {
            setError("Please Enter Email First!!");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please Enter Valid Mail!!");
        } else {
            const result = await axios.get(`http://localhost:3000/finduser/${email}`, { withCredentials: true });
            if (result.data.id) {
                navigate("/password", { state: { user_id: result.data.id } });
            } else {
                setError("No User Found!!")
            }
        }
    }
    return (
        <div className="container">
            <form className="form">
                <h2>Forget Password</h2>
                <div className="form-div">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className="form-control"
                    />
                    <p id="checkmail" onClick={submitmail}>Click Here</p>
                    <p id="error-mail">{error}</p>
                </div>
            </form >
        </div>
    );
}

export default ForgetPass;