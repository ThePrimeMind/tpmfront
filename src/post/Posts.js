import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {list} from "./apiPost";
import DefaultPost from "../images/logoAvatar.png";
import "./posts.css";


class Posts extends Component {
    constructor() {
        super()
        this.state= {
            posts:[]
        };
    }

    componentDidMount() {
        list().then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                this.setState({posts: data});
            }
        });
    }

    renderPosts = posts => {
        return (
            <div className="row">
            {posts.map((post, i) => {
                const posterId = post.postedBy ? `/user/${post.postedBy._id}` : "";
                const posterName = post.postedBy ? post.postedBy.name : " Unknown";

               return (
                   
                <div className="card-deck col-md-6" key={i} >
                    <div className="card">
                    <div className="card-body">
                    <img 
                        src={`${process.env.REACT_APP_API_URL}/post/photo/${post._id}`} 
                        alt={post.title}
                        onError={i => i.target.src = `${DefaultPost}`}
                        className="img-thumbnail mb-3 card-img-top"
                        style={{height: "250px", width: "100%"}}
                    />
                    
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body.substring(0, 100)}</p>
                    <br/>
                    <p className="font-italic mark">
                    Posted by <Link to={`${posterId}`}>
                    {posterName}{" "}</Link>
                    on {new Date(post.created).toDateString()}
                    </p>
                    <Link
                        to={`/post/${post._id}`}
                        style={{borderRadius: "25px"}}
                        className="btn btn-raised button1">
                    Read more...
                    </Link>
                    </div>
            </div>
        </div>
               );
            
            })}
    </div>
    );
    };

    render() {
        const {posts} = this.state
        return (
            <div className="container">
              <h2 className="mt-5 mb-5">{!posts.length && "Loading..."}</h2>  
             {this.renderPosts(posts)}
            </div>
        );
    }
}

export default Posts;

