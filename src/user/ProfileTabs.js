import React, { Component } from 'react'
import { Link } from "react-router-dom";
import DefaultProfile from "../images/avatar.jpg";

class ProfileTabs extends Component {
    render() {
        const {following, followers, posts} = this.props
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <h4 className="text-info" style={{textAlign: "left"}}>Network</h4>
                        <hr/>
                        {followers.map((person, i) => (
                            <div key={i}>
                                    <div className="row align-items-start d-inline">
                                        <Link to={`/user/${person._id}`}>
                                            <img 
                                            style={{borderRadius: "50%", border: "1px solid black"}}
                                            onError={i => (i.target.src = `${DefaultProfile}`)}
                                            className="float-left mr-2"
                                            height="50px"
                                            width="50px"
                                            src={`${process.env.REACT_APP_API_URL}/user/photo/${person._id}`} 
                                            alt={person.name} 
                                            />
                                            
                                            <p className="lead" style={{color:"black"}}>{person.name}</p>
                                            
                                        </Link>
                                    </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-info" style={{textAlign: "center"}}>Productivity Posts</h4>
                        <hr/>
                        {posts.map((post, i) => (
                            <div key={i}>
                                    <div className="row align-items-start d-inline">
                                        <Link to={`/post/${post._id}`}>                                            
                                            <p className="lead" style={{color:"black", textAlign: "center"}}>{post.title}</p>
                                            
                                        </Link>
                                    </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-3">
                        <h4 className="text-info" style={{textAlign: "right"}}>Prime Network</h4>
                        <hr/>
                        {following.map((person, i) => (
                            <div key={i}>
                                    <div className="row align-items-end d-inline">
                                        <Link align= "right" to={`/user/${person._id}`}>
                                            <img 
                                            style={{borderRadius: "50%", border: "1px solid black"}}
                                            onError={i => (i.target.src = `${DefaultProfile}`)}
                                            className="float-right mr-2"
                                            height="50px"
                                            width="50px"
                                            src={`${process.env.REACT_APP_API_URL}/user/photo/${person._id}`} 
                                            alt={person.name} 
                                            />
                                            
                                                <p className="lead" style={{color:"black"}}>{person.name}</p>
                                            
                                        </Link>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        );
    }
}


export default ProfileTabs;