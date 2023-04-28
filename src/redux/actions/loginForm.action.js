export const textInputChange = (e) => {
    return {
        type: e.target.name,
        payload: e.target.value
    }
}