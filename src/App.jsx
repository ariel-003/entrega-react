import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetails from "./Components/ItemDetails/ItemDetails";
import NotFound from "./Components/NotFound/NotFound";
import { CartProvider } from "./Contexts/CartContext";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<ItemListContainer/>}></Route>
          <Route exact path="/category/:categoryId" element={<ItemListContainer/>}></Route>
          <Route exact path="/item/:id" element={<ItemDetails />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider> 
    </BrowserRouter>
  );
}

export default App;
