import MyNavbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from "./components/Products"
import ProductPageWrapper from './components/productPageWrapper'
import Cart from "./pages/Cart";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
      <MyNavbar />
        <Routes>
          <Route path="/" element= <Products/> />
          <Route path="/register" element= <RegisterPage/> />
          <Route path="/product/:id" element= <ProductPageWrapper/> />
          <Route path = "/cart" element = <Cart/> />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
