import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getSingleAssets, getSingleAssetsHistory, getSingleAssetsMarkets } from "../../reducer/action";

const ViewAssets = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const assetId = params.id;
  const navigate = useNavigate();
  // get all assets data here
  const singleAsset = useSelector((state) => state.assets.singleAsset.data);

  let {
    changePercent24Hr,
    marketCapUsd,
    maxSupply,
    name,
    priceUsd,
    rank,
    supply,
    vwap24Hr,
  } = singleAsset ?? {};
  useEffect(() => {
    getSingleAssets(dispatch, assetId);
  }, [assetId]);

  // end of code

  // get all assets history data here
  const singleAssetHistory = useSelector((state) => state.assets.history.data);
  console.log(singleAssetHistory);

  useEffect(() => {
    getSingleAssetsHistory(dispatch, assetId);
  }, [assetId]);
  // end of code

// get all assets markets data here
const singleAssetMarkets = useSelector((state) => state.assets.markets.data);
console.log(singleAssetMarkets);

useEffect(() => {
  getSingleAssetsMarkets(dispatch, assetId);
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
            <span className="d-block TokenWrapper_id">Rank :{rank}</span>
            <div className="TokenWrapper_box">
              <h2 className="TokenWrapper_name">{name}</h2>
              <span className="d-block TokenWrapper_tag text-center">
                Price : {parseFloat(priceUsd).toFixed(3)}
              </span>
              {/* <Link className="TokenWrapper_link">0X116.......151F73d <MdContentCopy/></Link> */}
            </div>
          </div>
        </Col>
        {/* <Col xl={{span: 2, order: 3}} sm={{span: 6, order: 2}} className="text-end">
                    <Link className="btn btn-secondary btn-lg" onClick={handleShow}><MdOutlineBlock/> Block</Link>
                </Col> */}
      </Row>
      <Row className="mt-3">
        <Col xl={4} sm={6}>
          <div className="TokenWrapper_info">
            <span className="TokenWrapper_span1">Market Cap Usd</span>
            <span className="TokenWrapper_span2">
              {parseFloat(marketCapUsd).toFixed(3)}
            </span>
          </div>
        </Col>
        <Col xl={4} sm={6}>
          <div className="TokenWrapper_info">
            <span className="TokenWrapper_span1">Supply</span>
            <span className="TokenWrapper_span2">
              {parseFloat(supply).toFixed(3)}
            </span>
          </div>
        </Col>
        <Col xl={4} sm={6}>
          <div className="TokenWrapper_info">
            <span className="TokenWrapper_span1">Max Supply</span>
            <span className="TokenWrapper_span2">
              {parseFloat(maxSupply).toFixed(3)}
            </span>
          </div>
        </Col>
      </Row>
      <hr className="hr-3" />
      <Row>
        <Col xl={4} sm={6}>
          <div className="TokenWrapper_info">
            <span className="TokenWrapper_span1">Symbol</span>
            <span className="TokenWrapper_span2">
              {parseFloat(Symbol).toFixed(3)}
            </span>
          </div>
        </Col>
        <Col xl={4} sm={6}>
          <div className="TokenWrapper_info">
            <span className="TokenWrapper_span1">changePercent24Hr</span>
            <span className="TokenWrapper_span2">
              {parseFloat(changePercent24Hr).toFixed(3)}
            </span>
          </div>
        </Col>
        <Col xl={4} sm={6}>
          <div className="TokenWrapper_info">
            <span className="TokenWrapper_span1">vwap24Hr</span>
            <span className="TokenWrapper_span2">
              {parseFloat(vwap24Hr).toFixed(3)}
            </span>
          </div>
        </Col>
      </Row>
      <div className="dash-first dash-common mb-3">
        <div className="common-table-wrapper m-0">
          <div className="row mb-3">
            <Col md={6} className="view-user-head">
              <h4>Assets History</h4>
            </Col>
            <Col md={6} className="text-right"></Col>
          </div>
          <div className="table-responsive">
            <table
              id="customerManagment"
              className="display tenEntry"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>priceUsd</th>
                  <th>Date</th>
                  <th>time</th>
                </tr>
              </thead>
              <tbody>
                {singleAssetHistory?.map((item, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{parseFloat(item.priceUsd).toFixed(4)}</td>
                      <td>{new Date(item.date).toUTCString()}</td>
                      <td>{new Date(item.time).toLocaleTimeString("en-US")}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="dash-first dash-common mb-3">
        <div className="common-table-wrapper m-0">
          <div className="row mb-3">
            <Col md={6} className="view-user-head">
              <h4>Markets</h4>
            </Col>
            <Col md={6} className="text-right"></Col>
          </div>
          <div className="table-responsive">
            <table
              id="customerManagment"
              className="display tenEntry"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>exchangeId</th>
                  <th>baseId</th>
                  <th>quoteId</th>
                  <th>baseSymbol</th>
                  <th>quoteSymbol</th>
                  <th>volumeUsd24Hr</th>
                  <th>priceUsd</th>
                  <th>volumePercent</th>
                </tr>
              </thead>
              <tbody>
                {singleAssetMarkets?.map((item, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item.exchangeId}</td>
                      <td>{item.baseId}</td>
                      <td>{item.quoteId}</td>
                      <td>{item.baseSymbol}</td>
                      <td>{item.quoteSymbol}</td>
                      <td>{parseFloat(item.volumeUsd24Hr).toFixed(4)}</td>
                      <td>{parseFloat(item.priceUsd).toFixed(4)}</td>
                      <td>{parseFloat(item.volumePercent).toFixed(4)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  );
};

export default ViewAssets;
