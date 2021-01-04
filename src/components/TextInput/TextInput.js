import React, {useContext} from 'react'
import { ThemeContext } from '../../themeContext'
import FormComponentStyler from '../FormComponentStyler/FormComponentStyler'
import './TextInput.scss'

function TextInput() {
    const dayTrue = useContext(ThemeContext)

    return (
        <div className="textInputContainer">
            <div>
                <p className="headerType">Short Answer Text</p>
                <input className={dayTrue ? 'themeContainer darkTheme':'themeContainer'} placeholder="Question"></input>
                <input className={dayTrue ? 'themeContainer darkTheme':'themeContainer'} placeholder="Allowed characters in Answer"></input>
            </div>
        </div>
    )
}
export default FormComponentStyler(TextInput)