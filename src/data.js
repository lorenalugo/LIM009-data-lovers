/*gets all champions (id and image)*/
const getAll = (data) => {
	let localData = [];
	for(let i in data) {//data = LOL['data']
		if(data[i].hasOwnProperty('img')) {
			localData.push([data[i]['id'], data[i]['img']]);
		} else {
			localData.push([data[i]['id'], './assets/placeholder.png']);
		}
	}
	return localData; //localData = [id, img]
};

/*filters the champions by role*/
const roleFilter = (data, condition) => {//data = LOL['data']
	let newArr = [];
	let filteredArray = [];
	for (let i in data) {
	newArr = data[i]['tags'].filter((role) => {//newArr may have results if it's true or not if it's false
		return role === condition;
	});
	if(newArr.length !== 0) {
		filteredArray.push([data[i]['id'], data[i]['splash'], data[i]['info']]);
	}
	}
	return filteredArray;//filteredArr = [id, splash, info] (array de arrays)	
}

/*
const roleFilter = (role, arr) => {
  let roleArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === role) {
        roleArr.push(i);
      } 
	}	
  }
  return roleArr;
}*/
//2dapantalla
const championDetails = (i) => {//
const championsId = Object.keys(LOL['data']);//array con nombres de los campeones //championsId = [Aatrox, Ahri, Akali,...,Zyra ] 
const index = championsId.indexOf(i);//posición de cada propiedad (campeón) e.g.:  [2] = Akali
//console.log(i);
//console.log(index);
const championsValue = Object.values(LOL['data']);//array con los valores de cada propiedad de cada campeón
const result = [championsValue[index]['name'], championsValue[index]['title'], 
		championsValue[index]['splash'], championsValue[index]['blurb'], championsValue[index]
		['info'], championsValue[index]['stats']];
return result;// [name, title, imagen, blurb, {info}, {stats} ]

/*sorts champions by skills*/
const sortData = (data, sortBy, sortOrder) => { //parameters: (LOL['data'], 'attack', ascendent)
	const championsData = Object.values(data);
	if(sortOrder === 'descendent') {
	const descendentSort = championsData.sort((a, b) => { return b['info'][sortBy] - a['info'][sortBy]});
	return descendentSort;		
	}
	else {
	const ascendentSort = championsData.sort((a, b) => { return a['info'][sortBy] - b['info'][sortBy]});
	return ascendentSort;
	}

}

window.getAll = getAll;
window.roleFilter = roleFilter;
window.championDetails = championDetails;
window.sortData = sortData;