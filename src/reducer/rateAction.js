import axios from "../utils/axios";
import { ratesProcess,ratesSuccess,ratesFailed,ratesSingleProcess,ratesSingleSuccess,ratesSingleFailed } from "./ratesSlice";

export const getRates = async (dispatch) =>{
    dispatch(ratesProcess())
    const {data} = await axios.get('rates');
    console.log(data)
    if(data){
        console.log('rates data is here')
        dispatch(ratesSuccess(data))
    }else{
        console.log('rates data not found')
        dispatch(ratesFailed())
    } 
}

export const getSingleRates = async (dispatch,id) =>{
    dispatch(ratesSingleProcess())
    const {data} = await axios.get(`rates/${id}`);
    console.log(data)
    if(data){
        console.log('rates data is here')
        dispatch(ratesSingleSuccess(data))
    }else{
        console.log('rates data not found')
        dispatch(ratesSingleFailed())
    } 
}
