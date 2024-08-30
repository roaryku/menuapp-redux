import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from "../redux/dishesSliceFood.js";


const Filter = ({category}) => {

    const dispatch = useDispatch();
    const selectCategory = useSelector(getSelectedCategory);
    

    return(
        <div>
           <p onClick = {() => {dispatch(filterCategory(category))}}
               className={selectCategory === category ? 'categoryButtonSelected' : 'categoryButton'}>
            {category}</p>
        </div>
    )
}
export default Filter;