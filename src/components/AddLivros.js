import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/addlivro.css'
import Data from '../server/server';
function AddLivros(){
 
    const add ={
        id: null,
        name: '',
        description: '', 
        cape_url: '',
        pages: 0,
        author: '',
        year: 0, 
        
    }
    const [post, setPost] = useState(add)
    const [submit, setSubmit] = useState(false) 

    const handleInputChange = event => {
        const { name, value } = event.target;
        setPost({ ...post, [name]: value });
    };

    const save = () =>{
        var liv = {
            name: post.name,
            description: post.description, 
            cape_url: post.cape_url,
            pages: post.pages,
            author: post.author,
            year: post.year, 
            
        }
        console.log(liv)
        Data.Create(liv)
        setSubmit(true)
        
    }



    return(
        <div>
            {submit ? (
                <div className="cadastrado">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" color="green" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                    <h4>Livro cadastrado com sucesso</h4>

                </div>
            ) :(
                <form id="form" onSubmit={save}>
                    <h1>Adicionar Livro</h1>
                    <div class="col-auto">
                        <label class="form-label" htmlFor="name">Titulo do Livro</label>
                        <input type="text" id="name" class="form-control" value={post.name} required onChange={handleInputChange} name="name"/>
                    </div>                
                    <div className="row">
                        <div class="col">
                            <label class="form-label" htmlFor="author">Autor</label>
                            <input type="text" id="author" class="form-control" value={post.author} required onChange={handleInputChange} name="author"/>
                        </div>
                        <div class="col">
                            <label class="form-label" htmlFor="year">Ano de lançamento</label>
                            <input type="number" id="year" class="form-control" value={post.year} required onChange={handleInputChange} name="year"/>
                        </div>
                        <div class="col">
                            <label class="form-label" htmlFor="pages">Quant. de páginas</label>
                            <input type="number" id="pages" class="form-control" value={post.pages} required onChange={handleInputChange} name="pages"/>
                        </div>                    
                    </div>
                    <div class="mb-3">
                        <label class="form-label" htmlFor="description">Descrição</label>
                        <textarea class="form-control" id="description" value={post.description} onChange={handleInputChange} required name="description"></textarea>
                    </div>  
                    <div class="mb-3">
                        <label class="form-label" htmlFor="cape_url">URL da Capa</label>
                        <input type="url" id="cape_url" class="form-control" value={post.cape_url} onChange={handleInputChange} required name="cape_url"/>
                    </div> 

                    <button type="submit" className="btn btn-success">Cadastrar</button>       
                    <Link to="/livros" className="btn btn-danger">Cancelar</Link>       
                </form>

            )}
        </div>
    )
}
export default AddLivros