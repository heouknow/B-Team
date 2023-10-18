import { useState } from "react";
import axios from 'axios'
import "./signUp.css";
import FormInput from "../../components/formInput/FormInput";

const SignUp = () => {
    const [values, setValues] = useState({
        user_id: "",
        user_pw: "",
        user_pwcheck: "",
        user_Name: "",
        user_Phone: "",
    });

    const inputs = [
        {
            user_Num: 1,
            name: "user_id",
            type: "text",
            placeholder: "아이디를 입력하세요",
            errorMessage:
                "아이디는 3~16글자이고, 특수문자는 사용할 수 없습니다!",
            label: "아이디",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            user_Num: 2,
            name: "user_pw",
            type: "password",
            placeholder: "비밀번호를 입력하세요",
            errorMessage:
                "비밀번호는 8~20글자이고, 최소 1개의 글자, 숫자, 특수문자를 사용해야 합니다!",
            label: "비밀번호",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            user_Num: 3,
            name: "user_pwcheck",
            type: "password",
            placeholder: "비밀번호를 다시 한번 입력하세요",
            errorMessage: "비밀번호가 일치하지 않습니다",
            label: "비밀번호 확인",
            pattern: values.user_pw,
            required: true,
        },
        {
            user_Num: 4,
            name: "user_Name",
            type: "text",
            placeholder: "이름을 입력하세요",
            label: "user_Name",
        },
        {
            user_Num: 5,
            name: "user_Phone",
            type: "number",
            placeholder: "전화번호를 입력하세요",
            errorMessage: "전화번호는 숫자여야 합니다",
            label: "연락처",
            pattern: `/^[0-9]+$/`,
            required: true,
        },

    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/login', { values })
            .then(response => console.log(response))
            .catch(err => console.log(err))
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="signUp">
            <form onSubmit={handleSubmit}>
                <h1 className="signUpH1">가입하기</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.user_Num}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button className="signUpbutton">제출하기</button>
            </form>
        </div>
    );
};

export default SignUp;
