window.addEventListener("load", startScreen);

let points;
let energy;


function mouseoverStart() {
    document.querySelector("#start_01").play();
}


function lostBeerSound() {
    document.querySelector("#lost_beer_01").play();
}

function startBackgroundsound() {
    document.querySelector("#baggrundslyd_01").play();
}

function startPlay() {
    console.log("start playing");



    document.querySelector("#time_board").addEventListener("animationstart", startBackgroundsound);
    document.querySelector("#beer_sprite1").classList.remove("fade_out");
    document.querySelector("#beer_sprite2").classList.remove("fade_out");

    document.querySelector("#beer_sprite3").classList.remove("fade_out");
    document.querySelector("#beer_sprite4").classList.remove("fade_out");

    // fjern failed screen og button
    document.querySelector("#game_over").classList.remove("beerFailedScreen");

    document.querySelector("#game_over_quit").classList.remove("game_over_quit");

    document.querySelector("#game_over_start").classList.remove("game_over_start");

    // fjern howtoplay screen og buttons
    document.querySelector("#howtoplay_screen").classList.remove("howtoplay_screen");

    document.querySelector("#howtoplay_start").classList.remove("howtoplay_start");

    document.querySelector("#howtoplay_start").classList.remove("howtoplay_quit");

    // fjern start screen og buttons
    document.querySelector("#start_screen").classList.remove("start_screen");

    document.querySelector("#quit_button").classList.remove("quit_button");
    document.querySelector("#how_to_play_button").classList.remove("howtoplay_button");
    document.querySelector("#start_button").classList.remove("start_button");
    // nulstil points
    points = 0;

    // nustil liv
    energy = 100;

    //restart øl glas
    document.querySelector("#energy_sprite").style["height"] = `${0}%`;

    // start - flod animation
    document.querySelector("#float_container").classList.add("bouncing");

    // genstart tid -sol animation

    document.querySelector("#time_board").classList.add("sunrise");

    // tjek om sol animation er slut og start game over screen
    document.querySelector("#time_board").addEventListener("animationend", stopGame);

    document.querySelector("#game_background").classList.add("blur_to_gray");

    // tildel position til fisk
    let fishrand;

    fishrand = Math.floor(Math.random() * 5) + 1;
    document.querySelector("#fish_container").classList.add("fishpos" + fishrand);
    document.querySelector("#stonedfish_container1").classList.add("fishpos" + fishrand);

    document.querySelector("#stonedfish_container2").classList.add("fishpos" + fishrand);

    document.querySelector("#stonedfish_container3").classList.add("fishpos" + fishrand);

    // tildel movefromright og left til fisk
    document.querySelector("#fish_container").classList.add("movefromleft");
    document.querySelector("#stonedfish_container1").classList.add("movefromright");

    //document.querySelector("#stonedfish_container2").classList.add("movefromright");

    //document.querySelector("#stonedfish_container3").classList.add("movefromright");
    // klik på fisk --> clickFish
    document.querySelector("#fish_container").addEventListener("mousedown", clickFish);

    document.querySelector("#stonedfish_container1").addEventListener("mousedown", clickStonedFish);

    //document.querySelector("#stonedfish_container2").addEventListener("mousedown", clickStonedFish);

    // document.querySelector("#stonedfish_container3").addEventListener("mousedown", clickStonedFish);




    // tildel random position til øl

    //let beerrand;

    //beerrand = Math.floor(Math.random() * 5) + 1;

    //tildel bestemt position til øl
    document.querySelector("#beer_container1").classList.add("beerpos2");
    document.querySelector("#beer_container2").classList.add("beerpos5");
    document.querySelector("#beer_container3").classList.add("beerpos3");
    document.querySelector("#beer_container4").classList.add("beerpos1");

    // tildel falling til øl
    document.querySelector("#beer_container1").classList.add("falling");
    document.querySelector("#beer_container2").classList.add("falling");

    document.querySelector("#beer_container3").classList.add("falling");
    document.querySelector("#beer_container4").classList.add("falling");

    // klik på øl --> clickBeer
    document.querySelector("#beer_container1").addEventListener("mousedown", clickBeer);

    document.querySelector("#beer_container2").addEventListener("mousedown", clickBeer);

    document.querySelector("#beer_container3").addEventListener("mousedown", clickBeer);

    /*document.querySelector("#beer_container4").addEventListener("mousedown", clickBeer);

    document.querySelector("#beer_container1").addEventListener("animationend", lostBeerSound);

    document.querySelector("#beer_container2").addEventListener("animationend", lostBeerSound);

    document.querySelector("#beer_container3").addEventListener("animationend", lostBeerSound);

    document.querySelector("#beer_container4").addEventListener("animationend", lostBeerSound);*/



    // klik på pause button
    document.querySelector("#pause_button_container").classList.add("pause_button_container");

    document.querySelector("#pause_button_sprite").classList.add("pause_button_sprite");

    document.querySelector("#pause_button_container").addEventListener("mousedown", freezeGame);

    // home button
    document.querySelector("#home_button_container").classList.add("home_button_container");

    document.querySelector("#home_button_sprite").classList.add("home_button_sprite");

    document.querySelector("#home_button_container").addEventListener("mousedown", reloadWindow);


    // genstart øl animationer når de slutter og mist øl(liv)


    document.querySelector("#beer_container1").addEventListener("animationend", loseBeer);
    document.querySelector("#beer_container2").addEventListener("animationend", loseBeer);

    document.querySelector("#beer_container3").addEventListener("animationend", loseBeer);
    document.querySelector("#beer_container4").addEventListener("animationend", loseBeer);

    // genstart fisk
    document.querySelector("#fish_container").addEventListener("animationiteration", restartFish);

    document.querySelector("#stonedfish_container1").addEventListener("animationiteration", restartStonedFish);


    //fjern level complete og fishfailedscreen
    document.querySelector("#level_complete").classList.remove("fishSuccesScreen");
    document.querySelector("#game_over").classList.remove("fishFailedScreen");

    // fjern howtoplay quit button
    document.querySelector("#howtoplay_quit").classList.remove("howtoplay_quit");


}

