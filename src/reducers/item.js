function itemReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'item/incremented':
            return { value: state.value + action.count }
        case 'item/decremented':
            return { value: state.value - action.count }
        case 'item/delete':
            return  { value: 0 }
        default:
            return state
    }
}

export default itemReducer;