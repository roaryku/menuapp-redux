import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from "../redux/dishesSlice";


const Filter = ({category}) => {

    const dispatch = useDispatch();
    const selectCategory = useSelector(getSelectedCategory);
    

    return(
        <div className="headerFilter">
           <p onClick = {() => {dispatch(filterCategory(category))}}
               className={selectCategory === category ? 'categoryButtonSelected' : 'categoryButton'}>
            {category}</p>
        </div>
    )
}
export default Filter;