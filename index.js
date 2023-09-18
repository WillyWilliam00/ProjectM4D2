const SearchArtista = document.querySelector("#searchField")
const EminemSection = document.querySelector("#eminemSection")
const MetallicaSection = document.querySelector("#metallicaSection")
const QueenSection = document.querySelector("#queenSection")
const EminemID = document.querySelector("#eminem")
const MetallicaID = document.querySelector("#metallica")
const QueenID = document.querySelector("#queen")



function clean() {
    EminemSection.innerHTML = ""
    MetallicaSection.innerHTML = ""
    QueenSection.innerHTML = ""
    EminemID.className = "d-none"
    MetallicaID.className = "d-none"
    QueenID.className = "d-none"
}
function search() {
clean()
    if (SearchArtista.value) {
        FetchTotale(SearchArtista.value)
    } else {
        alert("inserisci un'artista!")
    }
}
function ViewAll() {
    clean()
    FetchTotale("eminem")
    FetchTotale("queen")
    FetchTotale("metallica")
}
function trash() {
    clean()
}

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
            IdArtista.className = "pt-2"
            // FiveRandomMusic.forEach((music) => {
            //     Row.innerHTML += `<div class="col-3 d-flex flex-column align-items-center">
            //                          <h4>Album:</h4>
            //                          <p style="font-size: 12px;">${music.album.title}</p>
            //                          <img  src="${music.album.cover_medium}">
            //                          <h6 class="pt-4 text-center">Titolo:</h6>
            //                          <p class="text-center">${music.title}</p>
            //                          </div>`
            // });
            
             for (let i = 0; i < FiveRandomMusic.length; i++) {

                 Row.innerHTML += `<div class="col-3 d-flex flex-column align-items-center">
                                     <h4>Album:</h4>
                                     <p style="font-size: 12px;">${FiveRandomMusic[i].album.title}</p>
                                     <img  src="${FiveRandomMusic[i].album.cover_medium}">
                                     <h6 class="pt-4 text-center">Titolo:</h6>
                                     <p class="text-center">${FiveRandomMusic[i].title}</p>
                                     </div>`
             }
        })
        .catch(console.log("ERRORE"))
}

