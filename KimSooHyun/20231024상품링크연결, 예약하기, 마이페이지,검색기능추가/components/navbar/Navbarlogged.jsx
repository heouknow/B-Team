import './navbar.css'
import { useNavigate } from "react-router-dom";

const Navbarlogged = () => {

    const navigate = useNavigate();

    const logged = () => {
        navigate("/mypage");
    };

    const logout = () => {
        navigate("/");
    };

    return (
        <div className='navbar'>
            <div className="navContainer">
                <span className="logo">Add in ground</span>
                <div className="navItems">
                    <span className="logged" onClick={logged}>{`[ 홍길동 ]님`}</span>
                    <button className="navButton" onClick={logout}>로그아웃</button>
                </div>
            </div>
        </div>
    )
}

export default Navbarlogged