function clickFish() {
    console.log("clicked on fish");

    document.querySelector("#fish_caught").play();

    //  fjern event listener mousedown
    this.removeEventListener("mousedown", clickFish);

    //   frys fisk container
    this.classList.add("freeze");

    //  start fade_out på sprite
    this.firstElementChild.classList.add("fade_out");



    //  få point
    points++;

    //    Vis samlet antal point
    document.querySelector("#points").textContent = points + "KG";

    //  når fade_out er slut -> restartFish
    this.addEventListener("animationend", restartFish);

}

function restartFish() {
    console.log("restarting fish");
    //  fjern eventlistener fra fisk
    this.removeEventListener("animationend", restartFish);

    //  fjern freeze fra container
    this.classList.remove("freeze");

    //  fjern fade_out fra sprite
    this.firstElementChild.classList.remove("fade_out");

    //  fjern position
    this.classList.remove("fishpos1");
    this.classList.remove("fishpos2");
    this.classList.remove("fishpos3");
    this.classList.remove("fishpos4");
    this.classList.remove("fishpos5");
    this.classList.remove("fishpos6");
    this.classList.remove("fishpos7");
    this.classList.remove("fishpos8");

    //  giv fisk ny position
    let rand;

    rand = Math.floor(Math.random() * 5) + 1;
    this.classList.add("fishpos" + rand);

    //  genstart movefromleft animation
    this.classList.remove("movefromleft");
    this.offsetWidth;
    this.classList.add("movefromleft");

    //  tilføj mousedown på fisk --> clickFish
    document.querySelector("#fish_container").addEventListener("mousedown", clickFish);

}


function clickStonedFish() {
    console.log("clicked on stoned fish");

    //  fjern event listener mousedown
    this.removeEventListener("mousedown", clickStonedFish);
    //  mist liv
    energy = energy - 25;

    document.querySelector("#energy_sprite").style["height"] = `${100-energy}%`; //ændre højden på sprite -> 1 procent

    //document.getElementById("health").height = energy;
    console.log(energy);

    //   frys fisk container
    this.classList.add("freeze");

    //  start fade_out på sprite
    this.firstElementChild.classList.add("fade_out");

    //  når fade_out er slut -> restartFish
    this.addEventListener("animationend", restartStonedFish);

    // hvis energy er 0 eller derunder -> vis failed beer skærm
    if (energy <= 0) {
        console.log("tabte pga du løb tør for øl");
        zeroBeer();
    }

}

