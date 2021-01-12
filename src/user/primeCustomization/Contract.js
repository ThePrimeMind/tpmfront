import React, { Component } from 'react';
import "./contract.css";


class Contract extends Component {

    clickSubmit = event => {
        event.preventDefault();
    }


    render() {

        return (
            <div>

            
                <h2 className="contractMainHeader">Prime Contract</h2>

                <div className="container" style={{border: "1px solid black", padding: "0"}}>

                <h4 className="contractHeader2">Your personal pinky promise to yourself...</h4>

                <form>

                <h3 className="contractHeader">1: Prime Self</h3>

                <div className="float-left" style={{width: "50%"}}>
                <div className="contractDiv"><h5>Ideal Self</h5></div>
                <div className="form-group contractDiv2">
                    
                    <label className="mt-3" for="exampleTextarea">(Choose up to 5 "Most Gifted" Traits)</label><br/>
                    <textarea   className="form-control mt-3" style={{textAlign: "center"}}  id="exampleTextarea" rows="2" placeholder="Ideal Trait 1"></textarea>
                    <textarea   className="form-control mt-3" style={{textAlign: "center"}}  id="exampleTextarea" rows="2" placeholder="Ideal Trait 2"></textarea>
                    <textarea   className="form-control mt-3" style={{textAlign: "center"}}  id="exampleTextarea" rows="2" placeholder="Ideal Trait 3"></textarea>
                    <textarea   className="form-control mt-3" style={{textAlign: "center"}}  id="exampleTextarea" rows="2" placeholder="Ideal Trait 4"></textarea>
                    <textarea   className="form-control mt-3" style={{textAlign: "center"}}  id="exampleTextarea" rows="2" placeholder="Ideal Trait 5"></textarea>
                </div></div>

                <div className="float-left" style={{width: "50%"}}>
                <div className="contractDiv"><h5>Actual Self</h5></div>
                <div className="form-group contractDiv2">
                    <label className="mt-3"  for="exampleTextarea">(Choose up to 5 of your "Current" Traits)</label>
                    <textarea   className="form-control mt-3" style={{textAlign: "center"}}  id="exampleTextarea" rows="2" placeholder="Actual Trait 1"></textarea>
                    <textarea   className="form-control mt-3" style={{textAlign: "center"}}  id="exampleTextarea" rows="2" placeholder="Actual Trait 2"></textarea>
                    <textarea   className="form-control mt-3" style={{textAlign: "center"}}  id="exampleTextarea" rows="2" placeholder="Actual Trait 3"></textarea>
                    <textarea   className="form-control mt-3" style={{textAlign: "center"}}  id="exampleTextarea" rows="2" placeholder="Actual Trait 4"></textarea>
                    <textarea   className="form-control mt-3" style={{textAlign: "center"}}  id="exampleTextarea" rows="2" placeholder="Actual Trait 5"></textarea>
                </div></div>

                <div style={{clear: "both"}}>
                <div className="contractDiv"><h5>Prime Self</h5></div>
                <div className="form-group contractDiv3">
                    <label className="mt-3"  for="exampleTextarea">(Choose up to 5 "Most Desired" Traits)</label>
                    <textarea   className="form-control mt-3" style={{textAlign: "center", width: "60%", margin: "auto"}} id="exampleTextarea" rows="2" placeholder="Prime Trait 1"></textarea>
                    <textarea   className="form-control mt-3" style={{textAlign: "center", width: "60%", margin: "auto"}}  id="exampleTextarea" rows="2" placeholder="Prime Trait 2"></textarea>
                    <textarea   className="form-control mt-3" style={{textAlign: "center", width: "60%", margin: "auto"}}  id="exampleTextarea" rows="2" placeholder="Prime Trait 3"></textarea>
                    <textarea   className="form-control mt-3" style={{textAlign: "center", width: "60%", margin: "auto"}}  id="exampleTextarea" rows="2" placeholder="Prime Trait 4"></textarea>
                    <textarea   className="form-control mt-3" style={{textAlign: "center", width: "60%", margin: "auto"}}  id="exampleTextarea" rows="2" placeholder="Prime Trait 5"></textarea>
                </div></div>

                <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Prime Self</button>

                

                <div className="contractStatementHeader"><h4 style={{textDecoration: "underline", padding: "30px", clear: "both"}}>Prime Self Statement</h4></div>
                <div className="form-group  contractStatement">
                    <label className="mt-3" for="exampleTextarea"><h5 style={{fontWeight: "bold"}}>I was born with the gifts of: </h5>
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>.
                    <h5 className="mt-3"  style={{fontWeight: "bold"}}>These gifts are my unique skills and talents.  I will use these gifts to <br/> accomplish my career goals and develop my dream businesses.</h5>
                    </label>
                    
                    
                </div>

                <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "55%"}}> Save Self Statement</button>

