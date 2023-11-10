import { clsx } from "clsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiSun, BiMoon, BiShoppingBag } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { useProducts } from "../context/ProductsContext";

const categories = ["women", "men", "jewelery"];

const NavBar = ({ showMenu, setShowMenu }) => {
  const navigate = useNavigate("");
  const [keyword, setKeyword] = useState("");
  const { allProducts, error, isLoading } = useProducts();
  const [list, setList] = useState([]);
  const [theme, setTheme] = useState("light");

  const handleChange = (e) => {
    setKeyword(e.target.value);
    setList(
      allProducts.filter(
        (product) =>
          product.category !== "electronics" &&
          product.title.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };
  const handleSelect = (item) => {
    navigate(`/product/${item.id}`, { state: item });
    setKeyword("");
  };
  // useEffect(() => console.log(list, keyword), [showMenu]);
  useEffect(
    () => document.querySelector("html").setAttribute("data-theme", theme),
    [theme]
  );
  const toggleDark = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("light");
  };
  return (
    <section
      className={clsx({
        "flex justify-between items-center w-screen h-16 text-base-content text-xl p-2 shadow-md": true,
        "bg-base-300 ": theme === "light",
        "bg-neutral-900 text-neutral-200": theme === "dark",
      })}
    >
      <div className="flex items-center shrink-0 gap-3">
        <div className="ml-2">
          <button
            className="md:hidden block btn bg-inherit border-none"
            onClick={() => {
              setShowMenu(true);
              console.log("clicked!");
            }}
          >
            <FaBars />
          </button>
          <ul
            tabIndex={0}
            className={clsx({
              "fixed left-0 top-0 p-3 z-20 bg-base-100 w-52 h-screen ": true,
              "-left-80": !showMenu,
              "left-0": showMenu,
            })}
          >
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => {
                  navigate(`/${cat}`);
                  setShowMenu(false);
                }}
                className="flex items-center justify-start btn btn-ghost cursor-pointer hover:font-bold"
              >
                {cat.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>

        <h1
          className="font-bold tracking-tight text-2xl cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          React Shop
        </h1>
      </div>
      <ul className="hidden md:flex gap-3">
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => navigate(`/${cat}`)}
            className="btn btn-ghost normal-case text-lg"
          >
            {cat.toUpperCase()}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center mr-5 text-2xl">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" id="input" />
            <BiSun className="swap-on" onClick={toggleDark} />
            <BiMoon className="swap-off" onClick={toggleDark} />
          </label>
        </div>

        <form>
          <input
            type="text"
            placeholder="Search"
            value={keyword}
            onChange={handleChange}
            className="text-lg bg-base-100 p-2 rounded-lg w-full max-w-xs outline-none"
          />
        </form>
        {list && keyword && (
          <ul className="fixed right-[66px] top-[64px] py-3z-20 bg-base-100 shadow-md w-52">
            {list.map((item) => (
              <li
                key={item.id}
                className="btn btn-ghost rounded-none flex justify-start truncate capitalize font-semibold text-md"
                onClick={() => {
                  handleSelect(item);
                }}
              >
                {item.title.slice(0, 20) + "..."}
              </li>
            ))}
          </ul>
        )}
        <button
          className="btn btn-ghost text-2xl"
          onClick={() => navigate("/cart")}
        >
          <BiShoppingBag />
        </button>
      </div>
    </section>
  );
};

export default NavBar;
