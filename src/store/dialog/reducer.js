const defaultState = {
    show: false,
    type: ''
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'VISIBLE':
            return {...state, ...{show: action.show}}
        case 'DIALOGTYPE':
            return {...state, ...{type: action.value}}
        default:
            return state;
    }
}