import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Teachers from "./pages/Teachers/Teachers";
import Favorite from "./pages/Favorite/Favorite";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/auth/authSlice";

function App() {

  const a = useSelector(selectIsLoggedIn);
console.log(a);



  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path ="/teachers" element={<Teachers />}/>
      <Route path ="/favorite" element={<Favorite />}/>
    </Routes>
    </>
  );
}

export default App;
