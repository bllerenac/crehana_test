import STORE from '../Store';
import { useState } from "react";
import anuncement from '../../images/icons/anuncement.png';

function Categories (){

  const [categories , setcategories] = useState(OnlyCategory);

  return(
    <section className="category_container">
      <h4>Title H4 - Categorias</h4>
      <div className="category_categories">
        {categories.map(category => {
          return (
            <div className="categories_filter">
              <img src={anuncement}/>
              <a href="#" key={category} >{category}</a>
            </div>
          );
        })}
      </div>
    </section>
  )
}

function OnlyCategory() {
  const array_cat =  STORE.courses.map(course => {return course.category})

  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }
  var unique = array_cat.filter( onlyUnique );
  return  unique;
}


export default Categories;