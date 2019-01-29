import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


const Landing = () => {
    return (
        <div style={{ textAlign: 'center' }}>
          <ScrollAnimation animateIn="bounceIn" animateOut="zoomOut">
            <h1 className="white-text">
                getFeedback()
            </h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="slideInLeft">
            <h3 className="white-text" style={{marginTop:'150px'}}>
                 Find out what your customers and clients think about you!
            </h3>
            
            <h4 className="white-text" style={{marginTop: '70px'}}>
                Like most good businesses, you want to offer the best service to both your clients and customers,
                you want to know what you did right and most importantly what you could have done better (you can't please everyone!) so that
                next time you can make the necessary changes to your approach.
            </h4>
            </ScrollAnimation>
        </div>
    );
};

export default Landing;