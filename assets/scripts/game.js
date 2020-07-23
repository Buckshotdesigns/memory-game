document.addEventListener("DOMContentLoaded", () => {

const cardArray = [
    {
        name: "animals",
        img: "./assets/images/animals.jpg"
    },
    {
        name: "animals",
        img: "./assets/images/animals.jpg"
    },
    {
        name: "chimp",
        img: "./assets/images/chimp.jpg" 
    },
    {
        name: "chimp",
        img: "./assets/images/chimp.jpg" 
    },
    {
        name: "gator",
        img: "./assets/images/gator.jpg" 
    },
    {
        name: "gator",
        img: "./assets/images/gator.jpg" 
    },
    {
        name: "giraffe",
        img: "./assets/images/giraffe.jpg" 
    },
    {
        name: "giraffe",
        img: "./assets/images/giraffe.jpg" 
    },
    {
        name: "rhino",
        img: "./assets/images/rhino.jpg" 
    },
    {
        name: "rhino",
        img: "./assets/images/rhino.jpg" 
    },
    {
        name: "tiger",
        img: "./assets/images/tiger.jpg" 
    },
    {
        name: "tiger",
        img: "./assets/images/tiger.jpg" 
    }

]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector(".grid")
var resultDisplay = document.querySelector("#result")
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];


function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        var card = document.createElement("img")
        card.setAttribute("src", "./assets/images/question.jpg")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipcard)
        grid.appendChild(card)
    }
    
};

// check for matches
function checkForMatch(){
    var cards = document.querySelectorAll("img")
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert("you found a match!")
        cards[optionOneId].setAttribute("src", "./assets/images/white.jpg")
        cards[optionTwoId].setAttribute("src", "./assets/images/white.jpg")
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute("src", "./assets/images/question.jpg")
        cards[optionTwoId].setAttribute("src", "./assets/images/question.jpg")
        alert("Sorry try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = "Congratulations you found them all";
    }
}

// flip your card
function flipcard() {
  var cardId = this.getAttribute("data-id")
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute("src", cardArray[cardId].img)
  if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
  }
}
createBoard();
})
