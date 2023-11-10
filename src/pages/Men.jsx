import BreadCrumbs from "../components/BreadCrumbs";
import { getCategoryProducts } from "../api/fakeStore";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";

const Men = () => {
  const {
    data: categoryProducts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["category", "products", "men"],
    queryFn: () => getCategoryProducts("men%27s%20clothing"),
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div>
      <BreadCrumbs category="Men" title={categoryProducts.title} />
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

export default Men;
