import React, { Component } from 'react';
import "./primeStudent.css";

class PrimeStudent extends Component {
    render() {
        return (
            <div>
            <h2 className="studentMainHeader">Prime Student Education </h2>
<div className="container" style={{border: "1px solid black", padding: "0"}}>

                <h4 className="studentHeader2">Education is a great investment, especially when you<br/> understand the financial aspect of it... "The Prime Mind"</h4>

                <div className="table-responsive">
<h4 className="studentHeading">External Resources</h4>
<table className="table table-striped table-bordered">
   <tbody>
            <th style={{width: "50%", textAlign: "center"}}>College Planning</th>
            <th style={{width: "50%", textAlign: "center"}}>Career Planning</th>
            
            <tr>
                <td><a href="https://www.collegeboard.org">College Board: SAT/PSAT/AP </a></td>
                <td><a href="https://www.bls.gov/ooh/">Occupational Outlook Handbook: Job/Career Information</a></td>
                
            </tr>
            
            <tr>
                <td><a href="http://www.actstudent.org">The ACT: (Standardized Testing for College)</a></td>
                <td><a href="https://www.careeronestop.org">CareerOneStop: Pathways to Career Success</a></td>
            </tr>

            <tr>
                <td><a href="http://www.ets.org">ETS: Educational Testing Service</a></td>
                <td></td>
                
            </tr>

   </tbody> 
</table>
<table className="table table-striped table-bordered">
   <tbody>
            
            <th style={{width: "50%", textAlign: "center"}}>Financial Aid</th>
            <th style={{width: "50%", textAlign: "center"}}>Scholarship Search</th>

            <tr>
                <td><a href="https://www.studentaid.gov">FAFSA: Federal Financial Aid Website</a></td>
                <td><a href="https://www.scholarships.com/">Scholarships.com: Free College Scholarship Search </a></td>
            </tr>
            
            <tr>
                <td><a href="http://www.navient.com">Navient: Education Loan Management </a></td>
                <td><a href="http://www.fastweb.com">Fastweb: Find Scholarships for College for FREE</a></td>
            </tr>

            <tr>
                <td><a href="http://www.finaid.org">FinAid: Financial Aid Information</a></td>
                <td><a href="http://www.petersons.com">Peterson's: Complete Educational Tool</a></td>
            </tr>

   </tbody> 
</table>
</div>

                <h4 className="studentHeading">Introduction to Financial Aid</h4>
                  
                   <h5 className="studentHeading2"> Start Date: October 1st<br/> 	End Date: June 30th<br/></h5> 
                
            <div className="table-responsive"> 

            <table className="table table-striped table-bordered">
                

                <h5 className="studentHeading">Things to understand and consider:</h5>

                    <tbody>
                        <tr className="studentCenter"><span className="studentBoldCenter">Cost to Attend College</span> <br/>
                            (Cost of tuition, room and board, and other related college needs)<br/>
                            -Private Colleges: Average $50, 000 per year<br/>
                            -Public Colleges: Average $35, 000 per year<br/>
                            -Community College: Average $7,000 per year
                        </tr>
                        <tr className="studentCenter"><span className="studentBoldCenter">How the government calculates need:</span><br/>
                            Based on EFC (Expected Family Contribution)</tr>
                            <tr className="studentCenter"><span className="studentBoldCenter">Applying to Programs</span><br/>
                            Programs based on your personal financial situation)
                        </tr>
                        <tr className="studentCenter"><span className="studentBoldCenter">Financial Need</span><br/>
                        (Based on Cost of Attendance and Expected Family Contribution)
                        </tr>
                    </tbody>
            </table>
            </div>
            <div className="table-responsive">
            <table className="table table-striped table-bordered">
                <h5 className="studentHeading">TYPES OF FINANCIAL AID</h5>
                <tbody>
                <tr className="studentCenter"><span className="studentBoldCenter">SCHOLARSHIPS AND GRANTS</span> <br/>
                    (MOST IDEAL): <br/>
                    Awarded to you, Never to be paid back, and Never paid for</tr>
                    <tr className="studentCenter"><span className="studentBoldCenter">SCHOLARSHIPS</span> <br/>
                    are based on Financial Need, Academic Merit, or Extracurricular Ability</tr>
                    <tr className="studentCenter"><span className="studentBoldCenter"> GRANTS</span> <br/>
                    are based on financial need</tr>
            </tbody>
            </table>
            </div>

        <hr/>

            <div className="table-responsive">
            <table className="table table-striped table-bordered">
                <tbody>
                <tr className="studentCenter"><span className="studentBoldCenter">LOANS:</span><br/>
                    (Borrowed to you, Always to be paid back, and Always paid for over the term of the loan)<br/><br/>
                    </tr>
                    <tr className="studentCenter"><span className="studentBoldCenter">
                    FEDERAL GOVERNMENT LOANS</span><br/>
                    <span className="studentBoldCenter">  General Information:</span><br/>
                        
                        - Interest Rates are normally lower than any other type of loans<br/>
                        -  Repayments doesn’t begin until after college<br/>
                        -  Only available through the U.S. Department of Education’s Direct Loan Program
                           
                        
                    </tr> 
                    <tr className="studentCenter"><span className="studentBoldCenter">FEDERAL CONSOLIDATION LOANS</span><br/>

                        (Can only be used for Federal Loans)<br/>
                        <span className="studentBoldCenter"> General Information:</span><br/>
                            - These loan amounts together puts all your loans together<br/>
                            - Easier to repay (one monthly expense rather than multiple expenses)<br/>
                            - Usually Lower Interest Rate, but an Extended Payment Period<br/>    
                        
                        </tr>
                        <tr className="studentCenter"><span className="studentBoldCenter">PRIVATE LOANS</span><br/>
                        (Covers the Cost of Attendance remaining after Federal Loans)<br/>
                        <span className="studentBoldCenter">  General Information:</span><br/>
                        
                            - Seek private loans after maximizing federal loans<br/>
                            - Usually provided by Private Lenders, Banks, Colleges, and Universities<br/>
                            - Only borrow that amount needed to supplement your Cost of Attendance <br/>
                            - Interest Rates vary depending on the borrower and cosigner credit score<br/>   
                            
                        </tr>
                </tbody>
            </table>
            </div>
            <div className="table-responsive">
            <h5 className="studentHeading">TYPES OF FEDERAL LOANS</h5>
            <h5 className="studentHeading2">"Borrow" what you need, not what you want...</h5>
            <table className="table table-striped table-bordered">
                
                <tbody>
                <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>SUBSIDIZED<br/>
                    (based on financial need; interest starts after graduation)
                    </td>
                    <td>- Amount is based on family’s Expected Family Contribution (EFC) <br/>and the school’s Cost of Attendance<br/>
                    - Federal Government pays for cost of interest while student is enrolled full-time</td>
                </tr>
                <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>UNSUBSIDIZED <br/> 
                    (not needs based; interest added during start of the loan)</td>
                    <td>
                        - Offered to student borrowers with No Calculated Financial Need<br/>
                        - Student Borrower is responsible for cost of interest from start to finish<br/>
                        - After Graduation or Full-time Enrollment unpaid interest will be Capitalized<br/>
                        - Capitalized Interest is unpaid interest added to the principal loan amount</td>
                </tr>
                <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>DIRECT PLUS <br/>
                    (Parent Loans for dependent undergraduates)</td>
                    <td>
                        - Can only be used if student borrower’s Subsidized and Unsubsidized Loans are maxed out
                        - Higher Interest Rates than Subsidized and Unsubsidized Loans
                        - Available to all parents regardless of their amount of assets or income
                        - Eligibility can be affected by parent’s credit score</td>
                </tr>
                <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Employment <br/>
                    (PartTime job; Needs based income from a college work-study position)</td>
                    <td>
                    - WORK-STUDY is based on financial need; limited amount of income (based on award letter)<br/>
                    - PART-TIME JOB is not needs based, income may be more consistent</td>
                </tr>
                </tbody>
            </table>

        </div>

        <div className="table-responsive">
            <h5 className="studentHeading">REPAYMENT </h5>
                <h5 className="studentHeading2">Normally 6 months after graduation or Dropping below Full-Time Enrollment</h5>
            <table className="table table-striped table-bordered">
                
                <tbody>
                <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>STANDARD SCHEDULE</td>
                        <td>
                        - Payment: Fixed amount per month <br/>
                        - Term of Loan: usually up to 10 years<br/>
                        - Monthly Payment will be higher than other repayment options<br/>
                        - Cost: Least Expensive over time (Less Paid in Interest)<br/>
                        -Fastest repayment schedule
                        </td>
                    </tr>
                    <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>GRADUATED SCHEDULE</td>
                        <td> 
                        - Payment: Variable amount per month<br/>
                        - Term of Loan: usually up to 10 years<br/>
                        - Monthly Payment will increase throughout the term of the loan<br/>
                        - Cost: More Expensive than the Standard Schedule (More Paid in Interest)<br/>
                        - Repayment is based on your assumed increase in salary (Over 10 years)</td>
                    </tr>
                    <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>INCOME-SENSITIVE SCHEDULE</td>
                        <td>
                        - Payment: Fixed or Variable amount per month<br/>
                        - Term of Loan: usually up to 25 years<br/>
                        - Monthly Payment is based on income, family size and loan amount<br/>
                        - Cost: Expensive due to the long loan term (High Interest Amount)<br/>
                        - Any Remaining Loan Amount will be forgiven after 25 years </td>
                    </tr>
                    <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>INCOME-BASED SCHEDULE</td>
                        <td>
                        -Payment: Lowest Amount you’re eligible for per month<br/>
                        -Term of Loan: usually up to 25 years or complete payment of the loan<br/>
                        -Monthly Payment is based on income, family size and poverty guidelines <br/>
                        -Cost: Very Expensive over time (High Interest Amount)<br/>
                        -Similar to Income-Sensitive Schedule but loans may not be forgiven
                        </td>
                    </tr>
                    <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>EXTENDED SCHEDULE</td>
                        <td>
                        -Payment: Fixed or Variable amount per month <br/>
                        -Term of Loan: usually up to 25 years or complete payment of the loan<br/>
                        -Monthly Payment is based on having a loan balance above $30,000<br/>
                        -Cost: Very Expensive over time (High Interest Amount)<br/>
                        -Low Monthly Payments but High Interest Amount 
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="table-responsive">
            <h5 className="studentHeading">FINANCIAL AID PROCESS </h5>
            <h5 className="studentHeading2">Step-by-step process to secure financial aid</h5>
                <table className="table table-striped table-bordered">
                    
                    <tbody>
                    <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>1- Get FSA ID</td>
                            <td>-You’ll need an FSA ID, a username and password combination that allows you to sign your FAFSA electronically
                        </td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>2- Gather Your Legal Documents…</td>
                            <td>
                            - Social Security Number (citizen) or Alien Registration Number - For you and your parent’s (If you are a dependent student)<br/>
                            - Driver’s License Number (if applicable)<br/>
                            - Federal Tax Information or Tax Returns including IRS W-2 (1040, 1040A, 1040EZ, etc.)<br/>
                            - All necessary financial information: Any type of investments like real estate, stocks, and bonds, and/or business assets, etc
                        </td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>3- Starting Your FAFSA® </td>
                            <td>- Provide Your Basic Personal Information (www.studentaid.gov)</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>4- Listing Colleges and/or Career Schools</td>
                            <td>- Will determine the amounts and types of aid you may receive</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>5- Determining Your Dependency Status</td> 
                            <td>
                            - Dependent Student vs. Independent Student<br/>
                            - Dependent Students (must report parent information)<br/>
                            - Independent Students (Check financial aid website for eligibility)</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>6- Report Parent Information 
                            
                            </td>
                            <td>
                            - Demographics and Financial Data<br/>
                            - Required for Dependent Students
                            </td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>7- Provide Financial Information</td>
                            <td>- Before Doing Taxes (Use last year’s income tax return or the “Income Estimator” on your FAFSA page)<br/>
                        - After Doing Taxes (Use “IRS Data Retrieval Tool”) this tool does an AUTOFILL of your tax information
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
                    
            <div  className="table-responsive">
                <table className="table table-striped table-bordered">
                    <h5 className="studentHeading">Financial Aid Tips<br/></h5>
                    <h5 className="studentHeading2">The decisions you make “Now” will directly impact the decisions you can make “Later...” "The Prime Mind"</h5>
                    <h5 className="studentHeading">Be smart about borrowing by:
                    </h5>
                    <tbody>
                        <tr className="studentCenter">

                            - Scholarships are the most efficient way to pay for your education<br/>
                            - Hard-Work and Sacrifice (Maintaining Academic Standards or Athletic Ability)<br/>
                            - Personal Time and Dedication (To complete scholarship application)
                        </tr>
                        <tr className="studentCenter">
                            - Subsidized Loans are your 1st Choice (Interest is paid by the government when enrolled)<br/>
                            - Unsubsidized Loans (2nd Choice)<br/>
                            - Employment and Private Loans (3rd Choice)
                        </tr>
                        <tr className="studentCenter">

                            - Unsubsidized Loans add interest to the loan amount from start of the loan<br/>
                            (If Interest is not paid, the interest Capitalizes which increases the Principal Amount of the loan…which increases the amount of interest paid throughout the term of the loan)<br/>
                            - Borrow as much as is needed (Interest is added on every dollar and must be paid back later)<br/>
                            - Always search for the least expensive loan<br/>
                            - $4000 in loans per semester, after 4 years, will cost $400 per month</tr>
                        <tr className="studentCenter">

                            - Parents/Guardians withholding tax information will reduce the amount of federal loans available<br/>
                            - Student will not be eligible for Grants and Subsidized Loans<br/>
                            - Student may not be able to fund Cost of Attendance</tr>
                        <tr className="studentCenter">

                            - Independent Students have to meet one of the following criteria:<br/>
                            (Eligibility is determined by Financial Aid administrators)<br/>
                            - You’re at least 24 years old<br/>
                            - You’re a U.S. veteran<br/>
                            - You’re a graduate or professional student<br/>
                            - You’re an orphan or ward of the court (or you were until they were 18)<br/>
                            - You’re married <br/>
                            - You have legal dependents other than a spouse</tr>
                    </tbody>
                </table>
            </div>        
            <div  className="table-responsive">

                <h5 className="studentHeading">EDUCATIONAL VOCABULARY</h5>
                    <h6 className="studentHeading2">HIGH SCHOOL</h6>
                <table className="table table-striped table-bordered">
                    
                    <tbody>
                        <th className="studentCenter" style={{width: "20%"}}>Term</th>
                        <th className="studentCenter">Definition</th>
                    <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>CLASS RANK</td>
                            <td>
                            - Who is within your top 15%<br/>
                            - A measure of how a student's performance compares to other students in his or her class
                            </td>
                        </tr>

                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>CREDITS</td>
                            <td>
                            - Specific amount to be promoted to next grade and to graduate<br/>
                            - The courses numerical worth<br/>
                            - Ex. Full-year courses = 5 credits<br/>
                            - Ex. Half-year courses = 2.5 credits<br/>
                            </td>
                        </tr>
                        
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>GPA </td>
                            <td>

                            - The better your grades, the higher your gpa<br/>
                            - A calculated average of the letter grades you earn in school following a 4.0 or 5.0 scale. <br/>
                            - Every semester, you'll receive a GPA based on the grades you earned in all of your classes during that semester. <br/>
                            - Directly impacts your college choices (higher the better)</td>
                        </tr>
                        
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>RESUME</td>
                            <td>
                            - Keeping track of your extracurricular activities and honors<br/>
                            - Include sections for school activities, awards and honors (both academic and extracurricular)<br/>
                            - Community service, work experience and alumni affiliation
                            </td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>SAT, ACT, PSAT</td>
                            <td>
                            - The higher the better<br/>
                            - Standardized testing used for college admissions<br/>
                            - Increases your chances of college acceptance
                            </td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>STATE TESTING</td>
                            <td>
                            - Passing score is required for high school graduation<br/>
                            - Ex. In NJ (NJSLA) and in NY (REGENTS)<br/>
                            </td>
                        </tr>

                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>TRANSCRIPT</td>
                            <td> 

                            - Colleges use this to make a decision<br/>
                            - Your overall High school classes, Final grades, GPA, Class Rank, and Credits</td>
                        </tr>
                </tbody>
             </table>   
        </div>
        <div  className="table-responsive">

                <h6 className="studentHeading2">COLLEGE TERMS</h6>
            <table className="table table-striped table-bordered">
    
                <tbody> 
                        <th className="studentCenter" style={{width: "20%"}}>Term</th>
                        <th className="studentCenter">Definition</th>      
                <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Academic Counselors</td>
                            <td>College personnel who provide personal, career, vocational and transfer counseling
                            </td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Accuplacer</td>
                            <td>A computerized placement test colleges use to determine new students' skill level in reading, writing, and mathematics</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Admissions</td>
                            <td>The process required for acceptance into a college</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Advisors</td>
                            <td>Advisors are academic counselors, staff members or faculty members who are responsible for helping students plan their academic program</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Catalog & Section Numbers</td>
                            <td>Catalog & section numbers are a course coding system, which uses letters and numbers. Each class section is assigned three letters to indicate the department, three numbers to indicate the course, and three numbers to indicate the section number</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Core Courses</td>
                            <td>Each academic program's curriculum requires that the student take general education "Core Courses" (English, reading, math and social science) Students should check the College Catalog for the specific courses required for graduation</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Credit Hours</td>
                            <td>The amount of credit earned for a class based upon the number of clock hours of instruction provided for a course per week</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Cumulative Grade Point Average</td>
                            <td>The cumulative GPA is calculated by dividing the total cumulative quality grade points earned by the total cumulative quality hours attempted</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Degree-Seeking Student</td>
                            <td>Students who have completed the admission process and are enrolled in an associate degree, diploma or academic certificate program</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Dean's List</td>
                            <td>The academic recognition granted to students with a GPA generally above 3.2</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Delinquent Account</td>
                            <td>Results from failure to pay tuition on or before the due date, and leads to non-enrollment and having official transcripts withheld</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Drop/Add</td>
                            <td>A specific period of time, during the beginning of every semester, students are able to drop or add courses on their schedule</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Electives</td>
                            <td>Electives are courses chosen within a program that may or may not be in the student's major area of study</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Enrollment Status</td>
                            <td>
                            - Full-Time/Part-Time<br/>
                            - Full-time enrollment status = Student registered for 12 or more credits per semester<br/>
                            - Part-time enrollment status = Student registered for 11 or less credits per semester</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Grants</td>
                            <td>Money given to students through various federal and state programs; grants do not have to be repaid</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Major</td>
                            <td>A specific area of study within an academic program</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Major Courses</td>
                            <td>Major courses provide students with knowledge and skills to achieve necessary for graduates to successfully enter the work force or continue their education in their field of study</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Prerequisites</td>
                            <td>Preliminary skills, knowledge, or other courses which are required before enrollment in a particular course</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Program</td>
                            <td>A chosen area of study consisting of courses required to receive a degree, diploma, or certificate</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Registration</td>
                            <td>The period of time when students select and enroll in courses for the following semester</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Scholarships</td>
                            <td>Money awarded to qualified students and do not have to be repaid</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Semester</td>
                            <td>The academic time period when courses are scheduled. Fall and spring semesters are 16 weeks each</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Student Loans</td>
                            <td>Student loans are loans for educational expenses; repayment of most loans begins after completion of degree requirements or lack of enrollment</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Transcript</td>
                            <td>An official historical academic record of all courses a student has registered for</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Transfer Credit</td>
                            <td>College credit earned at another educational institution</td>
                        </tr>
                        <tr className="studentCenter2">
                    <td className="studentHeading" style={{verticalAlign: "middle"}}>Tuition</td>
                            <td>The cost of a course or program of study</td>
                        </tr>                    
                    </tbody>
                </table>
               </div> 
            </div>                       
        </div>

    </div>

            
        )
    
    }
}

export default PrimeStudent;