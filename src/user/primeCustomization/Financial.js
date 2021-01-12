import React, { Component } from 'react';
import "./financial.css";

class Financial extends Component {
    render() {
        return (
            <div>
               <h2 className="financialMainHeader">Prime Financial</h2> 
               
               <div className="container" style={{border: "1px solid black", padding: "0"}}>
                
                <h4 className="financialDiv">Let your money work for you!</h4>
                
                <div className="table-responsive">
                    <h3 className="financialHeader">1- The Prime Climb <br/>
                        (Creating a Debt Reduction Plan)</h3>

                    <h5  className="financialHeader2" style={{backgroundColor: "white"}}>Key to getting out of debt: (First Things First)<br/><br/>
                            1) Increase Income and/or Reduce Expenses (Earn more than you spend)<br/><br/>
                            2) Use Remaining Money to Pay off Debt (Start with Highest Interest Rate)<br/>
                    </h5>

                    <table className="table table-bordered table-striped">
                        <tbody style={{textAlign: "center"}}>

                        <tr>
                        <h5 className="financialFontWeight">Step 1: Estimate Monthly Income </h5><br/>     
                                Know how much income you are making</tr><br/>
                        
                        <tr>
                        <h5 className="financialFontWeight">Step 2: Ways to Increase Income </h5> <br/>   
                                Increase in hours<br/><br/>
                                Part-time Job  <br/> <br/>                                         
                                Liquidate “Sell” Valuable Items  </tr>
                        <tr>
                        <h5 className="financialFontWeight">Step 3: Reduce Expenses </h5><br/>
                                Reduce Unneeded Spending<br/><br/>
                                Cut expenses that are NOT necessary  </tr>
                        <tr>
                        <h5 className="financialFontWeight">Step 4: Review Cash Flow (View Daily, Weekly, and Monthly) </h5><br/>
                                Positive Cash Flow (If Income exceeds your Expenses)<br/><br/>
                                Negative Cash Flow (If your Expenses exceed you Income)</tr>        
                        </tbody>

                    </table>
                        

                </div>   

                 <div>
                    <h4 className="financialHeader">Bankruptcy</h4>
                    <h5 className="financialHeader2">A legal proceeding that adjusts the debts of individuals who cannot meet their credit obligations</h5>

                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <tbody>
                                <tr  className="financialLineHeight financialCenterList2">
                                <li>Considered a “Last Resort” financial decision</li>
                                <li>Effects are long in duration and extensive</li>
                                <li>Stays on Credit Report for 10 years</li>
                                <li>Makes it difficult to obtain credit, purchase a home, get a job</li>
                                <li>Individual is issued a court order “Discharge” (Don’t have to repay certain debt)</li>
                                <li>Fresh Start for people having financial difficulty and CANNOT pay their debts</li>
                        </tr>
                            </tbody>

                        </table>
                    </div>
                        
                        <h5 className="financialHeader">Types of Bankruptcy</h5>
                            <h6 className="financialHeader2">Chapter 7: Liquidation Bankruptcy</h6>
                                <ul className="financialLineHeight financialCenterList2">
                                    <li>May require the sale of any personal property</li>
                                    <li>Rules vary from state to state</li>
                                    <li>Income must not exceed a specific state amount</li>
                                </ul>
                            <h6 className="financialHeader2">Chapter 13: Wage Earner Bankruptcy</h6>
                                <ul className="financialLineHeight financialCenterList2">
                                    <li>Requires the debtor (person that owes debt) to have a source of income</li>
                                    <li>May be required to make additional debt payments over a 3-5 year period</li>
                                    <li>Usually does not affect the ownership of personal property</li>
                                </ul>
                            <h6 className="financialHeader2">Bankruptcy Eligibility (Do you qualify?)</h6>
                            <ul className="financialLineHeight financialCenterList2">
                                <li>Must get Credit Counseling from a government-approved organization</li>
                                    <ul>
                                        <li>within 180 days before you file for bankruptcy</li>
                                    </ul>
                                <li>Must complete a Debtor Education Course to have your debts discharged</li>
                            </ul>
                            <hr/>
                                <ul className="financialNotes">
                                    <h4 className="financialCenterList" style={{fontWeight: "bold"}}>***Notes***</h4>
                                    - Student Loans (Non-Dischargeable Debt) is normally not erased due to bankruptcy<br/><br/>
                                        
                                    - Only exception is an Undue Hardship (Medical Disability or Unemployment)<br/><br/>
                                     
                                    - Both types can get rid of unsecured debts and stop foreclosures, repossessions, garnishments and debt collection activity<br/><br/>
                                    - Both may allow you to keep certain assets (Varies by state)<br/><br/>
                                    - Both may result in the loss of valuable personal possessions
                                </ul>

                </div>
                <div className="table-responsive">
                        <h3 className="financialHeader">2- Prime Finance: Financial Management</h3>
                        <h5 className="financialHeader2">The financially healthy share these traits:</h5>
                    
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <th style={{width: "25%", textAlign: "center"}}>Traits</th>
                            <th  style={{textAlign: "center", verticalAlign: "middle"}}>Description</th>

                            <tr>
                                <td className="financialHeader"  style={{textAlign: "center", verticalAlign: "middle"}}><p  className="financialFontWeight">Organized</p></td>
                                <td><ul className="financialLineHeight">
                                <li>Using internet budget tools to keep their finances organized</li>
                                <li>Track income monthly bills, and daily expenses</li>
                            </ul></td>
                            </tr>

                            <tr>
                                <td className="financialHeader" style={{textAlign: "center", verticalAlign: "middle"}}><p className="financialFontWeight">Disciplined</p></td>
                                <td> <ul className="financialLineHeight">
                                <li>Avoid wasteful spending</li>
                                <li>Understand the difference between needs and wants</li>
                                <li>Prioritize</li>
                            </ul></td>
                            </tr>

                            <tr>
                                <td className="financialHeader"  style={{textAlign: "center", verticalAlign: "middle"}}><p className="financialFontWeight">Informed and Knowing the Details</p></td>
                                <td> <ul className="financialLineHeight">
                                <li>Understand monthly and annual fees associated with bank or credit card accounts</li>
                                <li>Understand monthly and annual fees associated with loan accounts</li>
                                <li>Checking Credit Report (Once per Year) Track possible errors and/or Identity Theft</li>
                            </ul></td>
                            </tr>

                            <tr>
                                <td className="financialHeader"  style={{textAlign: "center", verticalAlign: "middle"}}><p className="financialFontWeight">Create Plan To Minimize Debt</p></td>
                                <td> <ul>
                                <li>Focus on Future Lifestyle</li>
                                <li>Career Interest and Income</li>
                                <li>Intended and Realistic Lifestyle</li>
                            </ul></td>
                            </tr>
                        </tbody>
                    </table>                              
                        <hr/>
                            <div className="financialNotes">
                                
                                    <h4 className="financialCenterList" style={{fontWeight: "bold"}}>***Notes***</h4>
                                    *Average Student Loan Debt: Over $25,000*<br/><br/>
                                    *Average Credit Card Debt: Over $4,000 (1 in 3 with over $10,000)*
                                
