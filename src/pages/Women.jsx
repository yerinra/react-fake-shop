import BreadCrumbs from "../components/BreadCrumbs";
import { useQuery } from "@tanstack/react-query";
import { getCategoryProducts } from "../api/fakeStore";
import ProductCard from "../components/ProductCard";

const Women = () => {
  const {
    data: categoryProducts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["category", "products", "women"],
    queryFn: () => getCategoryProducts("women%27s%20clothing"),
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div>
      <BreadCrumbs category="Women" />
      {error && <>Error! {error.message}</>}
      {isLoading && <>Loading...Please Wait...</>}
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

export default Women;
