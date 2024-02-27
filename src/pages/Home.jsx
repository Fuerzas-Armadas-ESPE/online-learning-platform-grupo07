import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { getCoursesFromFirestore } from "../api/coursesApi";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesData = await getCoursesFromFirestore();
        setCourses(coursesData);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Online Learning Platform</h1>
      <p>Start your learning journey today!</p>
      <Button variant="contained" component={Link} to="/courses">
        Explore Courses
      </Button>
      <div>
        <h2>Todos los cursos:</h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>
              {/* Enlace a la página del curso con todos los datos */}
              <Link to={`/course/${course.id}`}>{course.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <p>© 2024 Online Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
