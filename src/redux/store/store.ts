import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query/react"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

import { rtkApi } from "../../services/rtk"
import { authSlice, userSettingsSlice } from "../slice"

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [userSettingsSlice.name]: userSettingsSlice.reducer,
  [rtkApi.reducerPath]: rtkApi.reducer,
})

const persistConfig = {
  key: "root",
  version: 0,
  storage,
  whitelist: [authSlice.name, userSettingsSlice.name],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([rtkApi.middleware]),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
