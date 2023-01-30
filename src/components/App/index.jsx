import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import WelcomePage from '../../pages/WelcomePage';
import MainPage from '../../pages/MainPage';
import LoginPage from "../../pages/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<WelcomePage/>} />
          <Route path='/registration_form' element={<RegistrationPage />} />
          <Route path='/login_form' element={<LoginPage />} />
          <Route path='/main' element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
