function update(){
let paragraph = document.getElementsByClassName("text");
console.log(paragraph);
paragraph[0].style.color = "red";
paragraph[1].style.color = "blue";

let title = document.getElementById("title");
title.innerHTML = "<i> New Text </>";

}


function add(){
    let text = document.getElementById("text").value;
    console.log(text);

    let list = document.getElementById("list");
    list.innerHTML += `<li>${list}</li>`;

document.getElementById("text").value = "";

}
add()

document.write(document.getElementById("title").innerHTML = "I hope this works");







