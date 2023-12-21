import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import { Provider } from 'react-redux';
import {PayPalScriptProvider} from '@paypal/react-paypal-js';
import store from './store';
import CartPage from './Pages/CartPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ShippingPage from './Pages/ShippingPage';
import PrivateRoute from './components/PrivateRoute';
import PaymentPage from './Pages/PaymentPage';
import PlaceOrderPage from './Pages/PlaceOrderPage';
import OrderPage from './Pages/OrderPage';
import ProfilePage from './Pages/ProfilePage';
import AdminRoute from './components/AdminRoute';
import OrderListPage from './Pages/admin/OrderListPage';
import ProductListPage from './Pages/admin/ProductListPage';
import ProductEditPage from './Pages/admin/ProductEditPage';
import UsersListPage from './Pages/admin/UsersListPage';
import UserEditPage from './Pages/admin/UserEditPage';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path='/' element={<HomePage />} />
      <Route path='/search/:keyword' element={<HomePage />} />
      <Route path='/page/:pageNumber' element={<HomePage />} />
      <Route path='/search/:keyword/page/:pageNumber' element={<HomePage />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      
      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingPage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/placeorder' element={<PlaceOrderPage />} />
        <Route path='/order/:id' element={<OrderPage />} />
        <Route path='/profile' element={<ProfilePage/>} />
      </Route>

      <Route path='' element={<AdminRoute />}>
        <Route path='/admin/orderlist' element={<OrderListPage/>} />
        <Route path='/admin/productlist' element={<ProductListPage/>} />
        <Route path='/admin/productlist/:pageNumber' element={<ProductListPage/>} />
        <Route path='/admin/product/:id/edit' element={<ProductEditPage/>} /> 
        <Route path='/admin/userlist' element={<UsersListPage/>} />
        <Route path='/admin/user/:id/edit' element={<UserEditPage/>} /> 
      </Route>
    </Route> 
  )
)
//if we don't provide index={true} we might have issue where
//it will show multiple screens at once, so we want to make sure that for
//"/" only HomePage is visible.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider deferLoading >
          <RouterProvider router={router} />
        </PayPalScriptProvider> 
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
