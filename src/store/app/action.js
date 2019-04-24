export const addevent = (value) => {
    return {
        type: 'ADDEVENT',
        content: value
    }
}

export const changetype = (id, type) => {
    return {
        type: 'CHANGETYPE',
        id,
        eventType: type
    }
}

export const clearevent = () => {
    return {
        type: 'CLEAREVENT'
    }
}

export const uploadevent = (value) => {
    return {
        type: 'UPLOADEVENT',
        content: value
    }
}