                <h3 className="contractHeader">2: Prime Careers</h3>

                <div className="float-left" style={{width: "50%"}}>
                <div className="contractDiv"><h5>Ideal Careers</h5></div>
                <div className="form-group contractDiv2">
                    <label className="mt-3"  for="exampleTextarea">(Choose up to 5 careers that you like the most...)</label>
                    <textarea className="form-control mt-3" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Ideal Career 1"></textarea>
                    <textarea className="form-control mt-3" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Ideal Career 2"></textarea>
                    <textarea className="form-control mt-3" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Ideal Career 3"></textarea>
                    <textarea className="form-control mt-3" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Ideal Career 4"></textarea>
                    <textarea className="form-control mt-3" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Ideal Career 5"></textarea>
                </div></div>


                <div className="float-left" style={{width: "50%"}}>
                <div className="contractDiv"><h5>Actual Careers</h5></div>
                <div className="form-group contractDiv2">
                    <label className="mt-3"  for="exampleTextarea">(Choose up to 5 careers that you always wanted to be...)</label>
                    <textarea className="form-control mt-3" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Acutal Career 1"></textarea>
                    <textarea className="form-control mt-3" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Acutal Career 2"></textarea>
                    <textarea className="form-control mt-3" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Acutal Career 3"></textarea>
                    <textarea className="form-control mt-3" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Acutal Career 4"></textarea>
                    <textarea className="form-control mt-3" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Actual Career 5"></textarea>
                </div></div>

                <div>
                <div className="contractDiv" style={{clear: "both"}}><h5>Prime Careers</h5></div>
                <div className="form-group contractDiv3">
                    <label className="mt-3 mb-3"  for="exampleTextarea">(Choose up to 5 Most Desired Careers)</label>
                    <textarea className="form-control" style={{textAlign: "center", width: "60%", margin: "auto"}}  id="exampleTextarea" rows="2" placeholder="Prime Career 1 (Pick a category below)"></textarea>
                    <div className="contractDiv3" style={{border: "none"}}>
                        <select className="form-control contractDiv2" style={{textAlign: "center", width: "30%", margin: "auto"}}  id="exampleSelect1">
                            <option>World of Work/Job</option>
                            <option>College Career</option>
                            <option>Trade Career</option>
                            <option>Military Career</option>
                            <option>Entrepreneur</option>
                        </select>
                    </div>

                    <div className="contractDiv3" style={{border: "none"}}>
                    <textarea className="form-control" style={{textAlign: "center", width: "60%", margin: "auto"}}  id="exampleTextarea" rows="2" placeholder="Prime Career 2 (Pick a category below)"></textarea>
                        <select className="form-control contractDiv2 mt-3" style={{textAlign: "center", width: "30%", margin: "auto"}}  id="exampleSelect1">
                            <option>World of Work/Job</option>
                            <option>College Career</option>
                            <option>Trade Career</option>
                            <option>Military Career</option>
                            <option>Entrepreneur</option>
                        </select>
                        </div>

                    <div className="contractDiv3" style={{border: "none"}}>   
                    <textarea className="form-control" style={{textAlign: "center", width: "60%", margin: "auto"}}  id="exampleTextarea" rows="2" placeholder="Prime Career 3 (Pick a category below)"></textarea>
                        <select className="form-control contractDiv2 mt-3" style={{textAlign: "center", width: "30%", margin: "auto"}}  id="exampleSelect1">
                            <option>World of Work/Job</option>
                            <option>College Career</option>
                            <option>Trade Career</option>
                            <option>Military Career</option>
                            <option>Entrepreneur</option>
                        </select>
                        </div>


