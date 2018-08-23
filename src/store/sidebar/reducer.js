const defaultState = {
    collapsed: false,
    theme: 'blue',
    showTheme: false
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'COLLAPSE':
            return {...state, ...{collapsed: action.collapsed}}
        case 'THEME':
            return {...state, ...{theme: action.theme}}
        case 'SHOWTHEME':
            return {...state, ...{showTheme: action.showTheme}}
        default:
            return state;
    }
}