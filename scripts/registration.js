// Pet registration (jQuery version)

function PetRegistration(name, age, gender, service, type, breed) {
    this.Name = name;
    this.Age = age;
    this.Gender = gender;
    this.Service = service;
    this.Type = type;
    this.Breed = breed;
}

// fill the Service dropdown from the services saved on the Services page
function loadServiceOptions() {
    let services = [];
    try {
        services = JSON.parse(localStorage.getItem("services")) || [];
    } catch (error) {
        services = [];
    }

    services.forEach(function(service) {
        $("#serviceValue").append(
            $("<option>", { value: service.name, text: service.name + " ($" + Number(service.price).toFixed(2) + ")" })
        );
    });
    $("#noServicesHint").toggle(services.length === 0);
}

loadServiceOptions();

const PETS_KEY = "pets";

// first visit: start with the sample pet that used to be in the HTML
const samplePets = [new PetRegistration("Willow", "1", "Male", "Grooming", "Cat", "Mixed")];

function loadPets() {
    try {
        const saved = localStorage.getItem(PETS_KEY);
        return saved === null ? samplePets : (JSON.parse(saved) || []);
    } catch (error) {
        return samplePets;
    }
}

function savePets() {
    try {
        localStorage.setItem(PETS_KEY, JSON.stringify(pets));
    } catch (error) {
        // storage unavailable (e.g. private window): the table still works until reload
    }
}

let pets = loadPets();

// show every pet in the table
function displayPets() {
    const body = $("#body").empty();

    pets.forEach(function(pet, index) {
        const row = $("<tr>");
        [pet.Name, pet.Age, pet.Gender, pet.Service, pet.Type, pet.Breed].forEach(function(detail) {
            row.append($("<td>").text(detail));
        });
        row.append($("<td>").append(
            $("<button>", { type: "button", "class": "btn btn-danger delete-btn", text: "Delete", "data-index": index })
        ));
        body.append(row);
    });
}

const fieldIds = ["#nameValue", "#ageValue", "#genderValue", "#serviceValue", "#typeValue", "#breedValue"];

$("#petForm").on("submit", function(event) {
    event.preventDefault();

    // create the object from the form values
    const values = fieldIds.map(id => $(id).val().trim());
    const [name, age, , service, type] = values;

    if (!name || age === "" || !service || !type) {
        alert("Enter the pet's name, age, type and service.");
        return;
    }

    pets.push(new PetRegistration(...values));
    savePets();
    displayPets();

    // clear the form
    this.reset();
});

// delete a pet
$("#body").on("click", ".delete-btn", function() {
    pets.splice(Number($(this).data("index")), 1);
    savePets();
    displayPets();
});

displayPets();
