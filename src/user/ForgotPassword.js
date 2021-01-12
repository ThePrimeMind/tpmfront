import React, { Component } from "react";
import { forgotPassword } from "../auth";
import "./forgotPassword.css";
 
class ForgotPassword extends Component {
    state = {
        email: "",
        message: "",
        error: ""
    };
 
    forgotPassword = e => {
        e.preventDefault();
        this.setState({ message: "", error: "" });
        forgotPassword(this.state.email).then(data => {
            if (data.error) {
                console.log(data.error);
                this.setState({ error: data.error });
            } else {
                console.log(data.message);
                this.setState({ message: data.message });
            }
        });
    };
 
    render() {
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Reset Password</h2>
 
                {this.state.message && (
                    <h5 style={{color: "white"}} className="bg-info">{this.state.message}</h5>
                )}
                {this.state.error && (
                    <h5 style={{color: "white"}} className="bg-info">{this.state.error}</h5>
                )}
 
                <form>
                    <div className="form-group mt-5">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Your email address"
                            value={this.state.email}
                            name="email"
                            onChange={e =>
                                this.setState({
                                    email: e.target.value,
                                    message: "",
                                    error: ""
                                })
                            }
                            autoFocus
                        />
                    </div>
                    <button
                        style={{borderRadius: "25px"}}
                        onClick={this.forgotPassword}
                        className="btn btn-raised button1"
                    >
                        Send Password Rest Link
                    </button>
                </form>
            </div>
        );
    }
}
 
export default ForgotPassword;