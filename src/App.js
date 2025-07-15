import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import Nav from './components/Nav';
import SearchProduct from './components/SearchProduct';
import DeleteProduct from './components/DeleteProduct';
import ViewProducts from './components/ViewProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Nav />
      <AddProduct />
      <SearchProduct />
      <DeleteProduct />
      <ViewProducts /> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddProduct/>}/>
        <Route path='/search' element={<SearchProduct/>}/>
        <Route path='/delete' element={<DeleteProduct/>}/>
        <Route path='/view' element={<ViewProducts/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
