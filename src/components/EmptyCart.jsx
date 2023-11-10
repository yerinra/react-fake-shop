import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div>There’s nothing in your bag yet.</div>
      <div
        className="btn btn-primary text-slate-100"
        onClick={() => navigate("/")}
      >
        Go Shop
      </div>
    </section>
  );
};

export default EmptyCart;
