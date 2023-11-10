import { useNavigate } from "react-router-dom";

const ProductCard = ({
  product,
  product: { id, title, price, category, description, image },
  showCategory,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="card bg-base-100 mt-3 shadow-xl cursor-pointer border-solid border-[1px] border-base-200 text-base-content"
      onClick={() => navigate(`/product/${id}`, { state: product })}
    >
      <figure className="h-[300px] bg-white">
        <img
          src={image}
          alt={title}
          className="w-32 transition ease-in hover:scale-125"
        />
      </figure>
      <div className="card-body bg-base-300">
        <h2 className="card-title">
          {title}
          {/* <div className="badge badge-accent">NEW</div> */}
        </h2>
        <p>{`$${price}`}</p>
        {showCategory && (
          <div className="card-actions justify-end">
            <div className="badge capitalize">{category}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
