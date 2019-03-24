/* Manejo del DOM */
/*vars*/
let arr = [];
/*functions*/
const printAll = (arr) => {//arr = [id, img]
	for(let i = 0; i < arr.length; i++) {
		const item = `<div class="col-xs-2 col-md-1 border-box gray-color">
						<img class="block auto img-png" src="${arr[i][1]}" alt="${arr[i][0]}"/>
					  </div>`;
		document.getElementById('root').insertAdjacentHTML("beforeend", item);
	}
}
const printRoleCard = (roleArr) => {//roleArr = [id, splash, blurb]
	for (let i = 0; i < roleArr.length; i++) {
		const str = `<div class="row headline-color auto">
						<div class="col-xs-12 col-md-3">
						<figure class="auto">
							<img class="border-box" src="${roleArr[i][1]}" alt="${roleArr[i][0]}-image" />
						</figure>
						</div>
          				<div class="col-xs-12 col-md-9 border-box content-card">
          					<h3 class="auto">${roleArr[i][0]}</h3><p>${roleArr[i][2]}</p>
          					<button data-champion="${roleArr[i][0]}" class="btn block" type="button">SEE MORE</button>
          				</div>
          			</div>`;
		//row.push(str);
		document.getElementById('role-container').insertAdjacentHTML("beforeend", str);
	}
	//document.getElementById('role-container').innerHTML = row;
}
//prints all champions info
const printDetails = (profile) => {
const info = `<div class="container">
<img class="card-size card-img-position" src="${profile[2]}" alt="${profile[0]}">
<h3>${profile[0]}</h3> 
<p>${profile[1]}</p>
<p>${profile[3]}<p>
</div>`;
document.getElementById('detailsContainer').innerHTML = info;
};

const printSortCard = (sortArr, id) => {
	for (let i = 0; i < sortArr.length-1; i++) {
		const str = `<div class="row headline-color auto">
						<div class="col-xs-12 col-md-3">
						<figure class="auto">
							<img class="border-box" src="${sortArr[i]['splash']}" alt="${sortArr[i]['id']}-image" />
						</figure>
						</div>
          				<div class="col-xs-12 col-md-9 border-box content-card">
          					<h3 class="auto">${sortArr[i]['name']}, ${id}: ${sortArr[i]['info'][id]}</h3><p>${sortArr[i]['blurb']}</p>
          					<button data-champion="${sortArr[i]['id']}" class="btn block" type="button">SEE MORE</button>
          				</div>
          			</div>`;
		document.getElementById('role-container').insertAdjacentHTML("beforeend", str);
	}
}
//shows and hides a block element
const displayBlock = (showId, hideId) => {
	document.getElementById(hideId).classList.add('none');
	document.getElementById(showId).classList.remove('none');
}
/*events*/
document.addEventListener("DOMContentLoaded", () => {
  arr = getAll(LOL['data']);
  printAll(arr);
});
/*menu buttons events*/
const assassinBtn = document.getElementById('assassin');
assassinBtn.addEventListener('click', () => {
	document.getElementById('role-container').innerHTML = "";
	const arrFiltered = roleFilter(LOL['data'], 'Assassin');
	printRoleCard(arrFiltered);
	displayBlock('role-container', 'root');
	displayBlock('role-container', 'detailsContainer');
});

const fighterBtn = document.getElementById('fighter');
fighterBtn.addEventListener('click', () => {
	document.getElementById('role-container').innerHTML = "";
	const arrFiltered = roleFilter(LOL['data'], 'Fighter');
	printRoleCard(arrFiltered);
	displayBlock('role-container', 'root');	
	displayBlock('role-container', 'detailsContainer');
});

const mageBtn = document.getElementById('mage');
mageBtn.addEventListener('click', () => {
	document.getElementById('role-container').innerHTML = "";
	const arrFiltered = roleFilter(LOL['data'], 'Mage');
	printRoleCard(arrFiltered);
	displayBlock('role-container', 'root');
	displayBlock('role-container', 'detailsContainer');
});

const marksmanBtn = document.getElementById('marksman');
marksmanBtn.addEventListener('click', () => {
	document.getElementById('role-container').innerHTML = "";
	const arrFiltered = roleFilter(LOL['data'], 'Marksman');
	printRoleCard(arrFiltered);
	displayBlock('role-container', 'root');	
	displayBlock('role-container', 'detailsContainer');
});

const tankBtn = document.getElementById('tank');
tankBtn.addEventListener('click', () => {
	document.getElementById('role-container').innerHTML = "";
	const arrFiltered = roleFilter(LOL['data'], 'Tank');
	printRoleCard(arrFiltered);
	displayBlock('role-container', 'root');	
	displayBlock('role-container', 'detailsContainer');
});

const supportBtn = document.getElementById('support');
supportBtn.addEventListener('click', () => {
	document.getElementById('role-container').innerHTML = "";
	const arrFiltered = roleFilter(LOL['data'], 'Support');
	printRoleCard(arrFiltered);
	displayBlock('role-container', 'root');	
	displayBlock('role-container', 'detailsContainer');
});
/*end menu buttons*/
const gridClickImg = document.getElementById('root');
gridClickImg.addEventListener('click', (e) => {
	//console.log(e.target.alt); //porque el value proviene del object-keys (nombres de las propiedades del objeto data)
	const profile = championDetails(LOL['data'], e.target.alt);
  printDetails(profile);
  displayBlock ('detailsContainer', 'root');
});

const seeMoreBtn = document.getElementById('role-container');
seeMoreBtn.addEventListener('click', (e) => {
	const profile = championDetails(LOL['data'], e.target.dataset.champion);
    printDetails(profile);
    displayBlock ('detailsContainer', 'role-container');
});

const sortMenuBtn = document.getElementById('sort-menu');
sortMenuBtn.addEventListener('click', (e) => {
	document.getElementById('role-container').innerHTML = "";
	const sortResult = sortData(LOL['data'], e.target.dataset.skill, 'descendent');
    //console.log(sortResult);
    printSortCard(sortResult, e.target.dataset.skill);
    displayBlock('role-container', 'root');	
	displayBlock('role-container', 'detailsContainer');
});


/*
const attack = document.getElementById('attack');
attack.addEventListener('click', () => {
	sortData(LOL['data'], 'attack');
})
*/

