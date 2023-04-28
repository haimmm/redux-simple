import {INCREMENT, DECREMENT} from "../reducers/counter.reducer"

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}