import axios from "../utils/axios";
import { exchangesProcess,exchangesSuccess,exchangesFailed,exchangesSingleProcess,exchangesSingleSuccess,exchangesSingleFailed } from "./exchangesSlice";

export const getExchanges = async (dispatch) =>{
    dispatch(exchangesProcess())
    const {data} = await axios.get('exchanges');
    console.log(data)
    if(data){
        console.log('exchanges data is here')
        dispatch(exchangesSuccess(data))
    }else{
        console.log('exchanges data not found')
        dispatch(exchangesFailed())
    } 
}

export const getSingleExchanges = async (dispatch,id) =>{
    dispatch(exchangesSingleProcess())
    const {data} = await axios.get(`exchanges/${id}`);
    console.log(data)
    if(data){
        console.log('exchanges data is here')
        dispatch(exchangesSingleSuccess(data))
    }else{
        console.log('exchanges data not found')
        dispatch(exchangesSingleFailed())
    } 
}
