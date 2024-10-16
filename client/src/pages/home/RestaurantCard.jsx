import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {
  return (
    <Link to={`/restaurant/${restaurant._id}`}>
      <div
        key={restaurant._id}
        className="bg-[#fae5d3]  rounded-lg shadow-md min-w-[26rem] flex-shrink-0 overflow-hidden"
      >
        <div className="w-full h-20 bg-[#c2c2c2]"></div>
        <div className="p-4">
          <h2 className="text-xl font-bold">{restaurant.name}</h2>
          <p className="text-[#888]">{restaurant.bio}</p>
          <p className="text-[#888]">
            <strong>Email:</strong> {restaurant.telephone}
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
