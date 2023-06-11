import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Components/Pages/Profile/Profile';
import Home from './Components/Home/Home';
import Bbsf from './Components/Pages/CafPages/Bbsf/Bbsf';
import Blessed from './Components/Pages/CafPages/Blessed/Blessed';
import Buwa from './Components/Pages/CafPages/Buwa/Buwa';
import Divine from './Components/Pages/CafPages/Divine/Divine';
import Forza from './Components/Pages/CafPages/Forza/Forza';
import Glory from './Components/Pages/CafPages/Glory/Glory';
import Jubilee from './Components/Pages/CafPages/Jubilee/Jubilee';
import KemiBee from './Components/Pages/CafPages/KemiBee/KemiBee';
import Sumptuous from './Components/Pages/CafPages/Sumptuous/Sumptuous';
import Y2k from './Components/Pages/CafPages/Y2k/Y2k';
import SignUp from './Components/Pages/Authentication/SignUp/SignUp';
import LogIn from './Components/Pages/Authentication/LogIn/LogIn';
import About from './Components/Pages/About/About';
import Navbar from './Components/Header/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import NavContextProvider from './Contexts/NavContext/NavContextProvider';
import MealContextProvider from './Contexts/MealContext/MealContextProvider';
import Cart from './Components/Pages/Cart/Cart';
import MealModal from './Components/Meals/MealModal/MealModal';

function App() {
  return (
    <NavContextProvider>
      <MealContextProvider>
        <div className="App">
          <Router>
            <Navbar/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/bbsf' element={<Bbsf/>}/>
                <Route path='/blessed' element={<Blessed/>}/>
                <Route path='/buwa' element={<Buwa/>}/>
                <Route path='/divine' element={<Divine/>}/>
                <Route path='/forza' element={<Forza/>}/>
                <Route path='/glory' element={<Glory/>}/>
                <Route path='/jubilee' element={<Jubilee/>}/>
                <Route path='/kemibee' element={<KemiBee/>}/>
                <Route path='/sumptuous' element={<Sumptuous/>}/>
                <Route path='/y2k' element={<Y2k/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/login' element={<LogIn/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/meal' element={<MealModal/>}/>
                <Route path='/drink' element={<MealModal/>}/>
              </Routes>
            <Footer/>
          </Router>
        </div>
      </MealContextProvider>
    </NavContextProvider>
  );
}

export default App;
