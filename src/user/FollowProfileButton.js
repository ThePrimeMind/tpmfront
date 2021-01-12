import React, { Component } from 'react'
import { follow, unfollow } from "./apiUser";
import "./followProfileButton.css"

class FollowProfileButton extends Component {
    followClick = () => {
        this.props.onButtonClick(follow)
    };
    unfollowClick = () => {
        this.props.onButtonClick(unfollow)
    };

    render() {
        return (
                <div className="d-inline-block">
                {
                    !this.props.following ? 
                    (
                    <button 
                        style={{borderRadius: "25px"}}
                        onClick={this.followClick} 
                        className="btn btn-info btn-raised mr-5">
                        Network
                    </button>
                     ) : (
                        <button onClick={this.unfollowClick} className="btn btn-dark btn-raised">
                        Unfollow
                    </button>
                     )
                }
                    
                   
                </div>
        )
    }
}

export default FollowProfileButton
