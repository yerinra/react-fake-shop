import { useParams, Link, useLocation } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";

const ProductDetail = () => {
  const { productId } = useParams();
  const {
    state: { category, description, id, image, price, rating, title },
  } = useLocation();

  return (
    <section className="pb-10">
      <BreadCrumbs category={category} title={title} />
      <section className="flex lg:flex-row flex-col items-center gap-10 mt-20">
        <div className="rounded-2xl w-11/12 flex justify-center bg-white py-20">
          <img src={image} className="max-w-xs px-10" />
        </div>
        <div className="flex flex-col mx-10 gap-3">
          <h2 className="font-bold text-3xl">{title}</h2>
          <h3 className="leading-5">{description}</h3>
          <div className="rating">
            {Array.from({ length: 5 }).map((item, idx) => (
              <input
                key={idx}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
                defaultChecked={idx + 1 == Math.round(rating.rate)}
              />
            ))}
          </div>
          <div>
            {rating.rate} / {rating.count} ratings
          </div>
          <div className="text-3xl">{`$${price}`}</div>

          <div className="flex gap-3">
            <button className="btn btn-primary text-slate-100">
              Add To Bag
            </button>
            <button className="btn btn-outline">Go To Bag</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductDetail;
