import './navBar.scss';

function navBar() {
  return (
    <>
      <header>
        <div>
          <h1 className="title">BomJi Box</h1>
          <nav>
            <ul>
              <li>
                <a href="#">Caja del mes</a> 
              </li>
              <li>
                <a href="#">Por temporada</a> 
              </li>
              <li>
                <a href="#">Sorpresas</a> 
              </li>
              <li>
               <a href="#">Promociones</a> 
              </li>
              <li>
               <a href="#">Personalizadas</a> 
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default navBar;