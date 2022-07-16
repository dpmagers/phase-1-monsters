






















































































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
 

// //     fetch (baseURL, {
// //         method: 'POST',
// //         headers: {'Content-Type': 'application/json',
// //             Accept: 'application/json'
// //     },
// //         body: { name: string, age: number, description: string }
// //     })
// //         .then(res => res.json())
// //         .then(aFreshMonster => {
// //             renderMonster(aFreshMonster)
// //         })
// // //})
