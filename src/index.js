//нужно приложение обернуть в провайдер

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Product } from './pages/Product';
import { Provider } from 'react-redux';
import store from './store';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  }
], {basename:'/abito-react-app'});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

