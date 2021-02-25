import STORE from '../Store';
import { useState } from "react";

function Categories (){

  const [categories , setcategories] = useState(OnlyCategory);

  return(
    <section>
      <h4>Title H4 - Categorias</h4>
      <div>
        {categories.map(category => {
          return <a href="#" key={category} className="categories_filter" >{category}</a>;
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