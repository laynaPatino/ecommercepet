import './App.scss';
import './components/navBar/navBar.jsx'
import NavBar from './components/navBar/navBar';
import ListContainerHome from './components/Home/listContainerHome/listContainerHome'

function App() {
  return (
    <>
    <NavBar></NavBar>
    <ListContainerHome/>
    </>
  );
}

export default App;
