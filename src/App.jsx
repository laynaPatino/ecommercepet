import {useState} from 'react';
import './App.scss';
import './components/navBar/navBar.jsx'
import Category from './components/Category/index'
import NavBar from './components/navBar/navBar';
import ProductList from './components/Home/listContainerHome/productList/ProductList'
import DetailProducts from './components/detailProducts/index';
import Cart from './components/cart/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Store } from '../src/store/index'

function App() {

  const [data, setData] = useState({
    items: [],
    cantidad: 0,
    precioTotal: 0,
  })

  return (
    <Store.Provider value={[data, setData]}>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route exact path="/item/:itemid">
            <DetailProducts />
          </Route>
          <Route exact path="/category/:category_name?">
            <Category />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
