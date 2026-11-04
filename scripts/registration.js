// Pet registration (jQuery version)

function PetRegistration(name, age, gender, service, type, breed) {
    this.Name = name;
    this.Age = age;
    this.Gender = gender;
    this.Service = service;
    this.Type = type;
    this.Breed = breed;
}

const fieldIds = ["#nameValue", "#ageValue", "#genderValue", "#serviceValue", "#typeValue", "#breedValue"];

$("#petForm").on("submit", function(event) {
    event.preventDefault();

    // create the object from the form values
    const values = fieldIds.map(id => $(id).val().trim());
    const newPetReg = new PetRegistration(...values);

    // add a row to the pet table
    const row = $("<tr>");
    [newPetReg.Name, newPetReg.Age, newPetReg.Gender,
     newPetReg.Service, newPetReg.Type, newPetReg.Breed].forEach(function(detail) {
        row.append($("<td>").text(detail));
    });
    row.append($("<td>").append(
        $("<button>", { type: "button", "class": "btn btn-danger delete-btn", text: "Delete" })
    ));
    $("#body").append(row);

    // clear the form
    this.reset();
});

// delete a pet row (works for rows added later too)
$("#body").on("click", ".delete-btn", function() {
    $(this).closest("tr").remove();
});
