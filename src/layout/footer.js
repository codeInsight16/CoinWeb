import React from 'react';
import CoinMap from '../img/coin_map.svg'
import FooterLogo from '../img/logo_footer.svg';

const Footer = () => {
    return(
        <div className="footer-container">
            <h3 className="location-title">Location</h3>
            <img className="coin-map" src={CoinMap} alt="coinMap"/>
            <p className="location-caption">
                경기과학기술대학교 2캠퍼스 제1중소기업관 (H동) 416호
            </p>
            <p className="location-caption-caption">
                (경기 시흥시 경기과기대로 270 제1중소기업관 416호)
            </p>
            <div className="footer-inner-container">
                <div className="footer-inner-context">
                    경기과학기술대학교 전공동아리 COIN<br/>
                    <span className="copyright">©2021COIN, ALL RIGHTS RESERVED</span>
                </div>
                <img className="footer-logo" src={FooterLogo} alt="footerlogo"/>
            </div>
        </div>
    );
};

export default Footer;