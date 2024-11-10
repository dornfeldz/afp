import { useRef, useState, useEffect } from "react";
import RestaurantsSlide from "./RestaurantsSlide";
import RestaurantCard from "./RestaurantCard";

function Home() {
  const targetRef = useRef(null);
  const handleScroll = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/auth/current-user",
          {
            credentials: "include",
          }
        );
        if (response.ok) {
          const userData = await response.json();
          console.log("User data:", userData);
          setUser(userData);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between w-[80%] max-w-5xl mx-auto mt-16 px-4 mb-10">
        <div className="md:w-[50%] text-center md:text-left">
          <h1 className="text-5xl font-extrabold">
            Welcome to Tasty
            <span className="text-[#e67e22]">Go</span>, {user.first_name}!
          </h1>
          <p className="mt-6 text-lg text-[#888]">
            Order food from your favorite restaurants
          </p>
          <button
            className="mt-8 px-6 py-3 bg-[#e67e22] text-white rounded-full font-semibold shadow hover:bg-[#cf711f] transition-colors duration-200"
            onClick={handleScroll}
          >
            Get Started
          </button>
        </div>
        <div className="md:w-[40%] mt-10 md:mt-0">
          <img
            src="https://i.imgur.com/2vaMxV4.png"
            alt="food delivery guy"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
      <div ref={targetRef}>
        <div className="h-10 border border-b w-max"></div>
        <RestaurantsSlide title={"Sponsored"} />
        <RestaurantsSlide title={"Popular right now"} reverse={true} />
        <RestaurantsSlide title={"Near you"} />
      </div>
    </div>
  );
}

export default Home;
