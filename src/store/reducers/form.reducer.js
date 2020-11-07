import { actionTypes } from "../actions/form.action";

const initialState = {
    formState: {
        data: null,
        loading: false,
        loaded: false,
        error: false
    },
    currentInput: {
        data: null,
        loading: false,
        loaded: false,
        error: false
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
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
