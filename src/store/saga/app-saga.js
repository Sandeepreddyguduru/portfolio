import * as type from '../constance/app-constance';
import { all, takeLatest } from 'redux-saga/effects';

function* updateLanguage() {

}

// watchers
export function* rootSaga() {
    yield all([
        takeLatest(type.UPDATE_LANGUAGE, updateLanguage)
    ])
}