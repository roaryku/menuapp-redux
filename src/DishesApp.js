
import './App.css';
import video from './backgroundVideo.mp4'
// import backgroundImage from './background.jpg'
import Cart from './DessertComponent/Cart/Cart';
import Dishes from './DessertComponent/DishesComponent/Dishes';
import AllCategories from './DessertComponent/Filter.js/AllCategories';

function DishesApp() {
  return (
    <div className="App backgroundImage">
         {/* <img className='backgroundImage' src={backgroundImage} alt='background'/>  */}
     <video autoPlay muted loop playsInline>
        <source src={video} type='video/mp4'/>
      </video> 

      <div className='block cartContainer'>
          <Cart/>
      </div>

      <div className='block otherContainer'>
         <AllCategories/>
         <Dishes/>
      </div>
    </div>
  );
}

export default DishesApp;





