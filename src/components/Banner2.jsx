import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";

const carouselInfo = [
  {
    id: "women",
    title: "SHOP FOR WOMEN",
    url: "./assets/womens.jpg",
    desc: "Handpicked daily from the world’s best brands ",
  },
  {
    id: "men",
    title: "SHOP FOR MEN",
    url: "./assets/mens.jpg",
    desc: "Here, you’ll find everything you need for men.",
  },
  {
    id: "jewelery",
    title: "SHOP ACCESSORIES",
    url: "./assets/acc.jpg",
    desc: "Look out for impactful accessories.",
  },
];
const Banner2 = () => {
  const navigate = useNavigate();
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
    >
      {carouselInfo.map((banner) => (
        <ul
          key={banner.id}
          className={`hero h-[220px] lg:h-screen relative bg-[url('${banner.url}')]`}
        >
          <div className="hero-content text-center">
            <div className="max-w-md text-slate-900 p-10">
              <h1 className=" text-3xl lg:text-4xl font-bold ">
                {banner.title}
              </h1>
              <p className="text-sm lg:text-lg py-6">{banner.desc}</p>
              <button
                className="btn btn-sm lg:btn-md"
                onClick={() => navigate(`/${banner.id}`)}
              >
                Shop Now
              </button>
            </div>
          </div>
        </ul>
      ))}
    </Carousel>
  );
};

export default Banner2;
