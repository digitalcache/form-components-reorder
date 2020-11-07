import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../themeContext'
import FormComponentStyler from '../FormComponentStyler/FormComponentStyler'
import './RadioInput.scss'

function RadioInput() {
    const dayTrue = useContext(ThemeContext)
    const [itemNumber, setItemNumbers] = useState(1);
    const listOfValues = [];
    for(var i =0;i<itemNumber;i++){
        listOfValues.push(<li><input placeholder="Values" className={dayTrue ? 'themeContainer listItem darkTheme' : 'listItem themeContainer'}></input></li>)
    }
    return (
        <div className="radioInputContainer">
            <input className={dayTrue ? 'themeContainer darkTheme' : 'themeContainer'} placeholder="Enter a question"></input>
            <ul>
                {listOfValues}
            </ul>
            <button onClick={()=>setItemNumbers(itemNumber+1)} className="addButton">Add</button>
        </div>
    )
}

export default FormComponentStyler(RadioInput)
