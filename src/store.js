import { configureStore } from '@reduxjs/toolkit'
import assetsReducer from './reducer/assetsSlice'
import ratesReducer from './reducer/ratesSlice'
import exchangesReducer from './reducer/exchangesSlice'
import marketsReducer from './reducer/marketsSlice'

export const store = configureStore({
  reducer: {
    assets : assetsReducer,
    rates : ratesReducer,
    exchanges : exchangesReducer,
    markets : marketsReducer
  },
})