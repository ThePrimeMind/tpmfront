import React, { Component } from 'react';
import "./transition.css";

class Transition extends Component {
    render() {
        return (
            <div>
                <h2 className="transitionMainHeader">Prime Transition</h2>
                
                <div className="container" style={{border: "1px solid black", padding: "0"}}>

                <h4 className="transitionHeader2">You have to know where you want to go before you can get there...</h4>

                <form>   
                <h4 className="transitionHeader">The World of Work</h4>

                <div className="transitionDiv"><h5>Getting a Job</h5></div>
                <div className="form-group transitionDiv3 float-left mr-2" style={{width: "48%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Job #1</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Name of Company #1"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Annual Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Eligibility"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Training Needed"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Experience Needed"></textarea>
                </div>

                <div className="form-group transitionDiv3 float-left mr-2" style={{width: "48%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Job #2</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Name of Company #2"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Annual Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Eligibility"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Training Needed"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Experience Needed"></textarea>
                </div>
                <div className="form-group transitionDiv3 float-left mr-2" style={{width: "48%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Job #3</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Name of Company #3"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Annual Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Eligibility"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Training Needed"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Experience Needed"></textarea>
                </div>

                <div className="form-group transitionDiv3 float-left" style={{width: "48%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Job #4</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Name of Company #4"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Annual Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Eligibility"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Training Needed"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Experience Needed"></textarea>
                </div>
                <div className="form-group transitionDiv3" style={{clear: "both", margin: "auto", width: "50%"}}>
                    
                    <label for="exampleTextarea">Job #5</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Name of Company #5"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Annual Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Eligibility"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Training Needed"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Experience Needed"></textarea>
                </div>

                <button className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Work/Jobs</button>

                <h4 className="transitionHeader2">Always find opportunites to gain experience...</h4>

                <h4 className="transitionHeader">Working Budget<br/>
                (Monthly)
                </h4>

                <div className="transitionDiv"><h5>Income vs Expenses</h5></div>
                <div className="form-group transitionDiv3 float-left"  style={{width: "50%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Income</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Other Sources of Income"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Tips"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Unemployment Benefits"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Social Security"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Child Support"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Welfare"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Allowance"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Family and/or Friend Support"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Other"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Total Income"></textarea>
                </div>

                <div className="form-group transitionDiv2 float-left" style={{width: "50%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Expenses</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Mortgage/Rent"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Utilities (Including PSEG and/or Water)"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Cellphone"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Cable and Internet"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Car (Gas, Repairs, and Insurance) and/or Public Transportation"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Laundry"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Groceries and Eating Out"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Personal Care (Hair and Hygiene)"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Clothing"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Other"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Total Income"></textarea>
                </div>
                

                <div className="transitionDiv" style={{clear: "both", textAlign: "center"}}>
                
                    <label for="exampleTextarea"><h4>Working World Budget Totals</h4></label>
                    </div>
                    <div className="transitionDiv3" style={{width: "50%", margin:"auto"}}>

                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Total Income"></textarea>
                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Total Expenses"></textarea>
                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Net Income (Remaining Income)"></textarea>

                </div>

                <button className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Work/Jobs Budget</button>


                <h4 className="transitionHeader2">Prioritze your decisions based on the budget that works for you...</h4>

                <h4 className="transitionHeader">The College Career</h4>

                <div className="transitionDiv"><h5>Getting a Career</h5></div>
                <div className="form-group transitionDiv3 float-left mr-2" style={{width: "48%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Career #1</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Career #1"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Annual Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="College Eligibility"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Major Needed"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Experience Needed"></textarea>
                </div>

                <div className="form-group transitionDiv3 float-left mr-2" style={{width: "48%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Career #2</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Career #2"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Annual Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="College Eligibility"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Major Needed"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Experience Needed"></textarea>
                </div>
                <div className="form-group transitionDiv3 float-left mr-2" style={{width: "48%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Career #3</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Career #3"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Annual Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="College Eligibility"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Major Needed"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Experience Needed"></textarea>
                </div>

                <div className="form-group transitionDiv3 float-left mr-2" style={{width: "48%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Career #4</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Career #4"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Annual Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="College Eligibility"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Major Needed"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Experience Needed"></textarea>
                </div>
                <div className="form-group transitionDiv3" style={{clear: "both", margin: "auto", width: "50%"}}>
                    
                    <label for="exampleTextarea">Career #5</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Career #5"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Annual Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="College Eligibility"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Major Needed"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Experience Needed"></textarea>
                </div>

                <button className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save College Careers</button>

                <h4 className="transitionHeader2">Always find opportunites to gain experience...</h4>

                <h4 className="transitionHeader">College Career Budget<br/>
                (Monthly)
                </h4>

                <div className="transitionDiv"><h5>Income vs Expenses</h5></div>
                <div className="form-group transitionDiv3 float-left"  style={{width: "50%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Income</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Other Sources of Income"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Tips"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Unemployment Benefits"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Social Security"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Child Support"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Welfare"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Allowance"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Family and/or Friend Support"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Other"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Total Income"></textarea>
                </div>

                <div className="form-group transitionDiv2 float-left" style={{width: "50%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Expenses</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Mortgage/Rent/Tuition"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Utilities (Including PSEG and/or Water)"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Cellphone"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Cable and Internet"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Car (Gas, Repairs, and Insurance) and/or Public Transportation"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Laundry"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Groceries/Eating Out/Meal Plan"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Personal Care (Hair and Hygiene)"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Clothing"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Other"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Total Income"></textarea>
                </div>

                <div className="transitionDiv" style={{clear: "both", textAlign: "center"}}>
                    <label for="exampleTextarea"><h4>College Career Budget Totals</h4></label>

                </div>
                    <div className="transitionDiv3" style={{width: "50%", margin:"auto"}}>
                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Total Income"></textarea>
                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Total Expenses"></textarea>
                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Net Income (Remaining Income)"></textarea>

                </div>

                <button className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Career Budget</button>


                <h4 className="transitionHeader2">Prioritze your decisions based on the budget that works for you...</h4>

                <h4 className="transitionHeader">The Trade Career</h4>

                <div className="transitionDiv"><h5>Getting a Trade</h5></div>
                <div className="form-group transitionDiv3 float-left mr-2" style={{width: "48%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Trade #1</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Trade #1"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Annual Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Trade School Eligibility"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Desired Expertise"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Experience Needed"></textarea>
                </div>

                <div className="form-group transitionDiv3 float-left mr-2" style={{width: "48%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Trade #2</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Trade #2"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Annual Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Trade School Eligibility"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Desired Expertise"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Experience Needed"></textarea>
                </div>
                <div className="form-group transitionDiv3 float-left mr-2" style={{width: "48%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Trade #3</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Trade #3"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Annual Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Trade School Eligibility"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Desired Expertise"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Experience Needed"></textarea>
                </div>

                <div className="form-group transitionDiv3 float-left mr-2" style={{width: "48%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Trade #4</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Trade #4"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Annual Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Trade School Eligibility"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Desired Expertise"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Experience Needed"></textarea>
                </div>
                <div className="form-group transitionDiv3" style={{clear: "both", margin: "auto", width: "50%"}}>
                    
                    <label for="exampleTextarea">Trade #5</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Trade #5"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Annual Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Trade School Eligibility"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Desired Expertise"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Experience Needed"></textarea>
                </div>

                <button className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Trade Careers</button>

                <h4 className="transitionHeader2">Always find opportunites to gain experience...</h4>

                <h4 className="transitionHeader">Trade Career Budget<br/>
                (Monthly)
                </h4>

                <div className="transitionDiv"><h5>Income vs Expenses</h5></div>
                <div className="form-group transitionDiv3 float-left"  style={{width: "50%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Income</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Other Sources of Income"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Tips"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Unemployment Benefits"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Social Security"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Child Support"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Welfare"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Allowance"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Family and/or Friend Support"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Other"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Total Income"></textarea>
                </div>

                <div className="form-group transitionDiv2 float-left" style={{width: "50%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Expenses</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Mortgage/Rent/Tuition"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Utilities (Including PSEG and/or Water)"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Cellphone"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Cable and Internet"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Car (Gas, Repairs, and Insurance) and/or Public Transportation"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Laundry"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Groceries/Eating Out"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Personal Care (Hair and Hygiene)"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Clothing"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Other"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Total Income"></textarea>
                </div>

                <div className="transitionDiv" style={{clear: "both", textAlign: "center"}}>
                    <label for="exampleTextarea"><h4>Trade Career Budget Totals</h4></label>

                    </div>
                    <div className="transitionDiv3" style={{width: "50%", margin:"auto"}}>

                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Total Income"></textarea>
                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Total Expenses"></textarea>
                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Net Income (Remaining Income)"></textarea>

                </div>

                <button className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Trade Budget</button>

                <h4 className="transitionHeader2">Prioritze your decisions based on the budget that works for you...</h4>

                <h4 className="transitionHeader">The Military</h4>

                <div className="transitionDiv"><h5>Joining the Military</h5></div>
                <div className="form-group transitionDiv3 float-left mr-2" style={{width: "48%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Branch #1</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Branch #1"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Annual Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Branch Eligibility"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Desired Expertise"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Experience Needed"></textarea>
                </div>

                <div className="form-group transitionDiv3 float-left mr-2" style={{width: "48%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Branch #2</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Branch #2"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Annual Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Branch Eligibility"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Desired Expertise"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Experience Needed"></textarea>
                </div>
                <div className="form-group transitionDiv3 float-left mr-2" style={{width: "48%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Branch #3</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Branch #3"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Annual Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Branch Eligibility"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Desired Expertise"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Experience Needed"></textarea>
                </div>

                <div className="form-group transitionDiv3 float-left mr-2" style={{width: "48%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Branch #4</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Branch #4"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Annual Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Branch Eligibility"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Desired Expertise"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Experience Needed"></textarea>
                </div>
                <div className="form-group transitionDiv3" style={{clear: "both", margin: "auto", width: "50%"}}>
                    
                    <label for="exampleTextarea">Branch #5</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Branch #5"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Annual Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Branch Eligibility"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Desired Expertise"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Experience Needed"></textarea>
                </div>

                <button className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Military Careers</button>

                <h4 className="transitionHeader2">Always find opportunites to gain experience...</h4>

                <h4 className="transitionHeader">Military Budget<br/>
                (Monthly)
                </h4>

                <div className="transitionDiv"><h5>Income vs Expenses</h5></div>
                <div className="form-group transitionDiv3 float-left"  style={{width: "50%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Income</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Other Sources of Income"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Tips"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Unemployment Benefits"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Social Security"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Child Support"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Welfare"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Allowance"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Family and/or Friend Support"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Other"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Total Income"></textarea>
                </div>

                <div className="form-group transitionDiv2 float-left" style={{width: "50%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Expenses</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Mortgage/Rent"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Utilities (Including PSEG and/or Water)"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Cellphone"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Cable and Internet"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Car (Gas, Repairs, and Insurance) and/or Public Transportation"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Laundry"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Groceries/Eating Out"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Personal Care (Hair and Hygiene)"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Clothing"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Other"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Total Income"></textarea>
                </div>

                <div className="transitionDiv" style={{clear: "both", textAlign: "center"}}>
                    <label for="exampleTextarea"><h4>Military Budget Totals</h4></label>

                    </div>
                    <div className="transitionDiv3" style={{width: "50%", margin:"auto"}}>

                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Total Income"></textarea>
                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Total Expenses"></textarea>
                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Net Income (Remaining Income)"></textarea>

                </div>

                <button className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Military Budget</button>

                <h4 className="transitionHeader2">Prioritze your decisions based on the budget that works for you...</h4>

                <h4 className="transitionHeader">The Entrepreneur</h4>

                    <div className="transitionDiv"><h5>Running a Business</h5></div>
                    <div className="form-group transitionDiv3 float-left mr-2" style={{width: "48%", paddingLeft: "20px"}}>
                        
                        <label for="exampleTextarea">Product/Service #1</label><br/>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Product/Service #1"></textarea>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Description of Product/Service"></textarea>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="How much does it cost to create each product or provide service?"></textarea>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Who is it for?"></textarea>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Why is it needed?"></textarea>
                    </div>

                    <div className="form-group transitionDiv3 float-left mr-2" style={{width: "48%", paddingLeft: "20px"}}>
                        
                        <label for="exampleTextarea">Product/Service #2</label><br/>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Product/Service #2"></textarea>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Description of Product/Service"></textarea>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="How much does it cost to create each product or provide service?"></textarea>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Who is it for?"></textarea>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Why is it needed?"></textarea>
                    </div>
                    <div className="form-group transitionDiv3 float-left mr-2" style={{width: "48%", paddingLeft: "20px"}}>
                        
                        <label for="exampleTextarea">Product/Service #3</label><br/>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Product/Service #3"></textarea>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Description of Product/Service"></textarea>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="How much does it cost to create each product or provide service?"></textarea>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Who is it for?"></textarea>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Why is it needed?"></textarea>
                    </div>

                    <div className="form-group transitionDiv3 float-left mr-2" style={{width: "48%", paddingLeft: "20px"}}>
                        
                        <label for="exampleTextarea">Product/Service #4</label><br/>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Product/Service #4"></textarea>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Description of Product/Service"></textarea>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="How much does it cost to create each product or provide service?"></textarea>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Who is it for?"></textarea>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Why is it needed?"></textarea>
                    </div>
                    <div className="form-group transitionDiv3" style={{clear: "both", margin: "auto", width: "50%"}}>
                        
                        <label for="exampleTextarea">Product/Service #5</label><br/>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Product/Service #5"></textarea>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Description of Product/Service"></textarea>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="How much does it cost to create each product or provide service?"></textarea>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Who is it for?"></textarea>
                        <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Why is it needed?"></textarea>
                    </div>

                    <button className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Products/Services</button>

                    <h4 className="transitionHeader2">Always find opportunites to gain experience...</h4>
                    
                <h4 className="transitionHeader">Entrepreneur Budget<br/>
                (Monthly)
                </h4>

                <div className="transitionDiv"><h5>Income vs Expenses</h5></div>
                <div className="form-group transitionDiv3 float-left"  style={{width: "50%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Income</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Salary"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Other Sources of Income"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Tips"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Unemployment Benefits"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Social Security"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Child Support"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Welfare"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Allowance"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Family and/or Friend Support"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Other"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Total Income"></textarea>
                </div>

                <div className="form-group transitionDiv2 float-left" style={{width: "50%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Personal Expenses</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Mortgage/Rent"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Utilities (Including PSEG and/or Water)"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Cellphone"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Cable and Internet"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Car (Gas, Repairs, and Insurance) and/or Public Transportation"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Laundry"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Groceries/Eating Out"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Personal Care (Hair and Hygiene)"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Clothing"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Other"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Total Income"></textarea>
                </div>

                <div className="form-group transitionDiv2 float-left" style={{width: "50%", paddingLeft: "20px"}}>
                    
                    <label for="exampleTextarea">Business Expenses</label><br/>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Building/Facility Rent"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Advertisement and Promotion"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Cash"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Computer and Software"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Decoration"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Deposits"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Equipment and Supplies"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Insurance"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Licenses and Permits"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Other"></textarea>
                    <textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Total Income"></textarea>
                </div>

                <div className="transitionDiv" style={{float: "left", textAlign: "center", height: "65px", width: "50%"}}>
                    <label for="exampleTextarea"><h5>Entrepreneur Budget Totals</h5></label>
                </div>
                <div className="transitionDiv3 float-left" style={{width: "50%", margin:"auto", height: "500px"}}>   
                    <textarea className="form-control" style={{textAlign: "center", lineHeight: "54px"}} id="exampleTextarea" rows="2" placeholder="Total Income"></textarea>
                    <textarea className="form-control" style={{textAlign: "center", lineHeight: "54px"}} id="exampleTextarea" rows="2" placeholder="Total Personal Expenses"></textarea>
                    <textarea className="form-control" style={{textAlign: "center", lineHeight: "54px"}} id="exampleTextarea" rows="2" placeholder="Total Business Expenses"></textarea>
                    <textarea className="form-control" style={{textAlign: "center", lineHeight: "54px"}} id="exampleTextarea" rows="2" placeholder="Net Income (Remaining Income)"></textarea>

                </div>
                <div style={{clear: "both"}}></div>
                <button className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Entrepreneur Budget</button>

                <h4 className="transitionHeader2" style={{clear: "both"}}>Prioritze your decisions based on the budget that works for you...</h4>
                <div>
                <button className="btn btn-default btn-raised button2 ml-3 mr-3">Cancel</button>
                <button type="submit" className="btn btn-raised button1">Submit: To Be Prime!</button>
                </div>   
                    </form>               
                </div>
            </div>
        )
    }
}

export default Transition;