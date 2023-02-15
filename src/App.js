import './App.css';
import {DatePicker, Button} from 'antd';

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Home from './Pages/Home/Home';
import DetailPage from './Pages/DetailPage/DetailPage';
import { useEffect } from 'react';

import HomePage from './Pages/HomePage/HomePage';
import Dashboard from './Pages/Dashboard/Dashboard';
import 'materialize-css/dist/css/materialize.min.css';
import AlcholicPerfumes from './Pages/AlcholicPerfumes/AlcholicPerfumes';
import RegUsersList from './Pages/Registered Users List/RegUsersList';
import NonAlcholicPerfumes from './Pages/NonAlcholicPerfumes/NonAlcholicPerfumes';
import ReceivedOrdersList from './Pages/ReceivedOrdersList/ReceivedOrdersList';
import PerfumeSignIn from './Pages/PerfumeSignIn/PerfumeSignIn';

function App() {
  
  return (
    <> 
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<RegUsersList />} />
              <Route path="/perfumesignin" element={<PerfumeSignIn />} />
              <Route path="/alcholicperfumes" element={<AlcholicPerfumes />} />
              <Route path="/nonalcholicperfumes" element={<NonAlcholicPerfumes />} />
              <Route path="/receivedorderslist" element={<ReceivedOrdersList />} />
              
              {/* <Route path="/" element={<Home />} /> */}
              {/* <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path='/detailpage' element={<DetailPage/>} />
              <Route path="/homePage" element={<HomePage />} /> */}
              {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
        </BrowserRouter> 
    </>
  );
}

export default App;
