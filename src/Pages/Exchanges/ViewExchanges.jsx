import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdOutlineBlock, MdContentCopy } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { getSingleAssets, getSingleAssetsHistory, getSingleAssetsMarkets } from "../../reducer/action";
import { getSingleRates } from "../../reducer/rateAction";
import { getSingleExchanges } from "../../reducer/exchangesAction";

const ViewExchanges = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const assetId = params.id;
  const navigate = useNavigate();
  // get all assets data here
  const singleExchangeData = useSelector((state) => state.exchanges.singleExchange.data);

  let {
    exchangeId,
    name,
    rank,
    percentTotalVolume,
    volumeUsd,
    tradingPairs,
    socket,
    exchangeUrl,
    updated
  } = singleExchangeData ?? {};
  useEffect(() => {
    getSingleExchanges(dispatch, assetId);
  }, [assetId]);

  // end of code

  return (
    <>
      <Row>
        <Col xl={{ span: 2, order: 1 }} sm={{ span: 6, order: 1 }}>
        <Link className="btn btn-back btm-sm" onClick={()=>navigate(-1)}>Back</Link>
        </Col>
        <Col xl={{ span: 8, order: 2 }} sm={{ span: 12, order: 3 }}>
          <div className="TokenWrapper text-center">
            <span className="d-block TokenWrapper_id">ID : {exchangeId}</span>
            <div className="TokenWrapper_box">
              <h2 className="TokenWrapper_name">Name : {name}</h2>
            </div>
          </div>
        </Col>

      </Row>
      <Row className="mt-3">
        <Col xl={4} sm={6} className='mb-3'>
          <div className="TokenWrapper_info">
            <span className="TokenWrapper_span1">rank</span>
            <span className="TokenWrapper_span2">
                {rank}
            </span>
          </div>
        </Col>
        <Col xl={4} sm={6} className='mb-3'>
          <div className="TokenWrapper_info">
            <span className="TokenWrapper_span1">percentTotalVolume</span>
            <span className="TokenWrapper_span2">
             {parseFloat(percentTotalVolume).toFixed(6)}
            </span>
          </div>
        </Col>
        <Col xl={4} sm={6} className='mb-3'>
          <div className="TokenWrapper_info">
            <span className="TokenWrapper_span1">volumeUsd</span>
            <span className="TokenWrapper_span2">
              {parseFloat(volumeUsd).toFixed(4)}
            </span>
          </div>
        </Col>
        <Col xl={4} sm={6} className='mb-3'>
          <div className="TokenWrapper_info">
            <span className="TokenWrapper_span1">tradingPairs</span>
            <span className="TokenWrapper_span2">
             {tradingPairs}
            </span>
          </div>
        </Col>
        <Col xl={4} sm={6} className='mb-3'>
          <div className="TokenWrapper_info">
            <span className="TokenWrapper_span1">socket</span>
            <span className="TokenWrapper_span2">
             {socket}
            </span>
          </div>
        </Col>
        <Col xl={4} sm={6} className='mb-3'>
          <div className="TokenWrapper_info">
            <span className="TokenWrapper_span1">exchangeUrl</span>
            <span className="TokenWrapper_span2">
             <a href={exchangeUrl} target="_blank">{exchangeUrl}</a>
            </span>
          </div>
        </Col>
        <Col xl={4} sm={6} className='mb-3'>
          <div className="TokenWrapper_info">
            <span className="TokenWrapper_span1">updated</span>
            <span className="TokenWrapper_span2">
             {new Date(updated).toLocaleTimeString("en-US")}
            </span>
          </div>
        </Col>
      </Row>

    </>
  );
};

export default ViewExchanges;
