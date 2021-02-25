import React from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/header';
import Intro from './layout/intro';
import History from './layout/history';
import Job from './layout/job';
import Footer from './layout/footer';
import './main.css';

const App = () => {
    return(
        <>
            <Header />
            <Intro />            
            <History />  
            <Job />
            <Footer />
        </>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));