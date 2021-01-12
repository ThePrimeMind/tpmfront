import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { findPeople, follow } from "./apiUser";
import DefaultProfile from "../images/avatar.jpg";
import { isAuthenticated } from "../auth";
import "./findPeople.css";

class FindPeople extends Component {
    constructor() {
        super()
        this.state= {
            users:[],
            error:"",
            open: false
        };
    }

    componentDidMount() {
        const userId = isAuthenticated().user._id;
        const token = isAuthenticated().token;

        findPeople(userId, token).then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                this.setState({users: data});
            }
        });
    }

    clickFollow = (user, i) => {
        const userId = isAuthenticated().user._id;
        const token = isAuthenticated().token;

        follow(userId, token, user._id)
        .then(data => {
            if(data.error) {
                this.setState({error: data.error})
            } else {
               let toFollow = this.state.users;
               toFollow.splice(i, 1); 
               this.setState({
                   users: toFollow,
                   open: true,
                   followMessage: `You've added ${user.name} to your Prime Network!`
               })
            }
        })
    }

    renderUsers = users => (
        <div className="row">
            {users.map((user, i) => (
                <div className="card-deck col-md-4 mt-5" key={i} >
                <div className="card">
                <img 
                style={{height:"250px", width: "85%", borderRadius: "50%"}} 
                className="img-thumbnail card-img-top ml-3 mt-2"
                src={`${process.env.REACT_APP_API_URL}/user/photo/${user._id}`} 
                onError={i =>(i.target.src = `${DefaultProfile}`)}
                alt={user.name} />

                    <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.email}</p>
                    <Link
                        to={`/user/${user._id}`}
                        className="btn btn-raised button1 ">
                    View my profile
                    </Link>

                    <button 
                    onClick={() => this.clickFollow(user, i)}  
                    className= "btn btn-raised button1 float-right">
                        Network
                    </button>
                </div>
            </div>
        </div>
        ))}
    </div>
    );

    render() {
        const {users, open, followMessage} = this.state
        return (
            <div>
              <h2 className="findPeopleMainHeader">Prime Network</h2> 
            <div className="container">
              {open && (
                <div className="alert alert-success">
                  {open && (<p>{followMessage}</p>)}
              </div>
              )}

             {this.renderUsers(users)}
            </div>
            </div>
        );
    }
}

export default FindPeople;