function restartStonedFish() {
    console.log("restarting stoned fish");
    //  fjern eventlistener fra fisk
    this.removeEventListener("animationend", restartStonedFish);

    //  fjern freeze fra container
    this.classList.remove("freeze");

    //  fjern fade_out fra sprite
    this.firstElementChild.classList.remove("fade_out");

    //  fjern position
    this.classList.remove("fishpos1");
    this.classList.remove("fishpos2");
    this.classList.remove("fishpos3");
    this.classList.remove("fishpos4");
    this.classList.remove("fishpos5");
    this.classList.remove("fishpos6");
    this.classList.remove("fishpos7");
    this.classList.remove("fishpos8");

    //  giv fisk ny position
    let rand;

    rand = Math.floor(Math.random() * 5) + 1;
    this.classList.add("fishpos" + rand);

    //  genstart movefromleft animation
    this.classList.remove("movefromright");
    this.offsetWidth;
    this.classList.add("movefromright");

    //  tilføj mousedown på fisk --> clickFish
    document.querySelector("#stonedfish_container1").addEventListener("mousedown", clickStonedFish);

    //document.querySelector("#stonedfish_container2").addEventListener("mousedown", clickStonedFish);

    //document.querySelector("#stonedfish_container3").addEventListener("mousedown", clickStonedFish);

}


function clickBeer() {
    console.log("clicked on beer");

    /*document.querySelector("#beer_container1").addEventListener("animationend", loseBeer);
    document.querySelector("#beer_container2").addEventListener("animationend", loseBeer);

    document.querySelector("#beer_container3").addEventListener("animationend", loseBeer);
    document.querySelector("#beer_container4").addEventListener("animationend", loseBeer);*/

    this.removeEventListener("animationend", loseBeer);

    document.querySelector("#drinking_beer_01").play();

    //  fjern event listener mousedown
    this.removeEventListener("mousedown", clickBeer);

    if (energy >= 100) {
        console.log(energy + " øl glasset er fuldt");
        energy = 100;

    } else {
        // +10 øl (liv/energy)
        energy = energy + 5;
        console.log(energy);

        //ændre højden på øl glas sprite -> 1 procent
        document.querySelector("#energy_sprite").style["height"] = `${100-energy}%`;

    }


    this.firstElementChild.style.backgroundImage = "url(element_pluslife.svg)";
    //   frys beer container
    this.classList.add("freeze");

    //  start fade_out på sprite
    this.firstElementChild.classList.add("fade_out");

    //  når fade_out er slut -> restartFish
    this.addEventListener("animationend", restartBeer);

    this.style["height"] = `${9.5}%`;

}

function restartBeer() {
    console.log("restarting beer");

    if (energy >= 100) {
        console.log("reset øl");
        energy = 100;
    }



    //  fjern freeze fra container
    this.classList.remove("freeze");
    //  fjern eventlistener fra fisk
    this.firstElementChild.removeEventListener("animationend", restartBeer);
    //  fjern fade_out fra sprite
    this.firstElementChild.classList.remove("fade_out");
    //  tilføj mousedown på øl --> clickBeer

    this.addEventListener("mousedown", clickBeer);
    // document.querySelector("#beer_container1").addEventListener("mousedown", clickBeer);

    // document.querySelector("#beer_container2").addEventListener("mousedown", clickBeer);


    //  fjern position
    this.classList.remove("beerpos0");
    this.classList.remove("beerpos1");
    this.classList.remove("beerpos2");
    this.classList.remove("beerpos3");
    this.classList.remove("beerpos4");
    this.classList.remove("beerpos5");
    this.classList.remove("beerpos6");
    this.classList.remove("beerpos7");
    this.classList.remove("beerpos8");

    //  giv øl ny position
    let randbeer;

    randbeer = Math.floor(Math.random() * 5) + 1;
    this.classList.add("beerpos" + randbeer);

    //  genstart falling animation
    this.classList.remove("falling");
    this.offsetHeight;
    this.classList.add("falling");

    this.firstElementChild.style.backgroundImage = "url(element_beer.svg)";

    this.style["height"] = `${7.8}%`;

    //når falling animation er slut -> loseBeer
    //document.querySelector("#beer_container1").addEventListener("animationend", loseBeer);

    //document.querySelector("#beer_container2").addEventListener("animationend", loseBeer);

    this.addEventListener("animationend", loseBeer);

}



