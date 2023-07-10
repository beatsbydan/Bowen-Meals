import './App.css';
import { Route, Routes } from 'react-router-dom';
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
import Footer from './Components/Footer/Footer';
import NavContextProvider from './Contexts/NavContext/NavContextProvider';
import MealContextProvider from './Contexts/MealContext/MealContextProvider';
import Cart from './Components/Pages/Cart/Cart';
import MealModal from './Components/Meals/MealModal/MealModal';
import DrinkModal from './Components/Meals/DrinkModal/DrinkModal';
import Success from './Components/Pages/Success/Success';
import StudentLogin from './Components/Pages/Authentication/StudentLogin/StudentLogin';
import StaffLogin from './Components/Pages/Authentication/StaffLogin/StaffLogin';
import Payment from './Components/Pages/Payment/Payment';
import HomePage from './Components/Pages/HomePage/HomePage';
import StaffLoginContextProvider from './Contexts/AuthContext/StaffLoginContext/StaffLoginContextProvider';
import StaffRegContextProvider from './Contexts/AuthContext/StaffRegContext/StaffRegContextProvider';
import StudentLoginContextProvider from './Contexts/AuthContext/StudentLoginContext/StudentLoginContextProvider';
import StudentRegContextProvider from './Contexts/AuthContext/StudentRegContext/StudentRegContextProvider';
import PaymentsContextProvider from './Contexts/PaymentsContext/PaymentsContextProvider';
import About from './Components/Pages/About/About';
import Register from './Components/Pages/Authentication/Register/Register';
import StaffReg from './Components/Pages/Authentication/StaffReg/StaffReg';
import StudentReg from './Components/Pages/Authentication/StudentReg/StudentReg';
function App() {
  return (
    <NavContextProvider>
      <MealContextProvider>
        <StaffRegContextProvider>
          <StudentRegContextProvider>
            <StaffLoginContextProvider>
              <StudentLoginContextProvider>
                <PaymentsContextProvider>
                  <div className="App">
                    <Routes>
                      <Route exact path='/' element={<HomePage/>}/>
                      <Route path='/login' element={<HomePage/>}/>
                      <Route path='/dashboard' element={<Home/>}/>
                      <Route path='/bbsf' element={<Bbsf/>}/>
                      <Route path='/about' element={<About/>}/>
                      <Route path='/blessed' element={<Blessed/>}/>
                      <Route path='/buwa' element={<Buwa/>}/>
                      <Route path='/divine' element={<Divine/>}/>
                      <Route path='/forza' element={<Forza/>}/>
                      <Route path='/glory' element={<Glory/>}/>
                      <Route path='/jubilee' element={<Jubilee/>}/>
                      <Route path='/kemibee' element={<KemiBee/>}/>
                      <Route path='/sumptuous' element={<Sumptuous/>}/>
                      <Route path='/y2k' element={<Y2k/>}/>
                      <Route path='/studentLogin' element={<StudentLogin/>}/>
                      <Route path='/staffLogin' element = {<StaffLogin/>}/>
                      <Route path='/cart' element={<Cart/>}/>
                      <Route path='/meal' element={<MealModal/>}/>
                      <Route path='/drink' element={<DrinkModal/>}/>
                      <Route path='/pay' element = {<Payment/>}/>
                      <Route path='/success' element={<Success/>}/>
                      <Route path='/register' element={<Register/>}/>
                      <Route path='/staffReg' element={<StaffReg/>}/>
                      <Route path='/studentReg' element={<StudentReg/>}/>
                    </Routes>
                    <Footer/>
                  </div>
                </PaymentsContextProvider>
              </StudentLoginContextProvider>
            </StaffLoginContextProvider>
          </StudentRegContextProvider>
        </StaffRegContextProvider>
      </MealContextProvider>
    </NavContextProvider>
  );
}

export default App;
