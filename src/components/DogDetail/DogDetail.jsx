import React from "react";
import { useNavigate } from "react-router-dom";

const DogDetail = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "40px",
      }}
    >
      <h1>Информация о собаках</h1>
      <h3>
        Тут должна быть более подробная информация о собаке , но в выбраном мной
        апи такой нету
      </h3>

      <button
        className="DogDetail-btn"
        style={{
          padding: "14px 28px",
          backgroundColor: "#ff6b6b",
          color: "white",
          border: "none",
          borderRadius: "25px",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          boxShadow: "0 2px 10px rgba(255, 107, 107, 0.3)",
        }}
        onClick={() => navigate("/")}
      >
        Перейти на главную страницу
      </button>
    </div>
  );
};

export default DogDetail;
