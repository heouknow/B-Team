import './navbar.css'
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const signUpGo = () => {
        navigate("/signup");
    };

    const logIn = () => {
        navigate("/login");
    };
    return (
        <div className='navbar'>
            <div className="navContainer">
                <span className="logo">Add in ground</span>
                <div className="navItems">
                    <button className="navButton" onClick={signUpGo}>회원가입</button>
                    <button className="navButton" onClick={logIn}>로그인</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar