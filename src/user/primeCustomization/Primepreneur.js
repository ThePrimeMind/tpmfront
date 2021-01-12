import React, { Component } from 'react';
import "./primepreneur.css";

class Primepreneur extends Component {
    render() {
        return (
            <div>
                <h2 className="preneurMainHeader">Primepreneur</h2>

            <div className="container" style={{border: "1px solid black", padding: "0"}}>
                <h4 className="preneurDiv4">Turn you Dreams into reality!</h4>

            <div className="table-responsive"  style={{border: "1px solid black"}}>
            <h4 className="preneurDiv">1: IDENTIFY</h4>
                <h5 className="preneurDiv2">Product and/or Service <br/><br/> (What do you plan on creating?)</h5>
            <table className="table table-bordered table-striped" style={{width: "100%"}}>

                <tbody>
                    <th className= "preneurDiv3" style={{width: "25%"}}>Product/Service</th>
                    <th className= "preneurDiv3" style={{width: "60%"}}>Description</th>
                    <th className= "preneurDiv3" style={{width: "15%"}}>Cost of Product</th>
                
                    
                    <tr>
                    <td><textarea className="form-control" id="exampleTextarea" rows="4" placeholder="Item #1"></textarea></td>
                    <td><textarea className="form-control" id="exampleTextarea" rows="4" placeholder="Describe Item"></textarea></td>
                    <td><textarea className="form-control" id="exampleTextarea" rows="4" placeholder="Cost of each item"></textarea></td>
                    </tr>

                    <tr>
                    <td><textarea className="form-control" id="exampleTextarea" rows="4" placeholder="Item #2"></textarea></td>
                    <td><textarea className="form-control" id="exampleTextarea" rows="4" placeholder="Describe Item"></textarea></td>
                    <td><textarea className="form-control" id="exampleTextarea" rows="4" placeholder="Cost of each item"></textarea></td>
                    </tr>

                    <tr>
                    <td><textarea className="form-control" id="exampleTextarea" rows="4" placeholder="Item #3"></textarea></td>
                    <td><textarea className="form-control" id="exampleTextarea" rows="4" placeholder="Describe Item"></textarea></td>
                    <td><textarea className="form-control" id="exampleTextarea" rows="4" placeholder="Cost of each item"></textarea></td>
                    </tr>
                </tbody>
                
            </table>

            <div style={{clear: "both"}}>
            <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "55%"}}> Save Identification Process</button>
            </div>

            <h4 className="preneurDiv">Rationale</h4>
                <h5 className="preneurDiv2">Why is your product needed? <br/><br/> (What do you plan on creating?)</h5>
                <h5 className= "preneurDiv3" style={{padding: "40px", textDecoration: "underline"}}>1: What is it again?</h5>
            <table className="table table-bordered table-striped" style={{width: "100%"}}>

                <tbody>

                    <tr>
                    <td className="preneurHeader" style={{width: "25%"}}>Product/Service Explanation:</td>
                    <td><textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Explain a bit more in detail..."></textarea></td>
                    </tr>

                    <tr>
                    <td  className="preneurHeader">Select type:</td>
                    <td><select className="form-control" id="exampleFormControlSelect1" style={{width: "25%"}}>
                        <option>Product</option>
                        <option>Service</option>
                        </select></td>
                    </tr>

                    
                </tbody>
                
            </table>

            <h5 className= "preneurDiv3" style={{padding: "40px", textDecoration: "underline"}}>2: Who is it for?</h5>
            <table className="table table-bordered table-striped" style={{width: "100%"}}>

                <tbody>

                    <tr>
                    <td className="preneurHeader" style={{width: "25%"}}>Target Population:</td>

                    <td><textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Who will use your product/service?"></textarea></td>
                    </tr>  
                </tbody>
                
            </table>

            <h5 className= "preneurDiv3" style={{padding: "40px", textDecoration: "underline"}}>3: When does your target population need it?</h5>
            <table className="table table-bordered table-striped" style={{width: "100%"}}>

                <tbody>

                    <tr>
                    <td className="preneurHeader" style={{width: "25%"}}>Product/Service Use:</td>
                    <td><textarea className="form-control" id="exampleTextarea" rows="2" placeholder="When will people use your product/service?"></textarea></td>
                    </tr>     
                </tbody>
                
            </table>

            <h5 className= "preneurDiv3" style={{padding: "40px", textDecoration: "underline"}}>4: Where will you provide your product/service?</h5>
            <table className="table table-bordered table-striped" style={{width: "100%"}}>

                <tbody>

                    <tr>
                    <td className="preneurHeader" style={{width: "25%"}}>Location:</td>
                    <td><textarea className="form-control" id="exampleTextarea" rows="2" placeholder="Where will everything happen?"></textarea></td>
                    </tr>
                </tbody>
                
            </table>
            <h5 className= "preneurDiv3" style={{padding: "40px", textDecoration: "underline"}}>5: Why is your product/service necessary?</h5>
            <table className="table table-bordered table-striped" style={{width: "100%"}}>

                <tbody>

                    <tr>
                    <td className="preneurHeader" style={{width: "25%"}}>Are you helping people?:</td>
                    <td><textarea className="form-control" id="exampleTextarea" rows="2" placeholder="How are you helping?"></textarea></td>
                    </tr> 
                </tbody>
                
            </table>

            <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Rationale</button>
        </div>
            
            
            <div className="table-responsive" style={{border: "1px solid black"}}>
                <h4 className="preneurDiv">2: START</h4>
                <h5 className="preneurDiv2">Starting Budget <br/><br/>(Cost of Business)</h5>
            <table className="table table-bordered table-striped">
                <tbody>
                    <th><h5 className="preneurDiv3">Category</h5></th>    
                    <th><h5 className="preneurDiv3">Cost</h5></th>
                    <th><h5 className="preneurDiv3">Fixed or Variable</h5></th>
                        <tr>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <h5 style={{textAlign: "center"}}>Advertisement and Promotion</h5>
                            </td>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <form>
                                    <textarea style={{textAlign: "center"}} className="form-control" id="exampleTextarea" placeholder="Enter Monthly Cost"></textarea>
                                </form>
                            </td>
                            <td className="preneurDiv3" style={{width: "20%"}}>
                                <form>
                                <select className="form-control" id="exampleFormControlSelect1">
                                <option>Fixed</option>
                                <option>Variable</option>
                                </select>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <h5 style={{textAlign: "center"}}>Building Construction</h5>
                            </td>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <form>
                                    <textarea style={{textAlign: "center"}} className="form-control" id="exampleTextarea"  placeholder="Enter Monthly Cost"></textarea>
                                </form>
                            </td>
                            <td className="preneurDiv3" style={{width: "20%"}}>
                                <form>
                                <label for="exampleFormControlSelect1" rows="1" placeholder=""></label>
                                <select className="form-control" id="exampleFormControlSelect1" >
                                <option>Fixed</option>
                                <option>Variable</option>
                                </select>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <h5 style={{textAlign: "center"}}>Cash</h5>
                            </td>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <form>
                                    <textarea style={{textAlign: "center"}} className="form-control" id="exampleTextarea"  placeholder="Enter Monthly Cost"></textarea>
                                </form>
                            </td>
                            <td className="preneurDiv3" style={{width: "20%"}}>
                                <form>
                                <label for="exampleFormControlSelect1" rows="1" placeholder=""></label>
                                <select className="form-control" id="exampleFormControlSelect1" >
                                <option>Fixed</option>
                                <option>Variable</option>
                                </select>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <h5 style={{textAlign: "center"}}>Computer and Software</h5>
                            </td>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <form>
                                    <textarea style={{textAlign: "center"}} className="form-control" id="exampleTextarea"  placeholder="Enter Monthly Cost"></textarea>
                                </form>
                            </td>
                            <td className="preneurDiv3" style={{width: "20%"}}>
                                <form>
                                <label for="exampleFormControlSelect1" rows="1" placeholder=""></label>
                                <select className="form-control" id="exampleFormControlSelect1" >
                                <option>Fixed</option>
                                <option>Variable</option>
                                </select>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <h5 style={{textAlign: "center"}}>Decoration</h5>
                            </td>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <form>
                                    <textarea style={{textAlign: "center"}} className="form-control" id="exampleTextarea"  placeholder="Enter Monthly Cost"></textarea>
                                </form>
                            </td>
                            <td className="preneurDiv3" style={{width: "20%"}}>
                                <form>
                                <label for="exampleFormControlSelect1" rows="1" placeholder=""></label>
                                <select className="form-control" id="exampleFormControlSelect1" >
                                <option>Fixed</option>
                                <option>Variable</option>
                                </select>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <h5 style={{textAlign: "center"}}>Deposits</h5>
                            </td>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <form>
                                    <textarea style={{textAlign: "center"}} className="form-control" id="exampleTextarea"  placeholder="Enter Monthly Cost"></textarea>
                                </form>
                            </td>
                            <td className="preneurDiv3" style={{width: "20%"}}>
                                <form>
                                <label for="exampleFormControlSelect1" rows="1" placeholder=""></label>
                                <select className="form-control" id="exampleFormControlSelect1" >
                                <option>Fixed</option>
                                <option>Variable</option>
                                </select>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <h5 style={{textAlign: "center"}}>Equipment and Supplies</h5>
                            </td>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <form>
                                    <textarea style={{textAlign: "center"}} className="form-control" id="exampleTextarea"  placeholder="Enter Monthly Cost"></textarea>
                                </form>
                            </td>
                            <td className="preneurDiv3" style={{width: "20%"}}>
                                <form>
                                <label for="exampleFormControlSelect1" rows="1" placeholder=""></label>
                                <select className="form-control" id="exampleFormControlSelect1" >
                                <option>Fixed</option>
                                <option>Variable</option>
                                </select>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <h5 style={{textAlign: "center"}}>Insurance</h5>
                            </td>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <form>
                                    <textarea style={{textAlign: "center"}} className="form-control" id="exampleTextarea"  placeholder="Enter Monthly Cost"></textarea>
                                </form>
                            </td>
                            <td className="preneurDiv3" style={{width: "20%"}}>
                                <form>
                                <label for="exampleFormControlSelect1" rows="1" placeholder=""></label>
                                <select className="form-control" id="exampleFormControlSelect1" >
                                <option>Fixed</option>
                                <option>Variable</option>
                                </select>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <h5 style={{textAlign: "center"}}>Licenses and Permits</h5>
                            </td>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <form>
                                    <textarea style={{textAlign: "center"}} className="form-control" id="exampleTextarea"  placeholder="Enter Monthly Cost"></textarea>
                                </form>
                            </td>
                            <td className="preneurDiv3" style={{width: "20%"}}>
                                <form>
                                <label for="exampleFormControlSelect1" rows="1" placeholder=""></label>
                                <select className="form-control" id="exampleFormControlSelect1" >
                                <option>Fixed</option>
                                <option>Variable</option>
                                </select>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <h5 style={{textAlign: "center"}}>Professional Fees</h5>
                            </td>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <form>
                                    <textarea style={{textAlign: "center"}} className="form-control" id="exampleTextarea"  placeholder="Enter Monthly Cost"></textarea>
                                </form>
                            </td>
                            <td className="preneurDiv3" style={{width: "20%"}}>
                                <form>
                                <label for="exampleFormControlSelect1" rows="1" placeholder=""></label>
                                <select className="form-control" id="exampleFormControlSelect1" >
                                <option>Fixed</option>
                                <option>Variable</option>
                                </select>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <h5 style={{textAlign: "center"}}>Remodeling</h5>
                            </td>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <form>
                                    <textarea style={{textAlign: "center"}} className="form-control" id="exampleTextarea"  placeholder="Enter Monthly Cost"></textarea>
                                </form>
                            </td>
                            <td className="preneurDiv3" style={{width: "20%"}}>
                                <form>
                                <label for="exampleFormControlSelect1" rows="1" placeholder=""></label>
                                <select className="form-control" id="exampleFormControlSelect1" >
                                <option>Fixed</option>
                                <option>Variable</option>
                                </select>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <h5 style={{textAlign: "center"}}>Rent</h5>
                            </td>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <form>
                                    <textarea style={{textAlign: "center"}} className="form-control" id="exampleTextarea"  placeholder="Enter Monthly Cost"></textarea>
                                </form>
                            </td>
                            <td className="preneurDiv3" style={{width: "20%"}}>
                                <form>
                                <label for="exampleFormControlSelect1" rows="1" placeholder=""></label>
                                <select className="form-control" id="exampleFormControlSelect1" >
                                <option>Fixed</option>
                                <option>Variable</option>
                                </select>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <h5 style={{textAlign: "center"}}>Services (ex: Registered Agent)</h5>
                            </td>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <form>
                                    <textarea style={{textAlign: "center"}} className="form-control" id="exampleTextarea"  placeholder="Enter Monthly Cost"></textarea>
                                </form>
                            </td>
                            <td className="preneurDiv3" style={{width: "20%"}}>
                                <form>
                                <label for="exampleFormControlSelect1" rows="1" placeholder=""></label>
                                <select className="form-control" id="exampleFormControlSelect1" >
                                <option>Fixed</option>
                                <option>Variable</option>
                                </select>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <h5 style={{textAlign: "center"}}>Signs</h5>
                            </td>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <form>
                                    <textarea style={{textAlign: "center"}} className="form-control" id="exampleTextarea"  placeholder="Enter Monthly Cost"></textarea>
                                </form>
                            </td>
                            <td className="preneurDiv3" style={{width: "20%"}}>
                                <form>
                                <label for="exampleFormControlSelect1" rows="1" placeholder=""></label>
                                <select className="form-control" id="exampleFormControlSelect1" >
                                <option>Fixed</option>
                                <option>Variable</option>
                                </select>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <h5 style={{textAlign: "center"}}>Miscellaneous Expenses</h5>
                            </td>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <form>
                                    <textarea style={{textAlign: "center"}} className="form-control" id="exampleTextarea"  placeholder="Enter Monthly Cost"></textarea>
                                </form>
                            </td>
                            <td className="preneurDiv3" style={{width: "20%"}}>
                                <form>
                                <label for="exampleFormControlSelect1" rows="1" placeholder=""></label>
                                <select className="form-control" id="exampleFormControlSelect1" >
                                <option>Fixed</option>
                                <option>Variable</option>
                                </select>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <h5 style={{textAlign: "center"}}>Logo</h5>
                            </td>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <form>
                                    <textarea style={{textAlign: "center"}} className="form-control" id="exampleTextarea"  placeholder="Enter Monthly Cost"></textarea>
                                </form>
                            </td>
                            <td className="preneurDiv3" style={{width: "20%"}}>
                                <form>
                                <label for="exampleFormControlSelect1" rows="1" placeholder=""></label>
                                <select className="form-control" id="exampleFormControlSelect1" >
                                <option>Fixed</option>
                                <option>Variable</option>
                                </select>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <h5 style={{textAlign: "center"}}>Other</h5>
                            </td>
                            <td className="preneurDiv3" style={{width: "40%"}}>
                                <form>
                                    <textarea style={{textAlign: "center"}} className="form-control" id="exampleTextarea"  placeholder="Enter Monthly Cost"></textarea>
                                </form>
                            </td>
                            <td className="preneurDiv3" style={{width: "20%", padding: "0"}}>
                                <form>
                                <label for="exampleFormControlSelect1" rows="1" placeholder=""></label>
                                <select className="form-control" id="exampleFormControlSelect1" >
                                <option>Fixed</option>
                                <option>Variable</option>
                                </select>
                                </form>
                            </td>
                        </tr>

                       <tr>
                            <td colspan= "3" style={{width: "40%", padding: "0"}}>
                                <h4  className="preneurDiv" style={{padding:"40px"}}>Monthly Total of Business Expenses</h4>
                            
                         
                                    <textarea style={{textAlign: "center", width: "40%", margin: "auto", padding: "25px"}} className="form-control mb-4" id="exampleTextarea"  placeholder="Enter Monthly Total"></textarea>

                                    <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Starting Budget</button>
                               
                                <h4 className="preneurDiv4">*Minimize Expenses*</h4> 
                            </td>
                        </tr>
                      
                </tbody>
                
            </table>
            
            </div>

            
            
           <div className="table-responsive" style={{border: "1px solid black"}}>
                <h4 className="preneurDiv">3: BUDGET<br/></h4>
                <h5 className="preneurDiv2">Monthly Income vs Expenses</h5>

               <table className="table table-bordered table-striped">
                   <tbody>
                       <th style={{width: "25%"}}><h5 className="preneurDiv3">Income</h5></th>
                       <th style={{width: "25%"}}><h5 className="preneurDiv3">Amount</h5></th>
                       <th style={{width: "25%"}}><h5 className="preneurDiv3">Expenses</h5></th> 
                       <th style={{width: "25%"}}><h5 className="preneurDiv3">Amount</h5></th> 

