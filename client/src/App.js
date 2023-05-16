import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './components/navbar';
import Home from "./pages/home"
import Dashboard from './pages/dashboard';

import { BrowserRouter, Router ,Route } from 'react-router-dom';






function App() {
  return (
    <div  >
      
      <Bar />
      <BrowserRouter>
      <Router>
     
      <Route path='/'element={<Home  />}/>
      <Route path='/dashboard' element={<Dashboard />} />
      </Router>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
