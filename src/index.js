import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from "./pages/periodictable/Games";
import GetScienceBlogAPI from './pages/periodictable/GetScienceBlogAPI'
import ElementInfo from './pages/periodictable/ElementInfo';
import PeriodicTable from './pages/periodictable/PeriodicTable';
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
          <Route path="/" element={<Home />} >
          {/* <Route index element={<Home />} > */}
            <Route path="/" element={<PeriodicTable />} />
            <Route path="periodic-table" element={<PeriodicTable />} />
            <Route path="element-info" element={<ElementInfo />} />
            <Route path="science-blog" element={<GetScienceBlogAPI />} />
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