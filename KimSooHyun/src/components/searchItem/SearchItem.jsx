import "./searchItem.css";

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img
                src="https://modo-phinf.pstatic.net/20181116_56/1542349611510RscHr_JPEG/mosa99JLjR.jpeg?type=w1100"
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">노원 팀일레븐 트레이닝존</h1>
                <span className="siDistance">서울시 노원구 공릉로 227 지층</span>
                <span className="siTaxiOp">실내 인조 잔디</span>
                <span className="siSubtitle">
                    구장크기 : 12m x 12m
                </span>
                <span className="siFeatures">
                    추천용도 : 훈련 • 개인연습
                </span>
                <span className="siCancelOp">예약 취소하기</span>
                <span className="siCancelOpSubtitle">
                    대관 5일 전까지 예약 취소 시 100% 환불 가능
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>샤워실/공대여</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">35,000원~</span>
                    <span className="siTaxOp">사용기간은 종일 대여</span>
                    <button className="siCheckButton">예약하기</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
