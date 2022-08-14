import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from "./pages/periodictable/Games";
import GetScienceBlogAPI from './pages/periodictable/GetScienceBlogAPI'
import ElementInfo from './pages/periodictable/ElementInfo';
import PeriodicData from './pages/periodictable/PeriodicData';
import NavbarLayout from "./pages/components/NavbarLayout";
import Footer from "./pages/components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from './pages/NoPage';

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavbarLayout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} >
            <Route path="periodicdata" element={<PeriodicData />} />
            <Route path="elementinfo" element={<ElementInfo />} />
            <Route path="scienceblog" element={<GetScienceBlogAPI />} />
            <Route path="games" element={<Games />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);