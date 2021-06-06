const Livro = [
    {
        name: 'Harry Potter',
        description: 'Harry Potter vive com os tios Dursley, onde é mal tratado até completar seus 11 anos. É com essa idade que o jovem bruxo começa a receber cartas da escola de Hogwarts. ... Porém Voldemort falha em sua missão e foge de Harry que passa a pedra filosofal para o diretor da escola destruir-la.', 
        cape_url: 'https://i.pinimg.com/236x/0f/7a/14/0f7a140bbe592c636aaf6b7de9332470--enigma-read-books.jpg',
        pages: 264,
        author: 'J.K. Rowling',
        year: 1996,   
    },
    {
        name: 'O Senhor dos Anéis',
        description: ' história narra o conflito contra o mal que se alastra pela Terra-média, através da luta de várias raças - Humanos, Anãos, Elfos, Ents e Hobbits - contra Orques, para evitar que o "Anel do Poder" volte às mãos de seu criador Sauron, o Senhor Sombrio.', 
        cape_url: 'https://images-na.ssl-images-amazon.com/images/I/71Xl6pR0k9L.jpg',
        pages: 1200,
        author: 'J. R. R. Tolkien',
        year: 1954,   
    }
]
const getAll = () =>{
    return Livro
}

const Search = (title) =>{
    if(title === '') return Livro
    var filter = Livro.filter((livro) => livro.name.includes(title))
    return filter
}

const Create = (data) =>{
    return Livro.push(data)
}
const Remove = (key) => {
    return Livro.splice(Livro.indexOf(key), 1);
};

const Update = (key, data) => {
    Livro.forEach(function(item) {
      if(item.name === key){
        item.name = data.name
        item.description = data.description
        item.cape_url = data.cape_url
        item.pages = data.pages
        item.author = data.author
        item.year = data.year
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