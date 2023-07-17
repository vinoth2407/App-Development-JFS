import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



import LoginSignup from './components/login';
import Home from './components/home';
// import { Routes } from 'react÷-router-dom';

import Nav from './components/nav';
import Routing from './components/routing';
import Map from './components/map';
import { ChakraProvider,theme } from '@chakra-ui/react';
import DriverLogin from './components/DriverLogin';
import Footer from './components/footer';
import MediaCard from './components/details';

import Blog from './components/details';
import Contact from './components/contact';
import { Provider } from "react-redux";
import store from './App/store';

import HomePage from './components/Gif';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <Provider store={store}>
      <Routing/>
    </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
