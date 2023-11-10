/* eslint-disable react/prop-types */
import BreadCrumbs from "../components/BreadCrumbs";
import { getCategoryProducts } from "../api/fakeStore";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";

const EachCategory = ({ category }) => {
  const {
    data: categoryProducts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["category", "products", category],
    queryFn: () =>
      getCategoryProducts(
        category === "jewelery"
          ? category
          : category.slice(0, 2) == "wo"
          ? "women%27s%20clothing"
          : "men%27s%20clothing"
      ),
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div>
      <BreadCrumbs
        category={
          category === "jewelery"
            ? category
            : category.slice(0, 2) === "wo"
            ? "women's clothing"
            : "men's clothing"
        }
      />
      {error && <>Error! {error.message}</>}

      {isLoading && <Loading />}
      {categoryProducts && (
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default EachCategory;
