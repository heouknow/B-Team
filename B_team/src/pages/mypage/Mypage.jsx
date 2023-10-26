import { useLocation } from "react-router-dom";
import Navbarlogged from "../../components/navbar/Navbarlogged";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const Mypage = (props) => {
    const location = useLocation();
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openDate, setOpenDate] = useState(false);

    // Use useEffect to fetch data from localStorage when the component mounts
    useEffect(() => {
        const stg = localStorage.getItem('data');
        if (stg) {
            const parsedData = JSON.parse(stg);
            if (parsedData.ti) {
                setDate(parsedData.ti.date || date);
            }
        }
    }, []);

    const title = location.state?.title;
    const area = location.state?.area;
    const img = location.state?.img;

    return (
        <>
            <Navbarlogged />
            <div>
                <h1>예약 정보 확인</h1>
                <p>제목: {title}</p>
                <p>지역: {area}</p>
                <img src={img} alt="ground" width="30%" />
            </div>
            <div className="lsItem">
                <p>예약 날짜 </p>
                <span onClick={() => setOpenDate(!openDate)}>
                    {`${format(date[0].startDate, "yy년MM월dd일")}~${format(
                        date[0].endDate,
                        "yy년MM월dd일"
                    )}`}
                </span>
            </div>
        </>
    );
};

export default Mypage;


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