                       <tr>
                           
                                <td style={{width: "30%", textAlign: "center", fontWeight: "bold"}}>Salary</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                                <td style={{width: "30%", textAlign: "center"}}>Mortgage/Rent</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                           
                       </tr>
                       <tr>
                           
                                <td style={{width: "30%", textAlign: "center", fontWeight: "bold"}}>Other Sources of Income</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                                <td style={{width: "30%", textAlign: "center"}}>Utilities (Including PSEG and/or Water)</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                           
                       </tr>

                       <tr>
                           
                                <td style={{width: "30%", textAlign: "center", fontWeight: "bold"}}>Tips</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                                <td style={{width: "30%", textAlign: "center"}}>Cellphone</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                           
                       </tr>
                       <tr>
                           
                                <td style={{width: "30%", textAlign: "center", fontWeight: "bold"}}>Unemployment</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                                <td style={{width: "30%", textAlign: "center"}}>Cable and Internet</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                           
                       </tr>

                       <tr>
                           
                                <td style={{width: "30%", textAlign: "center", fontWeight: "bold"}}>Social Security</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                                <td style={{width: "30%", textAlign: "center"}}>Car (Gas and Repairs) & Public Transportation</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                           
                       </tr>
                       <tr>
                           
                                <td style={{width: "30%", textAlign: "center", fontWeight: "bold"}}>Child Support</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                                <td style={{width: "30%", textAlign: "center"}}>Laundry</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                           
                       </tr>

                       <tr>
                           
                                <td style={{width: "30%", textAlign: "center", fontWeight: "bold"}}>Welfare</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                                <td style={{width: "30%", textAlign: "center"}}>Groceries and Dining Out</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                           
                       </tr>
                       <tr>
                           
                                <td style={{width: "30%", textAlign: "center", fontWeight: "bold"}}>Allowance</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                                <td style={{width: "30%", textAlign: "center"}}>Personal Care (Hair and Hygiene)</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                           
                       </tr>

                       <tr>
                           
                                <td style={{width: "30%", textAlign: "center", fontWeight: "bold"}}>Family and/or Friend Support</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                                <td style={{width: "30%", textAlign: "center"}}>Family and/or Friend Support</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                           
                       </tr>
                       <tr>
                           
                                <td style={{width: "30%", textAlign: "center", fontWeight: "bold"}}>Other</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                                <td style={{width: "30%", textAlign: "center"}}>Other</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                           
                       </tr>

                       <tr>
                           
                                <td style={{width: "30%", textAlign: "center", fontWeight: "bold"}}>Total Monthly Income</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                                <td style={{width: "30%", textAlign: "center"}}>Total Monthly Expenses</td>
                                <td style={{width: "20%"}}><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Monthly Total"></textarea></td>
                           
                       </tr>
                         
                    </tbody>
                    
                    <tr style={{textAlign: "center", padding: "50px"}}>
                        <td colspan="4" style={{padding: "0px"}}>
                        <h4 className="preneurDiv" style={{padding: "30px"}}>Net Income</h4>
                            <h4 className="mt-3">Total Income - <textarea className="form-control mb-3 mt-3" style={{textAlign: "center", width: "40%", margin: "auto"}} id="exampleTextarea" rows="2" placeholder="Total Income"></textarea></h4>
                        <h4 >Total Expenses = <textarea className="form-control mb-3 mt-3" style={{textAlign: "center", width: "40%", margin: "auto"}} id="exampleTextarea" rows="2" placeholder="Total Expenses"></textarea></h4>
                        <h4>Net Income: <textarea className="form-control mb-3 mt-3" style={{textAlign: "center", width: "40%", margin: "auto"}} id="exampleTextarea" rows="2" placeholder="Remaining Income"></textarea></h4>
                        </td>
                    </tr>
                    

               </table> 
               
               <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Income vs Expenses</button>          

        
                           <h4 className="preneurDiv4"> ***Total Income minus Total Expenses equals your Net Income***</h4>
                   

                </div>  

                

                <div className= "table-responsive" style={{border: "1px solid black"}}>

                <h4 className="preneurDiv">4: CUSTOMER<br/></h4>
            <h5 className="preneurDiv2">Who is the business designed for?</h5>

                    <table className= "table table-striped table-bordered">
                        <tbody>

                                <tr>
                                    <td style={{width: "20%", textAlign: "center"}}><h5>People</h5></td>
                                    
