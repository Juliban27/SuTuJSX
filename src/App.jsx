
import './styles/App.css'
// import {Test} from './components/Test';
import { NavBar } from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Cart} from './components/Cart'
import {Checkout} from './components/Checkout'
import {ItemDetailsContainer} from './components/ItemDetailsContainer'
import { NotFound } from './components/NotFound';



export const App = () => {

  return (
    <BrowserRouter>
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:cid' element={<ItemListContainer/>}/>
        <Route path='/product/:pid' element={<ItemDetailsContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}


