import React , { useState } from 'react'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import animationData from './../../static/formAnimation.json'
import './NavigationSlider.scss'

export default function NavigationSlider(props) {
    const [ on, setOn] = useState(false);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <>
            <div className="navContainer">
                <ul>
                    <Link to="/recent">
                        <li>
                            Recent Forms
                        </li>
                    </Link>
                    <Link to="/projectinfo">
                        <li>
                            Project Info
                        </li>
                    </Link>
                    <Link to="/about">
                        <li>
                            About Us
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li>
                            Contact Us
                        </li>
                    </Link>
                    <Link to="/">
                        <li>
                            Home
                        </li>
                    </Link>
                </ul>
                <Lottie options={defaultOptions}
                    height={200}
                    width={200}
                />
                <div className="navFooter">
                    Made in love with react &#38; redux
                </div>
            </div>
        </>
        
    )
}
