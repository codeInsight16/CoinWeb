import React from 'react';
import JobCard from '../component/JobCard';

const Job = () => {
    return(
        <div className="job-container">
            <JobCard 
                title="planning"
                caption="기획"
                description="다양한 서비스를 기획하며</br> 아이디어를 공유, 계획을 수립합니다."
            />
            <JobCard 
                title="developement"
                caption="개발"
                description="전반적인 서비스의 구조를 파악하여<br/>프론트엔드와 백엔드를 개발합니다."
            />
            <JobCard 
                title="design"
                caption="디자인"
                description="기획한 서비스를 기반으로 웹과<br/>어플 등을 디자인합니다."
            />
        </div>
    );
};

export default Job;