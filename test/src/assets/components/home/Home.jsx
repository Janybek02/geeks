import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

export const Home = () => {
  const [items, setItems] = useState([]);
  const [pokemon, setPokemon] = useState(null); // Changed to null since we'll store single pokemon data
  console.log(pokemon);

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    
  }, [items]);

  const getItems = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const { data } = await axios.get(url);
    setItems(data.results); // Corrected to use setItems
  };
  
  

  const getPokemon = async (url) => {
    const { data } = await axios.get(url);
    setPokemon(data);
  };

  return (
    <div>
      <div className=" flex flex-wrap w-[100%] justify-between  ">
        {items.map((data) => {
          return (
            <div className=" w-[150px] h-[90px] mb-3 rounded bg-blue-300">
              <div className="">
                <p>{data.name}</p>
                {/* <img src={}/> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
