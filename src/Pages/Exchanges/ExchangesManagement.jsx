import React, {useState, useEffect} from 'react';
import { MdRemoveRedEye,MdSearch } from "react-icons/md";
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { getExchanges } from '../../reducer/exchangesAction';

const ExchangesManagement = () => {
    const dispatch = useDispatch();
    const exchangesList = useSelector((state)=>state.exchanges.exchanges.data)

    // get all assets data here

    useEffect(()=>{
        getExchanges(dispatch);
    },[dispatch])

    // end of code

    const [search, setSearch] = useState('')

   const filterExchanges =  exchangesList?.filter((item) => item.exchangeId?.toLowerCase().includes(search))
    console.log(filterExchanges)
    return (
        <>
         <Row className="mb-4">
                        <Col md={6}>
                            <form className="searchTableInfo">
                            <div className="input-group">
                                <div className="input-group-prepend bg-transparent border-0">
                                    <span className="input-group-text  bg-transparent border-0 pr-1 pl-3 h-100" id="basic-addon1"><MdSearch/></span>
                                </div>
                                <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className="form-control border-0 bg-transparent pl-1 searchList" placeholder="Search Exhanges" aria-label="Search User" aria-describedby="basic-addon1" />
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
                                    <th>id</th>
                                    <th>name</th>
                                    <th>rank</th>
                                    <th>percentTotalVolume</th>
                                    <th>volumeUsd</th>
                                    <th>tradingPairs</th>
                                    <th>socket</th>
                                    <th>exchangeUrl</th>
                                    <th>updated</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterExchanges?.map((item,i)=>(
                                        <tr>
                                        <td>{i+1}</td>
                                        <td>{item?.exchangeId}</td>
                                        <td>{item?.name}</td>
                                        <td>{item?.rank}</td>
                                        <td>{parseFloat(item?.percentTotalVolume).toFixed(4)}</td>
                                        <td>{parseFloat(item?.volumeUsd).toFixed(4)}</td>
                                        <td>{item?.tradingPairs}</td>
                                        <td>{item?.socket ? 'true' : 'false'}</td>
                                        <td><a href={item?.exchangeUrl} target="_blank">{item?.exchangeUrl}</a></td>
                                        <td>{new Date(item?.updated).toLocaleTimeString("en-US")}</td>
                                        <td className="action-tab">
                                            <Link className="action-icon view-info" to={`/view-exchanges/${item.exchangeId}`}><MdRemoveRedEye style={{width:'17px',height:'17px'}} /></Link>
                                        </td>
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

export default ExchangesManagement;