                    <div className="contractDiv3" style={{border: "none"}}>
                    <textarea className="form-control" style={{textAlign: "center", width: "60%", margin: "auto"}}  id="exampleTextarea" rows="2" placeholder="Prime Career 4 (Pick a category below)"></textarea>
                            <select className="form-control contractDiv2 mt-3" style={{textAlign: "center", width: "30%", margin: "auto"}}  id="exampleSelect1">
                                <option>World of Work/Job</option>
                                <option>College Career</option>
                                <option>Trade Career</option>
                                <option>Military Career</option>
                                <option>Entrepreneur</option>
                            </select>
                            </div>

                    <div className="contractDiv3" style={{border: "none"}}>
                    <textarea className="form-control" style={{textAlign: "center", width: "60%", margin: "auto"}}  id="exampleTextarea" rows="2" placeholder="Prime Career 5 (Pick a category below)"></textarea>
                            <select className="form-control contractDiv2 mt-3" style={{textAlign: "center", width: "30%", margin: "auto"}}  id="exampleSelect1">
                                <option>World of Work/Job</option>
                                <option>College Career</option>
                                <option>Trade Career</option>
                                <option>Military Career</option>
                                <option>Entrepreneur</option>
                            </select>   
                </div></div></div>

                <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Prime Careers</button>

               
                <div className="contractStatementHeader"><h4 style={{textDecoration: "underline", padding: "30px"}}>Prime Career Statement</h4></div>
                <div className="form-group  contractStatement">
                    <label for="exampleTextarea"><h5 style={{fontWeight: "bold"}}>I will educate myself about and make sure I am eligible for the following careers: </h5>
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>.
                    
                    </label>
                    
                    
                </div>

                <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Career Statement</button>

