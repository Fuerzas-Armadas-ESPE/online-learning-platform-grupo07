import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Fotter";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetailsPage from "./pages/CourseDetailsPage"; // Importa la nueva página

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} /> 
          <Route path="/course/:id" element={<CourseDetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
