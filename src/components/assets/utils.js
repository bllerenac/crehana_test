import STORE from '../Store';

function OnlyCategory(element) {
  const data = STORE.courses ;
  // eslint-disable-next-line
  const array_cat =  data.map(course => {
    // eslint-disable-next-line
    switch (element) {
      case "category":
        return course.category;
      case "sub_category":
        return course.sub_category;
      case "level":
        return course.level;
      case "price":
        return course.price;
    }
    })
    
  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }
  var unique = array_cat.filter( onlyUnique );
  return  unique;
}

export { OnlyCategory };