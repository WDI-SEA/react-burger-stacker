import './App.css';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

const ingredients = [{
  buns: [
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'}
  ],
  patties: [
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
  ],
  toppings: [
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
  ]
}];


function App() {
  return (
    <div className="App">
      {ingredients.map((ingredient) => (
        <IngredientList ingredient={ingredient} />
      ))}
      <BurgerPane />
    </div>
  );
}

export default App;
