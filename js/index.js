
//http://localhost:3000/monsters
//http://localhost:3000/monsters/?_limit=20&_page=3

fetch('http://localhost:3000/monsters')
    .then(res => res.json())
    .then(data => console.log(data))

fetch('http://localhost:3000/monsters/?_limit=50&_page=1')
    .then(res => res.json())
    .then(dataArray => {
        dataArray.forEach(dataObj => {
            renderMonsters(dataObj)
        })
    })

function renderMonsters(dataObj) {
    const monsterContainer = document.getElementById('monster-container')
    const monsterName = document.createElement('h2')
    const monsterAge = document.createElement('p')
    const monsterDescription = document.createElement('p')

    monsterName.textContent = dataObj.name
    monsterAge.textContent = "age: " + dataObj.age
    monsterDescription.textContent = "description: " + dataObj.description

    monsterContainer.append(monsterName, monsterAge, monsterDescription)
}
    
const formElement = document.querySelector(".form")

//CREATE NEW MONSTER FORM 
formElement.addEventListener('submit', e => {
    e.preventDefault()
    const newMonster = {
        name: e.target.name.value,
        age: e.target.age.value,
        description: e.target.description.value
    }
    renderMonsters(newMonster)
    formElement.reset()
    console.log("hello")
    //FETCH TO POST 
        //     fetch('http://localhost:3000/monsters', {
        //     Method: 'POST',
        //     Headers: {
        //         'Content-Type': 'application/json',
        //         Accept: 'application/json',
        //     },
        //     Body: JSON.stringify()
        // })
})

    fetch ('http://localhost:3000/monsters', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
            Accept: 'application/json'
    },
        body: { name: string, age: number, description: string}
    })
        .then(res => res.json())
        .then(aFreshMonster => {
            renderMonster(aFreshMonster)
        })



//LOAD NEXT 50 MONSTERS 
const forwardBtn = document.getElementById("forward")
forwardBtn.addEventListener('click', e => {
    e.preventDefault
    fetch('http://localhost:3000/monsters/?_limit=50&_page=2')
    .then(res => res.json())
    .then(dataArray => {
        dataArray.forEach(dataObj => {
            renderMonsters(dataObj)
        })
    })  
    console.log("hello button")
})









//2.b should update the API with a POST request





 









































































// //Things to add/fix:
// //to learn for code challenge 
// //FORM
//     //my form will populate new Obj at the bottom of page, but form doesn't reset properly(doesn't clear)
// //BUTTON CLICK
//     //i've not yet started the button at the bottom of the page
//         ////for bottom of page, would it require a new fetch? 
// //POPULATING ITERATION 
//         //how to add labels for "Age" & "Bio" for each monster? 


//     //my POST request doesn't work




// const baseURL = 'http://localhost:3000/monsters/'


// fetch('http://localhost:3000/monsters/?_limit=50')
//     .then(res => res.json())
//     .then (monsterArray => {

//         monsterArray.forEach ( monstObj => {
//             renderMonster(monstObj)
//          console.log(monstObj)
//         })
//     })

// function renderMonster(monstObj) {
//     const containerDiv = document.getElementById('monster-container')
    
//     const nameElement = document.createElement('h2')
//     nameElement.textContent = monstObj.name

//     const ageElement = document.createElement('p')
//     ageElement.textContent = monstObj.age

//     const describeElement = document.createElement('p')
//     describeElement.textContent = monstObj.description
    
//     containerDiv.append(nameElement, ageElement, describeElement)
//    //console.log("hello")
// }

// const formElement = document.querySelector('.form')

// formElement.addEventListener('submit', e => {
//     e.preventDefault()
    
//     const newMonstObj = {
//         name: e.target.name.value,
//         age: e.target.age.value,
//         description: e.target.description.value
//     }
//     renderMonster(newMonstObj)
//     formElement.reset()
//     console.log("hello")
// })
 

//     fetch (baseURL, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json',
//             Accept: 'application/json'
//     },
//         body: { name: string, age: number, description: string }
//     })
//         .then(res => res.json())
//         .then(aFreshMonster => {
//             renderMonster(aFreshMonster)
//         })
// //})
