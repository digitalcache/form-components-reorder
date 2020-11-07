import React, {useContext, lazy, Suspense, useState } from 'react'
import {connect} from 'react-redux'
import { ThemeContext } from '../../themeContext'
import CreateInput from '../CreateInput/CreateInput';
import DownloadJSON from '../DownloadJSON/DownloadJSON';
import { addFormOfType } from './../../store/actions/form.action'

import './CreateNew.scss'


const StaticText = lazy(() => import('../StaticText/StaticText'));
const RadioInput = lazy(() => import('../RadioInput/RadioInput'));
const TextInput = lazy(() => import('../TextInput/TextInput'));


function CreateNew(props) {

    const [ formState, setFormState ] = useState({
        "formBuilderComponents": []
    })
    const dayTrue = useContext(ThemeContext)

    function addComponent(value){
        // props.addFormOfType(value,1);
        setFormState({"formBuilderComponents": [...formState.formBuilderComponents, value]})
    }
    const currentJSON = {
        "formBuilderComponents" :  [
            {
                "type" : "static",
                "value" : "Example of the form builder in action",
                "order" : 1
            },
            {
                "type" : "radio",
                "question" : "What is the color?",
                "values" : ["red","green","yellow"],
                "order" : 2
            },
            {
                "type" : "text-input",
                "question" : "What is your name?",
                "allowed-characters": 500,
                "order" : 3
            },
            {
                "type" : "dropdown",
                "question" : "Where do you stay?",
                "values": ["Hyderabad","India","Malaysia"],
                "order": 4
            }
        ]
    } 
    const download = () => {
        // console.log('json',inputRef)
    }
  
    return (
        <div className={dayTrue? 'createNewContainer dayTheme':'createNewContainer'}>
            <h1>Select and Add</h1>
            <Suspense fallback={<div>Loading...</div>} >
                <div className="gridContainer">
                    {formState.formBuilderComponents.map((value,index) => {
                        if(value === "static") 
                            return  <span className="gridItem" key={value+index}>
                                        <span className="categoryTitle">Static</span><StaticText/>
                                    </span>
                        else if(value === "radio") 
                            return  <span className="gridItem" key={value+index}>
                                        <span className="categoryTitle">Radio</span><RadioInput />
                                    </span>
                        else if(value === "input-text") 
                            return  <span className="gridItem" key={value+index}>
                                        <span className="categoryTitle">Text Input</span><TextInput />
                                    </span>
                        else return null
                    })}
                </div>
            </Suspense>
            <CreateInput addComponent={addComponent} />
            <DownloadJSON download={download}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    newComponent: state.currentForm.currentInput.data
});
export default connect(mapStateToProps , { addFormOfType })(CreateNew);