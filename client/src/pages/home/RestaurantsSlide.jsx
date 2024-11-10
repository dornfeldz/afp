import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantsSlide({ title, reverse }) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:8000/restaurants");
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="mb-12 ">
      <h2 className="ml-5 text-2xl font-semibold">{title}</h2>
      <div className="overflow-x-scroll custom-scrollbar">
        <div className="flex gap-4 mt-6 mb-2 ml-2">
          {reverse
            ? [...restaurants]
                .reverse()
                .map((restaurant) => (
                  <RestaurantCard
                    key={restaurant._id}
                    restaurant={restaurant}
                  />
                ))
            : restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant._id} restaurant={restaurant} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantsSlide;
