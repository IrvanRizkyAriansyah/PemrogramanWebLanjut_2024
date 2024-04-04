import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import BaseRoute from './apps/BaseRoute';

function App() {
  return (
    <BrowserRouter>
      <BaseRoute />
    </BrowserRouter>
  );
}

export default App;
