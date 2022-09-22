// fetch data

const url = "https://stardustlab-da2b.restdb.io/rest/products";

let key= "96dddc348b485a47ef57f27722546e63f01aa";

fetch(url, options)
.then(response => {
if (!response.ok) {
    throw Error(response.statusText);
}
return response.json();
})
.then(data => {
    // we have the data 
    // console.log(data);
    handleData(data);
})
.catch (e => {
    // something went wrong
    console.error("An error has occured.", e.message);
})

// change img source

const firstScreen = document.querySelector('#first-screen');

let textH1 = document.querySelector('h1');

function changeScreen1 () {
    firstScreen.style.background = "url('models/bikini5.jpeg')";
    firstScreen.style.backgroundPosition = "center";
    firstScreen.style.backgroundSize = "cover";
    textH1.textContent = "SUCCESS AS A WAY OF LIVING";
}


function changeScreen2 () {
    firstScreen.style.background = "url('models/bikini6.jpeg')";
    firstScreen.style.backgroundPosition = "center";
    firstScreen.style.backgroundSize = "cover";
    textH1.textContent = "FIRST STEPS ARE THE SHINIEST";
}

function changeScreen3 () {
    firstScreen.style.background = "url('models/bikini1.jpeg')";
    firstScreen.style.backgroundPosition = "center";
    firstScreen.style.backgroundSize = "cover";
    textH1.textContent = "BIG DREAMS AHEAD";
}

function changeScreen4 () {
    firstScreen.style.background = "url('models/bikini4.jpeg')";
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