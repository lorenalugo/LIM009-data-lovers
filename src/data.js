/* gets all champions (id and image) */
const getAll = (data) => {
  let localData = [];
  for (let i in data) {// data = LOL['data']
    if (data[i].hasOwnProperty('img')) {
      localData.push([data[i]['id'], data[i]['img']]);
    } else {
      localData.push([data[i]['id'], './assets/placeholder.png']);
    }
  }
  return localData; // localData = [id, img]
};

/* filters the champions by role */
const roleFilter = (data, condition) => {// data = LOL['data']
  let newArr = [];
  let filteredArray = [];
  for (let i in data) {
    newArr = data[i]['tags'].filter((role) => {// newArr may have results if it's true or not if it's false
      return role === condition;
    });
    if (newArr.length !== 0) {
      filteredArray.push([data[i]['id'], data[i]['splash'], data[i]['info']]);
    }
  }
  return filteredArray;// filteredArr = [id, splash, [info]] (array de arrays)	
};
// 2dapantalla
const championDetails = (data, i) => {
  const championsId = Object.keys(data);// array con nombres de los campeones //championsId = [Aatrox, Ahri, Akali,...,Zyra ] 
  const index = championsId.indexOf(i);// posición de cada propiedad (campeón) e.g.:  [2] = Akali
  const championsValue = Object.values(data);// array con los valores de cada propiedad de cada campeón
  const result = [championsValue[index]['name'], championsValue[index]['title'], championsValue[index]['splash'], championsValue[index]['blurb'], championsValue[index]['info'], championsValue[index]['stats']];
  return result;// [name, title, imagen, blurb, {info}, {stats}]
};
/* sorts champions by skills */
const sortData = (data, sortBy, sortOrder) => { // parameters: ([id,splash,[info]], 'attack', ascendent)
  if (sortOrder === 'descendent') {
    const descendentSort = data.sort((firstItem, secondItem) => { 
      return secondItem[2][sortBy] - firstItem[2][sortBy];
    });
    return descendentSort;// [id,splash,[info]]
  } else {
    const ascendentSort = data.sort((firstItem, secondItem) => { 
      return firstItem[2][sortBy] - secondItem[2][sortBy];
    });
    return ascendentSort;// [id,splash,[info]]
  }
};

window.getAll = getAll;
window.roleFilter = roleFilter;
window.championDetails = championDetails;
window.sortData = sortData;
// difficulty average of each rol
// 1ro) entrar a data, lol, campeón, info, difficulty
// 2do)obtener todos los valores de difficulty de campeones en un array
// 3ro) iterar por todos los elementos del arrar
// 4to) usar el método reduce para sumar los datos. luego dividirlos entre el total.
// if data[i].hasOwnProperty( info.tags["Fighter"])
// if (array[i] === element)

const computeStats = (data, role) => {
  let stats = Object.values(data);// array de objetos (champions)
  // console.log(stats);
  //filtrar por rol 
  //let newArr = [];
  //let filteredArray = [];
  for (let i in data) {
    newArr = data[i]['tags'].filter((role) => {// newArr may have results if it's true or not if it's false
      return role;
    });
    //if (newArr.length !== 0) {
      //filteredArray.push([data[i]['id'], data[i]['splash'], data[i]['info']]);
    //}
  }
}
  
  //let rolStats = Object.values(rol);
  //console.log(rolStats);


  for (let i = 0; i < stats.length; i++) { // itera por todos los campeones
    // console.log(stats[i].info.difficulty);
    let difficultyValues = stats.map(champion => champion.info.difficulty);// array con el valor de "difficulty" de todos los campeones
    // console.log(difficultyValues);
    let difficultyAverage = difficultyValues.reduce((sum, val) => sum + val) / 134;// un elemento con la suma de todos los valores de difficulty entre la cantidad de campeones
    console.log(difficultyAverage);
    
  }
};

