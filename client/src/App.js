import { useEffect } from "react";
import { BrowserRouter, Route, useLocation, Routes } from "react-router-dom";
import Checkout from "./web/checkout/Checkout";
import Home from './web/home/Home';
import ItemDetails from './web/itemDetails/ItemDetails'
import Conform from './web/checkout/Conform';

// react-router scroll to top on every transition
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null
};

function App() {
  return <div className="app">
    <BrowserRouter>
    
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="item/:itemID" element={<ItemDetails/>} />
      <Route path="checkout/" element={<Checkout />} />
      <Route path="checkout/success" element={<Conform/>}/>
    </Routes>
    </BrowserRouter>
  </div>;
}
export default App;
