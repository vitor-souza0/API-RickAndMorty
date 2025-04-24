let fetchAPI = fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => {
    displayPersonagens(data)
  })

function displayPersonagens(data) {
  let divCards = document.querySelector(".cards")

  data.results.map((personagem) => {
    divCards.innerHTML +=
      `<div class="card">
                    <div class="personagem">
                        <img src="${personagem.image}" alt="">
                        <h2>${personagem.name}</h2>
                    </div>
                    <div class="status">
                        <p><span>Status:</span>${personagem.status}</p>
                        <p><span>Gender:</span>${personagem.Gender}</p>
                        <p><span>Species:</span>${personagem.species}</p>
                        <p><span>Oringin</span>${personagem.origin.name}</p>  
                    </div>
                </div>`
  })
}