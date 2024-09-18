import data from "../../../../server/restaruant_dummy_data.json";
import RestaurantCard from "./RestaurantCard";

function RestaurantsSlide({ title }) {
  return (
    <div className="mb-12 ">
      <h2 className="ml-5 text-2xl font-semibold">{title}</h2>
      <div className="overflow-x-scroll custom-scrollbar">
        <div className="flex gap-4 mt-6 mb-2 ml-2">
          {data.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantsSlide;
