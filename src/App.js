import logo from './logo.svg';
import './App.css';
import {Link,Outlet} from 'react-router-dom'
function App() {
  return (
    <div>
      <nav className='navbar'>
          <Link to="/" className='nav-item'>Inicio</Link>
          <Link to="favoritos" className='nav-item'>Favoritos</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
