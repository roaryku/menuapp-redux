import { useSelector } from 'react-redux';
import dataDishes from '../data/dataDishes';
import Dish from "./Dish";
import { getSelectedCategory } from '../redux/dishesSlice';

const Dishes = () => {

    const selectCategory = useSelector(getSelectedCategory)

    return (
        <div className='headerDishes'>
            { dataDishes
            .filter(dish => {
                if (selectCategory === 'ALL') return true;
                return selectCategory === dish.category;
            })
            .map((dish, id) => <Dish dish = {dish}
            key={id}/>
            ) }
        </div>
    )
}
export default Dishes;