import React, {useContext} from 'react'
import { ThemeContext } from '../../themeContext'
import FormComponentStyler from '../FormComponentStyler/FormComponentStyler'
import './TextInput.scss'

function TextInput() {
    const dayTrue = useContext(ThemeContext)

    return (
        <div className="textInputContainer">
            <div>
                <input className={dayTrue ? 'themeContainer darkTheme':'themeContainer'} placeholder="Enter a Question"></input>
                <input className={dayTrue ? 'themeContainer darkTheme':'themeContainer'} placeholder="Allowed characters"></input>
            </div>
        </div>
    )
}
export default FormComponentStyler(TextInput)