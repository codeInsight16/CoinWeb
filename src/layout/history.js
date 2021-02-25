import React from 'react';
import VerticalLine from '../img/line_vertical.svg';

const History = () => {
    return(
        <div className="history-container">
            <div className="award-detail1">
                <h3 className="impact fontblue">2019</h3>
                <p>
                    제 9회 G-창업리그 은상 • 장려상<br/>
                    지역주도형 청년일자리 사업<br/>
                    &lt;우리마을 기업을 소개합니다&gt; 장려상<br/>
                    GTEC 창의 아이디어 공모전 대상
                </p>
            </div>
            <div className="award-detail2">
                <h3 className="impact fontblue">2018</h3>
                <p>
                    제 6회 K-Hackathon 대회 최우수상<br/>
                    제 8회 G-창업리그 대상 • 은상
                </p>
            </div>
            <div className="award-detail3">
                <h3 className="impact fontblue2">2017</h3>
                <p>
                    제 7회 G-창업리그 대상 • 동상 • 장려상
                </p>
            </div>
            <div className="award-detail4">
                <h3 className="impact fontblue3">2016</h3>
                <p>
                    제 4회 K-Hackathon 대회 우수상<br/>
                    제 6회 G-창업리그 금상 • 은상
                </p>
            </div>
            <div className="award-detail5">
                <h3 className="impact fontblue4">2015</h3>
                <p>
                    제 5회 G-창업리그 대상 • 금상 • 은상 • 장려상
                </p>
            </div>
            <img className="history-vertical-line"src={VerticalLine} alt="verticalLine"/>
        </div>
    );
};

export default History;