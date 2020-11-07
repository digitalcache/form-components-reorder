import {combineReducers} from 'redux';
import formReducer from './form.reducer';

const rootReducer = combineReducers({
    currentForm: formReducer,
});

export default rootReducer;
