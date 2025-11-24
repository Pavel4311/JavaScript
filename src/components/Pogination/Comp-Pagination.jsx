import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  paginate,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];
  const maxVisiblePages = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {/* Кнопка "Назад" */}
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className="pagination-btn"
      >
        ← Назад
      </button>

      {startPage > 1 && (
        <>
          <button onClick={() => paginate(1)} className="pagination-btn">
            1
          </button>
          {startPage > 2 && <span className="pagination-dots">...</span>}
        </>
      )}
      {/* Номера страниц */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`pagination-btn ${currentPage === number ? "active" : ""}`}
        >
          {number}
        </button>
      ))}

      {/* Последняя страница */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="pagination-dots">...</span>
          )}
          <button
            onClick={() => paginate(totalPages)}
            className="pagination-btn"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Кнопка "Вперед" */}
      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className="pagination-btn"
      >
        Вперед →
      </button>

      {/* Информация о странице */}
      <span className="pagination-info">
        Страница {currentPage} из {totalPages}
      </span>
    </div>
  );
};

export default Pagination;
