// Apagar um filme 
function eliminar(id) {
    axios.delete("/filmes/" + id)
        .then(response => window.location.assign("/"))
        .catch(err => console.log(err))
}

// Atualizar um filme
function atualizar(id) {
    var inputs = document.getElementsByClassName( 'ator' ),
    atores  = [].map.call(inputs, function( input ) {
        return input.value;
    });

    var inputs = document.getElementsByClassName( 'ator' ),
    generos  = [].map.call(inputs, function( input ) {
        return input.value;
    });
    
    

    const newFilm = {
        title: document.getElementById("title").value,
        year: document.getElementById("year").value,
        cast: names,
        genres: generos

    }

    axios.put("/filmes/" + id, newFilm)
        .then(response => window.location.assign("/filmes/" + id))
        .catch(err => console.log(err))
}
