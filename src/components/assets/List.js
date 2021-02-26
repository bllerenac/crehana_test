
import SelectPicker from './Selectpicker';
import Courses from './Courses'

function ListCourses() {
  return (
    <section className="listcourses_container">
      <h4>Title H4 - Listado de cursos</h4>
      <div className="filter_container">
        <div className="selectpicker_container"><h5>CATEGORÍA</h5><SelectPicker name_element = {"category"} /></div>
        <div className="selectpicker_container"><h5>SUBCATEGORÍA</h5><SelectPicker name_element = {"sub_category"} /></div>
        <div className="selectpicker_container"><h5>NIVEL</h5><SelectPicker name_element = {"level"} /></div>
        <div className="selectpicker_container"><h5>PRECIO</h5><SelectPicker name_element = {"price"} /></div>
        <button className="button primary medium">Aplicar filtros</button>
      </div>
      <Courses />
    </section>
  );
}

export default ListCourses;