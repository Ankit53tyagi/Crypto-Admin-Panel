import axios from "../utils/axios";
import { assetsProcess,assetsSuccess,assetsFailed,assetsSingleProcess,assetsSingleSuccess,assetsSingleFailed,
    assetsSingleHistoryProcess,assetsSingleHistorySuccess,assetsSingleHistoryFailed,
    assetsSingleMarketsProcess,assetsSingleMarketsSuccess,assetsSingleMarketsFailed } from "./assetsSlice";

export const getAssets = async (dispatch) =>{
    dispatch(assetsProcess())
    const {data} = await axios.get('assets');
    console.log(data)
    if(data){
        console.log('data is here')
        dispatch(assetsSuccess(data))
    }else{
        console.log('data not found')
        dispatch(assetsFailed())
    } 
}

export const getSingleAssets = async (dispatch,id) =>{
    dispatch(assetsSingleProcess())
    const {data} = await axios.get(`assets/${id}`);
    console.log(data)
    if(data){
        console.log('data is here')
        dispatch(assetsSingleSuccess(data))
    }else{
        console.log('data not found')
        dispatch(assetsSingleFailed())
    } 
}

export const getSingleAssetsHistory = async (dispatch,id) =>{
    dispatch(assetsSingleHistoryProcess())
    const {data} = await axios.get(`assets/${id}/history?interval=d1`);
    console.log(data)
    if(data){
        console.log('data is here')
        dispatch(assetsSingleHistorySuccess(data))
    }else{
        console.log('data not found')
        dispatch(assetsSingleHistoryFailed())
    } 
}

export const getSingleAssetsMarkets = async (dispatch,id) =>{
    dispatch(assetsSingleMarketsProcess())
    const {data} = await axios.get(`/assets/${id}/markets`);
    console.log(data)
    if(data){
        console.log('data is here')
        dispatch(assetsSingleMarketsSuccess(data))
    }else{
        console.log('data not found')
        dispatch(assetsSingleMarketsFailed())
    } 
}