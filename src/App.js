import React from 'react';
import Header from './components/Header';
import Productos from './components/Productos/Productos'
import NuevoProducto from './components/Productos/NuevoProducto';
import EditarProducto from './components/Productos/EditarProducto';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

//redux
import { Provider } from 'react-redux';
import store from './configStore';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute path="/productos" component={Productos} />
            <ProtectedRoute path="/productos/nuevo" component={NuevoProducto} />
            <ProtectedRoute path="/productos/editar/:id" component={EditarProducto} />

          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
