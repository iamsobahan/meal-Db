import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Fooddetails from './Components/Fooddetails/Fooddetails';
import Foods from './Components/Foods/Foods';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Info from './Components/Info/Info';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header></Header>
      <Switch>
             <Route path="/home">
                    <Home></Home>
            </Route>
              <Route path="/food">
                   <Foods></Foods>
            </Route>

            <Route path="/sfood/:mealId">
                   <Fooddetails></Fooddetails>
            </Route>
              <Route path="/info">
                   <Info></Info>
            </Route>
              <Route path="/contact">
                    <Contact></Contact>
            </Route>
              <Route path="*">
                    <Home></Home>
            </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
