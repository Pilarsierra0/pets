
const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Brand/>
    <BotondeMenu/>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <SeccionesItem/>
        <a class="nav-link active" aria-current="page" href="#">Alimento</a>
        <a class="nav-link active" aria-current="page" href="#">Accesorios</a>
        <a class="nav-link active" aria-current="page" href="#">Cuchas</a>
        <a class="nav-link active" aria-current="page" href="#">Desparacitantes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
    <ImagenCarrito/>
    <itemListContainer greeting = " Hola Buen dia!!"/>
  </div>
</nav>
    );
};
export default Navbar;