                            </div>
                </div>  

                <div className="table-responsive">
                    <h3 className="financialHeader">3- Budgeting</h3>
                    <p className="financialHeader2">To make the necessary daily adjustments with your net income in order to: 
                    <br/>
                    Increase the amount of income per day without spending that same amount per day
                    </p>

                    <table className="table table-striped table-bordered">
                        <tbody>
                            <th style={{width: "30%", textAlign: "center"}}>Type of Plan</th>
                            <th style={{textAlign: "center", verticalAlign: "middle"}}>Advice</th>

                                <tr>
                                    <td className="financialHeader"  style={{textAlign: "center", verticalAlign: "middle"}}><p className="financialFontWeight">Personal Plan<br/> (Personal Life Goal)</p></td>
                                    <td><ul className="financialLineHeight financialCenterList2">
                                        <li>Focus: Monthly Income vs Expenses (Sum of Monthly Income)</li>
                                        <li>Income: Job/Career</li>
                                        <li>Expenses: Never minimize your expenses</li>
                                        <li>Debt: Personal Loans, Overspending, Credit Cards, Bad Habits</li>
                                        <li>Goal: Daily Income to exceed Daily Expenses</li>
                                        </ul></td>
                                </tr>

                                <tr>
                                    <td className="financialHeader"  style={{textAlign: "center", verticalAlign: "middle"}}><p className="financialFontWeight">Career Plan (College and/or Trade School Goal)</p></td>
                                    <td><ul className="financialLineHeight financialCenterList2">
                                        <li> Focus: Monthly Income vs Expenses <br/>(Stipends or Seasonal pay divided by months needed)</li>
                                        <li>Income: Scholarships, Grants, Work-Study, Job</li>
                                        <li>Expenses: Never minimize your expenses</li>
                                        <li>Debt: Federal Loans, Tuition, Room and Board, Credit Cards, Bad Habits</li>
                                        <li>Goal: Daily Income to exceed Daily Expenses</li>
                                        </ul></td>
                                </tr>

                                <tr>
                                    <td className="financialHeader"  style={{textAlign: "center", verticalAlign: "middle"}}><p className="financialFontWeight">Business Plan (Entrepreneurial Goals)</p></td>
                                                <td><ul className="financialLineHeight financialCenterList2">
                                        <li> Focus: Monthly Income vs Expenses</li>
                                        <li>Income: Sales</li>
                                        <li>Expenses: Never minimize your expenses</li>
                                        <li>Debt: Business Loans, Business Credit Card</li>
                                        <li>Goal: Daily Income to exceed Daily Expenses</li>
                                        </ul></td>
                                </tr>

                        </tbody>
                    </table>

                    
                    
                        
                    
                        
                        
                        
                <div className="table-responsive">
                    <h5 className="financialHeader">Budget Recommendations</h5>
                    <p className="financialHeader2">Just because I know you wouldn’t throw a $5 dollar bill on the floor and walk away!<br/>
                    (AVOID ALL UNECESSARY SPENDING,CHARGES, AND FEES)</p>
                    <table className="table table-striped table-bordered">
                        <tbody  className="financialLineHeight">
                        <th style={{textAlign: "center"}}>CATEGORY</th>
                        <th style={{textAlign: "center"}}>RECOMMENDATIONS</th>
                        <tr>
                        <td className="financialFontWeight2 financialHeader" style={{verticalAlign: "middle"}}>Groceries</td>
                        <td>
                        - Shop at the large grocery stores (Cheaper prices)<br/>
                        - Shopping while you’re hungry leads to impulsive purchases<br/>
                        - Create a Weekly Shopping List (Stick to it)<br/>
                        - Use Coupons and Rebates (Free Money)<br/>
                        - Bring Cash in the amount of the total shopping cart (Can’t overspend)<br/>
                        - Dine-Out Less (Eat at home and pack lunches)<br/>
                        </td>
                        </tr>
                        <tr>
                        <td className="financialFontWeight2 financialHeader" style={{verticalAlign: "middle"}}>Clothing</td>
                        <td>
                        - Plan Your Purchases (Don’t Shop on Impusle)<br/>
                        - 3 Best Times to Shop (After Christmas, After Easter, After July 4th)<br/>
                        - Buy clothing that match most of your wardrobe<br/>
                        </td>
                        </tr>
                        <tr>
                        <td className="financialFontWeight2 financialHeader" style={{verticalAlign: "middle"}}>Auto Expenses</td>
                        <td>
                        - Use public transportation, if you can<br/>
                        - Review Cost of Insurance and related fees<br/>
                        - Combine trips when running errands<br/>
                        - Find reliable auto mechanic (Reduce cost of repair)<br/>
                        </td>
                        </tr>
                        <tr>
                        <td className="financialFontWeight2 financialHeader" style={{verticalAlign: "middle"}}>Household Expenses</td>
                        <td> 
                        - TV, Cable, and Internet (Is Cable needed? Big TV?)<br/>
                        - Utilities (Gas and Electric used when needed in the house)<br/>
                        - Repairs and Maintenance (Identify and fix problems before they become costly)<br/>
                        </td>
                        </tr>
                        <tr>
                        <td className="financialFontWeight2 financialHeader" style={{verticalAlign: "middle"}}>Entertainment</td>
                        <td>
                        - Financial Services:  Paying all credit card balances in full each month<br/>
                        - Reducing Debt and Interest Charges<br/>
                        - Avoid Bank Surcharges and Refinance at Lower Rates (if applicable)<br/>
                        </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                    <h5 className="financialHeader" style={{verticalAlign: "middle"}}>Banking Recommendations</h5>
                    <p className="financialHeader2">Choosing the wrong bank can cost hundreds of dollars per year based on fees, surcharges, and service charges…
                    <br/>
                    Your Bank of choice should be:
                    </p>
                        <ul className="financialLineHeight financialCenterList2">
                            <li>Bank or Credit Union (Credit Unions haves lower rates on similar financial services)</li>
                            <li>Convenient (Bank and/or ATM is close to home, work, or school)</li>
                            <li>Fee (Small Amount to Zero)</li>
                            <li>Online Account Management (24 hour option to manage online banking accounts)</li>
                            <li>Checking (Incomes comes in to pay for expenses; Always check for service charges)</li>
                            <li>Savings (Needed to fund personal objectives and emergencies)</li>
                        </ul>
                    
                    <h5 className="financialHeader">Financial Account Recomendations</h5>
                        <ul className="financialLineHeight financialCenterList2">
                            <li>Actively Managing (Tracking deposits, transfers, and withdrawals) Scanning for mistakes and/or identity theft</li>
                            <li>Online Banking</li>
                            <li>24 hour Account Access (Always pay attention to pending transactions)</li>
                            <li>Electronic Bill Payment (Saves you time, money, and reduces chances of missing a payment)</li>
                            <li>Custom Alerts (Notifications sent to you when your account reaches a certain status)</li>
                            <li>Being Organized (Avoid missed payments, regulates credit score, etc.)</li>
                            <li>Protecting Your Account (Make sure passwords are secure and confidential, and use trusted computers)</li>
                        </ul>
                </div>  

