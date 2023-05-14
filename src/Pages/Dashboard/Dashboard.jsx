import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserGroup from '../../assets/image/userGroup.svg'
import Live from '../../assets/image/live.svg'
import Played from '../../assets/image/played.svg'
import { useSelector, useDispatch } from 'react-redux';
import { getAssets } from '../../reducer/action';
import { getExchanges } from '../../reducer/exchangesAction';
import { getRates } from '../../reducer/rateAction';
import { getMarkets } from '../../reducer/marketsAction';

const Dashboard = () => {
    const assetsCount = useSelector((state)=>state.assets.assets.data);
    const exchangesCount = useSelector((state)=>state.exchanges.exchanges.data);
    const ratesCount = useSelector((state)=>state.rates.rates.data);
    const marketsCount = useSelector((state)=>state.markets.markets.data);
    const dispatch = useDispatch()
    useEffect(() => {
        getAssets(dispatch);
        getExchanges(dispatch);
        getRates(dispatch);
        getMarkets(dispatch);
    }, []);

    return (
        <>
        <div className="dash-first dash-common pt-0">
        <Container>
        <Row className='mb-3'>
                <Col lg={6} className="mb-4">
                    <div className="serviceItems h-100">
                        <div className="serviceItems_left">
                            <span className="serviceItemsName">Total Assets</span>
                            <h3>{assetsCount?.length}</h3>
                        </div>
                        <div className="serviceItems_right">
                            <img src={UserGroup} alt="Total Users On Platform" />
                        </div>
                    </div>
                </Col>
                <Col lg={6} className="mb-4">
                    <div className="serviceItems h-100">
                        <div className="serviceItems_left">
                            <span className="serviceItemsName">Total Rates</span>
                            <h3>{ratesCount?.length}</h3>
                        </div>
                        <div className="serviceItems_right">
                            <img src={Live} alt="Total LIVE Matches" />
                        </div>
                    </div>
                </Col>
                <Col lg={6} className="mb-4">
                    <div className="serviceItems h-100">
                        <div className="serviceItems_left">
                            <span className="serviceItemsName">Total Exhanges</span>
                            <h3>{exchangesCount?.length}</h3>
                        </div>
                        <div className="serviceItems_right">
                            <img src={Played} alt="Already Played Matches" />
                        </div>
                    </div>
                </Col>
                <Col lg={6} className="mb-4">
                    <div className="serviceItems h-100">
                        <div className="serviceItems_left">
                            <span className="serviceItemsName">Total Markets</span>
                            <h3>{marketsCount?.length}</h3>
                        </div>
                        <div className="serviceItems_right">
                            <img src={Played} alt="Total Upcoming/ Scheduled Matches" />
                        </div>
                    </div>
                </Col>
               
            </Row>

        </Container>
        </div>  
        </>
    );
}

export default Dashboard;
