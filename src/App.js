import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import Categories from "./Components/Categories/Categories";
import Category2 from "./Components/Category2/Category2";
import EditLanguage from "./Components/EditLangugage/EditLanguage";
import HomePage from "./Pages/HomePage";
import Layout from "./Components/Layout/Layout";
import Polygon from "./Components/Polygon/Polygon";
import Public from "./Components/Public/Public";
import NotFound from "./Pages/NotFound";
import Login from "./Components/Auth/Login/Login";
import Register1 from "./Components/Auth/Register1/Register1";
import Register2 from "./Components/Auth/Register2/Register2";
import Autorization from "./Components/Auth/Autorization/Autorization";
import LoginSuccess from "./Components/Auth/LoginSuccess/LoginSuccess";
import HexCourse from "./Components/HexCourse/HexCourse";
import LanguagePage from "./Pages/LanguagePage";
import store from "./redux/store"


import "./App.css";
import CoursesPage from "./Pages/CoursesPage";

function App() {
  return (
    <div className="Wrapper">
      <Routes className="background">
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="languagePage" element={<LanguagePage />} />
          <Route path="categories" element={<Categories />} />
          <Route path="category2" element={<Category2 />} />
          <Route path="*" element={<NotFound />} />
          <Route path="editLanguage" element={<EditLanguage />} />
          <Route path="publicProfile" element={<Public />} />
          <Route path="profile" element={<Public />} />
          <Route path="hex" element={<HexCourse />} />
          <Route path="category2" element={<CoursesPage />} />

        </Route>
        <Route path="polygon" element={<Polygon />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register1" element={<Register1 />} />
        <Route path="/register2" element={<Register2 />} />
        <Route path="/autorization" element={<Autorization />} />
        <Route path="/loginSuccess" element={<LoginSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
