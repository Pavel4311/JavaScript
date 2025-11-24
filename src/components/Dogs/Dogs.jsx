import React, { useState, useEffect } from "react";
import Card from "../Card/Card.jsx";
import "./style.css";
import DogsFilter from "../DogsFilter/dogsFilter.jsx";

import DogsWithPagination from "../Pogination/Pagination.jsx";

const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        setLoading(true);

        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();

        if (data.status === "success") {
          const breeds = Object.keys(data.message).slice(0, 20);

          const dogsPromises = breeds.map((breed) =>
            fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
              .then((response) => response.json())
              .then((imageData) => {
                return fetch(`https://dog.ceo/api/breed/${breed}/list`)
                  .then((response) => response.json())
                  .then((subBreedData) => ({
                    id: breed,
                    title: breed.charAt(0).toUpperCase() + breed.slice(1),
                    description: `Порода собак ${breed}. Прекрасный компаньон и верный друг.`,
                    image: imageData.message,
                    subBreeds: subBreedData.message,
                    isLiked: false,
                  }));
              })
              .catch((error) => {
                console.error(`Error fetching ${breed}:`, error);
                return {
                  id: breed,
                  title: breed.charAt(0).toUpperCase() + breed.slice(1),
                  description: "Порода собак.",
                  image: null,
                  isLiked: false,
                };
              })
          );

          const dogsData = await Promise.all(dogsPromises);
          setDogs(dogsData);
        }
      } catch (error) {
        console.error("Error fetching breeds:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  const handleLike = (dogId) => {
    setDogs((prevDogs) =>
      prevDogs.map((dog) =>
        dog.id === dogId ? { ...dog, isLiked: !dog.isLiked } : dog
      )
    );
  };

  const handleDelete = (dogId) => {
    setDogs((prevDogs) => prevDogs.filter((dog) => dog.id !== dogId));
  };
  const filteredDogs = dogs.filter(
    (dog) => filter === "all" || (filter === "liked" && dog.isLiked)
  );

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        🐶 Породы собак
      </h1>

      {loading ? (
        <div style={{ textAlign: "center", padding: "40px" }}>
          Загрузка пород собак...
        </div>
      ) : (
        <div>
          <DogsFilter currentFilter={filter} onFilterChange={setFilter} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {filteredDogs.map((dog) => (
              <Card
                key={dog.id}
                dog={dog}
                onLike={handleLike}
                onDelete={handleDelete}
              />
            ))}
          </div>

          {filteredDogs.length === 0 && (
            <div
              style={{ textAlign: "center", padding: "40px", color: "#666" }}
            >
              {filter === "liked"
                ? "Нет понравившихся пород"
                : "Породы не найдены"}
            </div>
          )}
        </div>
      )}
      <div>
        <DogsWithPagination dogs={filteredDogs} />
      </div>
    </div>
  );
};

export default Dogs;
