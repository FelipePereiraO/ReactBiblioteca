import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/addlivro.css'
import Data from '../server/ClienteDataServiceRest';
function AddClientes(){
 
    const add ={
        id: null,
        name: '',
        cep: '', 
        uf: '',
        municipio: '',
        logradouro: '',
      
        
    }
    const [post, setPost] = useState(add)
    const [submit, setSubmit] = useState(false) 

    const handleInputChange = event => {
        const { name, value } = event.target;
        setPost({ ...post, [name]: value });
    };

    const save = () =>{
        var cliente = {
            name: post.name,
            cep: post.cep, 
            uf: post.uf,
            municipio: post.municipio,
            logradouro: post.logradouro,
        }
        console.log(cliente)
        Data.create(cliente)
        .then(response =>{
            setPost({
                id: response.cliente.id,
                name: response.cliente.name,
                cep: response.cliente.cep,
                uf: response.cliente.uf,
                municipio: response.cliente.municipio,
                logradouro: response.cliente.logradouro,
            })

            })
            .catch(e =>{
                console.log(e)
            }
        )
        setSubmit(true)
    }



    return(
        <div>
            {submit ? (
                <div className="cadastrado">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" color="green" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                    <h4>Cliente cadastrado com sucesso</h4>

                </div>
            ) :(
                <div id="form" >
                    <h1>Adicionar Cliente</h1>
                    <div class="col-auto">
                        <label class="form-label" htmlFor="name">Nome do Cliente</label>
                        <input type="text" id="name" class="form-control" value={post.name} required onChange={handleInputChange} name="name"/>
                    </div>                
                    <div className="row">
                        <div class="col">
                            <label class="form-label" htmlFor="cep">CEP</label>
                            <input type="number" id="cep" class="form-control" value={post.cep} required onChange={handleInputChange} name="cep"/>
                        </div>
                        <div class="col">
                            <label class="form-label" htmlFor="uf">UF</label>
                            <input type="text" id="uf" class="form-control" value={post.uf} required onChange={handleInputChange} name="uf"/>
                        </div>
                        <div class="col">
                            <label class="form-label" htmlFor="municipio">Municipio</label>
                            <input type="text" id="municipio" class="form-control" value={post.municipio} required onChange={handleInputChange} name="municipio"/>
                        </div>    
                        <div class="col">
                            <label class="form-label" htmlFor="logradouro">Logradouro</label>
                            <input type="text" id="logradouro" class="form-control" value={post.logradouro} required onChange={handleInputChange} name="logradouro"/>
                        </div>                      
                    </div>


                    <button onClick={save} className="btn btn-success">Cadastrar</button>       
                    <Link to="/clientes" className="btn btn-danger">Cancelar</Link>       
                </div>

            )}
        </div>
    )
}
export default AddClientes