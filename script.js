/********************** START SKÆRM ***********************/

document.querySelector("#start").addEventListener("click", startGame);

function startGame() {

    console.log("startGame");

    document.querySelector("#start").classList.add("hide");

    /********************* START *****************/
    /********************* genstart baggrundslyd *****************/

    /********************* nulstil point - fiskespand animation *****************/
    /********************* nulstil liv - genopfyld øl *****************/

    /********************* start - svømmende fisk animationer *****************/

    newFish();

    document.querySelector("#fish_container").addEventListener("animationiteration", removeAll);

    document.querySelector("#stonedfish_container1").addEventListener("animationiteration", newPos);

    document.querySelector("#fish_container").addEventListener("mousedown", clickedFish);

    document.querySelector("#stonedfish_container1").addEventListener("mousedown", clickedFish);

    /********************* start - flod animation *****************/

    document.querySelector("#float_container").classList.add("bouncing");

    /********************* genstart tid -sol animation *****************/

    document.querySelector("#time_board").classList.add("sunrise");

    document.querySelector("#game_background").classList.add("blur_to_gray");

    /********************* start - øl animationer *****************/

    document.querySelector("#beer_container1").classList.add("falling");

    document.querySelector("#beer_container2").classList.add("falling");



}
//   Klik på øl

document.querySelector("#beer_container1").addEventListener("mousedown", clickedBeer);

document.querySelector("#beer_container2").addEventListener("mousedown", clickedBeer);

function clickedBeer() {
    console.log("freeze me");
    //    Pause animation på container
    this.classList.add("freeze");

    //    Start fade out animation på sprite
    this.firstElementChild.classList.add("fade_out");


}

//   Klik på fisk


function clickedFish() {
    console.log("clicked fish");
    this.removeEventListener("mousedown", clickedFish);

    //    Pause animation på container
    this.classList.add("freeze");

    //    Start fade out animation på sprite
    this.firstElementChild.classList.add("fade_out");


    //   Når fade out er slut - fjern alle klasser og animationer


    this.firstElementChild.addEventListener("animationend", removeAll);


}




//    Funktion der fjerner klasser og animationer og bagefter starter funktionen newFish

function removeAll() {
    console.log("remove everything");

    this.classList.remove("movefromleft");
    this.classList.remove("movefromright");




    //    Fjern forsvind klassen fra sprite
    this.classList.remove("fade_out");

    //  Fjern frys fra container

    this.classList.remove("freeze");

    //    Fjern eksisterende position


    this.classList.remove("fishpos1");
    this.classList.remove("fishpos2");
    this.classList.remove("fishpos3");
    this.classList.remove("fishpos4");
    this.classList.remove("fishpos5");
    this.classList.remove("fishpos6");

    console.log("new position");
    let randomFish1;

    //    Giv fisk en ny position
    randomFish = Math.floor(Math.random() * 5) + 1;
    this.classList.add("fishpos" + randomFish1);

    this.classList.add("movefromleft");
    this.classList.add("movefromright");

    document.querySelector("#fish_container").addEventListener("mousedown", clickedFish);

    document.querySelector("#stonedfish_container1").addEventListener("mousedown", clickedFish);
}





//   Fjern positioner når fisk når enden



function newPos() {

    this.classList.remove("fishpos1");
    this.classList.remove("fishpos2");
    this.classList.remove("fishpos3");
    this.classList.remove("fishpos4");
    this.classList.remove("fishpos5");
    this.classList.remove("fishpos6");

    console.log("new pos");
    let randomFish;

    //    Giv fisk en ny position
    randomFish = Math.floor(Math.random() * 5) + 1;
    this.classList.add("fishpos" + randomFish);


}


function newFish() {
    console.log("new Fish");


    let randomFish;

    //    Giv fisk en ny position
    randomFish = Math.floor(Math.random() * 5) + 1;
    document.querySelector("#fish_container").classList.add("fishpos" + randomFish);
    document.querySelector("#stonedfish_container1").classList.add("fishpos" + randomFish);
    //      giv fisk animation
    document.querySelector("#fish_container").classList.add("movefromleft");
    document.querySelector("#stonedfish_container1").classList.add("movefromright");

    document.querySelector("#fish_container").addEventListener("mousedown", clickedFish);

    document.querySelector("#stonedfish_container1").addEventListener("mousedown", clickedFish);




}









/** document.querySelector("#fish_container").addEventListener("animationend", removePosition);

function removePosition() {
    document.querySelector("#fish_container").classList.remove("movefromleft",
        "fishpos1");
}


function randomPosition() {
    console.log("start");
    let myRandom1;
    let myRandom2;

    myRandom1 = Math.floor(Math.random() * 5) + 1;

    myRandom2 = Math.floor(Math.random() * 5) + 1;

    document.querySelector("#fish_container").classList = "fishpos" + myRandom1;
    document.querySelector("#stonedfish_container1").classList = "fishpos" + myRandom2;
}

***/


/******************** start - faldende øl animationer ******************/
/********************* start gyngende flod *****************/
