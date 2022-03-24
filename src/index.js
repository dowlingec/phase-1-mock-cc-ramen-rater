// write your code here
let ramenMenu = document.getElementById('ramen-menu')
let ramenImage = document.getElementById('r-img')
let ramenName = document.getElementById('r-name')
let ramenRestaurant = document.getElementById('r-restaurant')

const requestRamen = async () => {
    let req = await fetch('http://localhost:3000/ramens')
    let res = await req.json()
    // res = array of objects
    res.forEach((element) => {
        let img = document.createElement('img')
        console.log(element)
        img.setAttribute('src', element.image)
        img.addEventListener('click', () => {
            ramenImage.setAttribute('src', element.image)
            ramenName.innerHTML = element.name
            ramenRestaurant.innerHTML = element.restaurant
        })
        ramenMenu.appendChild(img)
    })
}

requestRamen()






// let data;

// function requestAll() {
//     fetch('http://localhost:3000/ramens')
//     .then((res) => {
//         res.json
//     })
//     .then((data) => {
//         return data
//     })
// }

// // let ramenMenu = document.getElementById("ramen-menu")
// ramenMenu.addEventListener('click', functionName() {
//         //thing to do goes here
//         //should show user all info inside #ramen-detail
//     })
    
// const newRamen = document.getElementById("new-ramen")
// newRamen.addEventListener('submit', (e) => {
//     e.preventDefault()
//     // Add to the array of ramenMenu
// })
// // I need to be able to access the data returned here by fetch() in other actions
// // would let data help me do that?

// //then display the image for each of the ramen using img tag inside #ramen-menu div

// //user can click on image from '#ramen-menu' -addEventListener and see all info inside #ramen-detail div where is says insert comment/rating here
// // document.getElementById("ramen-detail")



// //Append new img holder).src = "URL RETRIEVED FROM JSON"
// //get ramen images into div id ramen-menu (fn addRamens) <div id="ramen-menu">IMAGES GO HERE</div>
// //images found at ramens > image:
// //I need to pass reference to image: from json object into a NEW img.src tag so that they display

// //Create new ramen after submitting the new-ramen form
// //info from new-ramen menu added to #ramen-menu div
// //new-ramen does NOT have to be stored


// //on sumbit prevent page from default (reload)