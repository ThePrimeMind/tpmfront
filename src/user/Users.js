import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {list} from "./apiUser";
import DefaultProfile from "../images/avatar.jpg";
import "./users.css";


class Users extends Component {
    constructor() {
        super()
        this.state= {
            users:[]
        };
    }

    componentDidMount() {
        list().then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                this.setState({users: data});
            }
        });
    }

    renderUsers = users => (
        <div className="container">
        <div className="row">
            {users.map((user, i) => (
                <div className="card-deck col-md-4" key={i} >
                <div className="card">  
                <div className="card-body">
                <img 
                style={{height:"200px", width: "75%", marginLeft: "auto", marginRight: "auto", borderRadius: "50%"}} 
                className="img-thumbnail mt-5 ml-4 mb-3 card-img-top"
                src={`${process.env.REACT_APP_API_URL}/user/photo/${user._id}`} 
                onError={i =>(i.target.src = `${DefaultProfile}`)}
                alt={user.name} />
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.email}</p>
                    <Link
                        to={`/user/${user._id}`}
                        className="btn btn-raised button1">
                    Check out my profile...
                    </Link>
            </div>
        </div>
        </div>
        ))}
    </div>
    </div>
    );

    render() {
        const {users} = this.state
        return (
            <div>
              <h2 className="usersMainHeader">Prime Users</h2>  
             {this.renderUsers(users)}
            </div>
        );
    }
}

export default Users;

