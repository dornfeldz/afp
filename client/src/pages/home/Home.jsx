const data = [
  {
    id: 1,
    telephone_number: "+1-555-1234",
    email_address: "contact1@restaurant.com",
    coordinates: {
      latitude: 40.712776,
      longitude: -74.005974,
    },
  },
  {
    id: 2,
    telephone_number: "+1-555-5678",
    email_address: "contact2@restaurant.com",
    coordinates: {
      latitude: 34.052235,
      longitude: -118.243683,
    },
  },
  {
    id: 3,
    telephone_number: "+44-20-7946-0018",
    email_address: "contact3@restaurant.co.uk",
    coordinates: {
      latitude: 51.507351,
      longitude: -0.127758,
    },
  },
  {
    id: 4,
    telephone_number: "+33-1-2345-6789",
    email_address: "contact4@restaurant.fr",
    coordinates: {
      latitude: 48.856613,
      longitude: 2.352222,
    },
  },
  {
    id: 5,
    telephone_number: "+49-30-123456",
    email_address: "contact5@restaurant.de",
    coordinates: {
      latitude: 52.520008,
      longitude: 13.404954,
    },
  },
  {
    id: 6,
    telephone_number: "+81-3-1234-5678",
    email_address: "contact6@restaurant.jp",
    coordinates: {
      latitude: 35.689487,
      longitude: 139.691711,
    },
  },
  {
    id: 7,
    telephone_number: "+61-2-1234-5678",
    email_address: "contact7@restaurant.au",
    coordinates: {
      latitude: -33.86882,
      longitude: 151.209296,
    },
  },
  {
    id: 8,
    telephone_number: "+86-10-12345678",
    email_address: "contact8@restaurant.cn",
    coordinates: {
      latitude: 39.904202,
      longitude: 116.407394,
    },
  },
  {
    id: 9,
    telephone_number: "+55-21-1234-5678",
    email_address: "contact9@restaurant.br",
    coordinates: {
      latitude: -22.906847,
      longitude: -43.172897,
    },
  },
  {
    id: 10,
    telephone_number: "+91-22-12345678",
    email_address: "contact10@restaurant.in",
    coordinates: {
      latitude: 19.07609,
      longitude: 72.877426,
    },
  },
];

function Home() {
  return (
    <div className="h-screen">
      <h1 className="mt-20 text-4xl font-extrabold text-center">
        Welcome to Tasty<span className="text-[#e67e22]">Go</span>
      </h1>
      <p className="text-center mt-4 text-[#888]">
        Order food from your favorite restaurants
      </p>
      <div className="grid grid-cols-1 gap-4 px-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
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
  );
}

export default Home;
