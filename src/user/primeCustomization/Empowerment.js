import React, { Component } from 'react'
import "./empowerment.css";



class Empowerment extends Component {
    render() {
        return (
            <div style={{textAlign: "center", fontSize: "1.2rem"}}>
                <h2 className="empowermentMainHeader">Prime Empowerment Services</h2>
                

                <div className="table-responsive container" style={{border: "1px solid black", padding: "0"}}>
                    <h5 className="empowermentHeader">Your "Prime Self" will be proud of you! "The Prime Mind"</h5>
                    <table class="table table-striped table-bordered">
                    <tbody>
                        <th className="empowermentTableHeader"><h3 className="empowermentBoldText">PRIME SERVICES <br/> ***Invest In Yourself***</h3></th>
                        <th className="empowermentTableHeader"><h3 className="empowermentBoldText">PRIME WORKSHOPS <br/> ***Invest In Community***</h3></th>
                        
                        <tr className="empowermentLineHeight">
                            <td> Empowerment Coach <br/> $75 (per hour)<br/> * One on One *</td>
                            <td> Community Customization (Parents) <br/> $1250 (Full Day Workshop)</td> 
                        </tr>
                        
                        <tr className="empowermentLineHeight">
                            <td> Empowerment Speaking <br/> $1250 (per event)</td>
                            <td> Youth Customization (Students) <br/> $1000 (Full Day Workshop)</td>
                        </tr>
                        <tr className="empowermentLineHeight">
                        <td></td>
                        <td>The Prime Mind Training System (Educators) <br/> $2250 (Full Day Workshop)</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>

                
            </div>
        )
    }
}


export default Empowerment;