import * as TYPE from '../constance/app-constance';

export function updateLanguage(payload) {
    return {
        type: TYPE.UPDATE_LANGUAGE,
        payload
    }
}