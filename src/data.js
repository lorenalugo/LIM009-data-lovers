/* Manejo de data */
const getAll = (data) => {
	let localData = [];
	for(let i in data) {//data = LOL['data']
		if(data[i].hasOwnProperty('img')) {
			localData.push([data[i]['id'], data[i]['img']]);
		} else {
			localData.push([data[i]['id'], './assets/placeholder.png']);
		}
	}
	return localData; //localData = [i, id, img]
};

const roleFilter = (input, data) => {//data = LOL['data']
	let newArr = [];
	let filteredArray = [];
	for (let i in data) {
	newArr = data[i]['tags'].filter((role) => {//newArr may have results if it's true or not if it's false
		return role === input;
	});
	if(newArr.length !== 0) {
		filteredArray.push([data[i]['id'], data[i]['splash'], data[i]['blurb']]);
	}
	}
	return filteredArray;//filteredArr = [id, splash, blurb]	
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
window.getAll = getAll;
window.roleFilter = roleFilter;

