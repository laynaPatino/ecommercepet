import './App.scss';
import './components/navBar/navBar.jsx'
import NavBar from './components/navBar/navBar';
import ListContainerHome from './components/Home/listContainerHome/listContainerHome'
import ProductList from './components/Home/listContainerHome/productList/ProductList'

function App() {
  return (
    <>
    <NavBar></NavBar>
    <ListContainerHome/>
    <ProductList/>
    </>
  );
}

export default App;
