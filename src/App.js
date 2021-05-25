import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Login from './Components/Login/Login';
import User from './Components/User/User';
import Home from './Pages.js/Home';
import Photo from './Components/Photo/Photo';
import { UserStorage } from './UserContext';
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="appBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <ProtectedRoute path="conta/*" element={<User />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
