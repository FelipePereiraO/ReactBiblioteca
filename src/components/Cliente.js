import React, { useEffect, useState } from 'react'
import Data from '../server/server'
import '../css/livro.css'
import { Link } from 'react-router-dom'

function Livro(props){
    const add ={
        id: null,
        name: '',
        cep: '', 
        uf: '',
        municipio: '',
        logradouro: '',
    }
    const [current, setCurrent] = useState(add)
    const [key, setKey] = useState(props.match.params.id)

    useEffect(() =>{
        const data = Data.Search(key)
        console.log(key)
        setCurrent(data[0])
    }, [])

    const Delete = (id) => {
        if (window.confirm('Deseja excluir?')){
          Data.Remove(id);
        }
    }
    return(
        <div>
            {current ? (
                <div>
                    <div className="body">
                        <div className="row justify-content-center" id="bodylivro" >
                            <div className="col-auto">
                                <img className="img" src={current.cape_url}/>
                            </div>
                            <div className="col-auto">
                                <h1>{current.name}</h1>
                                <p>por <strong>{current.author}</strong> (Autor)</p>
                                <div className="borda"></div>
                                <p className="p">{current.description}</p>
                                <div className="row">
                                    <div className="col-auto">
                                        <p>Ano publicado</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                        </svg>
                                        <a> {current.year}</a>
                                    </div> 
                                    <div className="col-auto">
                                        <p>Quant. de páginas</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
                                            <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                                        </svg>
                                        <a> {current.pages}</a>
                                        
                                    </div>
                                    <div className="col-auto">
                                        <Link to={"/alterar/"+ current.name}  className="btn btn-warning">Alterar</Link>
                                        <Link to="/livros" onClick={Delete} className="btn btn-danger">Remover</Link>  
                                    </div>                       
                                </div>
                            </div>
                        </div>
                    </div>

                </div>     
            ) : (
                <h1>Não encontrado</h1>
            )}
        </div>
    )
}
export default Livro