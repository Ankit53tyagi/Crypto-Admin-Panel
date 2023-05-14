import axios from "../utils/axios";
import { marketsProcess,marketsSuccess,marketsFailed,marketsCandleProcess,marketsCandleSuccess,marketsCandleFailed } from "./marketsSlice";

export const getMarkets = async (dispatch) =>{
    dispatch(marketsProcess())
    const {data} = await axios.get('markets');
    console.log(data)
    if(data){
        console.log('markets data is here')
        dispatch(marketsSuccess(data))
    }else{
        console.log('markets data not found')
        dispatch(marketsFailed())
    } 
}

export const getCandleMarkets = async (dispatch,exchange,interval,base,quote) =>{
    dispatch(marketsCandleProcess())
    const {data} = await axios.get(`candles?exchange=${exchange}&interval=${interval}&baseId=${base}&quoteId=${quote}
    `);
    console.log(data)
    if(data){
        console.log('markets data is here')
        dispatch(marketsCandleSuccess(data))
    }else{
        console.log('markets data not found')
        dispatch(marketsCandleFailed())
    } 
}
