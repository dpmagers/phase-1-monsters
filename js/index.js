//okay, so I need to do a GET request for the list of monsters (the first 50)

// - When the page loads, show the first 50 monsters. Each monster's name, age, and
//   description should be shown.
// - Above your list of monsters, you should have a form to create a new monster.
//   You should have fields for name, age, and description, and a 'Create Monster
//   Button'. When you click the button, the monster should be added to the list
//   and saved in the API.
// - At the end of the list of monsters, show a button. When clicked, the button
//   should load the next 50 monsters and show them.

//what I want to do here is make a GET request to grab the list of monsters (the first 50.)
//okay, I have the fetch request working. 
//have rendered the first 50 monsters on the page

//my form is not working yet; does not add new monster: "index.js:55 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')"
//i've not yet started the button at the bottom of the page




const baseURL = 'http://localhost:3000/monsters/'


fetch('http://localhost:3000/monsters/?_limit=50')
    .then(res => res.json())
    .then (monsterArray => {

        monsterArray.forEach ( monstObj => {
            renderMonster(monstObj)
        })
    })

function renderMonster(monstObj) {
    const containerDiv = document.getElementById('monster-container')
    
    const nameElement = document.createElement('h2')
    nameElement.textContent = monstObj.name

    const ageElement = document.createElement('p')
    ageElement.textContent = monstObj.age

    const describeElement = document.createElement('p')
    describeElement.textContent = monstObj.description
    
    containerDiv.append(nameElement, ageElement, describeElement)
   //console.log("hello")
}

//const theDiv = document.createElement('div')
//const newMonsterForm = document.querySelector(".form")

const formElement = document.querySelector('.form')

formElement.addEventListener('submit', e => {
    e.preventDefault()
    
    const newMonstObj = {
        name: e.target.name.value,
        age: e.target.age.value,
        description: e.target.description.value
    }
    renderMonster(newMonstObj)
    //formElement.reset()
    console.log("hello")
})
    //perhaps add name,age,description between target and value 
    // const formElement = document.getElementById( "new-ramen" )

    // formElement.addEventListener( 'submit', e => {
    //     e.preventDefault()
        
    //     const newRamenObj = {
    //         name: e.target.name.value,
    //         restaurant: e.target.restaurant.value,
    //         image: e.target.image.value,
    //         rating: e.target.rating.value,
    //         comment: e.target["new-comment"].value
    //     }
    
    //     renderTopPic( newRamenObj )
    // } )


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
















// const baseURL = 'http://localhost:3000/monsters/?_limit=50'


// const container = document.getElementById('monster-container')

// fetch('http://localhost:3000/monsters/?_limit=50')
//     .then(res => res.json())
//     .then (monsterArray => {
//         console.log (monsterArray)

//         monsterArray.forEach( monstObj => {
//            const theDiv = document.createElement('div')
//             const nameElement = document.createElement('h2')
//             console.log(theDiv)
             
//             theDiv.append(nameElement)
//             container.append( theDiv )

//         } )   //takes a function


    // })

//    <div id='monster-container'></div>



// function fetchResource (url) {
//     fetch(url)
//     .then(res => res.json()) //this is return value (don't need "return" w/arrow func)
//     .then(console.log)
// }
// fetchResource(baseURL)

//now you will iterate over this new array 