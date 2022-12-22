import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import ErrorScreen from './Components/Screens/ErrorScreen';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
