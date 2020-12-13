$(document).ready(function () {
 // icone come da milestone 1
 const objectsMix = [
  {
    name: 'Dog',
    prefix: 'fas',
    type: 'fa-dog',
    family: 'animal'

  },
  {
    name: 'Cat',
    prefix: 'fas',
    type: 'fa-cat',
    family: 'animal'

  },
  {
    name: 'Horse',
    prefix: 'fas',
    type: 'fa-horse',
    family: 'animal'

  },
  {
    name: 'Robot',
    prefix: 'fas',
    type: 'fa-robot',
    family: 'object'

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

  // colori come da milestone 2
  const blue = '#0000ff';
  const orange = '#fe5b1b';
  const purple = '#cc00cc';

  //aggiungiamo dei colori come da milestone 2
  objectsMix.forEach(element=>{
    if (element.family === 'animal') {
      element.colour = blue;
    } else if (element.family === 'human') {
      element.colour = orange;
    } else {
      element.colour = purple;
    }
  });
  console.log(objectsMix);
  //inseriamo le icone nel container come da milestone 2
  const iconBox = document.querySelector('.icons');

  objectsMix.forEach(element => {
    iconBox.innerHTML +=`
    <div>
    <i class="${element.prefix} ${element.type}" style="color:${element.colour}"></i>
    <div class="title">
    ${element.name}
    </div>
    </div>
    `;
 
  });
  //estrapoliamo i tipi di icone
  const human = objectsMix.filter((element) => {
    return element.family == 'human';
  });
  console.log(human);
  const animal = objectsMix.filter((element) =>{
    return element.family == 'animal';
  });
  console.log(animal);
  const object = objectsMix.filter((element) =>{
    return element.family == 'object';
  });
  console.log(object);
  //aggiungiamo i tipi alla select
  const typeSelection = $('#type');
  const selectFilter =  document.getElementById('type');
 ///creazione delle options per filtrare contenuti
typeSelection.append('<option value="human">Human</option>');
typeSelection.append('<option value="animal">Animal</option>');
typeSelection.append('<option value="object">Object</option>');

selectFilter.addEventListener('change',element =>{
  //selezione lunga con javascript
  const valueFilter = selectFilter.options[selectFilter.selectedIndex].value;
  switch (valueFilter) {
    case 'human':
      iconBox.innerHTML = '';
      human.forEach(element => {
        iconBox.innerHTML +=`
        <div>
        <i class="${element.prefix} ${element.type}" style="color:${element.colour}"></i>
        <div class="title">
        ${element.name}
        </div>
        </div>
        `;    
      });
      break;
    case 'animal':
      iconBox.innerHTML = '';
      animal.forEach(element => {
        iconBox.innerHTML +=`
        <div>
        <i class="${element.prefix} ${element.type}" style="color:${element.colour}"></i>
        <div class="title">
        ${element.name}
        </div>
        </div>
        `;    
      });
      console.log('animali');
      break;
    case 'object':
      iconBox.innerHTML = '';
      object.forEach(element => {
        iconBox.innerHTML +=`
        <div>
        <i class="${element.prefix} ${element.type}" style="color:${element.colour}"></i>
        <div class="title">
        ${element.name}
        </div>
        </div>
        `;    
      });
      console.log('oggetti');
      break;
      //all come default della selezione
    default:
      iconBox.innerHTML = '';
      objectsMix.forEach(element => {
        iconBox.innerHTML +=`
        <div>
        <i class="${element.prefix} ${element.type}" style="color:${element.colour}"></i>
        <div class="title">
        ${element.name}
        </div>
        </div>
        `;    
      });
      console.log('all');
      break;
  }
});




 
  //al change mostriamo solo le icone filtrate
  //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo



/* ---- FUNCTIONS ----*/

});