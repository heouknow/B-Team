import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./login.css";

const Login = () => {
    const [values, setValues] = useState({
        user_Id: "",
        user_Pw: "",
    });

    const navigate = useNavigate()

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { values })
            .then((response) => {
                console.log('전송', response);
                navigate("/");
            })
            .catch(err => console.log(err))

    };


    return (
        <div className="login">
            <form className="lContainer" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="아이디를 입력해주세요"
                    id="username"
                    onChange={onChange}
                    className="lInput"
                />
                <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    id="password"
                    onChange={onChange}
                    className="lInput"
                />
                <button className="lButton">
                    로그인
                </button>
            </form>

        </div>
    );
};

export default Login;
