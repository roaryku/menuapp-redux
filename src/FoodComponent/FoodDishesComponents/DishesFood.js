import { useSelector } from 'react-redux';
import Dish from "./DishFood";
import { getSelectedCategory } from '../redux/dishesSliceFood.js';
import dishesData from '../data/dishesData';

const DishesFood = () => {

    const selectCategory = useSelector(getSelectedCategory)

    return (
        <div className='AllDishesContainer'>
            { dishesData
            .filter(dish => {
                if (selectCategory === 'ALL') return true;
                return selectCategory === dish.category;
            })
            .map((dish, idFood) => <Dish dish = {dish}
            key={idFood}/>
            ) }
        </div>
    )
}
export default DishesFood;