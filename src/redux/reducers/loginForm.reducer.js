//types
export const EMAIL = 'EMAIL';
export const PASSWORD = 'PASSWORD';

//initial state
const initState = {
    email: '',
    password: ''
}

const loginFormReducer = (state=initState, action) => {
    switch(action.type){
        case EMAIL:
            return {...state, email: action.payload};
        case PASSWORD:
            return {...state, password: action.payload};
        default:
            return state;
    }
}

export default loginFormReducer;