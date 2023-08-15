import React, { useContext } from "react";

// import components
import House from "../components/House";

// import contex
import { HouseContext } from "../components/HouseContext";
// import links
import { Link } from "react-router-dom";
// import icons
import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  // if loading is true
  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="text-3xl text-center text-gray-400 mt-48">
        Sorry , nothing found
      </div>
    );
  }
  return (
    <section className="mb-20">
      <div className="mx-auto container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
