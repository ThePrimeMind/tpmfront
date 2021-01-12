import React, { Component } from 'react';
import LandingImg from "../images/LandingImg.jpg";
import "./landingPage.css"


class LandingPage extends Component {
    render() {
        return (
            <div>
                <img 
                className="bg"
                src={LandingImg} 
                alt="Door to success!"
                // style={{height: "900px", width: "1530px"}}
                />
                


            </div>
        )
    }
}

export default LandingPage;