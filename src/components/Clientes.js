import React, { useState, useEffect } from 'react'
import Data from '../server/ClienteDataServiceRest'
import '../css/livros.css'
import { Link } from 'react-router-dom'
function Clientes(props){
    const [clt, setClt] = useState()
    /* const [searchtitle, setSearchTitle] = useState('') */
/*     const SearchBook = () =>{
        setLivros(Data.Search(searchtitle))
    } */
   
    const add ={
        key: null,
        name: '',
        cep: '', 
        uf: '',
        municipio: '',
        logradouro: '',
      
        
    }
    const [current, setCurrent] = useState (add)
    useEffect(() =>{
        Get(props.match.params.id)
    }, [props.match.params.id])


    const Get = id =>{
        Data.get(id)
        .then(response =>{
            setCurrent(response.data)
        })
        .catch(e =>{
            console.log(e)
        })
    }

    const Delete = (id) =>{
        if(window.confirm('Deseja excluir?')){
            Data.remove(id)
            .then(response =>{
                retrieve()
            })
            .catch(e =>{
                console.log(e)
            })
        }
    }

    useEffect(() =>{
        retrieve()
    }, [])

    const retrieve = () =>{
        Data.getAll()
        .then(response =>{
            setClt(response.data)
        })
        .catch(e =>{
            console.log(e)
        })
    }

    return(
        <div>
            <h1>Clientes</h1>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">CEP</th>
                    <th scope="col">municipio</th>
                    </tr>
                </thead>
            <tbody>
                {   
                    clt &&
                    clt.map((obj) => (   
                        <tr>
                            <th scope="row">{obj.id}</th>
                            <td>{obj.name}</td>
                            <td>{obj.cep}</td>
                            <td>{obj.municipio}</td>
                            <Link className="btn btn-danger"  onClick = {() => Delete(obj.id)} > Remover </Link>
                        </tr>                         
                    ))
                }             
            </tbody>
            </table>
        </div>
    )
}
export default Clientes