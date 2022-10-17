import './Cargando.css'


const Cargando=()=>{
    return(
        <div className='container d-flex'>
            <button className="col mx-auto badge cargando" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                <span className="sr-only">Cargando...</span>
            </button>
        </div>
    )
}

export default Cargando

