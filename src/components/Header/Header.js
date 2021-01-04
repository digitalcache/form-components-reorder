import React from 'react'
import { Link } from 'react-router-dom';
import LogoImage from './../../static/images/logo.svg';
import MoreOptions from './../../static/images/moreOptions.svg';
import './Header.scss'

export default function Header() {
    return (
        <header>
            <nav>
                <img className="logoImage" alt="QuickForm Logo" src={LogoImage}/>
                <span className="logoText">QuickForm &nbsp;</span>
                <Link to="/nav">
                    <div className="navButtonContainer">
                        <img className="icon" alt="Burger Icon" src={MoreOptions}/>
                    </div>
                </Link>
            </nav>
        </header>
    )
}
