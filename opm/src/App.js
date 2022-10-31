
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import PhoneVerifyPage from './pages/PhoneVerifyPage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='phone_verify' element={<PhoneVerifyPage/>}></Route>
      <Route element={<Otp_page/>} path='/otp-verification'/>
      <Route element={<HomePage/>} path='/' />
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
