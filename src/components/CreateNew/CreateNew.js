import React, { lazy, Suspense, useState, useEffect } from 'react'
import {connect} from 'react-redux'
import { 
    Form, 
    FormGroup, 
    FormControl, 
    ControlLabel, 
    Toggle, 
    Button, 
    ButtonToolbar, 
    ButtonGroup,
    Dropdown, 
    Icon 
} from 'rsuite';
// import CreateInput from '../CreateInput/CreateInput';
// import DownloadJSON from '../DownloadJSON/DownloadJSON';
import { addFormOfType, setFormState } from './../../store/actions/form.action'
import 'rsuite/dist/styles/rsuite-default.css';
import './CreateNew.scss'

const StaticText = lazy(() => import('../StaticText/StaticText'));
const RadioInput = lazy(() => import('../RadioInput/RadioInput'));
const TextInput = lazy(() => import('../TextInput/TextInput'));

function CreateNew(props) { 
    // const [ formLength, setFormLength] = useState(3);
    const [ slideNumber, setSlideNumber] = useState(1);
    const [ isFirstScreen, setIsFirstScreen] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState('Multiple Choice');
    const [currentQuestionIcon, setCurrentQuestionIcon] = useState('dot-circle-o');
    // const [ formDataFromField, setFormDataFromField ] = useState([]);
    const [ formData, setFormData ] = useState({
        formBuilderComponents: props.formState
    })
    useEffect(() => {
        props.setFormState(formData.formBuilderComponents);
    }, [formData])

  
    function addComponent(){
        props.addFormOfType(currentQuestion, slideNumber+1);
        // console.log(formData)
        // setFormData({
        //     formBuilderComponents: formData
        // })
        // props.addFormOfType(currentQuestion, formLength+1);
        setSlideNumber(slideNumber+1);
        // setFormLength(formLength+1);
        // if(currentQuestion === "Short Answer"){
        //     props.setFormState({formBuilderComponents: [...formData.formBuilderComponents, {
        //         type: "short-answer",
        //         question: ""
        //     }]})
        // } else if(currentQuestion === "Long Answer") {
        //     props.setFormState({formBuilderComponents: [...formData.formBuilderComponents, {
        //         type: "long-answer",
        //         question: "",
        //         allowedCharacters: 500,
        //     }]})
        // } else if(currentQuestion === "Multiple Choice") {
        //     props.setFormState({formBuilderComponents: [...formData.formBuilderComponents, {
        //         type: "multi-choice",
        //         question: "",
        //         values: [ "", ""]
        //     }]})
        // } else if(currentQuestion === "Checkboxes") {
        //     props.setFormState({formBuilderComponents: [...formData.formBuilderComponents, {
        //         type: "checkboxes",
        //         question: "",
        //         values: [ "", ""]
        //     }]})
        // } else if(currentQuestion === "Dropdown") {
        //     props.setFormState({formBuilderComponents: [...formData.formBuilderComponents, {
        //         type: "dropdown",
        //         question: "",
        //         values: [ "", ""]
        //     }]})
        // }
        // console.log(props.formState)
    }
    const processFormName = () => {
        setIsFirstScreen(false);
        setSlideNumber(slideNumber+1);
        // props.setFormState(formData.formBuilderComponents);
        // setFormData({
        //     formBuilderComponents: formData
        // })
        // console.log("form data =",formData)

    }
    const deleteComponent = (index) => {
        // const updatedForm = formState.formBuilderComponents.filter((value) => value.order != index) 
        // setFormState({"formBuilderComponents": updatedForm});
        // props.setFormState(updatedForm);
    }
    const download = () => {
        console.log(formData, 'Form Value');
        console.log('json', props.formState)
    }
    const setQuestionData = (value) => {
        setCurrentQuestionIcon(value);
        let dummyQuestion = '';
        if(value == "check-square") {
            setCurrentQuestion("Checkboxes")
            dummyQuestion = "Checkboxes"
        } else if (value == "ellipsis-h") {
            setCurrentQuestion("Short Answer")
            dummyQuestion = "Short Answer"
        } else if (value == "bars") {
            setCurrentQuestion("Long Answer")
            dummyQuestion = "Long Answer"
        } else if (value == "dot-circle-o") {
            setCurrentQuestion("Multiple Choice")
            dummyQuestion = "Multiple Choice"
        } else if (value == "chevron-circle-down") {
            setCurrentQuestion("Dropdown")
            dummyQuestion = "Dropdown"
        }
        if( formData.formBuilderComponents.questions && formData.formBuilderComponents.questions.formQuestionValues && formData.formBuilderComponents.questions.formQuestion) {
            setFormData({
                formBuilderComponents: {
                    formName: formData.formBuilderComponents.formName,
                    formDescription: formData.formBuilderComponents.formDescription,
                    questions: {
                        formQuestionType: dummyQuestion,
                        formQuestion : formData.formBuilderComponents.questions.formQuestion,
                        formQuestionValues: formData.formBuilderComponents.questions.formQuestionValues 
                    }
                }
            })
        }
    }
   
    const CustomDropdown = ({ ...props }) => (
        <Dropdown {...props} icon={<Icon size="lg" icon={currentQuestionIcon} />}>
          <Dropdown.Item onSelect={(value,event)=>setQuestionData(value)} eventKey={"check-square"} icon={<Icon size="lg" icon="check-square" />}>Checkboxes</Dropdown.Item>
          <Dropdown.Item onSelect={(value,event)=>setQuestionData(value)} eventKey={"ellipsis-h"} icon={<Icon size="lg" icon="ellipsis-h" />}>Short Answer</Dropdown.Item>
          <Dropdown.Item onSelect={(value,event)=>setQuestionData(value)} eventKey={"bars"} icon={<Icon size="lg" icon="bars" />}>Long Answer</Dropdown.Item>
          <Dropdown.Item onSelect={(value,event)=>setQuestionData(value)} eventKey={"dot-circle-o"} icon={<Icon size="lg" icon="dot-circle-o" />}>Multiple Choice</Dropdown.Item>
          <Dropdown.Item onSelect={(value,event)=>setQuestionData(value)} eventKey={"chevron-circle-down"} icon={<Icon size="lg" icon="chevron-circle-down" />}>Dropdown</Dropdown.Item>
        </Dropdown>
      );
    return (
        <div className="createNewContainer">
            <div className="header">
                <span>Questions</span>
                <span>Responses</span>
            </div>
            <div className="formContainer">
                <Form
                 onChange={formData => {
                    if(isFirstScreen) {
                        if(formData.formName) {
                            setFormData({
                                formBuilderComponents: {
                                    formName: formData.formName,
                                    formDescription: formData.formBuilderComponents.formDescription
                                }})
                        } else if(formData.formDescription) {
                            setFormData({
                                formBuilderComponents: {
                                    formName: formData.formBuilderComponents.formName,
                                    formDescription: formData.formDescription
                                }})
                        }
                    } else {
                        if(formData.question) {
                            setFormData({
                                formBuilderComponents: {
                                    formName: formData.formBuilderComponents.formName,
                                    formDescription: formData.formBuilderComponents.formDescription,
                                    questions: {
                                        formQuestionType: currentQuestion,
                                        formQuestion : formData.question,
                                        formQuestionValues: formData.formBuilderComponents.questions && formData.formBuilderComponents.questions.formQuestionValues ? formData.formBuilderComponents.questions.formQuestionValues : ''
                                    }
                                }
                            })
                        } else if(formData.value) {
                            setFormData({
                                formBuilderComponents: {
                                    formName: formData.formBuilderComponents.formName,
                                    formDescription: formData.formBuilderComponents.formDescription,
                                    questions: {
                                        formQuestionType: currentQuestion,
                                        formQuestion : formData.formBuilderComponents.questions && formData.formBuilderComponents.questions.formQuestion ? formData.formBuilderComponents.questions.formQuestion : '',
                                        formQuestionValues: formData.value
                                    }
                                }
                            })
                        }
                    }
                 }}
                 formValue={formData}
                >
                    <div className="formGroup">
                        {isFirstScreen && <>
                            <FormGroup>
                                <ControlLabel>Form Name</ControlLabel>
                                <FormControl name="formName" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Form Description</ControlLabel>
                                <FormControl rows={5} name="formDescription" componentClass="textarea" />
                            </FormGroup>
                        </>
                        }
                        {!isFirstScreen && <>
                            <FormGroup>
                                <ControlLabel>Question Type</ControlLabel>
                                <CustomDropdown title={currentQuestion} trigger="click" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Question</ControlLabel>
                                <FormControl name="question" />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Value</ControlLabel>
                                <FormControl name="value" />
                            </FormGroup>
                            <div style={{float: "right"}}>
                                <Icon size="lg" icon="plus-circle" />
                            </div>
                        </>
                        }
                    </div>
                    <div className="clearFix"></div>
                    {!isFirstScreen && 
                        <div className="formActions">
                            <Icon size="2x" icon={"trash-o"} />
                            <span>Required</span>
                            <Toggle />
                        </div>}
                    <div className="actionButtons">
                        <FormGroup>
                            <ButtonToolbar>
                                <ButtonGroup justified>
                                    {isFirstScreen && 
                                        <Button appearance="primary" block onClick={() => processFormName()}>Next</Button>}
                                    {!isFirstScreen && <>
                                        <Button className="addMore" appearance="primary"  onClick={() => addComponent()}>Add Question</Button>
                                        <Button className="finalize" appearance="primary"  onClick={() => download()}>Finalize</Button>
                                    </>
                                    }
                                </ButtonGroup>
                                
                            </ButtonToolbar>
                        </FormGroup>
                    </div>
                </Form>
            </div>
            <Suspense fallback={<div>Loading...</div>} >
                {/* <div className="gridContainer">
                    <div className="gridItem">
                        <div style={{display: 'flex'}}>
                            <input className="formName" type="text" placeholder="Form Name" />
                        </div>
                    </div>
                    <div className="gridItem">
                        <div style={{display: 'flex'}}>
                            <input className="formDescription" type="text" placeholder="Form Description" />
                        </div>
                    </div>
                    {formState.formBuilderComponents.map((formItem,index) => {
                        if(formItem.type === "static") 
                            return  <div className="gridItem" key={index}>
                                        <StaticText deleteComponent={ () => deleteComponent(formItem.order)}/>
                                    </div>
                        else if(formItem.type === "radio") 
                            return  <div className="gridItem" key={index}>
                                        <RadioInput deleteComponent={() => deleteComponent(formItem.order)}/>
                                    </div>
                        else if(formItem.type === "text-input") 
                            return  <div className="gridItem" key={index}>
                                        <TextInput deleteComponent={() => deleteComponent(formItem.order)}/>
                                    </div>
                        else return null
                    })}
                    
                </div> */}
                <div className="footer">
                    <div className="navigationButtons">
                        <div className="navButton prev">
                        </div>
                        <div className="navButton">
                            <span>{slideNumber}</span>
                        </div>
                        <div className="navButton next">
                        </div>
                    </div>
                </div>
            </Suspense>
        </div>
    )
}
const mapStateToProps = (state) => ({
    newComponent: state.currentForm.currentInput.data,
    formState: state.currentForm.formState.data
});
export default connect(mapStateToProps , { addFormOfType, setFormState })(CreateNew);