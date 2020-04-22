//loops and arrays//


// const colors = ['red', 'orange', 'white', 'blue', 'gold', 'yellow'];


// const colorLoop = () => {
//   let domString = '';
//   for (let i = 0; i < colors.length; i++) {
//     // console.log(colors[i]) 
//     domString += `<h2>${colors[i]}</h2>`; 
   
//   } 
//   return domString;
// console.log(domString) 
// }

//exercise 1:
//create an array of instructor objects , each with firstName and lastName properties (key/values)
//create a function that will loop over the instructors array
//console.log() full instructor names
// call the function in init()
const instructor = [
  {
    firstName: 'Luke',
    lastName: 'Lancaster'
  },
  {
    firstName: 'Michael',
    lastName: 'Clark'
  },
  {
    firstName: 'Matt',
    lastName: 'Gill'
  },
];
//exercise 1.2
//instead of console.log-ing out the names
//build up a domString of <h2>Instructor Name Here<h2>
//log out the final domString after the loop
const instructorNames = () => {
  let domString = '';
  for (let i = 0; i < instructor.length; i++) {   
    domString += `<h2>${instructor[i].firstName} ${instructor[i].lastName}</h2>`       
  }
    console.log(domString)
}


//calls all functions when the page loads//
const init = () => {
  instructorNames();
}

init();
