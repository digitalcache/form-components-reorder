// import axios from "axios";

export const actionTypes = {
    FORM_STATE_START: "FORM_STATE_START",
    FORM_STATE_LOADED: "FORM_STATE_LOADED",
    FORM_STATE_FAILED: "FORM_STATE_FAILED",
    ADD_INPUT_START: "ADD_INPUT_START",
    ADD_INPUT_LOADED: "ADD_INPUT_LOADED",
    ADD_INPUT_FAILED: "ADD_INPUT_FAILED"
};

export const fetchFormState = () => dispatch => {
    dispatch({ type: actionTypes.FORM_COMPONENTS_START, payload: {} });
    
    
}
export const addFormOfType = (type, order) => dispatch => {
    dispatch({ type: actionTypes.ADD_INPUT_START, payload: {} });
    if(type === "static"){
        dispatch({ type: actionTypes.ADD_INPUT_LOADED, payload: {
            "type" : "static",
            "value" : "",
            "order" : order
         } });
    } else if(type === "input-text") {
        dispatch({ type: actionTypes.ADD_INPUT_LOADED, payload: {
            "type" : "text-input",
            "question" : "Enter Question",
            // "allowed-characters": 500,
            "order" : order
        } });
    } else if(type === "radio") {
        dispatch({ type: actionTypes.ADD_INPUT_LOADED, payload: {
            "type" : "radio",
            "question" : "Enter Question",
            // "values" : ["red","green","yellow"],
            "order" : 2
        } });
    } else {
        dispatch({ type: actionTypes.ADD_INPUT_FAILED, payload: {} });
    }


}