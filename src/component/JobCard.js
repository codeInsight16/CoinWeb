import React from 'react';
import HorizontalLine from '../img/line_horizontal.svg';

const JobCard = (props) => {
    return(
        <div className="jobCard-container">
            <div className="jobCard-box">
                <h3 className="jobCard-title">
                    {props.title}
                </h3>
                <p className="jobCard-caption">
                    {props.caption}
                </p>
                <img className="jobCard-horizontal-line" src={HorizontalLine} alt="hotrizontal-line" />
            </div>
            {/* eslint-disable-next-line*/}
            <p className="jobcard-description" dangerouslySetInnerHTML={{__html: props.description.replace(new RegExp('\n', 'g') , '<br/>')}}/>
        </div>
    );
};

export default JobCard;