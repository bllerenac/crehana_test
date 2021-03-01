import STORE from '../Store'
import level_icon from '../../images/icons/level_icon.png';
import star_icon from '../../images/icons/star_icon.png';
import people_icon from '../../images/icons/people_icon.png'

function Courses() {
  const data_courses = STORE.courses
  return(
    <div className="courses_container">
      {data_courses.map(course =>{
        let level = LevelInt(course.level) ;
        
        return(
          <div key={course.id} className="course_content">
            <figure>
              <img src={course.image} alt="Course" />
              <p className="course_content-dsct">%{course.discount}</p>
            </figure>
            <div className="course_description">
              <h5>{course.course_name}</h5>
              <h6>{course.username}</h6>
              <div className="course_content-information">
                <p><img src={level_icon} alt="level_icon"/>{level}</p>
                <p><img src={people_icon} alt="people_icon"/>{course.users} Usuarios</p>
                <p><img src={star_icon} alt="star_icon"/>{course.score}</p>
              </div>
              <div className="course_content-cost">
                <h4>co${course.price}</h4>
                <p>CO${course.real_price}</p>
              </div>
              <button className="button primary medium">Comprar ahora</button>
            </div>
          </div>
        )
      })}
    </div>
  );
}

function LevelInt(level) {
  switch (level) {
    case "Introductorio":
      return 0;
    case "Intermedio":
      return 1;
    case "Avanzado":
      return 2; 
    default:
      return 3;
  }
}

export default Courses;