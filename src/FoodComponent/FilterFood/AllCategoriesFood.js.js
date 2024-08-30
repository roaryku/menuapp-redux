import FilterFood from './FilterFood'

const AllCategoriesFood = () => {
    return (
        <div>

        <div className='AllCategoryContainer'>
            {['ITALIAN', 'SEAFOOD', 'APPETIZERS', 'SALADS', 'ALL']
            .map(((category, idFood) => 
            <FilterFood category = {category}
            key={idFood}
            />
            ))}
         </div>
        </div>
    )
}
export default AllCategoriesFood;