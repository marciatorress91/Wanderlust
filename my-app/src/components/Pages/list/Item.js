import './Item.css'

const Item = ({ ele }) => {

  return (
    <div className="container itemCard">
      <div className="itemFoto row">
        <img className="fotoPrincipal" src={ele.foto} alt='foto del elemento'/>
      </div>
      <div className="row justify-content-center">
         <img className="itemColores border m-1 col-3" src={ele.foto} alt='foto miniatura'/>
       </div>
      <div className="itemMarca text-uppercase fw-bold row">{ele.marca}</div>
      <div className="itemModelo text-uppercase fw-light row">{ele.modelo}</div>
      <div className="itemPrecio fw-bold row">$ {ele.precio}</div>
    </div>
  )
}

export default Item