                                    <td>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Who does your product/service help the most?"></textarea>
                                    </td>  
                                </tr>
                                <tr>
                                    <td style={{width: "20%", textAlign: "center"}} ><h5>Environment</h5></td>
                                    <td>
                                        <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Where does your product/service help the most?"></textarea>                                       
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{width: "20%", textAlign: "center"}}><h5>Reason <br/> (Short Answer)</h5></td>
                                    <td>
                                        <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Elevator Pitch"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{width: "20%", textAlign: "center"}}><h5>Why<br/>(Detailed Response)</h5></td>
                                    <td>
                                        <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Full Explanation"></textarea>
                                    </td>
                                </tr>
                        </tbody>
                    </table>

                    <div className="preneurDiv4" style={{textAlign: "center"}}><h3>AND/OR...</h3></div>

                    <table className= "table table-striped table-bordered">
                        <tbody>

                                <tr>
                                    <td style={{width: "20%", textAlign: "center"}}><h5>Business/Organzation</h5></td>
                                    
                                    <td>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Who does your product/service help the most?"></textarea>
                                    </td>  
                                </tr>
                                <tr>
                                    <td style={{width: "20%", textAlign: "center"}} ><h5>Environment</h5></td>
                                    <td>
                                        <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Where does your product/service help the most?"></textarea>                                       
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{width: "20%", textAlign: "center"}}><h5>Reason <br/> (Short Answer)</h5></td>
                                    <td>
                                        <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Elevator Pitch"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{width: "20%", textAlign: "center"}}><h5>Why<br/>(Detailed Response)</h5></td>
                                    <td>
                                        <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Full Explanation"></textarea>
                                    </td>
                                </tr>
                        </tbody>
                    </table>

                    <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Customer</button>  

                </div>

               <div className="table-responsive" style={{border: "1px solid black"}}>
                    <h4 className="preneurDiv">5: PROFIT<br/></h4>
                    <h5 className="preneurDiv2">How much will you make after each sale?</h5>
                   <table className="table table-bordered table-striped">
                       <tbody>
                            <th className="preneurHeader" style={{width: "33%"}}>Product and/or Service</th>
                            <th className="preneurHeader" style={{width: "33%"}}>Sale Price per Unit</th>
                            <th className="preneurHeader" style={{width: "33%"}}>Variable Cost Per Unit</th>

                            <tr>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Enter Product or Service Item..."></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How much does each unit cost?"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Cost to make each unit?"></textarea></td>
                            </tr>

                            <tr>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Enter Product or Service Item..."></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How much does each unit cost?"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Cost to make each unit?"></textarea></td>
                            </tr>

                            <tr>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Enter Product or Service Item..."></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How much does each unit cost?"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Cost to make each unit?"></textarea></td>
                            </tr>
                           
                       </tbody>
                            <tr>
                                <td colspan="3" className="preneurDiv"><h4>Gross Profit Per Unit</h4></td>   
                                   
                            </tr> 
                            <tr>
                                <td colspan="3" style={{padding: "0"}}><p className="preneurDiv2">How much will you make after each sale?</p></td>  
                            </tr>
                            <tr>    
                                <td colspan="3"><textarea className="form-control mt-5 mb-5" style={{textAlign: "center", width: "40%", margin: "auto"}} id="exampleTextarea" rows="2" placeholder="Total amount made for each sale"></textarea></td>
                            </tr>
                            <tr>
                            <td colspan="3" style={{padding: "0"}}><h4 className="preneurDiv4">Sales Price Per Unit - Variable Cost Per Unit = Gross Profit Per Unit<br/></h4></td>
                            </tr>
                        
                   </table>

                   <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Profit</button>
                     
                 </div> 


