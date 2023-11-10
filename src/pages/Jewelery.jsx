import { useQuery } from "@tanstack/react-query";
import BreadCrumbs from "../components/BreadCrumbs";
import { getCategoryProducts } from "../api/fakeStore";
import ProductCard from "../components/ProductCard";

const Acc = () => {
  const {
    data: categoryProducts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["category", "products", "jewelery"],
    queryFn: () => getCategoryProducts("jewelery"),
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div>
      <BreadCrumbs category="Jewelery" />
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

export default Acc;
