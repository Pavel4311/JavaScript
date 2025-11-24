// // import React, { useState } from "react";
// import React from "react";
// import { useNavigate } from "react-router-dom";
// const CreateCard = () => {
//     const navigate = useNavigate();
//   // const [data, setData] = useState({
//   //     name: "",
//   //     description: "",
//   //     image: ""
//   // })

//   // const handleInputChange = (e) =>{
//   //     const {key,value}= e.target
//   //     setData(prev=>({
//   //         ...prev,
//   //         [key]:value
//   //     }))
//   // }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const name = document.getElementById("name").value;
//     localStorage.setItem("name", name);
//     const description = document.getElementById("description").value;
//     localStorage.setItem("description", description);
//     const image = document.getElementById("image").value;
//     localStorage.setItem("image", image);
//     alert("Карточка собаки создана!");
//   };
//   return (
//     <div className="create_card">
//       <h2>Создание карточки собаки</h2>
//       <form className="create_card_form">
//         <label> Введите породу собакт:</label>
//         <input
//           type="text"
//           name="name"
//           placeholder="Имя собаки"
//           id="name"
//           required
//         />

//         <label> Введите описание собаки:</label>
//         <input
//           type="text"
//           name="description"
//           placeholder="Описание собаки"
//           id="description"
//           required
//         />

//         <label> Введите ссылку на изображение собаки:</label>
//         <input
//           type="text"
//           name="image"
//           placeholder="Ссылка на изображение"
//           id="image"
//           required
//         />

//         <button
//           type="submit"
//           onClick={handleSubmit}
//           className="create_card_btn"
//         >
//           Создать карточку
//         </button>
//       </form>

//       <button onClick={()=>navigate('/')}
//         style={{
//             padding: '12px 24px',
//             backgroundColor: '#667eea',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '16px',
//             fontWeight: '600',
//             cursor: 'pointer',
//             transition: 'all 0.3s ease',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '8px',
//             boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
//           }}
//       >
//         На главную страницу
//       </button>
//     </div>
//   );
// };

// export default CreateCard;

import React from "react";
import { useNavigate } from "react-router-dom";

const CreateCard = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").value;

    const newDog = {
      id: Date.now(),
      name: name,
      description: description,
      image: image,
      isLiked: false,
      createdAt: new Date().toISOString(),
    };

    const existingDogsJSON = localStorage.getItem("dogs");
    const existingDogs = existingDogsJSON ? JSON.parse(existingDogsJSON) : [];

    const updatedDogs = [...existingDogs, newDog];

    localStorage.setItem("dogs", JSON.stringify(updatedDogs));

    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("image").value = "";

    console.log("Создана новая карточка:", newDog);
    console.log("Всего карточек в хранилище:", updatedDogs.length);

    alert("Карточка собаки создана и сохранена в LocalStorage!");
  };

  return (
    <div className="create_card">
      <h2>Создание карточки собаки</h2>
      <form className="create_card_form" onSubmit={handleSubmit}>
        <label>Введите породу собаки:</label>
        <input
          type="text"
          name="name"
          placeholder="Порода собаки"
          id="name"
          required
        />

        <label>Введите описание собаки:</label>
        <input
          type="text"
          name="description"
          placeholder="Описание собаки"
          id="description"
          required
        />

        <label>Введите ссылку на изображение собаки:</label>
        <input
          type="text"
          name="image"
          placeholder="Ссылка на изображение"
          id="image"
          required
        />

        <button type="submit" className="create_card_btn">
          Создать карточку
        </button>
      </form>

      <button
        onClick={() => navigate("/")}
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
          marginTop: "20px",
        }}
      >
        🏠 На главную страницу
      </button>
    </div>
  );
};

export default CreateCard;
