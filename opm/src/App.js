import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Otp_page from './components/Pages/Otp_page';
import HomePage from './components/Pages/HomePage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Otp_page/>} path='/otp-verification'/>
          <Route element={<HomePage/>} path='/' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
