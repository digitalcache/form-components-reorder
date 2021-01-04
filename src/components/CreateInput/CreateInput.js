import React from 'react'
import AddIcon from './../../static/images/addIcon.png'
import './CreateInput.scss'

export default function CreateInput(props) {
    const types = ["checkboxes", "short-answer", "long-answer", "multi-choice", "dropdown"]
    return (
            <div className="addComponent">
                <span onClick={()=> props.addComponent()}>Add Question</span>
                {/* <img className="dropDownIcon" src={AddIcon} alt="Add Icon" /> */}
                {/* <div className="types">
                    <ul>
                        {
                            types.map(value=> <li 
                                key={value} 
                                onClick={()=> props.addComponent(value)}
                                >
                                    {value}
                                </li>)
                        }
                    </ul>
                </div> */}
            </div>
            
    )
}
