/* Manejo del DOM */
/*vars*/
let arr = [];
/*functions*/
const printData = (arr) => {
	for(let i = 0; i < arr.length; i++) {
	  const item = `<div class="col-xs-2 col-md-1 border-box"><img class="block auto"src="${arr[i][1]}" alt="${arr[i][0]}-image"/></div>`;
	  document.getElementById('root').insertAdjacentHTML("beforeend", item); ;	
	}
}
/*events*/
document.addEventListener("DOMContentLoaded", () => {
  getData();
  printData(arr);
});