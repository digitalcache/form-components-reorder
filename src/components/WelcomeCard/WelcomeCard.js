import React, { useContext } from 'react'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../themeContext'
import ProductOffering from './../../static/images/productOfferings.svg';
import './WelcomeCard.scss'
import animationData from './../../static/formAnimation.json'

export default function WelcomeCard(props) {
    const dayTrue = useContext(ThemeContext)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <div className={dayTrue ? "welcomeCard dayTheme":"welcomeCard"}>
            <Lottie options={defaultOptions}
              height={200}
              width={250}
            />
            <img alt="Text Input | Radio Input Single Answer | Multi Select Checkbox" src={ProductOffering} className="productOffering" />
            <h3 className="welcomeCard__infoText">Select from a range<br></br> of input options</h3>
            <hr></hr>
            <h1 className="welcomeCard__header">All you survey and <br></br>data capturing needs.</h1>

            {/* <h3 className="welcomeCard__offerings">Static | Input | Radio | Dropdown in graphic format</h3> */}
            <Link to="/create">
                <button className="welcomeCard__button">Create Now</button>
            </Link>
        </div>
    )
}
