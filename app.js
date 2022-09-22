// fetch data related only to rental bikinis

//const url = "https://stardustlab-da2b.restdb.io/rest/productsq={'Category':'Rental'}";

//normal url
const url = "https://stardustlab-da2b.restdb.io/rest/products";

// api key

const options = { 
    headers: {
        'x-apikey': "632c84d6bf647d0a5c19865e"
    }, 
}


fetch(url, options)
.then(response => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
        return response.json();
})
.then(data => {
    // we have the data 
    console.log(data); 
    handleData(data);
})
.catch (e => {
    // something went wrong
    console.error("An error has occured.", e.message);
})



// FUNCTION FOR THE RENTAL CATEGORY

function handleData(stardustData){
    
    
    stardustData.forEach( bikini => {

        // make template

        // grab it

         // add data only if the type of the element's category is "Rental"


        if (bikini.Category == "Rental"){

            const rentalTemplate = document.querySelector('.rental-template').content;

            // clone it
            const clone = rentalTemplate.cloneNode(true);


            
            // add the name of the product

            clone.querySelector('p').textContent = bikini.Name; 

            // add the image of the product

            clone.querySelector('img').src = bikini.img;

            // append to parent

            const daddy = document.querySelector(".rent-ul");

            daddy.appendChild(clone); }

        if (bikini.Category == "Ready") {

        const readyTemplate = document.querySelector('.ready-template').content;

        // clone it
        const readyClone = readyTemplate.cloneNode(true);


            
            // add the name of the product

            readyClone.querySelector('p').textContent = bikini.Name; 

            // add the image of the product

            readyClone.querySelector('img').src = bikini.img;

            // append to parent

            let readyDaddy = document.querySelector(".ready-ul");

            readyDaddy.appendChild(readyClone);
       } 
       if (bikini.Type == "Shoes") {

        const shoesTemplate = document.querySelector('.accessories-template').content;

        // clone it
        const shoesClone = shoesTemplate.cloneNode(true);


            
            // add the name of the product

            shoesClone.querySelector('p').textContent = bikini.Description; 

            // add the image of the product

            shoesClone.querySelector('img').src = bikini.img;

            // append to parent

            let shoesDaddy = document.querySelector(".accessories-ul");

            shoesDaddy.appendChild(shoesClone);
       }

        }) 
    }

    

//
//
//

// change img source

const firstScreen = document.querySelector('#first-screen');

let textH1 = document.querySelector('h1');

function changeScreen1 () {
    firstScreen.style.background = "url('hero/pro.jpg')";
    firstScreen.style.backgroundPosition = "center";
    firstScreen.style.backgroundSize = "cover";
    textH1.textContent = "SUCCESS AS A WAY OF LIVING";
}


function changeScreen2 () {
    firstScreen.style.background = "url('hero/newbie_1.png')";
    firstScreen.style.backgroundPosition = "center";
    firstScreen.style.backgroundSize = "cover";
    textH1.textContent = "FIRST STEPS ARE THE SHINIEST";
}

function changeScreen3 () {
    firstScreen.style.background = "url('hero/procard_2.jpg')";
    firstScreen.style.backgroundPosition = "center";
    firstScreen.style.backgroundSize = "cover";
    textH1.textContent = "BIG DREAMS AHEAD";
}

function changeScreen4 () {
    firstScreen.style.background = "url('hero/goal_1.jpg')";
    firstScreen.style.backgroundPosition = "center";
    firstScreen.style.backgroundSize = "cover";
    textH1.textContent = "REACH YOUR MILESTONE IN STYLE";
}

function everything(){
    timies();
}


function timies(){
    setTimeout(changeScreen1, 3000);
    setTimeout(changeScreen2, 6000);
    setTimeout(changeScreen3, 9000);
    setTimeout(changeScreen4, 12000);
    setTimeout(everything, 15000);
}


setTimeout(timies, 100);

//
//
