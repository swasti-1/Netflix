import { useEffect } from 'react';
import Homescreen from './components/Homescreen';
import Profile from './components/Profile';          // Ensure Profile component is imported correctly
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './components/redux/counter/userslice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);          // Add dispatch to dependency array for consistent execution

  return (
    <div className='app'>
      <Router>
        <Routes>
          {!user ? (
            <Route path='/' element={<Login />} />
          ) : (
            <>
              <Route path='/' element={<Homescreen />} />
              <Route path='/profile' element={<Profile/>} />      // Ensure Profile component route is correct
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
