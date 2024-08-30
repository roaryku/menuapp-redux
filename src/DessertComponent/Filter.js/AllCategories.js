import Filter from "./Filter";


const AllCategories = () => {
    return (<div>
        
        <h1>Find your favorite dessert</h1>

        <div className="categoryContainer">
        {['CAKES','CUP-CAKES', 'PIE', 'ICE CREAM-DESSERT', 'CROISSANTS', 'MACAROONS','DONUTS', 'ALL']
        .map(((category, id) =>  
            <Filter category = {category} key={id}/>))
        }
      </div>
    </div> 
    )
}
export default AllCategories;