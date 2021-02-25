import React from 'react';
import IntroLogo from '../img/logo_about.svg';
import VerticalLine from '../img/line_vertical.svg';

const Intro = () => {
    return(
        <div className="intro-container">
            <img className="intro-img" src={IntroLogo} alt="intro-img"/>
            <h3 className="intro-title">
                경기과학기술대학교 전공연구회 COIN은
            </h3>
            <p className="intro-description">
                프로그래밍에 관심이 있는 학생들이 모여<br/>
                해당 분야를 탐구하고 공유하는 활동을 하며<br/>
                실무 능력을 증진하는 교내 동아리입니다.<br/><br/>
                다양한 분야의 학생들이 모여 아이디어를 선정하고<br/>
                서비스를 구현하여 Google Play 스토어 혹은<br/>
                App Store 등에 출시하는 활동도 진행하고 있습니다.
            </p>
            <img className="intro-vertical-line"src={VerticalLine} alt="verticalLine"/>
        </div>
    );
};

export default Intro;