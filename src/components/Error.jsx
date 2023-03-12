import React from "react";
import "./error.css";
import error from "../images/error404.png";
import { NavLink } from "react-router-dom";

const Error = () => {
    return(
        <div className="error">
            <div className="error-content">
                <h5>Ooopsss Something Went Wrong !!!</h5>
                <h1>Error 404</h1>
                <h5>Hey Buddy, looks like you've a page that doesn't exist.</h5>
                <NavLink to="/"><button>Go Button</button></NavLink>
            </div>

            <div className="logo-set">
            <img className="error-logo" src={error} alt="error-logo" />
            <div class="home__shadow"></div>
            </div>
        </div>
    );
};

export default Error;