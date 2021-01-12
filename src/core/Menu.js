import React from 'react'
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth"
import Logo from "../images/Logo.png";
import "./menu.css"
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const isActive = (history, path) => {
    if(history.location.pathname === path) return {color: "#1ab7ea"};
        else return {color: "#000000"}
};


const Menu = ({history}) => (

    <div style={{backgroundColor: "white"}}>

    <div>

    <ul className="navbar nav-tabs navbar-expand-lg bg-white nav">

    <li>
    <a href="/landingpage">
        <img
            className="nav-link"
            src={Logo}
            style={{height: "100px", width: "auto", cursor: "pointer"}}
            alt="The Prime Mind, LLC"
            to="/landingpage"> 
        </img>
    </a>
    </li>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><div className="bars"></div>
  <div className="bars"></div>
  <div className="bars"></div></span>
        </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <li className="nav-item">
        <Link 
            className="nav-link" 
            style={isActive(history, "/")} 
            to="/">
            Home <span className="sr-only">(current)</span>
        </Link>
    </li>
    
    {!isAuthenticated()  && (
        <>
        <li className="nav-item">
        <Link 
            className="nav-link" 
            style={isActive(history, "/signin")} 
            to="/signin">
            Login
        </Link>
        </li>
        <li className="nav-item">
        <Link 
            className="nav-link" 
            style={isActive(history, "/signup")} 
            to="/signup">
            Sign Up
        </Link>
    </li>
    </>
    )}

    {isAuthenticated() && (
    <>

    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" style={isActive(history, "/users")} href="/users" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Prime Community
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item nav-link" style={isActive(history, "/users")} 
            to="/users">
            Users
        </Link>
          <Link className="dropdown-item nav-link" to= {`/findpeople`} 
            style={isActive(history, `/findpeople`)}>
               Get Connected
        </Link>
          <Link className="dropdown-item nav-link" to= {`/post/create`} 
            style={isActive(history, `/post/create`)}>
               Prime Posts
        </Link> 
          <Link className="dropdown-item nav-link" to= {`/user/${isAuthenticated().user._id}`} 
            style={isActive(history, `/user/${isAuthenticated().user._id}`)}>
                {`${isAuthenticated().user.name}'s profile`}
        </Link> 
          <a href="/"
            className="dropdown-item nav-link text-black" 
            style={(isActive(history, "/signup"),{cursor: "pointer", color: "fff"})}
            onClick={() => signout(() => history.push("/"))}>
            
    Sign Out
        </a>
        </div>
      </li>

    
        </>
        
         )}

    {isAuthenticated() && (
    <>

    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" style={isActive(history, "/users/primecustomization/financial")} href="/users/primecusomization/financial" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Prime Education
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item nav-link" style={isActive(history, "/users/primecustomization/financial")} 
            to="/users/primecustomization/financial">
            Finance
        </Link>
          <Link className="dropdown-item nav-link" to= {`/users/primecustomization/primestudent`} 
            style={isActive(history, `/users/primecustomization/primestudent`)}>
               Prime Student
        </Link>
          <Link className="dropdown-item nav-link" to= {`/users/primecustomization/businessbio`} 
            style={isActive(history, `/users/primecustomization/businessbio`)}>
               About Us
        </Link> 
        <Link className="dropdown-item nav-link" to= {`/users/primecustomization/empowerment`} 
            style={isActive(history, `/users/primecustomization/empowerment`)}>
               Empowerment Services
        </Link> 
        </div>
      </li>

        </>

         )}

         {isAuthenticated() && (
    <>

    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" style={isActive(history, "/users/primecustomization/process")} href="/users/primecustomization/process" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Be Prime!
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item nav-link" style={isActive(history, "/users/primecustomization/process")} 
            to="/users/primecustomization/process">
            Prime Process
        </Link>
          
          <Link className="dropdown-item nav-link" to= {`/users/primecustomization/maansystem`} 
            style={isActive(history, `/users/primecustomization/maansystem`)}>
               M-A-A-N System
        </Link> 
        <Link className="dropdown-item nav-link" to= {`/users/primecustomization/self`} 
            style={isActive(history, `/users/primecustomization/self`)}>
               Prime Self
        </Link> 
        <Link className="dropdown-item nav-link" to= {`/users/primecustomization/careers`} 
            style={isActive(history, `/users/primecustomization/careers`)}>
               Prime Careers
        </Link>
        <Link className="dropdown-item nav-link" to= {`/users/primecustomization/calendar`} 
            style={isActive(history, `/users/primecustomization/calendar`)}>
               Prime Calendar
        </Link>

        </div>
      </li>

        </>

         )}

         {isAuthenticated() && (
    <>

    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" style={isActive(history, "/users/primecustomization/aboutyou")} href="users/primecustomization/aboutyou" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Prime Customization
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item nav-link" style={isActive(history, "/users/primecustomization/aboutyou")} 
            to="/users/primecustomization/aboutyou">
            About You
        </Link>
          
          <Link className="dropdown-item nav-link" to= {`/users/primecustomization/contract`} 
            style={isActive(history, `/users/primecustomization/contract`)}>
               Prime Contract
        </Link> 
        <Link className="dropdown-item nav-link" to= {`/users/primecustomization/transition`} 
            style={isActive(history, `/users/primecustomization/transition`)}>
               Prime Transition
        </Link> 
        <Link className="dropdown-item nav-link" to= {`/users/primecustomization/design`} 
            style={isActive(history, `/users/primecustomization/design`)}>
               Prime Design
        </Link>
        <Link className="dropdown-item nav-link" to= {`/users/primecustomization/primepreneur`} 
            style={isActive(history, `/users/primecustomization/primepreneur`)}>
               Primepreneur
        </Link>

        </div>
      </li>

        </>

         )} 
  </div>
        </ul>
        
        
    </div>
</div>        
);



export default withRouter(Menu);
