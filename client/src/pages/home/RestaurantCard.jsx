import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <div
        key={restaurant.id}
        className="bg-[#fae5d3]  rounded-lg shadow-md w-96 flex-shrink-0 overflow-hidden"
      >
        <div className="w-full h-20 bg-[#c2c2c2]"></div>
        <div className="p-4">
          <h2 className="text-xl font-bold">Restaurant {restaurant.id}</h2>
          <p className="text-[#888]">
            <strong>Telephone:</strong> {restaurant.telephone_number}
          </p>
          <p className="text-[#888]">
            <strong>Email:</strong> {restaurant.email_address}
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
