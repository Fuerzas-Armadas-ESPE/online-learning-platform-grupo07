// En tu archivo de servicios o API (coursesApi.js)
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebase from './firebase';

initializeApp(firebase);

export const getCoursesFromFirestore = async () => {
  const db = getFirestore();

  try {
    const querySnapshot = await getDocs(collection(db, 'cursos'));
    const courses = querySnapshot.docs.map(doc => {
      const courseData = {
        id: doc.id,
        description: doc.data().description,
        fecha: doc.data().fecha.toDate(), // Convierte la marca de tiempo a fecha
        instructor: doc.data().instructor,
        title: doc.data().title,
        url: doc.data().url,
      };
      console.log('Descripción del curso:', courseData.description);
      return courseData;
    });

    return courses;
  } catch (error) {
    console.error('Error getting documents:', error);
    return [];
  }
};
