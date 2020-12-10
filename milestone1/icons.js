$(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 
const objectsArray = [
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
 const iconBox = $('.icons');
  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
  objectsArray.forEach(element => {
    iconBox.innerHTML +=`
    <div><i class= "${element.prefix} ${element.type}"></i></div>
    `;
  });
  console.log(iconBox);
});


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturargli le proprietà degli elementi di un array
// tip: il template literal ci puo aiutare con il markup

