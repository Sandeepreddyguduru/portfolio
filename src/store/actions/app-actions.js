import * as TYPE from '../constance/app-constance';

export function updateLanguage(payload) {
    return {
        type: TYPE.UPDATE_LANGUAGE,
        payload
    }
}
export function updateTheme(payload) {
    return {
    type: TYPE.UPDATE_THEME,
        payload
    }
}
export function updatePage(payload) {
    return {
        type: TYPE.UPDATE_PAGE,
        payload
    }
}
export function toggleVoice(payload) {
    return {
        type: TYPE.UPDATE_TOGGLE_VOICE,
        payload
    }
}
export function getProd(payload) {
    return {
        type: TYPE.GET_PRODUCTS,
        payload
    }
}