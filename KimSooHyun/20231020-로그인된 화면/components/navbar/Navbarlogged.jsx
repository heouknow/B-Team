import './navbar.css'
import { useNavigate } from "react-router-dom";

const Navbarlogged = () => {

    const navigate = useNavigate();

    const logged = () => {
        navigate("/mypage");
    };
    return (
        <div className='navbar'>
            <div className="navContainer">
                <span className="logo">Add in ground</span>
                <div className="navItems">
                    <button className="navButton" onClick={logged}>{`홍길동님 로그인중`}</button>
                </div>
            </div>
        </div>
    )
}

export default Navbarlogged