                <div className="table-responsive">
                    <h4 className="financialHeader">4- Prime Credit</h4>
                    <p className="financialHeader2">Credit information is used to determine your financial health</p>
                    <p className="financialDiv">Credit Report (a detailed financial report card)<br/>
                    contains 7 years of personal and financial info</p>
                    <h5 className="financialHeader2" style={{backgroundColor: "white"}}>3 Major Credit Reporting Bureaus<br/>
                     - Experian<br/>
                     - Equifax<br/>
                     - TransUnion
                     </h5>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td className="financialHeader" style={{width:"25%", textAlign:"center", verticalAlign: "middle"}}><p className="financialFontWeight">Includes your: </p></td>
                            <td> <ul className="financialLineHeight financialCenterList2">
                            <li>Social Security Number</li>
                            <li>Date of Birth</li>
                            <li>Current and Previous Addresses</li>
                            <li>Current and Previous Employers</li>
                            <li>Credit Inquiries (a credit check when applying for a loan)</li>
                            <li>Bankruptcy, Foreclosure, Tax Issue, Criminal arrests and/or Convictions</li>
                            <li>Amount of borrowed (Via loans and credit cards)</li>
                            <li>Account turned over to Collection Agency</li>
                            <li>Repayment History</li>
                        </ul></td>
                        </tr>
                    </tbody>
                </table>     
                     
                       
                        <div className="table-responsive">
                        <h5 className="financialHeader">Credit Scores</h5>
                        <table className="table table-striped table-bordered">
                            
                            
                            <tbody>
                            <th style={{textAlign: "center"}}>Range</th>
                            <th style={{textAlign: "center"}}>Credit Ranking</th>
                            <tr>
                                <td className="financialFontWeight2">800 and Above</td>
                                <td  style={{textAlign: "center"}}>Excellent</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight2">750 - 800</td>
                                <td style={{textAlign: "center"}}>Very Good</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight2">700 - 750</td>
                                <td style={{textAlign: "center"}}>Good</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight2">650 - 700</td>
                                <td style={{textAlign: "center"}}>Fair</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight2">600 - 650</td>
                                <td style={{textAlign: "center"}}>Bad</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight2">600 and below</td>
                                <td style={{textAlign: "center"}}>Very Bad</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                        <div className="table-responsive">
                        <h5 className="financialHeader">Credit Score Calculation</h5>
                         <h6 className="financialHeader2">***How your credit score is calculated***</h6>
                        <table className="table table-striped table-bordered">
                            
                            
                            <tbody className="financialLineHeight">
                            <th  style={{textAlign: "center", verticalAlign: "middle"}}>Category</th>
                            <th  style={{textAlign: "center", verticalAlign: "middle"}}>Percentage</th>
                            <th  style={{textAlign: "center", verticalAlign: "middle"}}>Description</th>
                            <tr>
                                <td className="financialFontWeight2"  style={{textAlign: "center", verticalAlign: "middle"}}>Payment History</td>
                                <td  style={{textAlign: "center", verticalAlign: "middle"}}>35%</td>
                                <td>- Paying your bills on time, even if it is the minimum amount due</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight2"  style={{textAlign: "center", verticalAlign: "middle"}}>Amount Owed</td>
                                <td  style={{textAlign: "center", verticalAlign: "middle"}}>30%</td>
                                <td>- How much of your total available credit have you used<br/>
                                - Owing a small amount is better than owing nothing
                                </td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight2"  style={{textAlign: "center", verticalAlign: "middle"}}>Length of Credit History</td>
                                <td  style={{textAlign: "center", verticalAlign: "middle"}}>15%</td>
                                <td>- Long term credit is better than short term credit<br/>
                                - Both long term and short term are better than no credit at all
                                </td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight2"   style={{textAlign: "center", verticalAlign: "middle"}}>New Credit</td>
                                <td  style={{textAlign: "center", verticalAlign: "middle"}}>10%</td>
                                <td>- Opening too many recent lines of credit can lower your credit score<br/>
                                - Lenders believe that you are planning to take on new debt
                                </td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight2"   style={{textAlign: "center", verticalAlign: "middle"}}>Type of Credit Currently in Use</td>
                                <td  style={{textAlign: "center", verticalAlign: "middle"}}>10%</td>
                                <td>- Variation helps, but not by opening different types of credit all at once<br/>
                                - Having various types of credit:
                                 <ul>
                                     <li>Credit Cards</li>
                                     <li>Mortgages</li>
                                     <li>Store Accounts</li>
                                     <li>etc...</li>
                                 </ul>
                                 </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>

                        <div className="table-responsive"   style={{textAlign: "center", verticalAlign: "middle"}}>
                        <h5 className="financialHeader">Credit Report Consequences</h5>
                    <h6 className="financialHeader2">***How credit affects your purchase decisions***</h6>
                        <table className="table table-striped table-bordered">
                        
                            
                    <tbody className="financialLineHeight">
                            <th>Areas of Life</th>
                            <th>Good Credit</th>
                            <th>Bad Credit</th>
                            <tr>
                                <td className="financialFontWeight2">Personal and Private Loans</td>
                                <td>Lower interest rates offered</td>
                                <td>Highest interest rates and/or a Decline on Loan</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight2">Getting a Job</td>
                                <td>Increases chance of employment</td>
                                <td>Higher Unemployment Rate</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight2">House</td>
                                <td>Lower interest rates Offered</td>
                                <td>Highest interest rates and/or a Decline on Mortgage Loan</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight2" style={{verticalAlign: "middle"}}>Renting</td>
                                <td>Increases chance of renting apartment</td>
                                <td>Decreases chance of renting apartment</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight2"> Car</td>
                                <td>Lower interest rates offered</td>
                                <td>Highest interest rates and/or a Decline on Car Loan</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight2">Credit Cards</td>
                                <td>Lower interest rates offered</td>
                                <td>Highest interest rates and/or a Decline on Line of Credit</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight2">Personal Relationships</td>
                                <td>Increased chance of progressive relationship</td>
                                <td>High rate of divorce, separation and/or long-term unhappy relationship</td>
                            </tr>
                            </tbody>
                        </table>
                </div>
                        <h5 className="financialNotes" style={{textAlign: "center"}}>***Notes***<br/>
                            Contact your creditors if you have an emergency and cannot pay your bills on time</h5>
                    
                </div>   

                <div className="table-responsive">
                    <h4 className="financialHeader">5- Prime Taxes</h4>
                    <h6 className="financialHeader2">Important Vocabulary</h6>
                    <table className="table table-striped table-bordered">
                   
