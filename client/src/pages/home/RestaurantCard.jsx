import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {
  return (
    <Link to={`/restaurant/${restaurant._id}`}>
      <div
        key={restaurant._id}
        className="bg-[#fae5d3]  rounded-lg shadow-md w-[26rem] flex-shrink-0 overflow-hidden"
      >
        <img
          className="w-full h-20 bg-[#c2c2c2] object-cover overflow-hidden"
          src={restaurant?.cover}
        />
        <div className="p-4">
          <h2 className="text-xl font-bold">{restaurant.name}</h2>
          <p className="text-[#888]">{restaurant.bio}</p>
          <p className="text-[#888] italic text-sm">
            {" "}
            {restaurant.adress.street +
              " " +
              restaurant.adress.city +
              "," +
              " " +
              restaurant.adress.zipcode}
          </p>
          {/* <p className="text-[#888]">
        <strong>Coordinates:</strong> {restaurant.coordinates.latitude},{" "}
        {restaurant.coordinates.longitude}
        </p> */}
        </div>
      </div>
    </Link>
  );
}

export default RestaurantCard;
