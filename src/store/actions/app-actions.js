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