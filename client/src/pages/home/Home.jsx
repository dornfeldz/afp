import RestaurantsSlide from "./RestaurantsSlide";

function Home() {
  return (
    <div className="h-screen">
      <h1 className="mt-20 text-4xl font-extrabold text-center">
        Welcome to Tasty<span className="text-[#e67e22]">Go</span>
      </h1>
      <p className="text-center mt-4 text-[#888] mb-10">
        Order food from your favorite restaurants
      </p>
      <RestaurantsSlide title={"Popular right now"} />
      <RestaurantsSlide title={"For burger lovers"} />
      <RestaurantsSlide title={"Italian vibes"} />
    </div>
  );
}

export default Home;
