import React, { useState } from 'react'
import Data from '../server/server'
import '../css/livros.css'
import { Link } from 'react-router-dom'
function Livros(){
    const [livr, setLivros] = useState(Data.getAll())
    /* const [searchtitle, setSearchTitle] = useState('') */
/*     const SearchBook = () =>{
        setLivros(Data.Search(searchtitle))
    } */
    return(
        <div>
            <h1>Livros</h1>
            <tbody className="container">
                <div className="row">
                {   
                    livr &&
                    livr.map((obj) => (   
                        <div class="card col livro" style={{width: '15rem'}}>
                            <Link to={"/livro/" + obj.name}> 
                                <img  class="card-img-top capa" src={obj.cape_url} alt="Capa do Livro"/>
                            </Link>
                                <div class="card-body">
                                    <h5 class="card-title">{obj.name}</h5>
                                </div>                                    
                        </div>                                  
                    ))
                }
                </div>                
            </tbody>
        </div>
    )
}
export default Livros