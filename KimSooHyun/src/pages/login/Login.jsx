import axios from "axios";
import { useState } from "react";
import "./login.css";
import FormInput from "../../components/formInput/FormInput";

const Login = () => {
    const [values, setValues] = useState({
        user_Id: "",
        user_Pw: "",
    });

    const inputs = [
        {

            name: "user_Id",
            type: "text",
            placeholder: "아이디를 입력하세요",
            errorMessage:
                "아이디는 3~16글자이고, 특수문자는 사용할 수 없습니다!",
            label: "아이디",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {

            name: "user_Pw",
            type: "password",
            placeholder: "비밀번호를 입력하세요",
            errorMessage:
                "비밀번호는 8~20글자이고, 최소 1개의 글자, 숫자, 특수문자를 사용해야 합니다!",
            label: "비밀번호",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
    ];



    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/signup', { values })
            .then(response => {
                console.dir(response.data.message);
                if (response.data.message == 0) {
                    alert('로그인완료!')
                    var link = 'http://localhost:3000/';
                    window.open(link);
                }
            })
            .catch(err => console.log(err))
        console.log(values);

    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="login">
            <form className="lContainer" onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <FormInput
                        key={input.user_Num}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button className="lButton">
                    로그인
                </button>
            </form>

        </div>
    );
};

export default Login;
