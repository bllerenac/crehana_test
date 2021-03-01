import { OnlyCategory } from './utils';
import { useState } from "react";
import anuncement from '../../images/icons/anuncement.png';

function Categories (){
  // eslint-disable-next-line
  const [categories , setcategories] = useState(OnlyCategory("category" ));
  
  return(
    <section className="category_container">
      <h4>Title H4 - Categorias</h4>
      <div className="category_categories">
        {categories.map(category => {
          return (
            <div key={category} className="categories_filter">
              <img alt="Category"src={anuncement}/>
              {/* eslint-disable-next-line*/}
              <a href="#">{category}</a>
            </div>
          );
        })}
      </div>
    </section>
  )
}




export default Categories;