

const salon = {
    name:   "Pets Are Us",
    hour:   "10am To 9pm",
    phone:  3129873629,

    address:{
        street: "100 south State",
        city:   "Chicago",
        state:  "IL",
    }
}

function displaySalon() {
    document.getElementById("p").innerHTML =
        salon.name + " | Hours: " + salon.hour + " | Phone: " + salon.phone +
        " | Address: " + salon.address.street + ", " + salon.address.city +
        ", " + salon.address.state;
}

displaySalon();