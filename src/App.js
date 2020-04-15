import React from 'react';
import Header from './components/Header';
import Productos from './components/Productos/Productos'
import NuevoProducto from './components/Productos/NuevoProducto';
import EditarProducto from './components/Productos/EditarProducto';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
            <Route exact path="/register" component={Register} />
            <Route exact path="/productos" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route exact path="/productos/editar/:id" component={EditarProducto} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
