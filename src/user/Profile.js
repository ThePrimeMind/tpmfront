import React, { Component } from 'react';
import {isAuthenticated} from "../auth";
import {Redirect, Link} from "react-router-dom";
import { read } from "./apiUser";
import DefaultProfile from "../images/avatar.jpg";
// import DeleteUser from "./DeleteUser";
import FollowProfileButton from "./FollowProfileButton";
import ProfileTabs from "./ProfileTabs";
import {listByUser} from "../post/apiPost";
import "./profile.css";

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            user: { following: [], followers: [] },
            redirectToSignin: false,
            following: false,
            error: "",
            posts: []
        };
    }

    //check follow
    checkFollow = user => {
        const jwt = isAuthenticated();
        const match = user.followers.find(follower => {
            // one id has many other id's (followers) and vice versa
            return follower._id === jwt.user._id
        })
        return match
    }

    init = (userId) => {
        const token = isAuthenticated().token
        read(userId, token)
        .then(data => {
            if(data.error) {
                this.setState({redirectToSignin: true});
            } else {
                let following = this.checkFollow(data)
                this.setState({ user: data, following });
                this.loadPosts(data._id)
            }
        });
    };

    loadPosts = userId => {
        const token = isAuthenticated().token;
        listByUser(userId, token).then(data =>{
            if(data.error) {
                console.log(data.error)
            } else {
                this.setState({posts: data});
            }
        });
    };

    clickFollowButton = callApi => {
        const userId = isAuthenticated().user._id;
        const token = isAuthenticated().token;

        callApi(userId, token, this.state.user._id)
        .then(data => {
            if(data.error) {
                this.setState({error: data.error})
            } else {
                this.setState({user: data, following: !this.state.following})
            }
        });
    };

    componentDidMount() {
       const userId =  this.props.match.params.userId
       this.init(userId);
    }

    UNSAFE_componentWillReceiveProps(props) {
        const userId =  props.match.params.userId
        this.init(userId);
     }


    render() {
        const {redirectToSignin, user, posts} = this.state;
        if(redirectToSignin) return <Redirect to="'/signin" />;
        
        //REUSE TO SHOW DEFAULT PROFILE PIC IF THERE IS AN ERROR LOADING
        //const photoUrl = user._id ? `${process.env.REACT_APP_API_URL}/user/photo/${user._id} ? ${new Date().getTime()}` : DefaultProfile;

        return (
            <div>
            <h2 className="profileMainHeader">{user.name}'s Profile</h2>
            <div className="container mt-5" style={{backgroundColor: "white"}}>
                <div className="row">
                <div className="col-md-4">
                <img 
                style={{height:"260px", width: "auto", borderRadius: "50%"}} 
                className="img-thumbnail mt-5 ml-5"
                src={`${process.env.REACT_APP_API_URL}/user/photo/${user._id}`} 
                onError={i => (i.target.src = `${DefaultProfile}`)}
                alt={user.name} />
                </div>
                <div className="col-md-8">
                <div className= "Lead mt-5">
                    <p>Hello {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>{`Joined: ${new Date(user.created)
                    .toDateString()}`}</p>
                </div>
                    {isAuthenticated().user && 
                        isAuthenticated().user._id  === 
                            user._id ? (
                            <div className="d-inline-block mt-5">
                                <Link 
                                    style={{borderRadius: "25px"}}
                                    className="btn btn-raised mr-5 button1"
                                    to={`/post/create/`}>
                                    Create Prime Post
                                </Link>
                                <Link 
                                    style={{borderRadius: "25px"}}
                                    className="btn btn-raised  mr-5 button1"
                                    to={`/user/edit/${user._id}`}>
                                    Edit Profile    
                                </Link> 
                            {/* <DeleteUser userId={user._id} /> */}
                            </div>
                        ): (<FollowProfileButton 
                                following={this.state.following} 
                                onButtonClick={this.clickFollowButton}/>)}     
                    </div>
                </div>

                <div className="row">
                    <div className="col md-12 mt-5 mb-5">
                    <hr/>
                      <p className="Lead">{user.about}</p>
                    <hr/>
    
                    <ProfileTabs
                    followers= {user.followers} 
                    following= {user.following} 
                    posts={posts}   
                    />
                    </div>
                </div>
</div>
            </div>
        );
    }
}


export default Profile;