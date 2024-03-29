import {useState} from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import WelcomePage from '../../pages/WelcomePage';
import MainPage from '../../pages/MainPage';
import LoginPage from "../../pages/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage";
import { Context } from '../../context';
import AboutUsPage from '../../pages/AboutUsPage';
import FreeAnalysisPage from '../../pages/FreeAnalysisPage';
import NotFoundPage from '../../pages/NotFoundPage';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Context.Provider value={{
      isLogin,
      setIsLogin
    }}>
      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<WelcomePage/>} />
          <Route path='/registration_form' element={<RegistrationPage />} />
          <Route path='/login_form' element={<LoginPage />} />
          {/* <Route path='/about_us' element={<AboutUsPage />} /> */}
          <Route path='/free_analysis' element={<FreeAnalysisPage />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>

    </Context.Provider>
  );
}

export default App;