                    <tbody  className="financialLineHeight">
                        <tr><span  className="financialFontWeight">AGI</span><br/>
                        Adjusted gross income, or AGI, is all the income you receive over the course of the year</tr>
                        <tr><span  className="financialFontWeight">EXEMPTION</span><br/>
                         This is an amount the IRS lets you subtract from your income to reflect all the people who count on your income</tr>
                        <tr><span  className="financialFontWeight">ITEMIZED DEDUCTIONS</span><br/>
                        Expenses that can be deducted from your AGI to help you reach a smaller income amount.  (See chart below)</tr>
                        <tr><span  className="financialFontWeight">PROGRESSIVE TAXATION</span><br/>
                        Higher tax rates are applied as income levels increase<br/>
                        (Tax brackets starting at 10 percent and rising to 39.6 percent)
                        </tr>
                        <tr><span  className="financialFontWeight">STANDARD DEDUCTION</span><br/>
                        A fixed dollar amount that taxpayers can subtract from their income<br/>
                        (Depends on your Filing Status)
                        </tr>
                        <tr><span  className="financialFontWeight">TAX CREDITS</span><br/>
                        Credits used to reduce the amount of taxes owed to the government</tr>
                        <tr><span  className="financialFontWeight">TAX DEDUCTIONS</span><br/>
                        Expenses, allowed by the IRS, used to subtract from your AGI to determine your taxable income</tr>
                        <tr><span  className="financialFontWeight">TAXABLE INCOME</span><br/>
                        Taxable income is your overall, or gross, income reduced by all allowable adjustments, deductions and exemptions.<br/>
                        It is the final amount of income you use to calculate how much you owe in taxes.
                        </tr>
                        <tr><span  className="financialFontWeight">WITHHOLDING</span><br/>
                        Pay-as-you-earn taxation<br/>
                        (Taxes taken out of your Paycheck)
                        </tr>
                        </tbody>
                    </table>


                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                        <tbody  className="financialLineHeight">
                                <h5 className="financialHeader">Withholding Taxes from Paycheck </h5>
                                <p><span  className="financialFontWeight financialCenterList2">Employer is required by law to withhold taxes from each paycheck</span>
                            - Paycheck Deductions (Amount taken out of paycheck) include:</p>
                                <tr><span  className="financialFontWeight">Social Security and Medicare (used for elderly support programs)</span><br/>
                            - Social Security (About 6.2% of earnings)<br/>
                            - Medicare (About 1.45% of earnings)</tr>
                                <tr><span  className="financialFontWeight">Federal Income Tax (taxes paid to the federal government)</span><br/>
                            - 10% to 35% deducted from income</tr>
                                <tr><span  className="financialFontWeight">State Income Tax (taxes paid to your state government)</span><br/>
                            - 3% to 7% deducted from income<br/>
                            - Some states don’t have a state income tax</tr>
                                <tr><span  className="financialFontWeight">City Tax</span><br/>
                            - 1% to 3% deducted from income<br/>
                            - Some cities don’t have a city income tax</tr>
                                <tr><span  className="financialFontWeight">*W4’s (Personal Allowances)</span><br/>
                            - Used to calculate the amount of tax taken from your paycheck</tr>
                                <tr><span  className="financialFontWeight"> *W2’s (Wage and Tax Statement) are provided by your employer</span><br/>
                            - Lists all the deductions taken from your paycheck</tr>
                                <tr><span  className="financialFontWeight">*Independent Workers (Working for yourself; setting your own hours)</span><br/>
                            - Entire Gross pay with no tax deductions<br/>
                            - Responsible for paying all of your own taxes<br/>
                            - Around 15% tax for Social Security and Medicare</tr>
                        </tbody>
                        
                    </table>
                </div>

                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                        <h4 className="financialHeader">Filing Income Tax</h4>
                        <tbody className="financialLineHeight">
                            <tr style={{textAlign: "center"}}><h5 className="financialFontWeight financialDiv">1. Gather your information:</h5> (Tax Documents are usually mailed by the end of January)<br/>
                            - W2 (If you have a Job)<br/>
                            - SSA-1099 (If you receive Social Security Benefits)<br/>
                            - Various 1099’s (To report any Other Income)<br/>
                            (A complete list is available on the IRS website)</tr>
                            <tr style={{textAlign: "center"}}><h5 className="financialFontWeight financialDiv">2. Make a list of personal information:</h5>
                            - Social Security Number (For yourself and your dependents)<br/>
                            - Rental Property<br/>
                            - Bought and/or Sold Property (Dates, Cost, Expenses)</tr>
                            <tr style={{textAlign: "center"}}> <h5 className="financialFontWeight financialDiv">3. Professional Tax Preparation vs Personal Tax Preparation:</h5>
                            -Professional Tax Preparation:<br/>
                                    V.S.<br/>
                            - Personal Tax Preparation:<br/>
                            - Depends on personal comfort</tr>
                            <tr style={{textAlign: "center"}}> <h5 className="financialFontWeight financialDiv">4. Standard Deduction vs Itemized Deductions:</h5>
                    <h5 className="financialFontWeight">Standard Deduction: (Changes annually)</h5>
                    (The amount is based on your filing status and tax bracket)<br/>
                    <h5 className="financialFontWeight"> Filing Status</h5>
                    - $6,300 for single filers<br/>   - $6,300 for married, filing separately<br/>   -$12,600 for married filing jointly <br/>
                    - $9,300 for head of household<br/>   -$1,050 for dependents (no change)</tr>
                    
                        <div>
                            <h5  className="financialFontWeight mt-5 financialDiv">5. Decide what to do about a refund:</h5>
                            <tbody className="financialLineHeight">
                            <tr>(Tax Refund) A tax refund or tax rebate is a refund on taxes when the tax liability is less than the taxes paid.</tr>
                            <tr>Taxpayers can often get a tax refund on their income tax if the tax they owe is less than the sum of the total amount of the withholding taxes and estimated taxes that they paid, plus the refundable tax credits that they claim.</tr>
                            <tr>(Tax refunds are money given back at the end of the financial year.)</tr>
                            <tr  className="financialFontWeight" style={{textAlign: "center"}}>Tax Refund Options:</tr>
                            <tr>- Apply some or all of the refund toward your tax bill on the next return. The fund will be used for estimated taxes, reducing or eliminating the first installment of estimated taxes (due April 18, 2016).<br/>
                        -Send you a check or deposit the refund directly into your checking or savings account.<br/>
                        -Directly contribute some or all of your refund to certain types of accounts (IRAs, health savings accounts, education savings accounts) or to buy U.S. Savings bonds</tr>
                            </tbody>
                    </div>

                    <div>
                        <h6 className="financialHeader2"><span>Tax Brackets (Based on Income)</span><br/></h6>
                        <tr  className="float-left" style={{paddingLeft: "30px",width: "50%"}}>
                   
                        <h5 className="financialFontWeight">2016 Tax Brackets for Singles:</h5>
                            10% – $0-$9,275 <br/>
                            15% – $9,275-$37,650 <br/>
                            25% – $37,650-$91,150  <br/>
                            28% – $91,150-$190,150 <br/>
                            33% – $190,150-$413,350 <br/>
                            35% – $413,350-$415,050 <br/>
                            39.6% – $415,050+
                            </tr>  

