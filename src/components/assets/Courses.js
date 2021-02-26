import STORE from '../Store'

function Courses() {
  const data_courses = STORE.courses
  return(
    <div className="courses_container">
      {data_courses.map(course =>{
        return(
          <div key={course.id} className="course_content">
            <figure>
              <img src="" alt="Course Image" />
              <p>{course.discount}</p>
            </figure>
            <h5>{course.course_name}</h5>
            <h6>{course.username}</h6>
            <div>
              <p>Nivel {course.level}</p>
              <p>{course.users} Usuarios</p>
              <p>{course.score}</p>
            </div>
            <button className="button primary medium">Comprar ahora</button>
          </div>
        )
      })}
    </div>
  );
}

export default Courses;