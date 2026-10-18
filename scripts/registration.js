let pet1 = {
    Name:   "Willow",
    Age:        1,
    Gender: "Male",
    Service: "Bath",
    Type:   "Cat",
    Breed:  "Domestic Shorthair"
};
console.log(pet1.Name)

let pet2 = {
    Name: "Cole" , 
    Age:    12,
    Gender: "Male",
    Service:  "Hair grooming",
    Type:   "Dog",
    Breed:  "Miniature Schnauzer"
};
console.log(pet2.Name)

let pet3 = {
    Name:   "Harry",
    Age:    4,
    Gender: "Male",
    Service: "Vaccination",
    Type: "Cat",
    Breed: "Orange Cat" 
};

console.log(pet3.Name);

function displayPets(){
  let  list = document.getElementById("list");
    list.innerHTML = `<li>${pet1.Name}</li>
    <li>${pet2.Name}</li><li>${pet3.Name}</li>`;
}
displayPets();







 

