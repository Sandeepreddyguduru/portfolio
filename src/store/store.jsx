import { configureStore } from '@reduxjs/toolkit'
import portfolioSlice from './reducer/portfolioSlice'
import createSagaMiddleware from 'redux-saga';
// import rootReducer from './reducer/portfolioSlice';
import { rootSaga } from './saga/app-saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: portfolioSlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
