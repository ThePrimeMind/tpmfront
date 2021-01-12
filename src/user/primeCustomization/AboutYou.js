import React, { Component } from 'react';
import "./aboutYou.css";

class AboutYou extends Component {

    

    render() {


   
        return (
            <div>


                <h2 className="aboutYouMainHeader">All About You</h2>

            <div className="container" style={{border: "1px solid black", lineHeight: "70px", padding:"0"}}>
                <h4 className="aboutYouHeader">Your accuracy will ensure an accurate M-A-A-N Score...</h4>

                <form>
                <div className="form-group float-left mr-5" style={{width: "40%", marginLeft:"7%"}}>
                    <label for="firstName">First Name:</label>
                    <input type="text" className="form-control fname" id="inputFirstName" /> 
                    <span className="bmd-help">We'll never share your first name with anyone else.</span>
                </div>

                <div className="form-group float-left" style={{width: "40%"}}>
                    <label for="middleName" >Middle Name:</label>
                    <input type="text" className="form-control mname" id="inputMiddleName" /> 
                    <span className="bmd-help">We'll never share your middle name with anyone else.</span>
                </div>

                <div className="form-group float-left mr-5" style={{width: "40%", marginLeft: "7%"}}>
                    <label for="lastName" >Last Name:</label>
                    <input type="text" className="form-control lname" id="inputLastName" /> 
                    <span className="bmd-help">We'll never share your last name with anyone else.</span>
                </div>

                <div className="form-group float-left mr-4" style={{width: "35%"}}>
                <label for="date-picker-example">Date of Birth: </label>
                <input placeholder="ex: xx/xx/xxxx" type="date" id="date-picker-example" className="form-control datepicker dob" />
                </div>

                <div style={{clear: "both"}}></div>
                
                <div className="form-group float-left mr-5" style={{width: "30%", margin: "auto", textAlign: "center", marginLeft: "15%"}}>
                    <label for="exampleSelect1">I identify as: </label>
                    <select className="form-control" id="exampleSelect1">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>


                <div className="form-group float-left mb-5" style={{width: "30%", margin: "auto", textAlign: "center"}}>
                    <label for="exampleSelect1">Select Your Current Status: </label>
                    <select className="form-control" id="exampleSelect1">
                        <option>Adult</option>
                        <option>Freshman (9th) Grade</option>
                        <option>Sophomore (10th) Grade</option>
                        <option>Junior (11th) Grade</option>
                        <option>Senior (12th) Grade</option>
                    </select>
                </div>

                <div style={{clear: "both"}}></div>
                
                <div className="form-group" style={{clear: "both", textAlign: "center"}}>
                    <label for="exampleTextarea">1 - What is your best personality trait? (Choose 1)</label>
                    <textarea style={{margin: "auto", width: "50%", textAlign: "center"}} className="form-control mb-5" id="exampleTextarea" rows="2" placeholder="Personality Trait"></textarea>
                </div>

                <div className="form-group" style={{clear: "both", textAlign: "center"}}>
                    <label for="exampleTextarea">2 - What career do you want to have? (Choose 1)</label>
                    <textarea style={{margin: "auto", width: "50%", textAlign: "center"}} className="form-control mb-5" id="exampleTextarea" rows="2" placeholder="Favorite Career"></textarea>
                </div>

                <div className="form-group" style={{clear: "both", textAlign: "center"}}>
                    <label for="exampleTextarea">3 - What is your biggest mistake? (Choose 1)</label>
                    <textarea style={{margin: "auto", width: "50%", textAlign: "center"}} className="form-control mb-5" id="exampleTextarea" rows="2" placeholder="Biggest Mistake"></textarea>
                </div>

                <div className="form-group" style={{clear: "both", textAlign: "center"}}>
                    <label for="exampleTextarea">4 - What is your worst habit? (Choose 1)</label>
                    <textarea style={{margin: "auto", width: "50%", textAlign: "center"}} className="form-control mb-5" id="exampleTextarea" rows="2" placeholder="Worst Habit"></textarea>
                </div>

                <div className="form-group  mr-5 ml-5" style={{clear: "both", textAlign: "center"}}>
                    <label for="exampleTextarea">5 - What are 4 more personality traits that you like about yourself? (Choose up to 4)</label>
                    <textarea style= {{margin: "auto", width: "70%", textAlign: "center"}} className="form-control" id="exampleTextarea" rows="2" placeholder="Personality Trait #2"></textarea>
                    <textarea style= {{margin: "auto", width: "70%", textAlign: "center"}}className="form-control" id="exampleTextarea" rows="2" placeholder="Personality Trait #3"></textarea>
                    <textarea style= {{margin: "auto", width: "70%", textAlign: "center"}}className="form-control" id="exampleTextarea" rows="2" placeholder="Personality Trait #4"></textarea>
                    <textarea style= {{margin: "auto", width: "70%", textAlign: "center"}}className="form-control mb-5" id="exampleTextarea" rows="2" placeholder="Personality Trait #5"></textarea>
                </div>

                <div className="form-group  mr-5 ml-5" style={{clear: "both", textAlign: "center"}}>
                    <label for="exampleTextarea">6 - What are 4 more careers that you like? (Choose up to 4)</label>
                    <textarea style= {{margin: "auto", width: "70%", textAlign: "center"}}className="form-control" id="exampleTextarea" rows="2" placeholder="Career Interest #2"></textarea>
                    <textarea style= {{margin: "auto", width: "70%", textAlign: "center"}}className="form-control" id="exampleTextarea" rows="2" placeholder="Career Interest #3"></textarea>
                    <textarea style= {{margin: "auto", width: "70%", textAlign: "center"}}className="form-control" id="exampleTextarea" rows="2" placeholder="Career Interest #4"></textarea>
                    <textarea style= {{margin: "auto", width: "70%", textAlign: "center"}}className="form-control mb-5" id="exampleTextarea" rows="2" placeholder="Career Interest #5"></textarea>
                </div>

                <div className="form-group mr-5 ml-5 " style={{clear: "both", textAlign: "center"}}>
                    <label for="exampleTextarea">7 - What are 4 more mistakes that you've encountered? (Choose up to 4)</label>
                    <textarea style= {{margin: "auto", width: "70%", textAlign: "center"}}className="form-control" id="exampleTextarea" rows="2" placeholder="Mistake #2"></textarea>
                    <textarea style= {{margin: "auto", width: "70%", textAlign: "center"}}className="form-control" id="exampleTextarea" rows="2" placeholder="Mistake #3"></textarea>
                    <textarea style= {{margin: "auto", width: "70%", textAlign: "center"}}className="form-control" id="exampleTextarea" rows="2" placeholder="Mistake #4"></textarea>
                    <textarea style= {{margin: "auto", width: "70%", textAlign: "center"}}className="form-control mb-5" id="exampleTextarea" rows="2" placeholder="Mistake #5"></textarea>
                </div>

                <div className="form-group mr-5 ml-5" style={{clear: "both", textAlign: "center"}}>
                    <label for="exampleTextarea"> 8 - What are 4 more bad habits that you have? (Choose up to 4)</label>
                    <textarea style= {{margin: "auto", width: "70%", textAlign: "center"}}className="form-control" id="exampleTextarea" rows="2" placeholder="Get rid of Habit #2"></textarea>
                    <textarea style= {{margin: "auto", width: "70%", textAlign: "center"}}className="form-control" id="exampleTextarea" rows="2" placeholder="Get rid of Habit #3"></textarea>
                    <textarea style= {{margin: "auto", width: "70%", textAlign: "center"}}className="form-control" id="exampleTextarea" rows="2" placeholder="Get rid of Habit #4"></textarea>
                    <textarea style= {{margin: "auto", width: "70%", textAlign: "center"}}className="form-control mb-5" id="exampleTextarea" rows="2" placeholder="Get rid of Habit #5"></textarea>
                </div>

                <h4 className="aboutYouHeader">Click submit to reveal your M-A-A-N Score!!!</h4>

                    
                <button className="btn btn-default button2 mr-3">Cancel</button>
                <button type="submit" className="btn btn-raised button1">Submit</button>
                </form>
                
            </div>
        </div>
        )
    }
}

export default AboutYou;