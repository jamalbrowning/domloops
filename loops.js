//loops and arrays//


const colors = ['red', 'orange', 'white', 'blue', 'gold', 'yellow'];


const colorLoop = () => {
  let domString = '';
  for (let i = 0; i < colors.length; i++) {
    // console.log(colors[i]) 
    domString += `<h2>${colors[i]}</h2>`; 
   
  } 
  return domString; 
}
//calls all functions when the page loads//
const init = () => {
  colorLoop();
}

init();
