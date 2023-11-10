import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import { useProducts } from "../context/ProductsContext";

const Products = () => {
  const navigate = useNavigate();
  const { allProducts, error, isLoading } = useProducts();

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10 mt-7">
      {error && <>Error! {error.message}</>}
      {isLoading && <Loading />}
      {allProducts &&
        allProducts
          .filter((item) => item.category !== "electronics")
          .map((product) => (
            <ProductCard key={product.id} product={product} showCategory />
          ))}
    </div>
  );
};

export default Products;
