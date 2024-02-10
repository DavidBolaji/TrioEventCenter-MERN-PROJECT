import React, { useState } from "react";
import styles from "./LoginForm.module.css";

/**--------- used imports
import NavBar from "./NavBar.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';
import { login, reset } from '../store/auth/authSlice';
import Spinner from '../components/Spinner'
-------------*/

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    let obj = {
      email,
      password,
    };

    fetch("http://localhost:4000/login", {
      method: "post",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          setPassword("");
          setEmail("");
          localStorage.setItem("token", data.token);
          alert("User logged in");
        } else {
          alert("Something went wrong");
        }
        console.log(data);
      });
  };

  return (
    <div>
      <div className={styles.container}>
        <h2>Login</h2>

        <div className={styles.form}>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </div>
          <button className={styles.button} onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

//=======================================================
// // LoginForm.jsx

// import { useState } from 'react';
// import * as usersService from '../../utilities/users-services';

// export default function LoginForm({ setUser }) {
// const [credentials, setCredentials] = useState({
//   email: '',
//   password: ''
// });
// const [error, setError] = useState('');

// function handleChange(evt) {
//   setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
//   setError('');
// }

// async function handleSubmit(evt) {
//   // Prevent form from being submitted to the server
//   evt.preventDefault();
//   try {
//     // The promise returned by the signUp service method
//     // will resolve to the user object included in the
//     // payload of the JSON Web Token (JWT)
//     const user = await usersService.login(credentials);
//     setUser(user);
//   } catch {
//     setError('Log In Failed - Try Again');
//   }
// }

// return (
//   <div>
//     <div className="form-container" onSubmit={handleSubmit}>
//       <form autoComplete="off" >
//         <label>Email</label>
//         <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
//         <label>Password</label>
//         <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
//         <button type="submit">LOG IN</button>
//       </form>
//     </div>
//     <p className="error-message">&nbsp;{error}</p>
//   </div>
// );
// }
