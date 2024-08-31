
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import DishesApp from './DishesApp';
import MenuApp from './MenuApp';

function App() {
    return <Router>
      <div className='nav'>
          <Link to = '/' className='link'>Home</Link>
          <Link to = '/DessertComponent/DishesApp' className='link'>Dessert</Link>
          <Link to = '/MenuApp' className='link'>Food</Link>
      </div>

      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/DessertComponent/DishesApp" element = {<DishesApp/>}/>
        <Route path = "/MenuApp" element = {<MenuApp/>}/>
      </Routes>
    </Router>
   
}

export default App;
