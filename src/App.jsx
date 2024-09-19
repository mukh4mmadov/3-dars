import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [nat, setNat] = useState("uzbek");
  const [desc, setDesc] = useState("");
  const [users, setUsers] = useState([]);

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
    const newUser = { username, email, nat, desc };
    setUsers([...users, newUser]);

    // Clear the form fields after saving
    setUsername("");
    setEmail("");
    setNat("uzbek");
    setDesc("");
  }

  return (
    <div className="div">
      <form className="form">
        <li className="list">
          <label for="ism">Ism:</label>
          <input
            onChange={handleChangeName}
            value={username}
            type="text"
            placeholder="Enter name..."
            id="ism"
            required
          />
        </li>

        <li className="list">
          <label for="email">Email:</label>
          <input
            onChange={handleChangeEmail}
            value={email}
            type="email"
            placeholder="Email..."
            id="email"
            required
          />
        </li>

        <li className="list">
          <select onChange={handleChangeNat} value={nat}>
            <option value="uzbek">uzbek</option>
            <option value="russian">russian</option>
            <option value="english">english</option>
          </select>
        </li>

        <li className="list">
          <label for="izoh">Izoh yozmoq:</label>
          <textarea
            onChange={handleChangeDesc}
            value={desc}
            placeholder="Enter description..."
            id="izoh"
            required
          ></textarea>
        </li>
        <button onClick={handleSave}>Save</button>
      </form>

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
