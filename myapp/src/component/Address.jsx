import './App.css';
import Navbar from './Component/Navbar';
import Menu from './Component/Menu';
import FoodCard from './Component/FoodCard';
import Address from './Component/Address';

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <Menu />
      <br />
      <FoodCard />
      <br />
      <Address />
    </div>
  ); 
}

export default App;
