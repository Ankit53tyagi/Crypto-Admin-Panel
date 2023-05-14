import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rates: [],
  singleRate:{},
  loading:false,
  error:false,
}

export const ratesSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    ratesProcess: (state) => {
      state.loading = true
    },
    ratesSuccess: (state,action) => {
      state.loading = false
      state.rates = action.payload
    },
    ratesFailed: (state) => {
      state.error = true
    },
    ratesSingleProcess: (state) => {
      state.loading = true
    },
    ratesSingleSuccess: (state,action) => {
      state.loading = false
      state.singleRate = action.payload
    },
    ratesSingleFailed: (state) => {
      state.error = true
    }    
  },
})

// Action creators are generated for each case reducer function
export const { ratesProcess,ratesSuccess,ratesFailed,ratesSingleProcess,ratesSingleSuccess,ratesSingleFailed} = ratesSlice.actions

export default ratesSlice.reducer