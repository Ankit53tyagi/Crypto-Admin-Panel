import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  assets: [],
  singleAsset:{},
  history:[],
  markets: [],
  loading:false,
  error:false,
}

export const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    assetsProcess: (state) => {
      state.loading = true
    },
    assetsSuccess: (state,action) => {
      state.loading = false
      state.assets = action.payload
    },
    assetsFailed: (state) => {
      state.error = true
    },
    assetsSingleProcess: (state) => {
      state.loading = true
    },
    assetsSingleSuccess: (state,action) => {
      state.loading = false
      state.singleAsset = action.payload
    },
    assetsSingleFailed: (state) => {
      state.error = true
    },
    assetsSingleHistoryProcess: (state) => {
      state.loading = true
    },
    assetsSingleHistorySuccess: (state,action) => {
      state.loading = false
      state.history = action.payload
    },
    assetsSingleHistoryFailed: (state) => {
      state.error = true
    },
    assetsSingleMarketsProcess: (state) => {
      state.loading = true
    },
    assetsSingleMarketsSuccess: (state,action) => {
      state.loading = false
      state.markets = action.payload
    },
    assetsSingleMarketsFailed: (state) => {
      state.error = true
    },    
  },
})

// Action creators are generated for each case reducer function
export const { assetsProcess,assetsSuccess,assetsFailed,assetsSingleProcess,assetsSingleSuccess,assetsSingleFailed,
  assetsSingleHistoryProcess,assetsSingleHistorySuccess,assetsSingleHistoryFailed,
  assetsSingleMarketsProcess,assetsSingleMarketsSuccess,assetsSingleMarketsFailed} = assetsSlice.actions

export default assetsSlice.reducer