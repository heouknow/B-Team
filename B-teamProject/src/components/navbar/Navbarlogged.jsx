import './navbar.css'
import { useNavigate } from "react-router-dom";

const Navbarlogged = () => {

    const navigate = useNavigate();

    // 로고 클릭시 홈으로 이동하는 함수 추가
    const goToHome = () => {
        console.log("Logo clicked"); // 콘솔에 로그 출력
        navigate("/");
    };

    const logged = () => {
        navigate("/mypage");
    };

    const logout = () => {
        navigate("/");
    };

    return (
        <div className='navbar'>
            <div className="navContainer">
                <span className="logo" onClick={goToHome}>Add in ground</span>
                <div className="navItems">
                    <span className="logged" onClick={logged}>{`[ 홍길동 ]님`}</span>
                    <button className="navButton" onClick={logout}>로그아웃</button>
                </div>
            </div>
        </div>
    )
}

export default Navbarlogged