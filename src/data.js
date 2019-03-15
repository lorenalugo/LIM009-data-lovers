/* Manejo de data */
const getData = (i) => {
  for(let i in LOL['data']) {
  arr.push([LOL['data'][i]['id'], LOL['data'][i]['img']]);
  }
  return arr;  
};
window.getData = getData;

