import React, {useState, useEffect} from 'react';
import { MdRemoveRedEye,MdOutlineBlock,MdSearch } from "react-icons/md";
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getAssets } from '../../reducer/action';
import { useDispatch, useSelector } from 'react-redux';

const UserManagement = () => {
    const dispatch = useDispatch();
    const assetsList = useSelector((state)=>state.assets.assets.data)

    // get all assets data here

    useEffect(()=>{
        getAssets(dispatch);
    },[dispatch])

    const [search, setSearch] = useState('')

   const filterAssts =  assetsList?.filter((item) => item.name.toLowerCase().includes(search) || item.rank.includes(search) || item.priceUsd.includes(search) || item.symbol.includes(search));
    console.log(filterAssts)

    // end of code
    return (
        <>
             <div className="dash-first dash-common">
                <div className="common-table-wrapper m-0">
                    <Row className="mb-4">
                        <Col md={6}>
                            <form className="searchTableInfo">
                            <div className="input-group">
                                <div className="input-group-prepend bg-transparent border-0">
                                    <span className="input-group-text  bg-transparent border-0 pr-1 pl-3 h-100" id="basic-addon1"><MdSearch/></span>
                                </div>
                                <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className="form-control border-0 bg-transparent pl-1 searchList" placeholder="Search Assets" aria-label="Search User" aria-describedby="basic-addon1" />
                                </div>
                            </form>
                        </Col>
                        <Col md={6}></Col>
                    </Row>
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sr.No.</th>
                                    <th>Name</th>
                                    <th>Price (USD)</th>
                                    <th>Rank</th>
                                    <th>Symbol</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterAssts?.length > 0 ? filterAssts?.map((item,i)=>(
                                        <tr>
                                        <td>{i+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.priceUsd}</td>
                                        <td>{item.rank}</td>
                                        <td>{item.symbol}</td>
                                        <td className="action-tab">
                                            <Link className="action-icon view-info" to={`/view-assets/${item.id}`}><MdRemoveRedEye style={{width:'17px',height:'17px'}} /></Link>
                                        </td>
                                    </tr>
                                    ))
                                    :
                                    <tr className='text-center'>
                                        <td colSpan='100%'>no data found</td>
                                    </tr>

                                }
                                                                                                                                                                            
                            </tbody>
                        </table>
                    </div>
                    

                </div>
            </div>
           
        </>
    );
}

export default UserManagement;