                             <tr  className="float-left" style={{paddingLeft: "30px",width: "50%"}}>
                            <h5 className="financialFontWeight">2016 Tax Brackets for Married Filing Jointly:</h5>
                                10% – $0-$18,550 <br/>
                                15% – $18,550-$75,300 <br/>
                                25% – $75,300-$151,900 <br/>
                                28% – $151,900-$231,450 <br/>
                                33% – $231,450-$413,350 <br/>
                                35% – $413,350-$466,950 <br/>
                                39.6% – $466,950+
                            </tr>  

                             <tr  className="float-left" style={{paddingLeft: "30px",width: "50%"}}>
                   <h5  className="financialFontWeight">2016 Tax Brackets for Married Filing Separately:</h5>
                    10% – $0-$9,275 <br/>
                    15% – $9,275-$37,650 <br/>
                    25% – $37,650-$75,950 <br/>
                    28% – $75,950-$115,725 <br/>
                    33% – $115,725-$206,675 <br/>
                    35% – $206,675-$233,475 <br/>
                    39.6% – $233,475+
                   </tr>
                    
                    <tr  className="float-left" style={{paddingLeft: "30px",width: "50%"}}>
                    <h5  className="financialFontWeight">2016 Tax Brackets for Head Of Household:</h5>
                    10% – $0-$13,250 <br/>
                    15% – $13,250-$50,400 <br/>
                    25% – $50,400-$130,150<br/>
                    28% – $130,150-$210,800 <br/>
                    33% – $210,800-$413,350 <br/>
                    35% – $413,350-$441,000 <br/>
                    39.6% – $441,000+
                    </tr> 
                    </div>
             </tbody>
             
                    <div style={{clear: "both"}}>       
                        <h6 className="financialHeader2"> Itemized Deductions</h6>
                        <tbody  className="financialLineHeight">
                            <th style={{textAlign: "center"}}>Category</th>
                            <th style={{textAlign: "center"}}> Example</th>
                            <tr>
                            <td  className="financialFontWeight2 financialHeader" style={{textAlign: "center", verticalAlign: "middle"}}>Unreimbursed Medical and Dental Expenses</td>
                            <td>Taxpayers that incur qualified out-of-pocket medical and/or dental expenses that are not covered by insurance can deduct expenses that exceed 7.5% of their adjusted gross incomes</td>
                            </tr>
                            <tr>
                            <td  className="financialFontWeight2 financialHeader" style={{textAlign: "center", verticalAlign: "middle"}}>Interest Expenses</td>
                            <td>- Homeowners can deduct the interest that they pay on their mortgages and home equity lines of credit.<br/><br/>
                            - Each year, mortgage lenders mail Form 1098 to borrowers, which details the exact amount of deductible interest and points that they've paid over the past year. Taxpayers that bought or refinanced homes during the year can also deduct the points that they've paid, within certain guidelines.
                            <br/>
                            </td>
                            </tr>
                            <tr>
                            <td  className="financialFontWeight2 financialHeader" style={{textAlign: "center", verticalAlign: "middle"}}>Taxes Paid</td>
                            <td>- Taxpayers who itemize are able to deduct two types of taxes paid on their Schedule A.<br/><br/> - Personal property taxes, which include real estate taxes, are deductible along with state and local taxes that were assessed for the previous year. However, any refund that was received by the taxpayer from the state in the previous year must be counted as income if the taxpayer itemized deductions in the previous year.</td>
                            </tr>
                            <tr>
                            <td  className="financialFontWeight2 financialHeader" style={{textAlign: "center", verticalAlign: "middle"}}>Charitable Donations</td>
                            <td>- Any donation made to a qualified charity is deductible within certain limitations.<br/><br/> - Cash contributions that exceed 50% of the taxpayer's adjusted gross income must be carried over to the next year, as well as noncash contributions that exceed 30% of AGI. (Keep reading about donations in Deducting Your Donations and It Is Better To Give AND Receive.)</td>
                            </tr>
                            <tr>
                            <td  className="financialFontWeight2 financialHeader" style={{textAlign: "center", verticalAlign: "middle"}}>Casualty and Theft Losses</td>
                            <td>Any loss incurred as a result of a casualty or theft can be reported on the Schedule A. Unfortunately, only losses in excess of 10% of the taxpayer's adjusted gross income are actually deductible. If a taxpayer incurs a casualty loss in one year and deducts it on his or her taxes, then any reimbursement that is received in later years must be counted as income. Casualty losses are carried on to the Schedule A from IRS Form 4864.</td>
                            </tr>
                            <tr>
                            <td  className="financialFontWeight2 financialHeader" style={{textAlign: "center", verticalAlign: "middle"}}>Unreimbursed Job-Related Expenses and Certain Miscellaneous Deductions</td>
                            <td>	- W-2 employees that incur work-related expenses can deduct any aggregated expenditures that exceed 2% of their adjusted gross incomes.<br/><br/> - These include items such as equipment and supplies, protective clothing, expenses for maintaining a home office for the convenience of the employer, vehicle expenses, dues to professional organizations and professional subscriptions.</td>
                            </tr>
                            <tr>
                            <td  className="financialFontWeight2 financialHeader" style={{textAlign: "center", verticalAlign: "middle"}}>Other Miscellaneous Deductions</td>
                            <td>- This final category of itemized deductions includes items such as gambling losses to the extent of gambling winnings, losses from partnerships or subchapter S-corporations, estate taxes on income in respect of a decedent and certain other expenses.<br/><br/>- For additional details, see IRS Publication 17 and the instructions for Schedule A.</td>
                            </tr>
                            <tr>
                            <td  className="financialFontWeight2 financialHeader" style={{textAlign: "center", verticalAlign: "middle"}}>Income Limitations for Itemized Deductions</td>
                            <td>In previous years, taxpayers with incomes over a certain limit were subject to an overall reduction in the amount of some of the itemized deductions that they could claim. But these restrictions were eliminated completely in 2010.</td>
                            </tr>
                        </tbody>
                    </div>
                
                    </table>
                </div> 
            </div>
                <div>
                    <h4 className="financialHeader">Buying a Car</h4>
                    <p className="financialHeader2">Important Decision Factors:</p>
                        <ul className="financialLineHeight financialCenterList2">
                            <li>Know the car’s Make (Example: Honda) and Model (Example: Accord)</li>
                            <li>Total Cost to Own Your Car (Minimize the total cost) depends on interest rate and term of loan</li>
                            <li>Fuel Cost (Very costly expense) depends on how many miles you drive and the type of car </li>
                            <li>Extra Cargo and/or Passenger Space (SUV’s, Vans, Trucks) depends on size of family</li>
                            <li>Insurance Cost (Get a quote before buying a car) depends on driving history and type of car </li>
                            <li>Reliability (Is the car dependable?) depends on type of car and manufacturer’s reputation</li>
                            <li>Maintenance (Can be expensive) How often would the car require maintenance</li>
                            <li>Repair (Can be expensive, especially in used cars) depends on how well the car is maintained</li>
                            <li>Depreciation (The amount of value the car loses each year) depends on the make and model</li>
                        </ul>

                </div>

                <div>
                    
