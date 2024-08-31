import FilterFood from './FilterFood'

const AllCategoriesFood = () => {
    return (
        <div>

        <div className='AllCategoryContainer'>
            {['ITALIAN', 'SEAFOOD', 'APPETIZERS', 'SALADS', 'ALL']
            .map(((category, dishId) => 
            <FilterFood category = {category}
            key={dishId}
            />
            ))}
         </div>
        </div>
    )
}
export default AllCategoriesFood;