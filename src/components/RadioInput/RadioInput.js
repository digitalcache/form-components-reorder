import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../themeContext'
import FormComponentStyler from '../FormComponentStyler/FormComponentStyler'
import './RadioInput.scss'

function RadioInput() {
    const dayTrue = useContext(ThemeContext)
    const [itemNumber, setItemNumbers] = useState(1);
    const listOfValues = [];
    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            setItemNumbers(itemNumber+1)
        }
    }
    for(var i =0;i<itemNumber;i++){
        listOfValues.push(
            <li key={`radioItems${i}`}>
                <input onKeyDown={handleKeyDown} placeholder="Value" className={dayTrue ? 'themeContainer listItem darkTheme' : 'listItem themeContainer'}>
                </input>
            </li>
            )
    }
    return (
        <div className="radioInputContainer">
            <p className="headerType">Multiple Choice</p>
            <input className={dayTrue ? 'themeContainer darkTheme' : 'themeContainer'} placeholder="Enter a question for radio items"></input>
            <ul>
                {listOfValues}
            </ul>
            <button onClick={()=>setItemNumbers(itemNumber+1)} className={dayTrue ? 'addButton darkButton' : 'addButton'}>Add More</button>
        </div>
    )
}

export default FormComponentStyler(RadioInput)
