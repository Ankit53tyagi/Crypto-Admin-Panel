import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  markets: [],
  candle:[],
  loading:false,
  error:false,
}

export const marketsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    marketsProcess: (state) => {
      state.loading = true
    },
    marketsSuccess: (state,action) => {
      state.loading = false
      state.markets = action.payload
    },
    marketsFailed: (state) => {
      state.error = true
    },
    marketsCandleProcess: (state) => {
      state.loading = true
    },
    marketsCandleSuccess: (state,action) => {
      state.loading = false
      state.candle = action.payload
    },
    marketsCandleFailed: (state) => {
      state.error = true
    }
  },
})

// Action creators are generated for each case reducer function
export const { marketsProcess,marketsSuccess,marketsFailed,marketsCandleProcess,marketsCandleSuccess,marketsCandleFailed} = marketsSlice.actions

export default marketsSlice.reducer