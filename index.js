

function rollDice(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber1);
    
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber2);
    var imageOne = "./images/dice"+ randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", imageOne);
    var imageTwo = "./images/dice"+ randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", imageTwo);

    if(randomNumber1 == randomNumber2){
        document.getElementById("title").textContent = "✖ Draw ✖";
    }else if(randomNumber1 > randomNumber2){
        document.getElementById("title").textContent = "🚩 Player 1 wins!"
    }else{
        document.getElementById("title").textContent = "Player 2 wins! 🚩"
    }

}


