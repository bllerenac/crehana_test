import { OnlyCategory } from './utils';

function SelectPicker({name_element}) {
  const data = OnlyCategory(name_element)
  console.log(name_element)
  return(
    <select className="selectpicker">
      <option>Todos</option>
      {data.map(element => {return <option key={element}>{element}</option>})}
    </select>
  );
}

export default SelectPicker;