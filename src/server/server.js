const Cliente = [
    {
        name: 'Ruan Santana Silva',
        cep: '41185-055', 
        uf: 'Ba',
        municipio:'Salvador',
        logradouro: 'Brasil gás', 
    },
    {
        name: 'Maiara Mendes da Silva',
        cep: '41321-841', 
        uf: 'Ba',
        municipio:'Salvador',
        logradouro: 'Caminho 01 (Moscou II)',
    }
]
const getAll = () =>{
    return Cliente
}

const Search = (name) =>{
    if(name === '') return Cliente
    var filter = Cliente.filter((clt) => clt.name.includes(name))
    return filter
}

const Create = (data) =>{
    return Cliente.push(data)
}
const Remove = (key) => {
    return Cliente.splice(Cliente.indexOf(key), 1);
};

const Update = (key, data) => {
    Cliente.forEach(function(item) {
      if(item.name === key){
        item.name = data.name
        item.cep = data.cep
        item.uf = data.uf
        item.municipio = data.municipio
        item.logradouro = data.logradouro
      }
    });
    return 
};

export default{
    getAll,
    Search,
    Create,
    Remove,
    Update
}