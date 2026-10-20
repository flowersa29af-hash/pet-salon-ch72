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


function RegisterUser(NameValue, AgeValue, GenderValue,
                     ServiceValue, TypeValue, BreedValue){

            this.Name = NameValue;
            this.Age = AgeValue;
            this.Gender = GenderValue;
            this.Service = ServiceValue
            this.Type = TypeValue;
            this.Breed = BreedValue;
}

let pet4 = new RegisterUser("Willow", 1, "male", "grooming", "cat", "mixed")
            console.log(`${pet4.Name} \n ${pet4.Age} \n ${pet4.Gender}\n ${pet4.Service} \n ${pet4.Type} \n ${pet4.Breed}`);


               
let pet5 = new RegisterUser("Cole", "15", "male", "grooming", "Dog", "Miniature Schnauzer")
            console.log(`${pet5.Name}\n ${pet4.Age}\n ${pet4.Gender}\n ${pet4.Service} \n ${pet4.Type} \n ${pet4.Breed}`);



let pet6 = new RegisterUser("Harry", "4", "male", "grooming", "cat", "Orange Cat")
            console.log(`${pet6.Name}\n ${pet4.Age}\n ${pet4.Gender}\n ${pet4.Service}\n${pet4.Type}\n ${pet4.Breed}`);



 

