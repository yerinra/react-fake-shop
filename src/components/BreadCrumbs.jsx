import { Link } from "react-router-dom";

const BreadCrumbs = ({ category, title }) => {
  return (
    <div className="text-sm breadcrumbs ml-12 pt-7">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {title ? (
          <>
            <li>
              <Link
                to={`/${
                  category === "jewelery"
                    ? category
                    : category.slice(0, 2) === "wo"
                    ? "women"
                    : "men"
                }`}
                className="capitalize"
              >
                {category}
              </Link>
            </li>
            <li className="capitalize">{title.slice(0, 20) + "..."}</li>
          </>
        ) : (
          <li className="capitalize">{category}</li>
        )}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
