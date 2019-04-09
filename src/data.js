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

const championDetails = (data, i) => {
  const championsId = Object.keys(data);// championsId = [Aatrox, Ahri, Akali,...,Zyra ] 
  const index = championsId.indexOf(i);// 
  const championsValue = Object.values(data);// array con los valores de cada propiedad de cada campeón
  const result = [championsValue[index]['name'], championsValue[index]['title'], championsValue[index]['splash'], championsValue[index]['blurb'], championsValue[index]['info'], championsValue[index]['stats']];
  return result;// [name, title, imagen, blurb, {info}, {stats}]
};

const sortData = (data, sortBy) => { // parameters: ([id,splash,[info]], 'attack', ascendent)
  const descendentSort = data.sort((firstItem, secondItem) => { 
    return secondItem[2][sortBy] - firstItem[2][sortBy];
    });
  return descendentSort;// [id,splash,[info]]
};

const computeStats = (data) => {// data = [id, splash, [info]] (array de arrays)
  let newArr = [];
  for (let i = 0; i < data.length; i++) { // itera por todos los campeones
    newArr.push(data[i][2]['difficulty']); // array con los valores de difficulty de 1 rol en específico
  }
  const difficultyAverage = newArr.reduce((sum, val) => sum + val) / newArr.length;
  return difficultyAverage;
};

window.getAll = getAll;
window.roleFilter = roleFilter;
window.championDetails = championDetails;
window.sortData = sortData;
window.computeStats = computeStats;