import { useEffect, useState } from "react";

export default function Dashboard() {
  const URL = "https://pokeapi.co/api/v2/pokemon";
    const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(URL, { method: "GET" });
        if (!res.ok) {
          throw new Error("Failed to fetch pokemon!");
        }
        const data = await res.json();
        setPokemon(data.result);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    }
    getData();
  }, []);

  return (
    <>
          <h2>Pokemon Names</h2>
          <ul>
              
          {console.log(pokemon)}
          {
              pokemon.map((item) => (
                  <li key={item.name}>
                     {item.name}
                  </li>
              ))
            }
            </ul>
      {error && <p>{error}</p>}
    </>
  );
}
