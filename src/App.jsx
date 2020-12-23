import './App.scss';
import './components/navBar/navBar.jsx'
import NavBar from './components/navBar/navBar';
import ProductList from './components/Home/listContainerHome/productList/ProductList'
import DetailProducts from './components/detailProducts/index'

function App() {

  const chosenSection = (section => {
    switch(section){
      case 'ProductList': return <ProductList/>;
      case 'DetailProducts' : return <DetailProducts/>;
      default : return <ProductList/>
    }
  })


  return (
    <>
    <NavBar></NavBar>
    {chosenSection('DetailProducts')}
    </>
  );
}

export default App;
