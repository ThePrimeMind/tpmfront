import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";
import { singlePost, remove, like, unlike } from "./apiPost";
import DefaultPost from "../images/logoAvatar.png";
import { isAuthenticated } from "../auth";
import Comment from "./Comment";
import "./singlePost.css";

class SinglePost extends Component {

    state = {
        post: "",
        redirectToHome: false,
        redirectToSignin: false,
        like: false,
        likes: 0,
        comments: []

    };

    checkLike = (likes) => {
        const userId = isAuthenticated() && isAuthenticated().user._id;
        let match = likes.indexOf(userId) !== -1
        return match;
    }

    componentDidMount = () => {
        const postId = this.props.match.params.postId
        singlePost(postId).then(data => {
            if(data.error) {
                console.log(data.error);
            } else {
                this.setState({
                    post: data, 
                    likes: data.likes.length, 
                    like: this.checkLike(data.likes),
                    comments: data.comments    
                });
                    
            }
        });
    };

    updateComments = comments => {
        this.setState({comments});
    }

    likeToggle = () => {
        if(!isAuthenticated()) {
            this.setState({redirectToSignin: true});
            return false;
        }
        let callApi = this.state.like ? unlike : like
        const userId = isAuthenticated().user._id 
        const postId = this.state.post._id
        const token = isAuthenticated().token
        
        callApi(userId, token, postId).then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                this.setState({
                    //toggle code
                    like: !this.state.like,
                    likes: data.likes.length, 
                });
            }
        });
    };

    deletePost = () => {
        const postId = this.props.match.params.postId;
        const token = isAuthenticated().token
        remove(postId, token).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                this.setState({redirectToHome: true})
            }
        });
    };

    deleteConfirmed = () => {
        let answer = window.confirm("Are you sure you want to delete this post?")
        if(answer) {
            this.deletePost();
        }
    };

    renderPost = (post) => {
        const posterId = post.postedBy ? `/user/${post.postedBy._id}` : "";
        const posterName = post.postedBy ? post.postedBy.name : " Unknown";
        
        const {like, likes} = this.state

        return (
            

                <div className="card-body">

                <div style={{align: "center", width: "55%", margin: "auto"}}>
                <img 
                    src={`${process.env.REACT_APP_API_URL}/post/photo/${post._id}`} 
                    alt={post.title}
                    onError={i => i.target.src = `${DefaultPost}`}
                    className="img-thumbnail mb-3"
                    style={{
                        borderRadius: "25px",
                        height: "300px",
                        width: "100%", 
                        objectFit: "fit",
                        }}
                
                />
                
                {like ? (
                    <button 
                className="btn btn-raised button1 btn-sm mb-4 mt-3" 
                style={{width: "auto", borderRadius: "25px", paddingLeft: "30px", paddingRight: "30px", color: "#1ab7ea", border: "1px solid #1ab7ea"}} 
                onClick={this.likeToggle}> {likes} 💗 Likes</button>
                ) : (
                     <button 
                className="btn btn-raised button1 btn-sm mb-4 mt-3" 
                style={{width: "auto", borderRadius: "25px", paddingLeft: "40px", paddingRight: "40px"}} 
                onClick={this.likeToggle}> {likes} 🤍  Likes</button> //FontAwesome Icons like <i className="fa fa-thumbs-up aria-hidden= true text-light"/>
                )}
                
                <p className="card-text">{post.body}</p>
                </div>
                <br/>
                <p className="font-italic mark">
                Posted by <Link to={`${posterId}`}>
                {posterName}{" "}</Link>
                on {new Date(post.created).toDateString()}
                </p>
                <div className="d-inline-block">
                    <Link
                    to={`/`}
                    style={{borderRadius: "25px"}}
                    className="btn btn-raised button1 btn-sm mr-5">
                Back to Timeline
                </Link>

                {isAuthenticated().user && 
                    isAuthenticated().user._id  ===  post.postedBy._id && 
                 <>   
                 <Link
                    to={`/post/edit/${post._id}`}
                    style={{borderRadius: "25px"}}
                    className="btn btn-raised button1 btn-sm mr-5">
                Update Post
                </Link>

                <button onClick={this.deleteConfirmed} style={{borderRadius: "25px"}} className="btn btn-raised btn-sm button1 ">
                    Delete Post    
                </button>
                </>
                }

               
                </div>
        </div>
        );
    }

    render() {

        const{post, redirectToHome, redirectToSignin, comments} = this.state

        if(redirectToHome) {
            return <Redirect to={`/`} />;
         } else if (redirectToSignin) {
             return <Redirect to={`/signin`} />;
         }

        return (
            <div>
              <h2 className="singlePostMainHeader">{post.title}</h2>

            <div className="container">

              {!post ? (
                <div className="jumbotron text-center">
                    <h2>Loading...</h2>
                </div>
                ) : (
                    this.renderPost(post)
                )}  

                <Comment 
                postId={post._id}  
                comments={comments.reverse()} //Recheck reverse comments 193...11min mark
                updateComments={this.updateComments} 

                />
                </div>
            </div>
        )
    }
}


export default SinglePost;