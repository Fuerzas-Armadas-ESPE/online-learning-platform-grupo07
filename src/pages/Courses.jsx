import   { useEffect, useState } from "react";
import { getCoursesFromFirestore } from "../api/coursesApi"; // Importa la función para obtener los cursos desde Firestore

const Courses = () => {
  const [courses, setCourses] = useState([]); // Estado para almacenar los cursos obtenidos desde Firestore

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesData = await getCoursesFromFirestore();
        console.log('Courses data:', coursesData); // Verifica los datos obtenidos
        const formattedCourses = coursesData.map((course) => ({
          id: course.id,
          title: course.title,
          description: course.description,
          instructor: course.instructor,
          create: course.fecha, // Renombrado de fecha a create para mantener la consistencia
          url: course.url,
        }));
        setCourses(formattedCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h2>{course.title}</h2> {/* Título del curso */}
            <p style={{ textAlign: "justify" }}>
              Description: {course.description}
            </p>
            {/* Descripción del curso */}
            <p>Instructor: {course.instructor}</p> {/* Instructor del curso */}
            <p>Created: {new Date(course.create).toLocaleString()}</p>{" "}
            {/* Fecha de creación del curso */}
            <p>
              URL: <a href={course.url}>{course.url}</a>
            </p>{" "}
            {/* URL del curso */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
