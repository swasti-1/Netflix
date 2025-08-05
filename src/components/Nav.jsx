import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_content">
                <img onClick={() => navigate("/")}className="logo" src="https://loodibee.com/wp-content/uploads/Netflix-logo.png" alt='' />
                <img onClick={() => navigate("/profile")}
                className="nav_avatar" src="https://i.pinimg.com/474x/b4/0b/51/b40b51418293936a6e0ad09ffa229cb7.jpg" alt='' />
            </div>
        </div>
    );
}

export default Nav;
