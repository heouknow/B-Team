import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navContainer">
                <span className="logo">Add in ground</span>
                <div className="navItems">
                    <button className="navButton">등록하기</button>
                    <button className="navButton">로그인</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar