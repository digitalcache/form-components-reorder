import React ,{useContext} from 'react'
import { ThemeContext } from '../../themeContext'
import FormComponentStyler from '../FormComponentStyler/FormComponentStyler'
import './StaticText.scss'
function StaticText() {
    const dayTrue = useContext(ThemeContext)
    return (
        <div className="staticTextContainer">
            <p className="headerType">Short Answer Text Header</p>
            <input 
                // value={}
                placeholder="have to delete this component" 
                className={dayTrue ? 'themeContainer darkTheme':'themeContainer'}
            ></input>
        </div>
    )
}
export default FormComponentStyler(StaticText)
