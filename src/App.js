import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import Nav from './components/Nav';
import SearchProduct from './components/SearchProduct';
import DeleteProduct from './components/DeleteProduct';
import ViewProducts from './components/ViewProducts';

function App() {
  return (
    <div>
      <Nav />
      <AddProduct />
      <SearchProduct />
      <DeleteProduct />
      <ViewProducts />
    </div>
  );
}

export default App;
