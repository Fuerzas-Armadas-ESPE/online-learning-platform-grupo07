// CourseDetails.jsx
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCoursesFromFirestore } from "../api/coursesApi";

const CourseDetails = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const coursesData = await getCoursesFromFirestore();
        const selectedCourse = coursesData.find((course) => course.id === id);

        if (selectedCourse) {
          setCourseDetails(selectedCourse);
        } else {
          console.error("Course not found");
        }
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourseDetails();
  }, [id]);

  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  return (
   
    <div>
        <h1></h1>
      <h2>Detalles del curso {courseDetails.title}</h2>
      <p>{courseDetails.description}</p>
      <p>Instructor: {courseDetails.instructor}</p>
      <p>fecha de cracion: {new Date(courseDetails.create).toLocaleString()}</p>
      <p>URL: <a href={courseDetails.url}>{courseDetails.url}</a></p>
      {/* Agrega más detalles según sea necesario */}
    </div>
  );
};

export default CourseDetails;
