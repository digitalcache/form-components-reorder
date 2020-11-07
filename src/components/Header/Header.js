import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'
import LogoImage from './../../static/images/aform.svg';
import RecentIcon from './../../static/images/recentIcon.png';
import PrevButton from './../../static/images/prevButton.png';


export default function Header(props) {
    const { location } = props;
    return (
        <header>
            <nav>
                <img className="logoImage" alt="Aform Logo" src={LogoImage}/>
                <span className="logoText">Z Form</span>
                {location.pathname === "/" && <Link to="/recent">
                    <div className="navButtonContainer">
                        <img className="icon" alt="Recent Icon" src={RecentIcon}/>
                        <span className="button">My Recent</span>
                    </div>
                </Link>}
                {(location.pathname === "/recent" || location.pathname === "/create") && <Link to="/">
                    <div className="navButtonContainer">
                        <img className="icon" alt="Create Icon" src={PrevButton}/>
                        <span className="button">Back</span>
                    </div>
                </Link>}
            </nav>
        </header>
    )
}
