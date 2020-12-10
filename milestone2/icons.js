$(document).ready(function () {
  // Qui le icone che abbiamo definito nella milestone 1
  const objectsMix = [
    {
      name: 'Dog',
      prefix: 'fas',
      type: 'fa-dog',
      family: 'canid'
  
    },
    {
      name: 'Cat',
      prefix: 'fas',
      type: 'fa-cat',
      family: 'feline'
  
    },
    {
      name: 'Horse',
      prefix: 'fas',
      type: 'fa-horse',
      family: 'equidae'
  
    },
    {
      name: 'Robot',
      prefix: 'fas',
      type: 'fa-robot',
      family: 'android'
  
    },
    {
      name: 'Dragon',
      prefix: 'fas',
      type: 'fa-dragon',
      family: 'animal'
  
    },
    {
      name: 'swimmer',
      prefix: 'fas',
      type: 'fa-swimmer',
      family: 'human'
  
    },
    {
      name: 'Baseball',
      prefix: 'fas',
      type: 'fa-baseball-ball',
      family: 'object'
  
    },
    {
      name: 'cheese',
      prefix: 'fas',
      type: 'fa-cheese',
      family: 'object'
  
    },
    {
      name: 'Business man',
      prefix: 'fas',
      type: 'fa-user-tie',
      family: 'human'
  
    },
    {
      name: 'frog',
      prefix: 'fas',
      type: 'fa-frog',
      family: 'animal'
  
    },
  ];
  
    // Selezioniamo il container icons
   const iconBox = document.querySelector('.icons');
   const titleBox = document.getElementsByClassName('title');

    objectsMix.forEach(element => {
      iconBox.innerHTML +=`
      <div>
      <i class="${element.prefix} ${element.type}"></i>
      <div class="title">
      ${element.name}
      </div>
      </div>
      
      `;
   
    });
  // definiamo dei colori per le icone (blue, orange, purple)


  //aggiungiamo dei colori usando una funzione


  //inseriamo le icone colorate nel container

});


/* ---- FUNCTIONS ----*/
//1. Funzione milestone 1


//2. funzione per assegnare un colore ad un icona
// tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map 


//3. funzione per ottenere da un array
// tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.
