import React, { useState } from "react";
import Card from "../Card/Card.jsx";
import Pagination from "./Comp-Pagination.jsx"; // исправьте название

const DogsWithPagination = ({ dogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(6);

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexofFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogs.slice(indexofFirstDog, indexOfLastDog);

  const totalPages = Math.ceil(dogs.length / dogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="dogs-grid">
        {currentDogs.map((dog) => (
          <Card key={dog.id} dog={dog} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </>
  );
};

export default DogsWithPagination;
