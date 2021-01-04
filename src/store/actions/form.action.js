// import axios from "axios";

export const actionTypes = {
    FORM_STATE_START: "FORM_STATE_START",
    FORM_STATE_LOADED: "FORM_STATE_LOADED",
    FORM_STATE_FAILED: "FORM_STATE_FAILED",
    ADD_INPUT_START: "ADD_INPUT_START",
    ADD_INPUT_LOADED: "ADD_INPUT_LOADED",
    ADD_INPUT_FAILED: "ADD_INPUT_FAILED"
};

export const setFormState = (formState) => dispatch => {
    dispatch({ type: actionTypes.FORM_STATE_START, payload: {} });
    dispatch({ type: actionTypes.FORM_STATE_LOADED, payload: formState });
}
export const addFormOfType = (type, order) => dispatch => {
    dispatch({ type: actionTypes.ADD_INPUT_START, payload: {} });
    if(type === "Checkboxes"){
        dispatch({ type: actionTypes.ADD_INPUT_LOADED, payload: {
            type : "Checkboxes",
            question : "",
         } });
    } else if(type === "Short Answer") {
        dispatch({ type: actionTypes.ADD_INPUT_LOADED, payload: {
            type : "Short Answer",
            question : "",
        } });
    } else if(type === "Long Answer") {
        dispatch({ type: actionTypes.ADD_INPUT_LOADED, payload: {
            type : "Long Answer",
            question : "",
        } });
    } else if(type === "Multiple Choice") {
        dispatch({ type: actionTypes.ADD_INPUT_LOADED, payload: {
            type : "Multiple Choice",
            question : "",
        } });
    } else if(type === "Dropdown") {
        dispatch({ type: actionTypes.ADD_INPUT_LOADED, payload: {
            type : "Dropdown",
            question : "",
        } });
    } else {
        dispatch({ type: actionTypes.ADD_INPUT_FAILED, payload: {} });
    }


}