import * as TYPE from '../constance/app-constance';

const initialState = {
    appPage: 'Home',
    appTheme: 'light',
    language: 'en',
    ginee: false,
    assistanceVoice: false,
    voiceRecognition: false
}

const rootReducer = (state = initialState, action) => {
    switch (action?.type) {
        case TYPE.UPDATE_LANGUAGE:
            return { ...state, language: action.payload }
        case TYPE.UPDATE_THEME:
            return { ...state, appTheme: action.payload }
        case TYPE.UPDATE_PAGE:
            return { ...state, appPage: action.payload }
        case TYPE.UPDATE_TOGGLE_VOICE:
            return { ...state, assistanceVoice: action.payload }
        case TYPE.GET_PRODUCTS_SUCESS:
            return { ...state, prod: action.payload }
        default:
            return state
    }
}

export default rootReducer;

