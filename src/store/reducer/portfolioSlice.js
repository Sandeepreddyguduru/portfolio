import * as TYPE from '../constance/app-constance';

const initialState = {
    appTheme: 'light',
    language: 'en',
    ginee: false,
    voiceRecognition: false
}

const rootReducer = (state = initialState, action) => {
    switch (action?.type) {
        case TYPE.UPDATE_LANGUAGE:
            return { ...state, language: action.payload }
        case TYPE.UPDATE_THEME:
            return { ...state, appTheme: action.payload }
        default:
            return state
    }
}

export default rootReducer;