                <h3 className="contractHeader">3: Prime Personal Lesson</h3>
                <div className="contractDiv"><h5>Prime Lesson<br/><br/>(Mistakes are just lessons in diguise!)</h5></div>
                <div className="form-group contractDiv2">
                    <textarea className="form-control" style={{paddingLeft: "30px"}} id="exampleTextarea" rows="2" placeholder="Mistake #1"></textarea>
                        <div className="contractLesson">   
                        <label for="exampleTextarea">How does this keep you from being successful?</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}} id="exampleTextarea" rows="2" placeholder="Your rationale..."></textarea>
                        <label for="exampleTextarea">What can I do instead?</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}} id="exampleTextarea" rows="2" placeholder="Solution #1"></textarea>
                        </div>
                    <textarea className="form-control" style={{paddingLeft: "30px"}} id="exampleTextarea" rows="2" placeholder="Mistake #2"></textarea>
                        <div className="contractLesson">   
                        <label for="exampleTextarea">How does this keep you from being successful?</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}} id="exampleTextarea" rows="2" placeholder="Your rationale..."></textarea>
                        <label for="exampleTextarea">What can I do instead?</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}} id="exampleTextarea" rows="2" placeholder="Solution #2"></textarea>
                        </div>
                    <textarea className="form-control" style={{paddingLeft: "30px"}} id="exampleTextarea" rows="2" placeholder="Mistake #3"></textarea>
                        <div className="contractLesson">   
                        <label for="exampleTextarea">How does this keep you from being successful?</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}} id="exampleTextarea" rows="2" placeholder="Your rationale..."></textarea>
                        <label for="exampleTextarea">What can I do instead?</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}} id="exampleTextarea" rows="2" placeholder="Solution #3"></textarea>
                        </div>
                    <textarea className="form-control" style={{paddingLeft: "30px"}} id="exampleTextarea" rows="2" placeholder="Mistake #4"></textarea>
                        <div className="contractLesson">   
                        <label for="exampleTextarea">How does this keep you from being successful?</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}} id="exampleTextarea" rows="2" placeholder="Your rationale..."></textarea>
                        <label for="exampleTextarea">What can I do instead?</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}} id="exampleTextarea" rows="2" placeholder="Solution #4"></textarea>
                        </div>
                    <textarea className="form-control" style={{paddingLeft: "30px"}} id="exampleTextarea" rows="2" placeholder="Mistake #5"></textarea>
                        <div className="contractLesson">   
                        <label for="exampleTextarea">How does this keep you from being successful?</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}} id="exampleTextarea" rows="2" placeholder="Your rationale..."></textarea>
                        <label for="exampleTextarea">What can I do instead?</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}} id="exampleTextarea" rows="2" placeholder="Solution #5"></textarea>
                        </div>
                </div>

                <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Prime Lesson</button>

                <div className="contractStatementHeader"><h4 style={{textDecoration: "underline", padding: "30px"}}>Prime Lesson Statement</h4></div>
                <div className="form-group  contractStatement">
                    <label for="exampleTextarea"><h5 style={{fontWeight: "bold"}}>As of right now, at this very moment, I'm deciding to: </h5>
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>.
                    <h5 style={{fontWeight: "bold"}}>Because these productive changes will make me successful!</h5>
                    </label>
                    
                    
                </div>

                <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Lesson Statement</button>

                <h3 className="contractHeader">4: Prime Adjustment</h3>
                <h5 className="contractHeader2">Replacing Regressive behaviors with Progressive Behaviors <br/>
                    (Start Now for Best Results!)
                    </h5>
                <div className="contractDiv"><h5>Regressive Behaviors<br/><br/>(Identify up to 5 negative habits)</h5></div>
                <div className="form-group contractDiv2">
                    <textarea className="form-control" style={{paddingLeft: "30px"}}  id="exampleTextarea" rows="2" placeholder="Bad Habit #1"></textarea>
                    <div className="contractLesson">   
                        <label for="exampleTextarea">What happens due to this negative habit?<br/> (Give Examples)</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}}  id="exampleTextarea" rows="2" placeholder="Your rationale..."></textarea>
                        <label for="exampleTextarea">Progressive Behaviors to use instead<br/> (Choose a better habit and Use it)</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}}  id="exampleTextarea" rows="2" placeholder="Solution #1"></textarea><br/>
                        <label for="exampleTextarea">What will happen differently due to this progressive habit?<br/>(Give examples)</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}}  id="exampleTextarea" rows="2" placeholder="Solution Rationale"></textarea>
                    </div>
                    <textarea className="form-control" style={{paddingLeft: "30px"}}  id="exampleTextarea" rows="2" placeholder="Bad Habit #2"></textarea>
                    <div className="contractLesson">   
                        <label for="exampleTextarea">What happens due to this negative habit?<br/> (Give Examples)</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}}  id="exampleTextarea" rows="2" placeholder="Your rationale..."></textarea>
                        <label for="exampleTextarea">Progressive Behaviors to use instead<br/> (Choose a better habit and Use it)</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}}  id="exampleTextarea" rows="2" placeholder="Solution #2"></textarea><br/>
                        <label for="exampleTextarea">What will happen differently due to this progressive habit?<br/>(Give examples)</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}}  id="exampleTextarea" rows="2" placeholder="Solution Rationale"></textarea>
                    </div>
                    <textarea className="form-control" style={{paddingLeft: "30px"}}  id="exampleTextarea" rows="2" placeholder="Bad Habit #3"></textarea>
                    <div className="contractLesson">   
                        <label for="exampleTextarea">What happens due to this negative habit?<br/> (Give Examples)</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}}  id="exampleTextarea" rows="2" placeholder="Your rationale..."></textarea>
                        <label for="exampleTextarea">Progressive Behaviors to use instead<br/> (Choose a better habit and Use it)</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}}  id="exampleTextarea" rows="2" placeholder="Solution #3"></textarea><br/>
                        <label for="exampleTextarea">What will happen differently due to this progressive habit?<br/>(Give examples)</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}}  id="exampleTextarea" rows="2" placeholder="Solution Rationale"></textarea>
                    </div>
                    <textarea className="form-control" style={{paddingLeft: "30px"}}  id="exampleTextarea" rows="2" placeholder="Bad Habit #4"></textarea>
                    <div className="contractLesson">   
                        <label for="exampleTextarea">What happens due to this negative habit?<br/> (Give Examples)</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}}  id="exampleTextarea" rows="2" placeholder="Your rationale..."></textarea>
                        <label for="exampleTextarea">Progressive Behaviors to use instead<br/> (Choose a better habit and Use it)</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}}  id="exampleTextarea" rows="2" placeholder="Solution #4"></textarea><br/>
                        <label for="exampleTextarea">What will happen differently due to this progressive habit?<br/>(Give examples)</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}}  id="exampleTextarea" rows="2" placeholder="Solution Rationale"></textarea>
                    </div>
                    <textarea className="form-control" style={{paddingLeft: "30px"}}  id="exampleTextarea" rows="2" placeholder="Bad Habit #5"></textarea>
                    <div className="contractLesson">   
                        <label for="exampleTextarea">What happens due to this negative habit?<br/> (Give Examples)</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}}  id="exampleTextarea" rows="2" placeholder="Your rationale..."></textarea>
                        <label for="exampleTextarea">Progressive Behaviors to use instead<br/> (Choose a better habit and Use it)</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}}  id="exampleTextarea" rows="2" placeholder="Solution #5"></textarea><br/>
                        <label for="exampleTextarea">What will happen differently due to this progressive habit?<br/>(Give examples)</label>
                        <textarea className="form-control" style={{paddingLeft: "30px"}}  id="exampleTextarea" rows="2" placeholder="Solution Rationale"></textarea>
                    </div>
                </div>

                <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Prime Adjustment</button>

                <div className="contractStatementHeader"><h4 style={{textDecoration: "underline", padding: "30px"}}>Prime Adjustment Statement</h4></div>
                <div className="form-group  contractStatement">
                    <label for="exampleTextarea"><h5 style={{fontWeight: "bold"}}>To do what I truly want to do, I have to stop (Regressive Behaviors) </h5>
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea> <br/><br/>
                    <h5 style={{fontWeight: "bold"}}>and instead, I will consistently (Progressive Behaviors)</h5>
                        <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>. 
                    </label>
                    
                    
                </div>

                <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "55%"}}> Save Adjustment Statement</button>

                <h3 className="contractHeader">5: PRIME CONTRACT
                 </h3>
                 <div className="contractHeader2"><h5>Necessary for personal and career growth (Areas of Concern)<br/><br/>
                I HEREBY WILL ABIDE BY MY PRIME STATEMENTS AND REVIEW THEM DAILY</h5></div>
                 
                <div className="contractStatementHeader"><h4 style={{textDecoration: "underline", padding: "30px", clear: "both"}}>Prime Self Statement</h4></div>
                <div className="form-group  contractStatement">
                    <label className="mt-3" for="exampleTextarea"><h5 style={{fontWeight: "bold"}}>I was born with the gifts of: </h5>
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>.
                    <h5 className="mt-3"  style={{fontWeight: "bold"}}>These gifts are my unique skills and talents.  I will use these gifts to <br/> accomplish my career goals and develop my dream businesses.</h5>
                    </label>
                    
                    
                </div>
                
                <div className="contractStatementHeader"><h4 style={{textDecoration: "underline", padding: "30px"}}>Prime Career Statement</h4></div>
                <div className="form-group  contractStatement">
                    <label for="exampleTextarea"><h5 style={{fontWeight: "bold"}}>I will educate myself about and make sure I am eligible for the following careers: </h5>
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>.
                    
                    </label>
                    
                    
                </div>
                <div className="contractStatementHeader"><h4 style={{textDecoration: "underline", padding: "30px"}}>Prime Lesson Statement</h4></div>
                <div className="form-group  contractStatement">
                    <label for="exampleTextarea"><h5 style={{fontWeight: "bold"}}>As of right now, at this very moment, I'm deciding to: </h5>
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>.
                    <h5 style={{fontWeight: "bold"}}>Because these productive changes will make me successful!</h5>
                    </label>
                    
                    
                </div>
               
                <div className="contractStatementHeader"><h4 style={{textDecoration: "underline", padding: "30px"}}>Prime Adjustment Statement</h4></div>
                <div className="form-group  contractStatement">
                    <label for="exampleTextarea"><h5 style={{fontWeight: "bold"}}>To do what I truly want to do, I have to stop (Regressive Behaviors) </h5>
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea> <br/><br/>
                    <h5 style={{fontWeight: "bold"}}>and instead, I will consistently (Progressive Behaviors)</h5>
                        <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>,
                    <textarea className="form-control" id="exampleTextarea" rows="2"></textarea>. 
                    </label>
                    
                    
                </div>

                <button className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Prime Statement</button>

                <div className="contractFooter">
                    <h4>I am born to be “Successful”; I am born to be “Prime”…<br/><br/>
                    <h3>TO BE PRIME...OR NOT TO BE!</h3>
                    </h4>
                </div>
                    
                {/* style={{display: "block", margin: "0 auto", width: "50%"}} */}
                <button type= "cancel" className="btn btn-default btn-raised button2 mr-3">Cancel</button>
                <button type="submit" className="btn btn-raised button1">Submit: To Be Prime!</button>
                </form>
            </div>
        </div>
        )
    }
}

export default Contract;