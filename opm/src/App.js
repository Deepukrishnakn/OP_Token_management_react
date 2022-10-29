import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import PhoneVerifyPage from './pages/PhoneVerifyPage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='phone_verify' element={<PhoneVerifyPage/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
