import { useState } from "react";
import "./App.css";
import RecipiesList from "./pages/recipies.jsx";
import CommentsList from "./pages/comments.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import Layout from "./pages/Layout.jsx";
import ReactHookForm from "./pages/ReactHookForm.jsx";
function App() {
  const navigate = useNavigate();
  return (
    <>
      <h1>React Routin, Coustom Hooks and More</h1>

      <button
        onClick={() => navigate("/recepieslist")}
        style={{
          margin: "10px",
          background: "#000",
          color: "#fff",
          padding: "10px",
        }}
      >
        Navigate to reciepe list page
      </button>
      <button
        onClick={() => navigate("/commentslist")}
        style={{
          margin: "10px",
          background: "#000",
          color: "#fff",
          padding: "10px",
        }}
      >
        Navigate to comment list page
      </button>
      <button
        onClick={() => navigate("/")}
        style={{
          margin: "10px",
          background: "#000",
          color: "#fff",
          padding: "10px",
        }}
      >
        Back to homel
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "10px",
          padding: "10px",
        }}
      >
        {/* <Link to={"/"}>Home </Link>
        <Link to={"/recepieslist"}>Recepie List </Link>
        <Link to={"/commentslist"}>Comment List </Link> */}
        {/* <Link to={"/RecipeDetails"}>Recipe Details </Link> */}
      </div>
      <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="recepieslist" element={<RecipiesList />} />
          <Route path="commentslist" element={<CommentsList />} />
          <Route path="recepieslist/:id" element={<RecipeDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/reacthookform" element={<ReactHookForm />} />
      </Routes>
      
    </>
  );
}

export default App;
