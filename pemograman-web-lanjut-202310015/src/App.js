import logo from './logo.svg';
import './App.css';
import LayoutInit from './components/LayoutInit';
import { BrowserRouter } from 'react-router-dom';
import BaseRoute from './apps/BaseRoute';

function App() {
  // const createSessionStorage = () => {
  //   sessionStorage.setItem('token', '12345');
  //   alert('Success save token to sessionStorage');
  // };

  // const removeSessionStorage = () => {
  //   sessionStorage.removeItem('token');
  //   alert('Success remove token to sessionStorage');
  // };

  // const createLocalStorage = () => {
  //   localStorage.setItem('token', '54321');
  //   alert('Success save token to localStorage');
  // };

  // const removeLocalStorage = () => {
  //   localStorage.removeItem('token');
  //   alert('Success remove token to localStorage');
  // };

  return (
    // <>
    //   <h1>sessionStorage</h1>
    //   <button onClick={createSessionStorage}>Set token sessionStorage</button>
    //   <div>sessionStorage : {sessionStorage.getItem('token')}</div>
    //   <button onClick={removeSessionStorage}>
    //     Remove token sessionStorage
    //   </button>

    //   <h1>localStorage</h1>
    //   <button onClick={createLocalStorage}>Set token sessionStorage</button>
    //   <div>localStorage : {localStorage.getItem('token')}</div>
    //   <button onClick={removeLocalStorage}>Remove token sessionStorage</button>
    // </>
    <BrowserRouter>
      <BaseRoute />
    </BrowserRouter>
  );
}

export default App;
