/* Manejo del DOM */
/*vars*/
let arr = [];
/*functions*/
const printAll = (arr) => {//arr = [[id, img], [id, img], [id, img], [id, img]]
	for(let i = 0; i < arr.length; i++) {
		const item = `<div class="col-xs-2 col-md-1 border-box gray-color">
						<img class="block auto img-png" src="${arr[i][1]}" alt="${arr[i][0]}"/>
					  </div>`;
		document.getElementById('root').insertAdjacentHTML("beforeend", item);
	}
}

const printRoleCard = (roleArr) => {//roleArr = [id, splash, info]
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
  const profile = championDetails('Aatrox');
  printDetails(profile);

});
/*menu buttons events*/
const assassinBtn = document.getElementById('assassin');
assassinBtn.addEventListener('click', () => {
	document.getElementById('role-container').innerHTML = "";
	const arrFiltered = roleFilter(LOL['data'], 'Assassin');
	printRoleCard(arrFiltered);
	displayBlock('role-container', 'root');
	displayBlock('role-container', 'detailsContainer');//(muestra, oculta)
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
});

/* mostrar 2da pantalla*/

let profile = [];
const printDetails = (profile) => { // [name, title, img, blurb, {info}, {stats} ] // copia todos los elementos, sean arrays o contenido de objetos
const info =`<div class="col-xs-12 center profiles">
				<div>
				<h2>${profile[0]}</h2>
				<h3>${profile[1]}</h3>
				</div> 

				<div class="col-xs-12 col-md-4 center">
				<figure> 
				<img class="card-size center" src="${profile[2]}" alt="${profile[0]}">
				<p class="blurb">${profile[3]}</p>
				</figure>
				</div>	

				<div class="white-color col-xs-12 col-md-8 description center"> 
				<p>Attack: ${profile[4]['attack']}</p>
				<p>Defense: ${profile[4]['defense']}</p>
				<p>Magic: ${profile[4]['magic']}</p>
				<p>Difficulty: ${profile[4]['difficulty']}</p>
				</div>
				
				<div>STATS</div>
				
				<div class="col-xs-12 col-md-6"> 
				<p>Health Points (HP): ${profile[5]['hp']}</p>
				<p>Health Points per level : ${profile[5]['hpperlevel']}</p>
				<p>Magic Points (MP): ${profile[5]['mp']}</p>
				<p>Magic Points per level: ${profile[5]['mpperlevel']}</p>
				<p>Move's speed: ${profile[5]['movespeed']}</p>
				<p>Armor: ${profile[5]['armor']}</p>
				<p>Armor per level: ${profile[5]['armorperlevel']}</p>
				<p>Spell block: ${profile[5]['spellblock']}</p>
				<p>Spell block per level: ${profile[5]['spellblockperlevel']}</p>
				<p>Attack range: ${profile[5]['attackrange']}</p>
				</div>

				<div class="col-xs-12 col-md-6">
				<p>HP Regeneration Points: ${profile[5]['hpregen']}</p>
				<p>HP Regeneration Points per level: ${profile[5]['hpregenperlevel']}</p>
				<p>MP Regenaration Points: ${profile[5]['mpregen']}</p>
				<p>MP Regenaration Points per level: ${profile[5]['mpregenperlevel']}</p>
				<p>Critical: ${profile[5]['crit']}</p>
				<p>Critical per level: ${profile[5]['critperlevel']}</p>
				<p>Attack Damage: ${profile[5]['attackdamage']}</p>
				<p>Attack Damage per level: ${profile[5]['attackdamageperlevel']}</p>
				<p>Attack speed offset: ${profile[5]['attackspeedoffset']}</p>
				<p>Attack speed per level: ${profile[5]['attackspeedperlevel']}</p>
				</div>

			</div>`;
document.getElementById('detailsContainer').innerHTML = info;
};
	
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

