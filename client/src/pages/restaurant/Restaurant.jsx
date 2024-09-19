import { useParams } from "react-router-dom";

function Restaurant() {
  const { id } = useParams();

  return (
    <div>
      <div className="w-full h-32 bg-[#c2c2c2] mb-16">
        <img
          src="https://i.imgur.com/tpTbyMY.jpeg"
          alt="restaurant logo"
          className=" border-4 translate-y-[40%] ml-5 border-white rounded-full size-32"
        />
      </div>
      <div className="mx-5">
        <h2 className="text-3xl font-bold">{`Restaurant ${id}`}</h2>
      </div>
    </div>
  );
}

export default Restaurant;