                    <p className="financialHeader2">Leasing Decision Factors:</p>
                        <ul className="financialLineHeight financialCenterList2">
                            <li>Lease (Different way of financing a car) based on the amount of expected depreciation of a car</li>
                            <li>Monthly Payments may be considerably less (in comparison to owning the car)</li>
                            <li>Use a car for a period of time and give the car back at the end of the term</li>
                            <li>Similar to renting a car for years (is more expensive in total than owning a car)</li>
                            <li>Allows you to drive a nice car (in most cases you could not afford)</li>
                            <li>Mileage Restriction (In some cases, up to 12,000 miles per year)</li>
                            <li>Vehicle Condition Restriction (Must maintenance car to avoid extra fees)</li>
                            <li>Pay attention to the terms of the contract (make sure you are getting a good deal)</li>
                        </ul>

                </div>
                <div>
                    <p className="financialHeader2">Used Car Decision Factors:</p>
                        <ul className="financialLineHeight financialCenterList2">
                            <li>Used Cars (Less expensive than new cars due to depreciation and can be riskier than a new car)	</li>
                            <li>Every car is different (Some cars need more maintenance than others) Need Reliability</li>
                            <li> How to make a used car decision… (Increases car reliability and reduces repair cost)</li>
                                <ol>
                                <li>Check the Vehicle Identification Number (VIN) in depth details about the car</li>
                            <li>Determine the car’s value (Is the car worth what it cost)</li>
                            <li>Personal Inspection (Walk around and in get in the car to check for reliability)</li>
                            <li>Test Drive (Check if car runs smoothly or if you like how it drives)</li>
                            <li>Negotiate the Price of Car (Based on reliability and value of the car)</li>
                                </ol>
                        </ul>

                </div>
                <div>
                    
                    <p className="financialHeader2">Financing Decision Factors:</p>
                        <ul className="financialLineHeight financialCenterList2">
                            <li>Financing a Car (Getting a Bank or Credit Union loan and agreeing to pay off that loan over period of time)</li>
                            <li>  -The Shorter the Term, the higher your monthly payment will be (less interest paid)</li>
                            <li>Review all Important Decision Factors for buying a car</li>
                            <li>Interest Rate (Lower Interest Rates are less expensive than Higher Interest Rates)</li>
                            <li> Interest Rates are based on your Credit Score (as well as the Lender of the Loan)</li>
                            <li>A Cosigner (Person with good credit that agrees to help) can decrease your interest rate</li>
                            <li>Banks and Credit Unions offer much less Interest Rates than the car dealership</li>
                            <li>It’s SMART to obtain a car loan approval from your bank before car shopping</li>
                            <li>Term of the Loan (The amount of years of the loan)</li>
                            <li>Car Loan Terms normally start at 3 years and can extend to 6 years</li>
                            <li>The Longer the Term, the more expensive the loan becomes (more interest paid)</li>
                        </ul>

                </div>

                <div>
                    
                    <p className="financialHeader2">Car Shopping Tips:</p>
                        <ul className="financialLineHeight financialCenterList2">
                            <li>Negotiate the cost of the car (Can save you thousands of dollars)</li>
                            <li>Take your time to make a car buying decision (Do Not Become IMPULSIVE)</li>
                            <li>Certified cars (1 or 2 years used) can save you money (May depreciate at a slower pace than a new car)</li>
                            <li>Try to always minimize the interest rate and term of the loan (Saves you thousands of dollars)</li>
                            <li>Avoid financing your car using the Car Dealership Financing Options</li>
                            <li>Always test drive the car before making a commitment</li>
                            <li>Buying a car is a financial decision, not an emotional decision (Buy the best car for your situation)</li>
                            <li>Used Cars should always have a personal and mechanical inspection, researched, and test driven</li>
                            <li>Only trade your older car in after you have negotiated a deal with the dealership</li>
                            <li>If you are confused, please talk to someone you trust</li>
                        </ul>

                </div>

                <div>
                    <h5 className="financialHeader">Renting an Apartment</h5>
                    <p className="financialHeader2">Renting Process</p>
                        <ul className="financialLineHeight financialCenterList2">
                            <li>Lease (a legal agreement between the renter and the property’s owner) </li>
                            <li>A Cosigner (Person with good credit that agrees to help; Responsible for payments if you can’t pay your rent) may be needed if you have a bad credit, employment or criminal history</li>
                            <li>Explains term and conditions of the agreement</li>
                            <li>Determines the rights and responsibility of the owner and the renter</li>
                            <li>Always read the Lease in full; and always keep a copy of the Lease</li>
                            <li>Signing the Lease means that you agree to the terms of the Lease</li>
                            <li>The landlord may review your credit, employment, and criminal history (credit, employment, and criminal history can negatively impact your chances of securing the apartment)</li>
                        </ul>
             
                        <p style={{textAlign: "center"}}>Common Rental Payments may include:</p>
                        <ul className="financialLineHeight financialCenterList2">
                            
