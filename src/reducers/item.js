function itemReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'item/incremented':
            return { value: state.value + 1 }
        case 'item/decremented':
            return { value: state.value - 1 }
        default:
            return state
    }
}

export default itemReducer;