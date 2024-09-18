function RestaurantCard({ restaurant }) {
  return (
    <div
      key={restaurant.id}
      className="bg-[#fae5d3] p-4 rounded-lg shadow-md w-96 flex-shrink-0"
    >
      <h2 className="text-xl font-bold">Restaurant {restaurant.id}</h2>
      <p className="text-[#888]">
        <strong>Telephone:</strong> {restaurant.telephone_number}
      </p>
      <p className="text-[#888]">
        <strong>Email:</strong> {restaurant.email_address}
      </p>
      <p className="text-[#888]">
        <strong>Coordinates:</strong> {restaurant.coordinates.latitude},{" "}
        {restaurant.coordinates.longitude}
      </p>
    </div>
  );
}

export default RestaurantCard;
