
import './styles/App.css'
// import {Test} from './components/Test';
import {NavBar} from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import {ItemCount} from './components/ItemCount';

export const App = () => {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="¡Hola, Usuario!" />
      <ItemCount/>
      

    </>
  );
}


