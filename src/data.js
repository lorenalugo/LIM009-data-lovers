/* Manejo de data */
const getData = () => {
	let main = []; let info = []; let roles = [];
	for(let i in LOL['data']) {
		roles.push(LOL['data'][i]['tags']);
		info.push(LOL['data'][i]['info']);
		if(LOL['data'][i].hasOwnProperty('img')) {
			main.push([LOL['data'][i]['id'], LOL['data'][i]['img'], LOL['data'][i]['blurb']]);
		} else {
			main.push([LOL['data'][i]['id'], './assets/placeholder-img.png', LOL['data'][i]['blurb']]);
		}
	}
	return {main: main, info: info, roles: roles};
};

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
}
window.getData = getData;
