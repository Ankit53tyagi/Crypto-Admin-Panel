import React, { Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

const Spinnerr = React.lazy(() => import("./Components/Spinner/Spinner"));
const Dashboard = React.lazy(() => import("./Pages/Dashboard/Dashboard"));

const UserManagement = React.lazy(() =>  import("./Pages/UserManagement/UserManagement"));
const ViewAssets = React.lazy(() =>  import("./Pages/UserManagement/ViewAssets"));

const RatesManagement = React.lazy(() =>  import("./Pages/Rates/RatesManagement"));
const ViewRates = React.lazy(() =>  import("./Pages/Rates/ViewRates"));

const ExchangesManagement = React.lazy(() =>  import("./Pages/Exchanges/ExchangesManagement"));
const ViewExchanges = React.lazy(() =>  import("./Pages/Exchanges/ViewExchanges"));


const MarketsManagement = React.lazy(() =>  import("./Pages/Markets/MarketsManagement"));
// const ViewMarkets = React.lazy(() =>  import("./Pages/Markets/ViewMarkets"));
function App() {
  return (
    <>
      <Suspense fallback={<Spinnerr/>}>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Dashboard />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/view-assets/:id" element={<ViewAssets />} />
            <Route path="/rates-management" element={<RatesManagement />} />
            <Route path="/view-rates/:id" element={<ViewRates />} />
            <Route path="/exchanges-management" element={<ExchangesManagement />} />
            <Route path="/view-exchanges/:id" element={<ViewExchanges />} />
            <Route path="/markets-management" element={<MarketsManagement />} />
            {/* <Route path="/view-markets/:id" element={<ViewMarkets />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
