import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [nat, setNat] = useState("uzbek");
  const [desc, setDesc] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  function handleChangeName(event) {
    setUsername(event.target.value);
  }

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangeNat(event) {
    setNat(event.target.value);
  }

  function handleChangeDesc(event) {
    setDesc(event.target.value);
  }

  function handleSave(event) {
    event.preventDefault();

    if (!username || !email || !desc) {
      setError("Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Iltimos, to‘g‘ri email manzilini kiriting.");
      return;
    }

    setError("");

    const newUser = { username, email, nat, desc };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    setUsername("");
    setEmail("");
    setNat("uzbek");
    setDesc("");

    setTimeout(() => {
      const cardElements = document.querySelectorAll(".card");
      cardElements[cardElements.length - 1].classList.add("show");
    }, 0);
  }

  return (
    <div className="div">
      <form className="form">
        <li className="list">
          <label for="ism">Ism:</label>
          <input
            id="ism"
            onChange={handleChangeName}
            value={username}
            type="text"
            placeholder="Enter name..."
          />
        </li>

        <li className="list">
          <label for="email">Email:</label>
          <input
            id="email"
            onChange={handleChangeEmail}
            value={email}
            type="email"
            placeholder="Email..."
          />
        </li>

        <li className="list">
          <label for="millat">Millat:</label>
          <select id="millat" onChange={handleChangeNat} value={nat}>
            <option value="uzbek">uzbek</option>
            <option value="russian">russian</option>
            <option value="english">english</option>
          </select>
        </li>

        <li className="list">
          <label for="tavsif">Tavsif:</label>
          <textarea
            id="tavsif"
            onChange={handleChangeDesc}
            value={desc}
            placeholder="Enter description..."
          ></textarea>
        </li>
        <button onClick={handleSave}>Save</button>
      </form>
      {error && <div className="error">{error}</div>}
      <h3>Users List:</h3>
      <div className="cards-container">
        {users.map((user, index) => (
          <div className="card" key={index}>
            <h4>Name: {user.username}</h4>
            <p>Email: {user.email}</p>
            <p>Nationality: {user.nat}</p>
            <p>Description: {user.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
