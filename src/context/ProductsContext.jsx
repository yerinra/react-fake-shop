import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getAllProducts } from "../api/fakeStore";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const {
    data: allProducts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <ProductsContext.Provider value={{ allProducts, error, isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}
