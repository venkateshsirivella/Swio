import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import PaymentPage from './Components/PaymentPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Payment' element= {<PaymentPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
