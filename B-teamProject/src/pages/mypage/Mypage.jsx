import { useLocation } from "react-router-dom";
import Navbarlogged from "../../components/navbar/Navbarlogged";
// import Footer from "../../components/footer/Footer";
// import MailList from "../../components/mailList/MailList";

const Mypage = () => {
    const location = useLocation();
    const { title, area, img } = location.state;

    return (
        <>  <Navbarlogged />
            <div>
                <h1>예약 정보 확인</h1>
                <p>제목: {title}</p>
                <p>지역: {area}</p>
                <img src={img} alt="ground" width="30%" />
            </div>
            {/* <MailList />
            <Footer /> */}
        </>
    );
};

export default Mypage



// const Mypage = () => {
//     let [myinfo] = useState(mydata)
//     let [myres] = useState(myre)
//     return (
//         <>
//             <Navbarlogged />
//             <div>
//                 {myinfo.map((a, i) => {
//                     return (
//                         <My myinfo={myinfo[i]} i={i} />
//                     )
//                 })
//                 }
//             </div>
//             <div>
//                 {myres.map((a, i) => {
//                     return (
//                         <Myres myres={myres[i]} i={i} />
//                     )
//                 })
//                 }
//             </div>

//         </>
//     )
// }