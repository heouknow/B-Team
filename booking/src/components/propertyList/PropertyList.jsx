import "./propertyList.css";

const PropertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img
                    src="https://cdn.latimes.kr/news/photo/202110/38820_52627_2553.jpg"
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>서울시 마포구 </h1>
                    <h2>마포 난지천 인조잔디</h2>
                </div>
            </div>
            <div className="pListItem">
                <img
                    src="https://storage.heypop.kr/assets/2022/10/24110920/t-30.jpg"
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>서울시 양천구</h1>
                    <h2>목동 종합운동장</h2>
                </div>
            </div>
            <div className="pListItem">
                <img
                    src="https://img.freepik.com/premium-photo/football-stadium-3d-rendering-soccer-stadium-with-crowded-field-arena_3544-1724.jpg"
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>파주시 조리읍</h1>
                    <h2>파주 JM 풋볼파크</h2>
                </div>
            </div>
            <div className="pListItem">
                <img
                    src="https://www.aphroditehills.com/Aphrodite-hills/wp-content/uploads/2022/05/basketball2_2022-1.jpg"
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>용인시 기흥구</h1>
                    <h2>용인 윙스 농구장</h2>
                </div>
            </div>
            <div className="pListItem">
                <img
                    src="https://menu.moneys.co.kr/moneyweek/thumb/2021/08/22/06/2021082218018064480_1.jpg"
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>서울시 구로구</h1>
                    <h2>구로누리 배드민턴장 </h2>
                </div>
            </div>
        </div>
    );
};

export default PropertyList;