function loseBeer() {

    // skift baggrundsbilled på øl - minus 1 øl
    this.firstElementChild.style.backgroundImage = "url(element_minuslife.svg)";
    this.style["height"] = `${10}%`;



    this.removeEventListener("animationend", loseBeer);
    // frys falling animation på container
    this.classList.add("freeze");
    // fjern eventlistener - animationend
    //this.removeEventListener("animationend", loseBeer);


    // Tilføj fade_out animation til sprite
    this.firstElementChild.classList.add("fade_out");
    // Restartbeer når fade_out er slut
    this.addEventListener("animationend", restartBeer);

    // minus 10 energy/øl
    energy = energy - 2;
    console.log("du taber dine øl =" + energy)




    // illustrer tab af øl ved at gøre højden på energy_sprite lavere
    document.querySelector("#energy_sprite").style["height"] = `${100-energy}%`;

    lostBeerSound();

    // hvis øl er lig med eller lavere end nul stopGame og vis beerFailedScreen
    if (energy <= 0) {
        console.log("tabte pga du løb tør for øl");
        zeroBeer();

    }






}

function stopGame() {
    console.log("stop game");
    // stopper falling animationer
    document.querySelector("#beer_container1").classList.remove("falling");
    document.querySelector("#beer_container2").classList.remove("falling");

    document.querySelector("#beer_container3").classList.remove("falling");
    document.querySelector("#beer_container4").classList.remove("falling");

    // remove fade_out
    document.querySelector("#beer_sprite1").classList.remove("fade_out");
    document.querySelector("#beer_sprite2").classList.remove("fade_out");

    document.querySelector("#beer_sprite3").classList.remove("fade_out");
    document.querySelector("#beer_sprite4").classList.remove("fade_out");
    // stopper movefromleft animationer
    document.querySelector("#fish_container").classList.remove("movefromleft");
    // stopper movefromright animationer
    document.querySelector("#stonedfish_container1").classList.remove("movefromright");
    // stopper float animation
    document.querySelector("#float_container").classList.remove("bouncing");

    // stop solopgang
    document.querySelector("#time_board").classList.remove("sunrise");
    // fjern alle eventlisteneres
    document.querySelector("#time_board").removeEventListener("animationend", stopGame);

    document.querySelector("#fish_container").removeEventListener("mousedown", clickFish);

    document.querySelector("#stonedfish_container1").removeEventListener("mousedown", clickStonedFish);

    document.querySelector("#beer_container1").removeEventListener("mousedown", clickBeer);

    document.querySelector("#beer_container2").removeEventListener("mousedown", clickBeer);

    document.querySelector("#beer_container3").removeEventListener("mousedown", clickBeer);

    document.querySelector("#beer_container4").removeEventListener("mousedown", clickBeer);
    document.querySelector("#beer_container2").removeEventListener("animationend", restartBeer);

    document.querySelector("#beer_container1").removeEventListener("animationend", restartBeer);

    document.querySelector("#beer_container3").removeEventListener("animationend", restartBeer);

    document.querySelector("#beer_container4").removeEventListener("animationend", restartBeer);

    document.querySelector("#fish_container").removeEventListener("animationiteration", restartFish);

    document.querySelector("#stonedfish_container1").removeEventListener("animationiteration", restartStonedFish);

    /* if (points >= 1) {
         levelComplete();
     } else {
         gameOver();
     }*/

    gameOver();

}

function levelComplete() {
    console.log("level complete");
    document.querySelector("#level_complete").classList.add("fishSuccesScreen");

    document.querySelector("#level_complete_start").classList.add("level_complete_start");

    document.querySelector("#level_complete_start").addEventListener("click", reloadWindow);

    // tilføj quit knap
    document.querySelector("#level_complete_quit").classList.add("level_complete_quit");

    document.querySelector("#level_complete_quit").addEventListener("click", quitPlay);

    // tilføj point til level complete skærm
    document.querySelector("#level_complete_points").classList.add("level_complete_points");


    document.querySelector("#level_complete_points").textContent = points + "KG";


}

function gameOver() {
    console.log("game over");

    if (points >= 1) {
        levelComplete();
    }
    if (points <= 0) {

        document.querySelector("#game_over").classList.add("fishFailedScreen");

        document.querySelector("#game_over_start").classList.add("fish_failed_start");
        document.querySelector("#game_over_start").addEventListener("click", reloadWindow);

        // tilføj how to quit knap
        document.querySelector("#game_over_quit").classList.add("fish_failed_quit");

        document.querySelector("#game_over_quit").addEventListener("click", quitPlay);

        // tilføj point til game over skærm
        document.querySelector("#game_over_points").classList.add("game_over_points");


        document.querySelector("#game_over_points").textContent = points + "KG";
    }


}

