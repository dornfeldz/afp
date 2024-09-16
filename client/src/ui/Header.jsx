import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";

function Header() {
  return (
    <div className="flex items-center justify-between h-16 px-4">
      <h1 className="text-4xl font-extrabold">
        Tasty<span className="text-[#e67e22]">Go</span>
      </h1>
      <form className="flex items-center">
        <input
          type="text"
          name="main"
          id="main"
          placeholder="Search for a restaurant..."
          className="bg-[#fae5d3] text-[#888] py-1 px-4 rounded-l-full"
        />
        <button
          type="submit"
          className="bg-[#e67e22] py-2 px-3 rounded-r-full text-[#fdf2e9] "
        >
          <HiMagnifyingGlass className="text-[#fae5d3]" />
        </button>
      </form>
      <div className="flex gap-2">
        <img
          src="https://i.imgur.com/tpTbyMY.jpeg"
          alt="default profile picture"
          className="border-2 border-white rounded-full size-9"
        />
        <div className="flex items-center justify-center border-2 border-white rounded-full size-9 bg-[#fae5d3] text-[#888]">
          <HiOutlineShoppingCart className="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
