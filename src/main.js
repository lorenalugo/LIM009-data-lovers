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
const printRoles = (roleArr) => {//roleArr = [id, splash, blurb]
	const row = [];
	for (let i = 0; i < roleArr.length; i++) {
		const str = `<div class="row headline-color auto">
						<div class="col-xs-12 col-md-3">
						<figure class="auto">
							<img class="border-box" src="${roleArr[i][1]}" alt="${roleArr[i][0]}-image" />
						</figure>
						</div>
          				<div class="col-xs-12 col-md-9 border-box content-card">
          					<h3 class="auto">${roleArr[i][0]}</h3><p>${roleArr[i][2]}</p>
          					<button id="more-btn1" class="btn block" type="button">SEE MORE</button>
          				</div>
          			</div>`;
		//row.push(str);
		document.getElementById('role-container').insertAdjacentHTML("beforeend", str);
	}
	//document.getElementById('role-container').innerHTML = row;
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
assassin.addEventListener('click', () => {
	document.getElementById('role-container').innerHTML = "";
	const arrFiltered = roleFilter('Assassin', LOL['data']);
	printRoles(arrFiltered);
	displayBlock('role-container', 'root');	
});

const fighterBtn = document.getElementById('fighter');
fighter.addEventListener('click', () => {
	document.getElementById('role-container').innerHTML = "";
	const arrFiltered = roleFilter('Fighter', LOL['data']);
	printRoles(arrFiltered);
	displayBlock('role-container', 'root');	
});

const mageBtn = document.getElementById('mage');
mage.addEventListener('click', () => {
	document.getElementById('role-container').innerHTML = "";
	const arrFiltered = roleFilter('Mage', LOL['data']);
	printRoles(arrFiltered);
	displayBlock('role-container', 'root');	
});

const marksmanBtn = document.getElementById('marksman');
marksman.addEventListener('click', () => {
	document.getElementById('role-container').innerHTML = "";
	const arrFiltered = roleFilter('Marksman', LOL['data']);
	printRoles(arrFiltered);
	displayBlock('role-container', 'root');	
});

const tankBtn = document.getElementById('tank');
tank.addEventListener('click', () => {
	document.getElementById('role-container').innerHTML = "";
	const arrFiltered = roleFilter('Tank', LOL['data']);
	printRoles(arrFiltered);
	displayBlock('role-container', 'root');	
});

const supportBtn = document.getElementById('support');
support.addEventListener('click', () => {
	document.getElementById('role-container').innerHTML = "";
	const arrFiltered = roleFilter('Support', LOL['data']);
	printRoles(arrFiltered);
	displayBlock('role-container', 'root');	
});
/*end menu buttons*/
const gridClickImg = document.getElementById('root');
gridClickImg.addEventListener('click', (e) => {
	console.log(e.target.alt); //porque el value proviene del object-keys (nombres de las propiedades del objeto data)
})