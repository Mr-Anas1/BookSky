//selecting popup box, popup overlay and button

var popupoverlay = document.querySelector('.popup-overlay')
var popupbox = document.querySelector('.popup-box')
var button = document.getElementById("add-popup-button")
var cancelbtn = document.getElementById("cancel-book")
var container = document.querySelector(".container")
var addbtn = document.getElementById("add-book")
var author = document.getElementById("book-author-input")
var title = document.getElementById("book-title-input")
var des = document.getElementById("book-description-input")

button.addEventListener('click', ()=> {
    popupbox.style.display="block";
    popupoverlay.style.display="block"
})

cancelbtn.addEventListener('click',(event)=> {
    popupbox.style.display="none";
    popupoverlay.style.display="none"
    event.preventDefault();
})

addbtn.addEventListener("click", (event)=> {
    var div = document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML= `<h2>${title.value}</h2> <h5>${author.value}</h5> <p>${des.value}</p> <button onclick="deletebook(event)">Delete</button>`
    container.append(div);
    
    event.preventDefault();
    popupbox.style.display="none";
    popupoverlay.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove();
}

