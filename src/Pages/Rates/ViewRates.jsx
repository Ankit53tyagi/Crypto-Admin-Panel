import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getSingleRates } from "../../reducer/rateAction";

const ViewRates = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const assetId = params.id;
  const navigate = useNavigate();

  // get all assets data here
  const singleRate = useSelector((state) => state.rates.singleRate.data);

  let {
    id,
    symbol,
    currencySymbol,
    type,
    rateUsd
  } = singleRate ?? {};
  useEffect(() => {
    getSingleRates(dispatch, assetId);
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
            <span className="d-block TokenWrapper_id"></span>
            <div className="TokenWrapper_box">
              <h2 className="TokenWrapper_name">ID : {id}</h2>

            </div>
          </div>
        </Col>

      </Row>
      <Row className="mt-3">
        <Col xl={6} sm={6} className='mb-3'>
          <div className="TokenWrapper_info">
            <span className="TokenWrapper_span1">symbol</span>
            <span className="TokenWrapper_span2">
                {symbol}
            </span>
          </div>
        </Col>
        <Col xl={6} sm={6} className='mb-3'>
          <div className="TokenWrapper_info">
            <span className="TokenWrapper_span1">currencySymbol</span>
            <span className="TokenWrapper_span2">
             {currencySymbol??"null"}
            </span>
          </div>
        </Col>
        <Col xl={6} sm={6} className='mb-3'>
          <div className="TokenWrapper_info">
            <span className="TokenWrapper_span1">type</span>
            <span className="TokenWrapper_span2">
              {type}
            </span>
          </div>
        </Col>
        <Col xl={6} sm={6} className='mb-3'>
          <div className="TokenWrapper_info">
            <span className="TokenWrapper_span1">rateUsd</span>
            <span className="TokenWrapper_span2">
             {rateUsd}
            </span>
          </div>
        </Col>
      </Row>

    </>
  );
};

export default ViewRates;
