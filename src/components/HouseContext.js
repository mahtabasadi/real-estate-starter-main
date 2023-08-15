import React, { createContext, useEffect, useState } from "react";

// impoprt data
import { housesData } from "../data";

// create Context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location(any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("property type(any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("prise range(any)");
  const [loading, setLoading] = useState(false);

  // return all countries
  useEffect(() => {
    const AllCountries = houses.map((houses) => {
      return houses.country;
    });
    // remove duplicates
    const uniqueCountries = ["location any", ...new Set(AllCountries)];
    // set countries state
    setCountries(uniqueCountries);
  }, []);

  // return all properties
  useEffect(() => {
    const allProperties = houses.map((houses) => {
      return houses.type;
    });
    // remove duplicates
    const uniqueProperties = ["location any", ...new Set(allProperties)];
    // set properties state
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    // set loading
    setLoading(true);
    //create a function that chekes if the string includes '(any)'
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    //get first value of price and pars it to number
    const minPrice = parseInt(price.split(" ")[0]);

    //get second value of price which is the maximum price & parse it to number
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = housesData.filter((house) => {
      const housesPrice = parseInt(house.price);
      // if all values are selected
      if (
        house.country === country &&
        house.type === property &&
        housesPrice >= minPrice &&
        housesPrice <= maxPrice
      ) {
        return house;
      }

      //if all values are defaults
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      // if country is not defoult

      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      // if property is not default

      if (isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.type === property;
      }

      // if price is not default

      if (isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housesPrice >= minPrice && housesPrice <= maxPrice) {
          return house;
        }
      }

      // if country & property is not default

      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      // if country & price is not defualt

      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housesPrice >= minPrice && housesPrice <= maxPrice) {
          return house.country === country;
        }
      }

      // if property & price is not default

      if (!isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housesPrice >= minPrice && housesPrice <= maxPrice) {
          return house.type === property;
        }
      }
    });
    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 100);
  };

  return (
    <HouseContext.Provider
      value={{
        houses,
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        loading,
        handleClick,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
