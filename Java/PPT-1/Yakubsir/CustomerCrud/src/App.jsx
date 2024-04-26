import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Userpage from './pages/Userpage';
import Users from './pages/Users';
import Edit from './pages/Edit';

function App() {
 return (
      <div className="App">
     <Router>
       <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/login' element={<Login />}></Route>
         <Route path='/user/:id' element={<Userpage />}></Route>
         <Route path='/allusers' element={<Users />}></Route>
         <Route path='/edit/:id' element={<Edit/>}></Route>
       </Routes>
     </Router>   
     
      </div>
    
  )
}

export default App