                            <li>Security Deposit (Refundable; normally 1 or 2 months’ worth of rent) for collateral damage</li>
                            <li>Rental Agency Fee (Non-Refundable) if homeowner contracts a rental agency to find renters</li>
                            <li>Termination Fees (Non-Refundable) must notify the landlord 60 to 90 days before moving</li>
                        </ul>
                        <h6 className="financialHeader">*Always treat an apartment as if it were your own personal house; Respect your home*</h6>				`
                   <p className="financialHeader2"> Average Landlord Responsibilities Include:</p>
                        <ul className="financialLineHeight financialCenterList2">
                            
                            <li> Fulfill all utility obligations as specified in the lease (Gas, Heat, Hot water, etc.)</li>
                            <li>Notify renter, in advance, before entering the apartment</li>
                            <li>Providing a safe housing environment</li>
                            <li> Making all repairs and keeping the property clean</li>
                        </ul>
                        <p className="financialHeader2">Average Renter’s Responsibilities Include:</p>
                        <ul className="financialLineHeight financialCenterList2">
                            
                            <li>Follow the law at all times</li>
                            <li>Keep apartment in good shape (Avoid damaging floors, walls, ceilings, etc.)</li>
                            <li>Keep your apartment clean and neat in appearance (Regularly dispose your trash)</li>
                            <li>Contact your landlord for any repairs</li>
                            
                        </ul>
                </div>

                <div>    
                    <h5 className="financialHeader">Buying a House</h5>
                    <p className="financialHeader2">Home Ownership allows you to:</p>
                        <ul className="financialLineHeight financialCenterList2">
                            <li>Build Equity (Cash Value) Increase in cash value over 10 to 20 years</li>
                            <li>Low Interest Equity Loans can be used to pay for repairs and expenses</li>
                            <li>Live Payment Free (After Mortgage is paid off) That house is all yours</li>
                            <li>Save Money (Mortgage interest is Tax Deductible) Saving you thousands each year in taxes</li>
                        </ul>

                    <h6 className="financialHeader2">Real-Estate (Land and the physical properties like houses, building and/or other structures added to it)</h6>
                        <ul className="financialLineHeight financialCenterList2">
                            <li  className="financialFontWeight">Investment Perspective: An increase or decline in property value is determined by the area you live in</li>
                            <li>Be prepared for extra Expenses (Maintenance and repairs) All responsibility is yours</li>
                            <li> Increase in property value Increases the cash value of the property (Equity)</li>
                            <li>Decrease in property value Decreases the cash value of the property (Equity)</li>
                        </ul>
                    
                    <h6 className="financialHeader2"> Mortgages (A home loan from a financial institution like a bank, credit union, etc.)<br/>
                    Includes:</h6>
                        <ul className="financialLineHeight financialCenterList2">
                            <li><span className="financialFontWeight">Down-Payment</span> (Initial amount of money used to purchase a house)<br/>
                    - Normally range between 5% and 20% of the home’s cost<br/>
                    - Reduces the total amount of the mortgage loan (Avoid paying for Mortgage Insurance)</li>
                            <li><span className="financialFontWeight">Associated Fees</span> (Processing fees associated with Mortgages)<br/>
                            - Normally range between 1% and 3% of the home’s cost<br/>
                            - One-Time required Mortgage payment</li>
                            <li><span className="financialFontWeight">Monthly Payment</span> (The amount you pay each month)<br/>
                            - Includes: Principal (The amount you owe) Interest, Home owner insurance, etc.<br/>
                            - A Financial Commitment</li>
                        </ul>

                    <h5 className="financialHeader">Types of Mortgages</h5>
                        <ul className="financialLineHeight financialCenterList2">
                            <li><span className="financialFontWeight">Fixed Rate</span> (Interest Rate and Monthly Payment remain the same throughout the Term of the Mortgage)<br/>
                            - Terms: Normally 15 years or 30 years<br/>
                            - Longer Terms (30 years) more expensive than Shorter Terms, but    have a lower Monthly Payment<br/>
                            - Shorter Terms (15 years) less expensive than Longer Terms, but have a higher Monthly Payment</li>
                            <li><span className="financialFontWeight">Adjustable Rate</span> (Interest Rate changes over the Term of the Loan; Monthly Payment may change)<br/>
                            - Interest Rates adjust based on the current Federal Interest Rates (Can lead to a high Monthly Payment)<br/>
                            - Lower Interest Rate for a specified period of time (Interest Rates adjust after specified period of time)</li>
                            <li><span className="financialFontWeight">Government Loans</span> (Less expensive loans offered by the government) are Guaranteed Loans from the government<br/>
                            - Veterans Administration Loans “VA” (Low Interest option offered to veterans) normally very good loans<br/>
                            - Federal Housing Administration “FHA” (Low Interest option) House must pass FHA inspection</li>
                          
                        </ul>
                        <h4 className="financialNotes financialLineHeight">***Notes***<br/>
                        There are many different Types of Mortgages
                        </h4>
                        
                </div>
                <br/>

                <div className="table-responsive">
                <h4 className="financialHeader">6- Prime Saving and Investing</h4>
                <p className="financialHeader2">Important Investment Terms:</p>
                    <table className="table table-striped table-bordered">
                        
                        
                        <tbody className="financialLineHeight">
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>401(k)</td>
                                <td>A tax-qualified, defined-contribution pension account</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>403(b)</td>
                                <td>A tax-advantaged retirement savings plan available for public education organizations</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>529 (College Savings Plan)</td>
                                <td> A tax-advantaged investment vehicle designed to save for future college expenses</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>ASK</td>
                                <td>The lowest price a seller is willing to accept when selling a security (stock).</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>BULL MARKET</td>
                                <td>When most stock prices are rising over several months.</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>BEAR MARKET</td>
                                <td>When most stock prices are falling our several months.</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>BID</td>
                                <td>The highest price a buyer is willing to accept when purchasing a security (stock).</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}> BLUE CHIP</td>
                                <td>A company that has a history of solid earnings, regular and increasing dividends, and an impeccable balance sheet.</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>BOND</td>
                                <td> An instrument of indebtedness of the bond issuer to the holders</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>BOOK VALUE</td>
                                <td>The value of a company if all liabilities were subtracted from total assets.</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>BROKER</td>
                                <td>A person that buys or sells an investment for you in exchange for a fee called commission.</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>BROKERAGE ACCOUNT</td>
                                <td>A securities account that holds financial assets.</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}> CAPITAL GAINS</td>
                                <td>A profit from the sale of property or an investment.</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>COMPOUND INTEREST</td>
                                <td>The addition of interest to the principal sum of a loan or deposit. Interest on Interest</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>DIVIDENDS</td>
                                <td>A portion of a company’s profits that is paid out to shareholders on a quarterly or annual basis.</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>DOW JONES INDUSTRIAL AVERAGE (DJIA)</td>
                                <td>It is the most popular and widely used measure of the U.S. Stock Market. It consists of a price-weighted list of 30 highly-traded Blue Chip companies.</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>EARNINGS / PROFIT</td>
                                <td>That portion of income left over after meeting all costs, overhead and taxes during a reporting period. This is called the Bottom Line. When a company is making money, it is said to be “in the black”. When a company is losing money, it is “in the red”.</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>INCOME / REVENUE / SALES</td>
                                <td>What a company earns for the goods they produce, or the services they provide. It is not the same as profit.</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>INDIVIDUAL RETIREMENT ACCOUNT “IRA”</td>
                                <td>An account that allows an individual to save for retirement with tax-free growth or on a tax-deferred basis.</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>INFLATION</td>
                                <td>A general increase in prices and fall in the purchasing value of money.</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>MARKET CAPITALIZATION</td>
                                <td>Also known as “market cap”. It is calculated by multiplying the current price per share with the number of shares outstanding.</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}> MUTUAL FUND</td>
                                <td>An investment company that combines the money from a large group of investors to buy stocks and other investments.</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>P/E RATIO</td>
                                <td>How much money you are paying for $1 of the company’s earnings. In other words, if a company reports a profit of $3 per share, and the stock is selling for $30 per share, the P/E ratio is 10 because you are paying ten-times earnings ($30 per share divided by $3 per share earnings = 10 P/E).</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>SECURITIES</td>
                                <td>Includes stocks, bonds, and bank deposits.</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>SPREAD</td>
                                <td>The difference between Ask and Bid.</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>STOCK/ EQUITIES</td>
                                <td>If you own a stock, you own part of the company. A stock is evidenced by a paper certificate.</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}> TAX RATE</td>
                                <td>The ratio at which a business or person is taxed.</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>VOLUME</td>
                                <td>The number of shares of stock traded in a day.</td>
                            </tr>
                            <tr>
                                <td className="financialFontWeight" style={{textAlign: "center", verticalAlign: "middle"}}>YIELD</td>
                                <td> When a company pays a dividend the yield is the percentage of dividend over the stock price.</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                <div className="table-responsive">
                <h5 className="financialHeader">Reasons for Investing</h5>
                <p className="financialHeader2">*Investing is considered Long Term and Saving is considered Short-Term*</p>
                <table className= "table table-striped table-bordered">
                    
                    
                    <tbody className="financialLineHeight">
                        <tr><span className="financialFontWeight">Build Wealth over time</span><br/>
                            - Purchasing assets that increase in value over time <br/>(stocks, bonds, real-estate, art, etc.)<br/>
                            - Allows you to earn money without having to directly working for it</tr>
                        <tr><span className="financialFontWeight">Avoid the effects of inflation</span><br/>(Interest earned on your investment offsets inflation)<br/>                                                                                                       
                            - Inflation (Increase in the cost of products and services every year) Decreases the value of your money because it cost more to afford less<br/>
                            - $50 dollars today (in value) is worth less than $50 dollars 10 years from now (in value)<br/>
                            - Compound Interest helps avoid inflation<br/>
                            - The earnings from your investments earn you more money (if reinvested)</tr>
                        <tr><span className="financialFontWeight">Risk vs. Reward</span><br/>                                                                                                                                                                         (The more Risk the more of a Reward, the less Risk the less of a Reward)
                            Examples:<br/>
                            - Certificate of Deposits (CD) are low risk (Guaranteed but low Reward)<br/>
                            - Stocks have a great risk (Not guaranteed, Reward could be a lot, average, or a little)<br/>
                            - On average, younger investors (higher Risk Tolerance) Invest in the majority of Stock<br/>
                            - On average, older investors (lower Risk Tolerance) Invest in the majority of CD’s</tr>
                        <tr className="financialNotes">***Notes***<br/>
                            *Investments can be many different things like Real Estate, Antiques, Art, Coin Collection, Gold, etc.*<br/>
                            * Investors usually like Highly “Liquid” Investments (can be easily converted to cash)*<br/>
                            *Asset Allocation (The break-down of your all your investments “Investment Portfolio”)*</tr>
                    </tbody>
                </table>
            </div>

            <div className="table-responsive">
            <h5 className="financialHeader">Types of Investments</h5>
                <table className="table table-striped table-bordered">
                    
                    <tbody className="financialLineHeight">
                    <tr><span className="financialFontWeight">Stocks</span> (Represent a certain percent of ownership in a company)<br/>
                            - If a company is publicly traded, you can buy shares of that company (own a part of it)<br/>
                            - Ex. If you buy 5 shares out of the 100 shares of stock (You own 5% of that company)<br/>
                            - Your money increases in value, if the company is growing<br/>
                            - Your money decreases in value, if the company is shrinking<br/>
                            - Dividends (money given to shareholders “You”) are based on company’s profits</tr>
                    <tr><span className="financialFontWeight">Mutual Funds</span> (A group of stocks)<br/>
                            - To reduce the risk of putting all your money into one company<br/>
                            - Could be made based on type of business (Hair Industry) or based on size of company<br/>
                            - Active Managed Funds (Someone makes the decision of which stocks to buy and sell)<br/>
                            - Passive Index Funds (Follows an established group of stocks) Known to have lower fees</tr>
                    <tr><span className="financialFontWeight">Bonds </span>(Loaning money to an organization)<br/>
                            - Able to be purchased individually or within a fund<br/>
                            - Money is made based on the interest amount the organization pays toward the loan<br/>
                            - Risky companies have bonds with higher interest rates (Higher return on investment)<br/>
                            - Credible companies have bonds with lower interest rates (Lower return on investment)<br/>
                            *Since Bonds are expensive, most investors purchase Bond Funds at a cheaper price (Split the cost)*</tr>
                        <tr><span className="financialFontWeight">Cash Investments</span></tr>
                        <p>Saving Money without Risk: Interest Rates are similar to Inflation Rates
                        </p>
                    <tr><span className="financialFontWeight">Certificate of Deposit “CD”</span> (Return on Investment “ROI” can be guaranteed)<br/>
                        - Term of the CD (how long you have to invest) is determined by the bank<br/>
                        - Penalized for withdrawing money before the Maturity Date (end of CD’s term)</tr>
                    <tr><span className="financialFontWeight">Money Market Account</span> (Savings account with higher interest rates)<br/>
                        - Minimum account balance normally range between $500 to $50,000<br/>
                        - Money is made by the interest you earned from the bank <br/>
                        - The bank uses your money to make their own investments or loans</tr>
                    <tr><span className="financialFontWeight">Savings Account</span> (A bank account that earns interest)<br/>
                        - Usually does not require a minimum account balance<br/>
                        - Interest rates are generally low, but still helps against inflation</tr>
                    </tbody>
                </table>
            </div>
                    
            <div className="table-responsive">
            <h5 className="financialHeader">Investment Accounts</h5>
                <table className="table table-striped table-bordered">
                    
                    <tbody className="financialLineHeight">
                        <tr><span className="financialFontWeight">Cash Investments Accounts</span><br/>(Requires a Bank or Credit Union Account)<br/>
                    - Certificates of Deposit and Savings Accounts</tr>
                        <tr><span className="financialFontWeight">Brokerage Accounts</span><br/>
                    - Stocks, Bonds, and Mutual Funds<br/>
                    - 529’s, Trusts, and Custodial Accounts<br/>
                    - Requires a Stock Broker or an Internet Self-managed Brokerage like TD Ameritrade</tr>
                        <tr> <span className="financialFontWeight">Tax Advantaged Retirement Accounts</span><br/> (Tax is not paid on gains you make each year)<br/>
                    - Examples: Individual Retirement Accounts “IRA”, 401 (K), and 403 (B)<br/>
                    - Restrictions on Deposits (Can only put in a certain amount)<br/>
                    - Restrictions of Withdrawals (Cannot take out money without a penalty)<br/>
                    - Taxes are not paid until retirement “Deferred”<br/>
                    - Maximizes the effects of Compound Interest</tr>
                        <tr><span className="financialFontWeight">Taxable Brokerage Accounts</span> <br/>(Taxes are paid on gains you make each year)<br/>
                    - Examples: Stocks, Bonds, Mutual Funds, Real Estate, Savings Accounts, CD’s<br/>
                    - NO restrictions on Deposits or Withdrawals<br/>
                    - You can Deposit and Withdraw as little or as much as you want at any time<br/>
                    - Good option: If you maxed out on the contribution to Tax Advantaged Accounts</tr>
                        <tr><span className="financialFontWeight"> Individual Development Accounts</span> <br/>(Savings account for low-income individual or family)<br/>
                    - Organizations match your savings (up to a specific amount) to encourage saving<br/>
                    - Helps for Asset Building (To break the cycle of poverty) Creates self-sufficiency<br/>
                    - Used for job training, college education, small business, home down-payment<br/>
                    - Program usually last from 12 to 36 months (To develop compound interest)</tr>
                       
                    </tbody>
                    <h5 className="financialNotes financialLineHeight"> ***Notes***<br/>
                    *Investments owned, a year or longer, are taxed at the “Capital Gains Tax Rate” (Less Taxes)*<br/>
                    *Investment, owned less than a year, are taxed at your ordinary Income Tax Rate (More Taxes)*<br/>
                    *Investing involves the Risk of Loss of money (Cash Investments are the only Risk-Free investments)*</h5>
                </table>
            </div>      
               </div>
            </div>
        )
    }
}

export default Financial;