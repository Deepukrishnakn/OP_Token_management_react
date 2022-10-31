import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Otp_page from './components/Pages/Otp_page';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Otp_page/>} path='/otp-verification'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