function zeroBeer() {

    console.log("zero beerrr");
    stopGame();


    document.querySelector("#game_over_points").classList.remove("game_over_points");
    document.querySelector("#game_over_start").classList.remove("fish_failed_start");
    document.querySelector("#game_over_quit").classList.remove("fish_failed_quit");
    document.querySelector("#game_over").classList.remove("fishFailedScreen");
    document.querySelector("#game_over").classList.add("beerFailedScreen");

    document.querySelector("#game_over_start").classList.add("game_over_start");
    document.querySelector("#game_over_start").addEventListener("click", reloadWindow);

    // tilføj how to quit knap
    document.querySelector("#game_over_quit").classList.add("game_over_quit");

    document.querySelector("#game_over_quit").addEventListener("click", quitPlay);
}

function startScreen() {


    //tilføj lyd når mus er over start knap 
    document.querySelector("#start_button").addEventListener("mouseover", mouseoverStart);
    // tilføj start screen klasse til start screen
    document.querySelector("#start_screen").classList.add("start_screen");

    // tilføj start_button klasse
    document.querySelector("#start_button").classList.add("start_button");

    // tilføj how to play knap
    document.querySelector("#how_to_play_button").classList.add("howtoplay_button");

    // tilføj how to quit knap
    document.querySelector("#quit_button").classList.add("quit_button");

    // tilføj eventlistener click - gå til start play

    document.querySelector("#start_button").addEventListener("click", startPlay);

    document.querySelector("#how_to_play_button").addEventListener("click", howtoPlay);

    document.querySelector("#quit_button").addEventListener("click", quitPlay);



}



function howtoPlay() {
    console.log("how to play")
    document.querySelector("#howtoplay_screen").classList.add("howtoplay_screen");

    document.querySelector("#howtoplay_start").classList.add("howtoplay_start");

    document.querySelector("#howtoplay_start").addEventListener("click", startPlay);

    // tilføj how to play quit knap
    document.querySelector("#howtoplay_quit").classList.add("howtoplay_quit");

    document.querySelector("#howtoplay_quit").addEventListener("click", quitPlay)

}

function reloadWindow() {
    window.location.reload("#index.html");

}

function quitPlay() {
    console.log("quit play");
    window.location = "http:www.google.com";
}

function freezeGame() {
    console.log("freeze");

    // fjern pause knap

    document.querySelector("#pause_button_container").removeEventListener("mousedown", freezeGame);
    document.querySelector("#pause_button_sprite").classList.remove("pause_button_sprite");
    document.querySelector("#pause_button_sprite").classList.add("play_button_sprite");

    document.querySelector("#pause_button_container").addEventListener("mousedown", unFreeze);

    // flod animation
    document.querySelector("#float_container").classList.add("freeze");

    // sol animation

    document.querySelector("#time_board").classList.add("freeze");

    // blur to gray animation
    document.querySelector("#game_background").classList.add("freeze");

    // frys movefromleft til fisk
    document.querySelector("#fish_container").classList.add("freeze");
    document.querySelector("#stonedfish_container1").classList.add("freeze");

    // frys øl animationer 
    document.querySelector("#beer_container1").classList.add("freeze");
    document.querySelector("#beer_container2").classList.add("freeze");

    document.querySelector("#beer_container3").classList.add("freeze");
    document.querySelector("#beer_container4").classList.add("freeze");
}

function unFreeze() {

    console.log("un freeze");

    // fjern pause knap
    document.querySelector("#pause_button_container").addEventListener("mousedown", freezeGame);
    document.querySelector("#pause_button_sprite").classList.add("pause_button_sprite");
    document.querySelector("#pause_button_sprite").classList.remove("play_button_sprite");

    document.querySelector("#pause_button_container").removeEventListener("mousedown", unFreeze);

    // flod animation
    document.querySelector("#float_container").classList.remove("freeze");

    // sol animation

    document.querySelector("#time_board").classList.remove("freeze");

    // blur to gray animation
    document.querySelector("#game_background").classList.remove("freeze");

    // frys movefromleft til fisk
    document.querySelector("#fish_container").classList.remove("freeze");
    document.querySelector("#stonedfish_container1").classList.remove("freeze");

    // frys øl animationer 
    document.querySelector("#beer_container1").classList.remove("freeze");
    document.querySelector("#beer_container2").classList.remove("freeze");

    document.querySelector("#beer_container3").classList.remove("freeze");
    document.querySelector("#beer_container4").classList.remove("freeze");

}
