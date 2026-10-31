/*let pet1 = {
    Name: "Willow",
    Age: 1,
    Gender: "Male",
    Service: "Bath",
    Type: "Cat",
    Breed: "Domestic Shorthair"
};
console.log(pet1.Name);

let pet2 = {
    Name: "Cole",
    Age: 12,
    Gender: "Male",
    Service: "Hair grooming",
    Type: "Dog",
    Breed: "Miniature Schnauzer"
};
console.log(pet2.Name);

let pet3 = {
    Name: "Harry",
    Age: 4,
    Gender: "Male",
    Service: "Vaccination",
    Type: "Cat",
    Breed: "Orange Cat"
};

console.log(pet3.Name);

function register(event) {
    event.preventDefault();
// create the object  construtor
    const newPetReg = new PetRegistration(
        document.getElementById("nameValue").value,
        document.getElementById("ageValue").value,
        document.getElementById("genderValue").value,
        document.getElementById("serviceValue").value,
        document.getElementById("typeValue").value,
        document.getElementById("breedValue").value
    );

   // console.log(newPetReg);


// display pet table
    const row = document.createElement("tr");
    const body = document.getElementById("body");
    const petDetails = [
        newPetReg.Name,
        newPetReg.Age,
        newPetReg.Gender,
        newPetReg.Service,
        newPetReg.Type,
        newPetReg.Breed
    ];

    petDetails.forEach(function(detail) {
        const cell = document.createElement("td");
        cell.textContent = detail;
        row.appendChild(cell);
    });

    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "btn btn-danger delete-btn";
    deleteButton.textContent = "Delete";
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);
    body.appendChild(row);

    // clear the input field
    document.getElementById("nameValue").value = "";
    document.getElementById("ageValue").value = "";
    document.getElementById("genderValue").value = "";
    document.getElementById("serviceValue").value = "";
    document.getElementById("typeValue").value = "";
    document.getElementById("breedValue").value = "";
}

document.getElementById("body").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        event.target.closest("tr").remove();
    }
});

function PetRegistration(name, age, gender, service, type, breed) {
    this.Name = name;
    this.Age = age;
    this.Gender = gender;
    this.Service = service;
    this.Type = type;
    this.Breed = breed;
} */



$("registerSevice").click(function(){
    alert("click");
    let serviceName = $("")


}) 


