import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const DogCard = ({ dog, onLike, onDelete }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/dogs/${dog.id}`);
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    onLike(dog.id);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(dog.id);
  };

  const truncatedDescription =
    dog.description.length > 120
      ? dog.description.substring(0, 120) + "..."
      : dog.description;

  return (
    <div className="dog-card">
      <div onClick={handleCardClick}>
        <div className="dog-image">
          <img src={dog.image} alt={dog.title} />
        </div>

        <div className="dog-content">
          <h3 className="dog-title">{dog.title}</h3>

          <p className="dog-description">{truncatedDescription}</p>

          <div className="dog-subbreeds">
            Подпороды:{" "}
            {dog.subBreeds.length > 0 ? dog.subBreeds.join(", ") : "нет"}
          </div>
        </div>
      </div>
      <div className="dog-actions">
        <button
          className={`like-btn ${dog.isLiked ? "liked" : ""}`}
          onClick={handleLikeClick}
        >
          {dog.isLiked ? "❤️" : "🤍"}
        </button>

        <button className="delete-btn" onClick={handleDeleteClick}>
          ×
        </button>
      </div>
    </div>
  );
};

export default DogCard;