{/* Fix Spacing so that text in placeholder shows in full */}
               <div className="table-resposive"  style={{border: "1px solid black"}}>
               <h4 className="preneurDiv">6: SALES ANALYSIS</h4>
                    <h5 className="preneurDiv2">How much will you make after each sale?</h5>
                   <table className="table table-striped table-bordered">
                       <tbody>
                            <tr style={{width: "auto"}}>
                                <td className="preneurDiv" style={{verticalAlign: "middle"}}>Gross Profit Per Unit</td>
                                <td>$  <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Total amount made for each sale"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3" style={{lineHeight: "100px"}}>
                                
                            <td colspan="2"> <textarea className="form-control" style={{textAlign: "center", width: "5%", display: "inline"}} id="exampleTextarea" rows="1" placeholder="#" alt="Amount of items being sold"></textarea>  
                                Numbers of Contracts at: $  
                                <textarea className="form-control" style={{textAlign: "center", width: "auto", display: "inline"}} id="exampleTextarea" rows="1" placeholder="Cost per Unit"></textarea><br/>
                                covers $ 
                                <textarea className="form-control" style={{textAlign: "center", width: "auto", display: "inline"}} id="exampleTextarea" rows="1" placeholder="Monthly cost"></textarea>    
                                   in monthly costs...
                            </td>      
                            </tr>

                            <tr style={{width: "auto", textAlign: "center", fontWeight: "bold"}}>
                                <td  className= "preneurDiv" style={{verticalAlign: "middle"}} >My Total Monthly Cost:</td>
                                <td>$  <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Total amount made for each sale"></textarea>(Fixed Cost)
                                </td>
                            </tr>
                                <tr>
                                    <td colspan="2" className="preneurDiv2">
                                        <h5 style={{fontWeight: "bold"}}>Divided by...</h5>
                                    </td>
                                </tr>
                                
                            
                            
                            <tr style={{width: "auto", textAlign: "center", fontWeight: "bold"}}>
                                <td className="preneurDiv" style={{verticalAlign: "middle"}}># of Units needed to Break Even: <br/>
                                (Fixed Cost divided by Gross Profit per Unit)
                                </td>
                                <td>$  <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Gross Profit per Unit"></textarea> = <br/>
                                <textarea className="form-control" style={{textAlign: "center", width: "auto", display: "inline"}} id="exampleTextarea" rows="1" placeholder="Number of Contracts" alt="Amount of items being sold"></textarea>  
                                    Contracts of <br/> 
                                $<textarea className="form-control" style={{textAlign: "center", width: "auto", display: "inline"}} id="exampleTextarea" rows="1" placeholder="Cost per Unit"></textarea><br/>
                                 per month...
                                
                                </td>
                            </tr>

                            <tr style={{lineHeight: "100px"}}>
                                <td colspan="2" style={{padding: "0"}}>
                                    <h5 className="preneurDiv3" style={{padding: "50px"}}>$  <textarea className="form-control" style={{textAlign: "center", width: "5%", display: "inline"}} id="exampleTextarea" rows="1" placeholder="#" alt="Gross Profit"></textarea>  
                                    Gross Profit per Unit (multiplied by)  
                                    <textarea className="form-control" style={{textAlign: "center", width: "auto", display: "inline"}} id="exampleTextarea" rows="1" placeholder="Units Sold"></textarea>
                                    = $ 
                                    <textarea className="form-control" style={{textAlign: "center", width: "auto", display: "inline"}} id="exampleTextarea" rows="1" placeholder="Total Amount"></textarea> </h5> 
                                </td>
                            </tr>
                            <tr> 
                             <td colspan="2" className="preneurDiv2 mt3 mb-3" style={{margin: "auto", textAlign: "center", padding: "30px"}}>  
                              <h5>  If I sell at least 
                                 <textarea className="form-control" style={{textAlign: "center", width: "5%", display: "inline"}} id="exampleTextarea" rows="1" placeholder="#" alt="Units Sold"></textarea>  
                                contracts at $  
                                <textarea className="form-control" style={{textAlign: "center", width: "auto", display: "inline"}} id="exampleTextarea" rows="1" placeholder="Cost per Unit"></textarea> (Monthly)...<br/>
                                

                                Ultimately, I need 
                                <textarea className="form-control" style={{textAlign: "center", width: "auto", display: "inline"}} id="exampleTextarea" rows="1" placeholder="Units Sold"></textarea> 
                                to make a profit...   
                                </h5>   
                            </td>   
                            </tr>

                            
                       </tbody>
                   </table>

                   <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Sales Analysis</button>
               </div>

               <div className="table-responsive" style={{border: "1px solid black"}}>
                    <h4 className="preneurDiv">7: INCOME PROJECTIONS</h4>
                    <h5 className="preneurDiv2">Monthly Income Projections</h5>

                <table className="table table-striped table-bordered">
                    <tbody>
                        <th className="preneurDiv3">Cash Projections</th>
                        <th className="preneurDiv3">Month 1</th>
                        <th className="preneurDiv3">Month 2</th>
                        <th className="preneurDiv3">Month 3</th>

                        <tr>
                            <td className= "preneurDiv">Cash Projections</td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Income"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Income"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Income"></textarea></td>
                        </tr>

                        <tr>
                            <td className= "preneurDiv">Other Sources of Cash</td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Income"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Income"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Income"></textarea></td>
                        </tr>

                        <tr>
                            <td className= "preneurDiv3">Monthly Sales Income (1)</td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Income"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Income"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Income"></textarea></td>
                        </tr>

                        <tr>
                            <td className= "preneurDiv3">Total Amount of Cash (2)</td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Cash"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Cash"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Cash"></textarea></td>
                        </tr>
                        
                    </tbody>
                    
                </table>

                

                    <h4 className="preneurDiv">EXPENSE PROJECTIONS</h4>
                    <h5 className="preneurDiv2">Monthly Expense Projections</h5>

                <table className="table table-striped table-bordered">
                    <tbody>
                        <th className="preneurDiv3" style={{width: "20%"}}>Expense Projections</th>
                        <th className="preneurDiv3">Month 1</th>
                        <th className="preneurDiv3">Month 2</th>
                        <th className="preneurDiv3">Month 3</th>

                        <tr>
                            <td className= "preneurDiv">Materials/Supplies</td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                        </tr>

                        <tr>
                            <td className= "preneurDiv">Inventory Replacement</td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                        </tr>

                        <tr>
                            <td className= "preneurDiv">Business Utilities</td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                        </tr>

                        <tr>
                            <td className= "preneurDiv">Business Telephone</td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                        </tr>

                        <tr>
                            <td className= "preneurDiv">Transportation</td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                        </tr>

                        <tr>
                            <td className= "preneurDiv">Marketing</td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                        </tr>

                        <tr>
                            <td className= "preneurDiv">Repairs and Maintenance</td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                        </tr>

                        <tr>
                            <td className= "preneurDiv">Rent</td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                        </tr>

                        <tr>
                            <td className= "preneurDiv">Other Sources of Cash</td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                        </tr>

                        <tr>
                            <td className= "preneurDiv3">Total Expenses (1) and (2)</td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Expense"></textarea></td>
                        </tr>

                        <tr>
                            <td className= "preneurDiv3">Monthly Cash (sum of 1)</td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Cash"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Cash"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Cash"></textarea></td>
                        </tr>

                        <tr>
                            <td className= "preneurDiv3">Ending Cash (sum of 2)</td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Cash"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Cash"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Cash"></textarea></td>
                        </tr>

                        <tr>
                            <td className= "preneurDiv3">Owner's Salary (3)</td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Salary"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Salary"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Salary"></textarea></td>
                        </tr>

                        <tr>
                            <td className= "preneurDiv3">Net Cash (3) <br/> (sum of 3) (place sum in month 2 of "Start-Up Cash)</td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Net Cash"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Net Cash"></textarea></td>
                            <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Net Cash"></textarea></td>
                        </tr>
                        
                    </tbody>
                    
                </table>

                <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Projections</button>

               </div>

               <div className="table-responsive" style={{border: "1px solid black"}}>
                    <h4 className="preneurDiv">8: ENVIRONMENT ANALYSIS</h4>
                    <h4 className="preneurDiv4">People</h4>
                    <h5 className="preneurDiv2">Understanding your target customer</h5>
                    <table className="table table-striped table bordered">
                        <tbody>
                            <tr className="preneurDiv3" style={{verticalAlign: "middle"}}><td>Customer</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Target Customer"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Gender</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Male/Female (Adult or Child)"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Age</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Specify Age Group"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Income</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Average Income of Customer"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Ethnicity</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Ethnicity of Target Customer"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Family/Children</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Who is it intended for?"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Location</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Urban/Suburban/Both"></textarea></td>
                            </tr>
                            
                            
                        </tbody>
                    </table>

                    <h4 className="preneurDiv">ENVIRONMENT ANALYSIS</h4>
                        <h4 className="preneurDiv4">Businesses</h4>
                    <h5 className="preneurDiv2">Understanding your target customer</h5>
                    <table className="table table-striped table bordered">
                        <tbody>
                            <tr className="preneurDiv3"><td>Type of Business</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Target Business"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Company Reputation</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Company's Standing"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Length of Service</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="New or Established"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Financial Standing</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Developing or Established"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Customer Reviews</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder=" Company's Reputation"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Ethnicity</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Of Target Customer"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Location</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Urban/Suburban/Both"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Geography</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Urban/Suburban/Both"></textarea></td>
                            </tr>
                                
                        </tbody>
                    </table>

                    <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "55%"}}> Save Environmental Analysis</button>

                    <h4 className="preneurDiv">The How's</h4>
                    <h5 className="preneurDiv2">Payment Structure</h5>
                    <table className="table table-striped table bordered">
                        <tbody>
                            <tr className="preneurDiv3"><td>Payment Details</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How will you render service?"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Customer Loyalty</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How will the customer keep coming back?"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Order Details</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How will customers pay via Cash? Credit? CashApp?"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Online Sales</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How will you establish an online presence?"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Traditional Sales</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="How will you make sales?"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Other</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Any other thoughts?"></textarea></td>
                            </tr>

                        </tbody>
                    </table>

                    <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save The How's</button>

                    <h4 className="preneurDiv">DETAILED DEMOGRAPHIC ANALYSIS</h4>
                    <h5 className="preneurDiv2">How many people do you intend to help?</h5>
                    <table className="table table-striped table bordered">
                        <tbody>
                            <tr className="preneurDiv3"><td>Total Population</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Gender</td>
                                <td><h6>Children:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount?"></textarea></td>
                                <td><h6>Women:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount?"></textarea></td>
                                <td><h6>Men:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount?"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Age</td>
                                <td><h6>Age (0-17):</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount?"></textarea></td>
                                <td><h6>Age (18-40):</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount?"></textarea></td>
                                <td><h6>Age (41-70):</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount?"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Living Situation</td>
                                <td><h6>Owner:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Status"></textarea></td>
                                <td><h6>Renter:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Status"></textarea></td>
                                <td><h6>Displaced:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Status"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Race</td>
                                <td><h6>Black:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                                <td><h6>White:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                                <td><h6>Hispanic:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Race cont'd</td>
                                <td><h6>Asian:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                                <td><h6>Native:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                                <td><h6>Other:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                            </tr>
 
                            <tr className="preneurDiv3"><td>Family Status</td>
                                <td><h6>Single Family:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                                <td><h6>Married w/Children:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                                <td><h6>Married no Children:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Household Income</td>
                                <td><h6>Under 50K:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                                <td><h6>50K to 100K:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                                <td><h6>100K and up:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Geogrphical Location</td>
                                <td><h6>Located In Target Area:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                                <td><h6>Not in Target Area:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                                <td><h6>Other Geographic Area:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Neighborhood</td>
                                <td><h6>Urban:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                                <td><h6>Suburban:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                                <td><h6>Other:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Educational Level</td>
                                <td><h6>Grades K-8:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                                <td><h6>Grades 9-12:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                                <td><h6>High School Grad:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                            </tr>

                            <tr className="preneurDiv3"><td>Educational Level cont'd</td>
                                <td><h6>Trade School:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                                <td><h6>College Grad:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                                <td><h6>Professional Status:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="1" placeholder="Amount"></textarea></td>
                            </tr>
                        </tbody>
                    </table>

                    <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Detailed Analysis</button>

                </div>

                <div className="table-responsive" style={{border: "1px solid black"}}>
                    <h4 className="preneurDiv">9: BUSINESS BIO</h4>
                    <h5 className="preneurDiv2">What will your business be known for?</h5>
                    <table className="table table-striped table-bordered">
                        <tbody>
                            <th className="preneurDiv3" style={{width: "20%"}}>Categories</th>
                            <th className="preneurDiv3">Responses</th>

                            <tr>
                                <td className="preneurDiv" style={{verticalAlign: "middle"}}>Name: </td>
                                <td><h6>CEO Name:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Write here..."></textarea></td>
                            </tr>
                            <tr>
                                <td className="preneurDiv" style={{verticalAlign: "middle"}}>Business Name: </td>
                                <td><h6>Name of Business:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Write here..."></textarea></td>
                            </tr>

                            <tr>
                                <td className="preneurDiv" style={{verticalAlign: "middle"}}>Products and/or Services: </td>
                                <td><h6>Products/Services:</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="8" placeholder="Elaborate"></textarea></td>
                            </tr>
                            <tr>
                                <td className="preneurDiv" style={{verticalAlign: "middle"}}>Relevance of Products and/or Services:</td>
                                <td><h6>Why does your target customer need your business?</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="8" placeholder="Elaborate"></textarea></td>
                            </tr>

                            <tr>
                                <td className="preneurDiv" style={{verticalAlign: "middle"}}>Relevance of owner to the product/service:</td>
                                <td><h6>How do you make you, as a person, make your product/service desirable?</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="8" placeholder="Elaborate"></textarea></td>
                            </tr>

                            <tr>
                                <td className="preneurDiv" style={{verticalAlign: "middle"}}>Company's vision:</td>
                                <td><h6>What problems do you seek to solve?</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="8" placeholder="Elaborate"></textarea></td>
                            </tr>

                            <tr>
                                <td className="preneurDiv" style={{verticalAlign: "middle"}}>Company's Perspective:</td>
                                <td><h6>What does success look like to you and you business?</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="8" placeholder="Elaborate"></textarea></td>
                            </tr>

                            <tr>
                                <td className="preneurDiv" style={{verticalAlign: "middle"}}>Company's Goals:</td>
                                <td><h6>What are your goals for your company?</h6><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="8" placeholder="Elaborate"></textarea></td>
                            </tr>


                        </tbody>
                    </table>

                    <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Business Bio</button>

                </div>

                <div className="table-responsive" style={{border: "1px solid black"}}>
                    <h4 className="preneurDiv">10: MARKETING PLAN</h4>
                    <h5 className="preneurDiv2">How can you make your business attractive to your target customer?</h5>
                    <table className="table table-striped table-bordered">
                        <tbody>
                            <th className="preneurDiv3" style={{width: "20%"}}>Categories</th>
                            <th className="preneurDiv3">Responses</th>

                            <tr>
                                <td className="preneurDiv" style={{verticalAlign: "middle"}}>What are you selling? </td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="8" placeholder="Elaborate"></textarea></td>
                            </tr>
                            <tr>
                                <td className="preneurDiv" style={{verticalAlign: "middle"}}>What will your product/service do for your target customer?</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="8" placeholder="Elaborate"></textarea></td>
                            </tr>

                            <tr>
                                <td className="preneurDiv" style={{verticalAlign: "middle"}}>Why should I buy from you?</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="8" placeholder="Elaborate"></textarea></td>
                            </tr>
                            <tr>
                                <td className="preneurDiv" style={{verticalAlign: "middle"}}>What goals can I work on now to market my business?</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="8" placeholder="Elaborate"></textarea></td>
                            </tr>

                            <tr>
                                <td className="preneurDiv" style={{verticalAlign: "middle"}}>Who am I trying to reach and why?</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="8" placeholder="Elaborate"></textarea></td>
                            </tr>

                            <tr>
                                <td className="preneurDiv" style={{verticalAlign: "middle"}}>What does your target customer need to know?</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="8" placeholder="Elaborate"></textarea></td>
                            </tr>

                            <tr>
                                <td className="preneurDiv" style={{verticalAlign: "middle"}}>What makes your products/services worth the cost and attention?</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="8" placeholder="Elaborate"></textarea></td>
                            </tr>

                            <tr>
                                <td className="preneurDiv" style={{verticalAlign: "middle"}}>What should be your customers reactions to your products/services?</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="8" placeholder="Elaborate"></textarea></td>
                            </tr>

                            <tr>
                                <td className="preneurDiv" style={{verticalAlign: "middle"}}>Where can customers get more information about your products/services?</td>
                                <td><textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="8" placeholder="Elaborate"></textarea></td>
                            </tr>


                        </tbody>
                    </table>

                    <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Marketing Plan</button>

                    
                        <h4 className="preneurDiv">Marketing Methods</h4>
                        <h5 className="preneurDiv2">Choose the marketing methods that work for your business</h5>
                    <table className="table table-striped table-bordered">
                        <tbody>

                            <tr>
                                <td className="preneurDiv">Essentials</td>
                                <td className="preneurDiv3">(1) Business Cards  (2) Flyers <br/> (3) Brochures (4)Website</td>
                            </tr>
                            <tr>
                                <td className="preneurDiv3">Take your pick</td>
                                <td>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Choose your marketing tools"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Choose your marketing tool"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Choose your marketing tool"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Choose your marketing tool"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Choose your marketing tool"></textarea></td>
                            </tr>

                            <tr>
                                <td className="preneurDiv3">Marketing Tool Cost</td>
                                <td>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How much will it cost?"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How much will it cost?"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How much will it cost?"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How much will it cost?"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How much will it cost?"></textarea></td>
                            </tr>

                            <tr>
                                <td className="preneurDiv">Sales Promotion</td>
                                <td className="preneurDiv3">(1) Samples  (2) Contests <br/>  (3) Free Gifts (4)Displays <br/> (5) Catalogs  (6) Trade Shows</td>
                            </tr>
                            <tr>
                                <td className="preneurDiv3">Take your pick</td>
                                <td>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Choose your sales promotion tools"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Choose your sales promotion tool"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Choose your sales promotion tool"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Choose your sales promotion tool"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Choose your sales promotion tool"></textarea></td>
                            </tr>

                            <tr>
                                <td className="preneurDiv3">Sale Promotion Cost</td>
                                <td>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How much will it cost?"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How much will it cost?"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How much will it cost?"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How much will it cost?"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How much will it cost?"></textarea></td>
                            </tr>

                            <tr>
                                <td className="preneurDiv">Public Relations</td>
                                <td className="preneurDiv3">(1) Community Events  (2) Fundraisers <br/> (3) Other</td>
                            </tr>
                            <tr>
                                <td className="preneurDiv3">Take your pick</td>
                                <td>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Choose your marketing tools"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Choose your marketing tool"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Choose your marketing tool"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Choose your marketing tool"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="Choose your marketing tool"></textarea></td>
                            </tr>

                            <tr>
                                <td className="preneurDiv3">Public Relations Cost</td>
                                <td>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How much will it cost?"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How much will it cost?"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How much will it cost?"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How much will it cost?"></textarea>
                                    <textarea className="form-control" style={{textAlign: "center"}} id="exampleTextarea" rows="2" placeholder="How much will it cost?"></textarea></td>
                            </tr>

                        </tbody>
                    </table>

                    <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-5 mt-5" style={{display: "block", margin: "0 auto", width: "50%"}}> Save Marketing Methods</button>

                </div>
                

                </div>
                
            </div>
        )
    }
}

export default Primepreneur;