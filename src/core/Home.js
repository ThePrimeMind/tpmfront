import React from "react";
import Posts from "../post/Posts";
import "./home.css";

const Home = () => (
    <div>
        <div>
        <h2 className="homeMainHeader">Prime Timeline...</h2>
    </div>
    <div className="container">
        <Posts />
    </div>
    </div>
);

export default Home;

