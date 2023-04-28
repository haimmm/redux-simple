import { createStore, combineReducers } from 'redux';
import counterReducer from "./reducers/counter.reducer"
import loginFormReducer from "./reducers/loginForm.reducer"

const combinedReducers = combineReducers({counter: counterReducer,loginForm: loginFormReducer} );

const store = createStore(combinedReducers);

export default store;