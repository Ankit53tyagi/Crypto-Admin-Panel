import React, { useState, useEffect } from "react";
import { MdRemoveRedEye, MdOutlineBlock, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getAssets } from "../../reducer/action";
import { useDispatch, useSelector } from "react-redux";
import { getRates } from "../../reducer/rateAction";

const RatesManagement = () => {
  const dispatch = useDispatch();
  const ratesList = useSelector((state) => state.rates.rates.data);

  // get all assets data here

  useEffect(() => {
    getRates(dispatch);
  }, [dispatch]);

  // end of code

  const [search, setSearch] = useState("");

  const filterRates = ratesList?.filter(
    (item) =>
      item.id?.toLowerCase().includes(search) ||
      item.symbol.toLowerCase().includes(search) ||
      item.type.toLowerCase().includes(search) ||
      item.rateUsd.includes(search)
  );
  console.log(filterRates);
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
                placeholder="Search Rates"
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
                  <th>id</th>
                  <th>symbol</th>
                  <th>currencySymbol</th>
                  <th>type</th>
                  <th>rateUsd</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {filterRates?.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item?.id}</td>
                    <td>{item?.symbol}</td>
                    <td>{item?.currencySymbol ?? "Null"}</td>
                    <td>{item?.type}</td>
                    <td>{parseFloat(item?.rateUsd).toFixed(4)}</td>
                    <td className="action-tab">
                      <Link
                        className="action-icon view-info"
                        to={`/view-rates/${item.id}`}
                      >
                        <MdRemoveRedEye
                          style={{ width: "17px", height: "17px" }}
                        />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatesManagement;
