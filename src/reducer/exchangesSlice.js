import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  exchanges: [],
  singleExchange:{},
  loading:false,
  error:false,
}

export const exchangesSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    exchangesProcess: (state) => {
      state.loading = true
    },
    exchangesSuccess: (state,action) => {
      state.loading = false
      state.exchanges = action.payload
    },
    exchangesFailed: (state) => {
      state.error = true
    },
    exchangesSingleProcess: (state) => {
      state.loading = true
    },
    exchangesSingleSuccess: (state,action) => {
      state.loading = false
      state.singleExchange = action.payload
    },
    exchangesSingleFailed: (state) => {
      state.error = true
    }    
  },
})

// Action creators are generated for each case reducer function
export const { exchangesProcess,exchangesSuccess,exchangesFailed,exchangesSingleProcess,exchangesSingleSuccess,exchangesSingleFailed} = exchangesSlice.actions

export default exchangesSlice.reducer