const Banner = () => {
  return (
    <div className="carousel w-full ">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="hero min-h-screen bg-[url('./assets/womens.jpg')]">
          <div className="hero-content text-center">
            <div className="max-w-md bg-black/30 text-slate-100 p-10 rounded-3xl">
              <h1 className="text-5xl font-bold ">SHOP FOR WOMEN</h1>
              <p className="py-6">
                {"handpicked daily from the world’s best brands and boutiques"}
              </p>
              <button className="btn">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="hero min-h-screen bg-[url('./assets/men.jpg')]">
          <div className="hero-content text-center">
            <div className="max-w-md bg-black/30 text-slate-100 p-10 rounded-3xl">
              <h1 className="text-5xl font-bold">SHOP MENSWEAR</h1>
              <p className="py-6">
                Here, you’ll find everything you need for men.
              </p>
              <button className="btn">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="hero min-h-screen bg-[url('./assets/acc.jpg')]">
          <div className="hero-content text-center">
            <div className="max-w-md bg-black/30 text-slate-100 p-10 rounded-3xl">
              <h1 className="text-5xl font-bold">SHOP ACCESSORIES</h1>
              <p className="py-6">Look out for impactful accessories.</p>
              <button className="btn">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
