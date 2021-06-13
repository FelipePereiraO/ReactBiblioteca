import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Data from '../server/server'

function AlterClientes(props){
    const add ={
        key: null,
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

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrent({ ...current, [name]: value });
    };
    
    const udate = () => {
        const data = {
            name: current.name,
            cep: current.cep, 
            uf: current.uf,
            municipio: current.municipio,
            logradouro: current.logradouro,
        };
        Data.Update(key, data);
        setCurrent(data)  
    }
    return(
        <div>
            <h1>Alterar Livro</h1>
            <div>
                <div>
                {current ? (
                    <form id="form">
                        <div class="col-auto">
                            <label class="form-label" htmlFor="name">Nome do Cliente</label>
                            <input type="text" id="name" class="form-control" value={current.name} onChange={handleInputChange} name="name"/>
                        </div>                
                        <div className="row">
                        <div class="col">
                                <label class="form-label" htmlFor="cep">CEP do Cliente</label>
                                <input type="number" id="cep" class="form-control" value={current.cep} onChange={handleInputChange} name="cep"/>
                            </div>
                            <div class="mb-3">
                            <label class="form-label" htmlFor="uf">UF</label>
                            <input type="url" id="uf" class="form-control" value={current.uf} onChange={handleInputChange} name="uf"/>
                        </div> 
                        <div class="col">
                                <label class="form-label" htmlFor="municipio">municipio</label>
                                <input type="number" id="municipio" class="form-control" value={current.municipio}  onChange={handleInputChange} name="municipio"/>
                            </div>     
                            <div class="col">
                                <label class="form-label" htmlFor="logradouro">logradouro</label>
                                <input type="text" id="logradouro" class="form-control" value={current.logradouro} onChange={handleInputChange} name="logradouro"/>
                            </div>
                                          
                        </div>

                       

                        <Link to="/" type="submit" onClick={udate} className="btn btn-success">Salvar</Link>       
                        <Link to="/Clientes" className="btn btn-danger">Cancelar</Link>       
                    </form>
            ) :(
                <div className="cadastrado">
                    <h4>Livro não existe</h4>
                </div>
            )}
                </div>
            </div>
        </div>
    )
}
export default AlterClientes