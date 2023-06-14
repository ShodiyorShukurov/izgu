import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/main" element={<HomePage />} />
        <Route path="/" element={<Navigate to='/main' />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Root;
