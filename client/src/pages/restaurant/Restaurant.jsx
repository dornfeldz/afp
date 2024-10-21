import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Restaurant() {
  const [restaurant, setRestaurant] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await fetch(`http://localhost:8000/restaurant/${id}`);
        const data = await response.json();
        setRestaurant(data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRestaurant();
  }, [id]);

  console.log(restaurant);

  return (
    <div>
      <div className="w-full h-32 bg-[#c2c2c2] mb-10 overflow-hidden">
        <img
          src={restaurant.cover}
          alt="restaurant cover image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="translate-y-[-50%]">
        <img
          src="https://i.imgur.com/tpTbyMY.jpeg"
          alt="restaurant logo"
          className="mb-3 ml-5 border-4 border-white rounded-full size-32"
        />
        <div className="flex justify-between mx-5">
          <div>
            <h2 className="text-3xl font-bold">{restaurant.name}</h2>
            <p className="text-[#888]">{restaurant.bio}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#888]">
              {restaurant.adress?.street +
                " " +
                restaurant.adress?.city +
                "," +
                " " +
                restaurant.adress?.zipcode}
            </p>
            <p className="text-[#888]">
              <strong>Email:</strong> {restaurant.email}
            </p>
            <p className="text-[#888]">
              {" "}
              <strong>Phone:</strong> {restaurant.telephone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
