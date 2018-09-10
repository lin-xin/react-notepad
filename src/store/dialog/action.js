export const changeVisible = (value) => {
    return {
        type: 'VISIBLE',
        show: value
    }
}

export const changeType = (value) => {
    return {
        type: 'DIALOGTYPE',
        value
    }
}