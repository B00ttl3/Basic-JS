var headerTitle = document.getElementById("header-title");

headerTitle.textContent = "Changed";

// headerTitle.innerText = "Changed Again";

// headerTitle.innerHTML = "<h1> Hello </h1>";

// var header = document.getElementById("header");

// header.style.borderBottom = "10px solid #000"

// var tagLine = document.getElementById("tagline");

// tagLine.textContent = "Daymn son it actually works";

// var Items = document.getElementById("items");

// Items.style.borderBottom = "5px solid #000";

// var Content = document.getElementById("content");
// Content.style.color = "green";

// use console.log(variable name) to check whether your variable have been added to the JS variable or not?

// var items = document.getElementsByClassName("list-item")

// items[1].textContent = "anything";
// i wrote [1] just to change the content in the 1 

// items[2].textContent = "Works all the time";

// items[2].style.fontWeight = "bold";
// items[3].style.color = "green";

// for(var i = 0; i<items.length; i++){
//     items[i].style.backgroundColor = "grey";
// }

// var li =document.getElementsByTagName("li");

// li[1].textContent = "works again";

var headline = document.querySelector("#tagline");
headline.style.color = "red";

var items = document.querySelector(".list-item");
// querySelector only works on the very first of the item if there are multiple given data in with same variable name
items.style.backgroundColor = "blue"; 

var input = document.querySelector("input");
input.value = "Enter your password";

// if you want to change some specific's variabale data then use querySelectorAll and then in [] put the specific number which's info you want to change

var items = document.querySelectorAll(".list-item");

items[2].style.color = "yellow";
items[2].style.backgroundColor = "green";