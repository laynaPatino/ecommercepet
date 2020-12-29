import './App.scss';
import './components/navBar/navBar.jsx'
import Category from './components/Category/index'
import NavBar from './components/navBar/navBar';
import ProductList from './components/Home/listContainerHome/productList/ProductList'
import DetailProducts from './components/detailProducts/index'
import {BrowserRouter, Switch , Route} from 'react-router-dom'

function App() {

  const chosenSection = (section => {
    switch(section){
      case 'ProductList': return <ProductList/>;
      case 'DetailProducts' : return <DetailProducts/>;
      case 'Category' : return <Category/>
      default : return <ProductList/>
    }
  })


  return (
    <>
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          {chosenSection('ProductList')}
        </Route>
        <Route exact path="/item/:itemid">
          {chosenSection('DetailProducts')}
        </Route>
        <Route exact path="/category/:category_name?">
          {chosenSection('Category')}
        </Route>

      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
