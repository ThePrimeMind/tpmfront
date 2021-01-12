import React, { Component } from 'react';
import "./businessBio.css";

class BusinessBio extends Component {
    render() {
        return (
            <div>
             <h2 className="bioMainHeader">The Prime Mind, LLC Biography</h2>
            <div className="container" style={{backgroundColor: "white", width: "900px", border: "1px solid black", padding: "0"}}>

                <h4 className="bioHeading" style={{width: "100%"}}>A Little Bit About Us...</h4>   
               
                <h5 className="bioTextHeading"><span style={{paddingLeft: "80px"}}>The Prime Mind, LLC (TPM) is a personal productivity, social networking platform that</span> provides a proactive approach in the transformation of negative, self-defeating habits into positive, productive habits. 
                TPM seeks to progressively develop the individual for success.  In order to “Make It Happen,” we deliver multifaceted empowerment services and products, including Empowerment Speaker and Coach, 
                Prime Productivity Plans, and Prime Workshops.

                <br/>  
                
                <span style={{paddingLeft: "80px"}}>TPM strongly believes that well-informed, productive people will always be an asset to </span>themselves and their community; helping communities 
                successfully grow and develop.  Our productivity system facilitates in the transformation of aggression into assertion, procrastination into precrastination, disorganization into organization, 
                hopelessness into hopefulness, the sense of rejection into self-acceptance, and from being unsuccessful to successful.

                <br/>  
                
                <span style={{paddingLeft: "80px"}}>With over 13 years of experience in the educational setting, we understand 
                the common</span> complexities that students, parents, and educators encounter every day.  The Prime Mind is dedicated to empowering people to become successful, one person at a time, one community at a time. 
                </h5>
            </div>
        </div> 
        )
    }
}

export default BusinessBio;