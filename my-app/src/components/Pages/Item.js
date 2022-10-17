import './Item.css'

const Item = ({ ele }) => {

  return (
    <div className="container itemCard">
      <div className="itemFoto row">
        <img className="fotoPrincipal" src={ele.foto[0]} alt='foto principal del elemento'/>
      </div>
      <div className="row justify-content-center">
        {ele.foto.map((color, index) => (
          <img className="itemColores border m-1 col-3" src={color} key={index} alt='opciones de colores de elemento'/>
        ))}
      </div>
      <div className="itemMarca text-uppercase fw-bold row">{ele.marca}</div>
      <div className="itemModelo text-uppercase fw-light row">{ele.modelo}</div>
      <div className="itemPrecio fw-bold row">$ {ele.precio}</div>
    </div>
  )
}

export default Item