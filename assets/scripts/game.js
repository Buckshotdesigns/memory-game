document.addEventListener("DOMContentLoaded", () => {

const cardArray = [
    {
        name: "animals",
        img: "../images/animals.jpg"
    },
    {
        name: "animals",
        img: "../images/animals.jpg"
    },
    {
        name: "chimp",
        img: "../images/chimp.jpg" 
    },
    {
        name: "chimp",
        img: "../images/chimp.jpg" 
    },
    {
        name: "gator",
        img: "../images/gator.jpg" 
    },
    {
        name: "gator",
        img: "../images/gator.jpg" 
    },
    {
        name: "giraffe",
        img: "../images/giraffe.jpg" 
    },
    {
        name: "giraffe",
        img: "../images/giraffe.jpg" 
    },
    {
        name: "rhino",
        img: "../images/rhino.jpg" 
    },
    {
        name: "rhino",
        img: "../images/rhino.jpg" 
    },
    {
        name: "tiger",
        img: "../images/tiger.jpg" 
    },
    {
        name: "tiger",
        img: "../images/tiger.jpg" 
    }

]

const grid = document.querySelector(".grid")

function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        var card = document.createElement("img")
        card.setAttribute("src", "./assets/images/question.jpg")
        card.setAttribute("data-id", i)
        // card.addEventListener("click", flipcard)
        grid.appendChild(card)
    }
    
};
createBoard();


})