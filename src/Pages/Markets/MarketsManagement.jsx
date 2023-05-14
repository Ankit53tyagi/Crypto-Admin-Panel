import React, {useState, useEffect} from 'react';
import { MdSearch } from "react-icons/md";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { getCandleMarkets, getMarkets } from '../../reducer/marketsAction';
import ReactApexChart from "react-apexcharts";
import { getAssets } from '../../reducer/action';

const MarketsManagement = () => {
    const dispatch = useDispatch();
    const marketsList = useSelector((state)=>state.markets.markets.data)

    // get all assets data here

    useEffect(()=>{
        getMarkets(dispatch);
    },[dispatch])

    // end of code

    const unique = [...new Map(marketsList?.map((m) => [m.exchangeId, m])).values()];
    console.log(unique);

    
    const uniqueQuoteID = [...new Map(marketsList?.map((m) => [m.quoteId, m])).values()];
    console.log(uniqueQuoteID);

    const [exchange, setExchange] = useState('')
    const [interval, setInterva] = useState('')
    const [base, setBase] = useState('')
    const [quote, setQuote] = useState('')


    const trackMarkethandle = (e) =>{
        e.preventDefault();
        console.log(exchange + interval + base + quote)
        getCandleMarkets(dispatch,exchange,interval,base,quote);
    }

    const marketsCandleList = useSelector((state)=>state.markets.candle.data)
    console.log(marketsCandleList)

    // marketsCandleList.map((item,i)=>(
    //     {
    //         x: new Date(item.period),
    //         y: [item.open, item.high, item.low, item.low]
    //       }
    // )),


    const [search, setSearch] = useState("");

    const filterMarkets = marketsList?.filter(
      (item) =>
        item.exchangeId?.toLowerCase().includes(search)  || 
        item.baseId?.toLowerCase().includes(search)  || 
        item.quoteId?.toLowerCase().includes(search)  || 
        item.quoteSymbol?.toLowerCase().includes(search)
        );
    console.log(filterMarkets);

    return (
        <>
          <Row className="mb-4">
        <Col md={6}>
          <form className="searchTableInfo">
            <div className="input-group">
              <div className="input-group-prepend bg-transparent border-0">
                <span
                  className="input-group-text  bg-transparent border-0 pr-1 pl-3 h-100"
                  id="basic-addon1"
                >
                  <MdSearch />
                </span>
              </div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="form-control border-0 bg-transparent pl-1 searchList"
                placeholder="Search Markets"
                aria-label="Search User"
                aria-describedby="basic-addon1"
              />
            </div>
          </form>
        </Col>
        <Col md={6}></Col>
      </Row>
             <div className="dash-first dash-common">
                <div className="common-table-wrapper m-0">
                    
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sr.No.</th>
                                    <th>exchangeId</th>
                                    <th>rank</th>
                                    <th>baseSymbol</th>
                                    <th>baseId</th>
                                    <th>quoteSymbol</th>
                                    <th>quoteId</th>
                                    <th>priceQuote</th>
                                    <th>priceUsd</th>
                                    <th>volumeUsd24Hr</th>
                                    <th>percentExchangeVolume</th>
                                    <th>tradesCount24Hr</th>
                                    <th>updated</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterMarkets?.map((item,i)=>(
                                        <tr>
                                        <td>{i+1}</td>
                                        <td>{item?.exchangeId}</td>
                                        <td>{item?.rank}</td>
                                        <td>{item?.baseSymbol}</td>
                                        <td>{item?.baseId}</td>
                                        <td>{item?.quoteSymbol}</td>
                                        <td>{item?.quoteId}</td>
                                        <td>{parseFloat(item?.priceQuote).toFixed(5)}</td>
                                        <td>{parseFloat(item?.priceUsd).toFixed(5)}</td>
                                        <td>{parseFloat(item?.volumeUsd24Hr).toFixed(5)}</td>
                                        <td>{parseFloat(item?.percentExchangeVolume).toFixed(5)}</td>
                                        <td>{item?.tradesCount24Hr}</td>
                                        <td>{new Date(item?.updated).toUTCString()}</td>
                                    </tr>
                                    ))

                                }
                                                                                                                                                                            
                            </tbody>
                        </table>
                    </div>
                  
                </div>
            </div>
           
        </>
    );
}

export default MarketsManagement;
