// variabili da gestire:
// row dispay none
// div dove agganciare gli album 



function FetchTotale(artista) {
    const IdArtista = document.querySelector(`#${artista}`)
    const Row = document.querySelector(`#${artista}Section`)
    const SearchResults = document.querySelector("#searchResults")
        SearchResults.removeAttribute('style');
    
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artista}`)
        .then(response => response.json())
        .then(body => {
            const music = body.data
            const FiveRandomMusic = music.slice(0, 4)
            console.log(FiveRandomMusic)
            IdArtista.className = "pt-2"
            for (let i = 0; i < FiveRandomMusic.length; i++) {
               
                 
                
                Row.innerHTML += `<div class="col-3 d-flex flex-column align-items-center">
                                        <img  src="${FiveRandomMusic[i].album.cover_medium}"><p class="pt-4 text-center">${FiveRandomMusic[i].title}</p>
                                    </div>`
                             
            }   
        })
        
        

        
       
}

function album() {
 
    for (let i = 0; i < FiveRandomMusic.length; i++) {
           
        SearchResults.innerHTML += `<div><p>${FiveRandomMusic[i].album.title}</p></div>`  
        
        
                     
     }

   
}

    FetchTotale("eminem")
    FetchTotale("metallica")
    FetchTotale("queen")
    

