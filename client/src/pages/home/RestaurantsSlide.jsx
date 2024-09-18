import data from "../../../../server/restaruant_dummy_data.json";

function RestaurantsSlide({ title }) {
  return (
    <div className="mb-12 ml-5">
      <h2 className="text-2xl font-semibold ">{title}</h2>
      <div className="overflow-x-scroll custom-scrollbar">
        <div className="flex gap-4 mt-6 mb-2">
          {data.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-[#fae5d3] p-4 rounded-lg shadow-md"
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantsSlide;
