/* Manejo del DOM */
/*vars*/
let obj = {};
/*functions*/
const printAll = (arr) => {
	for(let i = 0; i < arr.length; i++) {
		const item = `<div class="col-xs-2 col-md-1 border-box gray-color"><img class="block auto img-png"src="${arr[i][1]}" alt="${arr[i][0]}-image"/></div>`;
		document.getElementById('root').insertAdjacentHTML("beforeend", item);
	}
}
const printRoles = (roleArr) => {
	const row = [];
	for (let i = 0; i < roleArr.length; i++) {
		row.push(`<div class="row"><div><img src="${obj['main'][roleArr[i]][1]}" alt="${obj['main'][roleArr[i]][0]}-image" /></div>
          <div><p>${obj['main'][roleArr[i]][0]}</p><p>${obj['main'][roleArr[i]][2]}</p><button id="more-btn1" type="button">See more</button></div></div>`);
	}
	document.getElementById('role-container').innerHTML = row;
}
/*events*/
document.addEventListener("DOMContentLoaded", () => {
  obj = getData();
  printAll(obj.main);
});

const assassinBtn = document.getElementById('assassin');
assassin.addEventListener('click', () => {
	const filterIndex = roleFilter('Assassin', obj.roles);
	printRoles(filterIndex);
	document.getElementById('root').classList.add('none');
	document.getElementById('role-container').classList.remove('none');
});