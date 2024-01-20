import * as type from '../constance/app-constance';
import { all, takeLatest, put, call } from 'redux-saga/effects';

const api = async ({ url}) => {
    let products = await fetch(url);
    products = await products?.json()
    return products;
}

function* getProd() {
    try {
        const products = yield call(api, {
            url: 'https://dummyjson.com/products/1'
        });
        yield put({
            type: type.GET_PRODUCTS_SUCESS,
            payload: products
        })
    } catch (error) {
        console.log(error)
    }
}

// watchers
export function* rootSaga() {
    yield all([
        takeLatest(type.GET_PRODUCTS, getProd)
    ])
}