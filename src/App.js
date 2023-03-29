import './App.css';
import { useEffect,useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateProfile from './pages/CreateProfile';
import ViewProfile from './pages/ViewProfile';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setUser } from "./redux/features/authSlice";

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alert);

  useEffect(() => {
    console.log(localStorage.getItem("authToken"));
    localStorage.getItem("authToken")
      ? dispatch(setUser(JSON.parse(localStorage.getItem("authToken"))?.user))
      : dispatch(setUser(null));

    localStorage.getItem("authToken")
      ? dispatch(setToken(JSON.parse(localStorage.getItem("authToken"))?.token))
      : dispatch(setToken(""));
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/create-profile' element={<CreateProfile />}/>
        <Route path='/view-profile' element={<ViewProfile />}/>
      </Routes>
      
    </div>
  );
}

export default App;
