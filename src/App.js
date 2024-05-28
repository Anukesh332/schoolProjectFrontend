import{Routes,Route,BrowserRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";
import Home from "./Pages/Home";
// import kvplogo from './Images/kvplogo.jpg'

function App() {
  return (
    <div className='Main'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}     

export default App;
