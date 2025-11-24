import "./style.css";
import { useNavigate } from "react-router-dom";

const DogsFilter = ({ currentFilter, onFilterChange }) => {
  const navigate = useNavigate();
  return (
    <div className="dogs-filter">
      <button
        className={`filter-btn ${currentFilter === "all" ? "active" : ""}`}
        onClick={() => onFilterChange("all")}
      >
        Все породы
      </button>

      <button
        className={`filter-btn ${currentFilter === "liked" ? "active" : ""}`}
        onClick={() => onFilterChange("liked")}
      >
        ❤️ Понравившиеся
      </button>

      <button
        onClick={() => navigate("/createElem")}
        style={{
          padding: "12px 24px",
          backgroundColor: "#667eea",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          boxShadow: "0 2px 8px rgba(102, 126, 234, 0.3)",
        }}
      >
        Создать карточку
      </button>
    </div>
  );
};
export default DogsFilter;
