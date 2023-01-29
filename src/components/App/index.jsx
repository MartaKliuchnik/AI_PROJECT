import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import WelcomePage from '../../pages/WelcomePage';
import AuthPage from '../../pages/AuthPage';
import MainPage from '../../pages/MainPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<WelcomePage/>} />
          <Route path='/auth' element={<AuthPage/>} />
          <Route path='/main' element={<MainPage/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
