import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Data from '../server/server'

function AlterLivro(props){
    const add ={
        key: null,
        name: '',
        description: '', 
        cape_url: '',
        pages: 0,
        author: '',
        year: 0, 
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
            description: current.description, 
            cape_url: current.cape_url,
            pages: current.pages,
            author: current.author,
            year: current.year, 
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
                            <label class="form-label" htmlFor="name">Titulo do Livro</label>
                            <input type="text" id="name" class="form-control" value={current.name} onChange={handleInputChange} name="name"/>
                        </div>                
                        <div className="row">
                            <div class="col">
                                <label class="form-label" htmlFor="author">Autor</label>
                                <input type="text" id="author" class="form-control" value={current.author} onChange={handleInputChange} name="author"/>
                            </div>
                            <div class="col">
                                <label class="form-label" htmlFor="year">Ano de lançamento</label>
                                <input type="number" id="year" class="form-control" value={current.year} onChange={handleInputChange} name="year"/>
                            </div>
                            <div class="col">
                                <label class="form-label" htmlFor="pages">Quant. de páginas</label>
                                <input type="number" id="pages" class="form-control" value={current.pages}  onChange={handleInputChange} name="pages"/>
                            </div>                    
                        </div>
                        <div class="mb-3">
                            <label class="form-label" htmlFor="description">Descrição</label>
                            <textarea class="form-control" id="description" value={current.description} onChange={handleInputChange} name="description"></textarea>
                        </div>  
                        <div class="mb-3">
                            <label class="form-label" htmlFor="cape_url">URL da Capa</label>
                            <input type="url" id="cape_url" class="form-control" value={current.cape_url} onChange={handleInputChange} name="cape_url"/>
                        </div> 

                        <Link to="/" type="submit" onClick={udate} className="btn btn-success">Salvar</Link>       
                        <Link to="/livros" className="btn btn-danger">Cancelar</Link>       
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
export default AlterLivro