
const CinemasReducer = (prevState = {
    list: []
}, action) => {
    let newState = {...prevState}
    switch (action.type){
        case 'change_list':
            newState.list = action.payload
            return newState
        default:
            return newState
    }
}

export default CinemasReducer


