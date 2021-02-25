import React from 'react';
import MainLogo from '../img/logo_main.svg';
import MainImg from '../img/coin_web_main.svg';
import VerticalLine from '../img/line_vertical.svg';

const Header = () => {
    return(
        <div className="header-container">
            <img className="main-logo" src={MainLogo} alt="mainLogo"/>
            <img className="main-img" src={MainImg} alt="mainImg"/>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdBwjBDwFqd9CHAhCKM2-s_ucKqnnjdYZ5Zgt0fEoZrOBAp9Q/viewform?usp=sf_link"><p className="google-form-link">2021-1 가입 신청하기</p></a>
            <img className="main-vertical-line"src={VerticalLine} alt="verticalLine"/>
        </div>
    );
};

export default Header;