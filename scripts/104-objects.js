let student1 = {
    name: "Aaron",
    age: 34,
}

let Student2 = {
    name: "John",
    age: 26,
    nickname: "Johonny",
    isStudent: true,
}
console.log(student1.name)

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
    let li = document.getElementById("petNames");
    li.innerHTML = `<li>${pet1.Name}</li>`

}
displayPets

let student4 ={
    name: "Aaron",
    age: 34,
    isStudent: true
}



function Student(nameValue, ageValue, isStudentValue){
    this.name = nameValue;
    this.age = ageValue;
    this.isStudent = isStudentValue;
}




let student = new Student("James", 34, false);

console.log(student.name)