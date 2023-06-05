function NotFound(props) {
  return (
    <div className="text-center">
      <h1 className="notFoundTitle">Oops! Pagina no encontrada.</h1>
      <p className="notFoundDesc">
        Parece que la pagina a la que intentas acceder no existe. Por favor
        intenta con alguno de los links de la barra de navegacion.
      </p>
    </div>
  );
}

export default NotFound;