
import { useState } from 'react'
import mydata from './mydata.js'
import myre from './myre.js'
import Navbarlogged from "../../components/navbar/Navbarlogged";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";

const Mypage = () => {
    let [myinfo] = useState(mydata)
    let [myres] = useState(myre)
    return (
        <>
            <Navbarlogged />
            <div>
                {myinfo.map((a, i) => {
                    return (
                        <My myinfo={myinfo[i]} i={i} />
                    )
                })
                }
            </div>
            <div>
                {myres.map((a, i) => {
                    return (
                        <Myres myres={myres[i]} i={i} />
                    )
                })
                }
            </div>
            <MailList />
            <Footer />
        </>
    )
}

function My(props) {
    return (
        <div>
            <h2>나의 정보</h2>
            <div>
                <span>{props.myinfo.user_Name}</span>
                <img src={props.myinfo.img} width="2%" />
            </div>
        </div>
    )
}

function Myres(props) {
    return (
        <div>
            <h2>예약내역입니다!</h2>
            <div>
                <img src={props.myres.img} width="40%" />
                <h4>{props.myres.title}</h4>
                <p className='myreline'>{props.myres.price}</p>
            </div>
        </div>
    )
}


export default Mypage