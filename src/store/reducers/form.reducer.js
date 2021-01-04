import { actionTypes } from "../actions/form.action";

const initialState = {
    formState: {
        // data: [
        //     // {
        //     //     "formName": "",
        //     //     "formDescription": ""
        //     // }
        //     // {
        //     //     "type" : "static",
        //     //     "value" : "Example of the form builder in action",
        //     //     "order" : 1
        //     // },
        //     // {
        //     //     "type" : "radio",
        //     //     "question" : "What is the color?",
        //     //     "values" : ["red","green","yellow"],
        //     //     "order" : 2
        //     // },
        //     // {
        //     //     "type" : "text-input",
        //     //     "question" : "What is your name?",
        //     //     "allowed-characters": 500,
        //     //     "order" : 3
        //     // },
        // ],
        data: [],
        loading: false,
        loaded: false,
        error: false
    },
    currentInput: {
        data: [],
        loading: false,
        loaded: false,
        error: false
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.FORM_STATE_START:
            return {
                ...state,
                formState: {
                    data: [],
                    loading: true,
                    loaded: false,
                    error: false
                }
            };
        case actionTypes.FORM_STATE_LOADED:
            return {
                ...state,
                formState: {
                    data: action.payload,
                    loading: false,
                    loaded: true,
                    error: false
                }
            };
        case actionTypes.FORM_STATE_FAILED:
            return {
                ...state,
                formState: {
                    data: [],
                    loading: false,
                    loaded: true,
                    error: true
                }
            };
        case actionTypes.ADD_INPUT_START:
            return {
                ...state,
                currentInput: {
                    data: [],
                    loading: true,
                    loaded: false,
                    error: false
                }
            };
        case actionTypes.ADD_INPUT_LOADED:
            return {
                ...state,
                currentInput: {
                    data: action.payload,
                    loading: false,
                    loaded: true,
                    error: false
                }
            };
        case actionTypes.ADD_INPUT_FAILED:
            return {
                ...state,
                currentInput: {
                    data: [],
                    loading: false,
                    loaded: true,
                    error: true
                }
            };
        default:
            return state;
    }
};
