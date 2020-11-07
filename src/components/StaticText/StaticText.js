import React ,{useContext} from 'react'
import { ThemeContext } from '../../themeContext'
import FormComponentStyler from '../FormComponentStyler/FormComponentStyler'
import './StaticText.scss'
function StaticText() {
    const dayTrue = useContext(ThemeContext)
    return (
        <div className="staticTextContainer">
            <input 
                // value={}
                placeholder="Enter Static Text" 
                className={dayTrue ? 'themeContainer darkTheme':'themeContainer'}
            ></input>
        </div>
    )
}
export default FormComponentStyler(StaticText)
