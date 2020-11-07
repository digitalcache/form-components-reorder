import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../themeContext'
import './WelcomeCard.scss'
export default function WelcomeCard(props) {
    const dayTrue = useContext(ThemeContext)
    return (
        <div className={dayTrue ? "welcomeCard dayTheme":"welcomeCard"}>
            <h1 className="welcomeCard__header">Create Personalized Forms</h1>
            <h3 className="welcomeCard__infoText">Select from a range of input options</h3>
            <h3 className="welcomeCard__offerings">Static | Input | Radio | Dropdown</h3>
            <hr/>

            <Link to="/create">
                <button className="welcomeCard__button">Create New</button>
            </Link>
        </div>
    )
}
