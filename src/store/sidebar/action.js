export const collapse = (value) => {
    return {
        type: 'COLLAPSE',
        collapsed: value
    }
}

export const handletheme = (value) => {
    return {
        type: 'SHOWTHEME',
        showTheme: value
    }
}

export const switchtheme = (value) => {
    return {
        type: 'THEME',
        theme: value
    }
}