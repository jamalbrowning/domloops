const dinos = [
  {
    dinoType: 't-rex',
    name: 'Olaf',
    age: 100
  },
  {
    dinoType: 'Stegosaurus',
    name: 'Larry',
    age: 110
  },
  {
    dinoType: 'velociraptor',
    name: 'Jester',
    age: 1000
  },
];
const printToDom = (selector, textToPrint) => {
  console.log('in printToDom', selector , textToPrint)
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}
const buildDinoCards = (obj) => {
  //todo:build dino cards
  let domString = '';

  for (let i = 0; i < obj.length; i++) {
    domString += '<div class="dino">';
    domString += `<h3>${obj[i].name}</h3>`;
    domString += `<p> This dino is a ${obj[i].dinoType}</p> and is ${obj[i].age} years old.`;
    domString += '</div>';
  }
  printToDom('#dino-pen', domString)
}
const assignments = [
  {
    title:'Create a DOM file',
    dueDate:'02/12/2021',
    topic: 'The DOM',
    notes: 'explain what DOM is',
  },
  {
    title:'Shoe Cards',
    dueDate:'03/28/2021',
    topic: 'Shoes',
    notes: 'make shoe cards',
  },
  {
    title:'Cars',
    dueDate:'05/11/2021',
    topic: 'Cars',
    notes: 'Describe Favorite Cars',
  },
]
const buildAssignments = (obj) => {
  //todo:build dino cards
  let domString = '';

  for (let i = 0; i < obj.length; i++) {   
    domString += '<div class="assign">';
    domString += `<h3>${obj[i].title}</h3>`;
    domString += `<p>Due date: ${obj[i].dueDate}</p>`;
    domString += `<p>Due date: ${obj[i].topic}</p>`;
    domString += `<p>Due date: ${obj[i].notes}</p>`;
    domString += '</div>';
  }
  printToDom('#assignments', domString)
}
const init = () => {
  buildDinoCards(dinos);
  buildAssignments(assignments);
  
}

init();


// exercise 2:
// creat an assignment array, which has several assignment objects in it
//assignment should havez: title, dueDate, topic, notes - keys values
//loop over assignments array, and create 'cards' for each assignment
//bonus points for using printToDom to print them to the Dom
//hint: create a div for the assignment cards to go to
