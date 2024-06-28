// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import themeConfigReducer from './themeConfigReducer';
//
// const rootReducer = combineReducers({
//     theme: persistReducer(
//         {
//             key: 'theme',
//             storage,
//             whitelist: [],
//         },
//         themeConfigReducer
//     ),
// });
//
// const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// });
//
// export default store;
// export const persistor = persistStore(store);
// export type IRootState = ReturnType<typeof store.getState>;
