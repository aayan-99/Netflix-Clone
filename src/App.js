import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProtectedRoute from "./Components/ProtectedRoute";
import { AuthContectProvider } from "./context/AuthContext";
import Account from "./Pages/Account";
import Home from './Pages/Home';
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";


function App() {
  return (
    <>
    <AuthContectProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute> }/>
      </Routes>
    </AuthContectProvider>
    </>
  );
}

export default App;
