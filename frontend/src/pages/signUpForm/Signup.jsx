// import React, { useState } from "react";
import { useState } from "react";
import styles from "./Singup.module.css";
// import NavBar from "../../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    let obj = {
      firstname,
      lastname,
      email,
      password,
    };

    fetch("http://localhost:3000/signup", {
      method: "post",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          alert("User added successfully");
          navigate("/login");
        } else {
          alert("Something went wrong");
        }
      });
  };

  return (
    <div>
      <div className={styles.container}>
        <h2>Sign Up</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>First Name:</label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Last Name:</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={styles.input}
            />
          </div>
          {error && (
            <div className={styles.formGroup}>
              <div className={styles.error}>Password mismatch!</div>
            </div>
          )}
          <button type="submit" className={styles.button}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
