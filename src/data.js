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
		filteredArray.push([data[i]['id'], data[i]['splash'], data[i]['blurb']]);
	}
	}
	return filteredArray;//filteredArr = [id, splash, blurb]	
}
/*gets the champions info (name, image, attack, armor, magic, difficulty, stats)*/
const championDetails = (data, i) => {
const championsId = Object.keys(data);//champions names array: championsId = [aatrox, Ahri, Akali,..] 
const index = championsId.indexOf(i);
const championsValue = Object.values(data);//champions properties array
const result = [championsValue[index]['name'], championsValue[index]['title'], championsValue[index]['splash'], championsValue[index]['blurb'], championsValue[index]['info'], championsValue[index]['stats']];
return result;
}
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