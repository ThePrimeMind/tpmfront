import React, { Component } from 'react';
import {isAuthenticated} from "../auth";
import { create } from "./apiPost";
import { Redirect } from "react-router-dom";
import "./newPost.css"; 

// import DefaultProfile from "../images/avatar.jpg";


class NewPost extends Component {

    constructor() {
        super()
        this.state = {
          title: "",
          body: "",
          photo: "",
          error: "",
          user: {}, 
          fileSize: 0,
          loading: false,
          redirectToProfile: false
        };
    };

    componentDidMount() {
        this.postData = new FormData();
        this.setState({user: isAuthenticated().user});
    };

    isValid = () => {
        const { title, body, fileSize } = this.state
        if(fileSize > 1000000) {
            this.setState({error: "File size should be less than 100kb...", loading: false});
            return false;
        }
        if(title.length === 0 || body.length === 0) {
            this.setState({error: "All fields are required...", loading:false});
            return false;
        }
     
        return true;
    };

    handleChange = name => event => {
        this.setState({error: ""});
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        const fileSize = name === "photo" ? event.target.files[0].size : 0;
        this.postData.set(name, value);
        this.setState({[name]: value, fileSize});
    }

    clickSubmit = (event) => {
        event.preventDefault();
        this.setState({loading: true});

        if(this.isValid()) {

        // console.log(user);
        const userId =  isAuthenticated().user._id;
        const token = isAuthenticated().token


        create(userId, token, this.postData)
        .then(data => {
            if(data.error) this.setState({error: data.error});
            else {
                this.setState({
                    loading: false, 
                    title: "", 
                    body: "",  
                    redirectToProfile: true})
            }
            
        });

        };
    
    };

    newPostForm = (title, body) => (

        <div className="container" style={{backgroundColor: "white"}}>
        <form>
            
            <div className="form-group mt-5">
                <label className="text-muted mt-4">Profile Image</label>
                <input 
                    onChange={this.handleChange("photo")}
                    className="form-control" 
                    type= "file" 
                    accept="image/*"
                    // src={`${process.env.REACT_APP_API_URL}/user/photo/${user._id}`}  
                />
                
            </div>

            <div className="form-group">
                <label className="text-muted">Title</label>
                <input onChange=
                    {this.handleChange("title")}
                    className="form-control" 
                    value={title}    
                />
                
            </div>

            <div className="form-group">
                <label className="text-muted">Body</label>
                <textarea 
                    onChange=
                    {this.handleChange("body")}
                    className="form-control" 
                    type= "text" 
                    value={body} 
                />
                
            </div>

            <button onClick={this.clickSubmit} className="btn btn-raised button1 mb-4">
            Create Post
            </button>
        </form>
        </div>
    );

    render() {

        const { 
        title,
        body,
        // photo,
        error,
        // user,
        loading,
        redirectToProfile } = this.state;
        
        if(redirectToProfile) {
           return <Redirect to={"/"} />;
           // Profile page`/user/${user._id}`
        }

        //REUSE TO SHOW DEFAULTPROFILE PIC IF THERE IS A PIC ERROR
        //const photoUrl = id ? `${process.env.REACT_APP_API_URL}/user/photo/${id} ? {new Date().getTime()}` : DefaultProfile;

        return (
            <div>
                <h2 className="newPostMainHeader">Create a Prime Post</h2>
                <div
                className="alert alert-danger" 
                style={{display: error ? "" : "none"}}>
                {error}
            </div>

            {loading ? (
                <div className="jumbotron text-center">
                    <h2>Loading...</h2>
                </div>
                ) : (
                    ""
                )}

                {this.newPostForm(title, body)}
            </div>
        );
    }
}


export default NewPost;