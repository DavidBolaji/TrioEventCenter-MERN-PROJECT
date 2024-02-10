// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
// import MyRoutes from "./components/routes/Routes.jsx";
import Header from "./components/header/Header.jsx";
import "react-toastify/dist/ReactToastify.css";
// import Login from "./pages/Login";
// import Register from "./pages/Register/Register.jsx";

// import Signup from "./Signup.jsx";

/**Added import */
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Login from "./components/LoginForm/Login.jsx";
import Register from "./pages/Register/Register.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Header />
        <NavBar /> */}
        {/* {!localStorage.getItem("token") && <SignupModal />} */}
        <Route path="/" element={<Login />} />
        <Route path="/event" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
//==================================================
// import dependencies
// import { useState } from 'react'
// import { Routes, Route, Navigate } from 'react-router-dom';

// // import my functionality that I've added
// import { getUser } from '../../utilities/users-services';

// // css
// // import './App.css'
// import styles from './App.module.css'

// // import pages
// import AuthPage from './AuthPage';

// // import components
// import NavBar from '../../components/NavBar/NavBar';

// function App() {
//   const [user, setUser] = useState(getUser());
//   // useState({
//   //   name: "John Smith",
//   //   email: "emailAddress@something"
//   // })

//   // in here
//   // use the useState hook to define a state variable called user
//   // initialize that to null
//   // the setter function should be named according to convention
//   return (
//     <main className={styles.App}>
//       {
//         user
//           ?
//           <>
//             <NavBar user={user} setUser={setUser} />
//             < Routes >
//             <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser}/>} />
//             <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
//               {/*<Route path='/orders/new' element={<NewOrderPage />} />
//               <Route path='/orders' element={<OrderHistoryPage />} />*/}
//               {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
//               <Route path="/*" element={<Navigate to="/orders/new" />} />
//             </Routes>
//           </>
//           :
//           < AuthPage setUser={setUser} />
//       }
//     </ main>
//   )
// }

// export default App
