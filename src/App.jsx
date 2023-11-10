import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import NavBar from "./components/NavBar";
import ErrorPath from "./pages/ErrorPath";
import Home from "./pages/Home";

import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import EachCategory from "./pages/EachCategory";
import Footer from "./components/Footer";
import { ProductsProvider } from "./context/ProductsContext";
import { CartContextProvider } from "./context/CartContext";

const App = () => {
  const queryClient = new QueryClient();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <ProductsProvider>
        <CartContextProvider>
          <Router>
            <div className="fixed top-0 z-50">
              {showMenu && (
                <div
                  className="w-screen h-screen absolute top-0 bg-black/50 z-10 cursor-pointer"
                  onClick={() => setShowMenu(false)}
                />
              )}
              <NavBar showMenu={showMenu} setShowMenu={setShowMenu} />
            </div>
            <div className="relative top-16 ">
              <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/men" element={<EachCategory category="men" />} />
                <Route
                  path="/women"
                  element={<EachCategory category="women" />}
                />
                <Route
                  path="/jewelery"
                  element={<EachCategory category="jewelery" />}
                />
                <Route path="/product/:productId" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<ErrorPath />} />
              </Routes>
              <Footer />
            </div>
          </Router>
        </CartContextProvider>
      </ProductsProvider>
    </QueryClientProvider>
  );
};

export default App;
