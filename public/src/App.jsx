import MyNavbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from "./components/Products"
import ProductPage from './pages/ProductPage'
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
      <MyNavbar />
        <Routes>
          <Route path="/" element= <Products/> />
          <Route path="/product/:id" element = <ProductPage/> />
          <Route path = "/cart" element = <Cart/> />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
