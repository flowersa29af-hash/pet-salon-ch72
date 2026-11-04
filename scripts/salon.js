

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

function formatPhone(number) {
    const digits = String(number);
    return "(" + digits.slice(0, 3) + ") " + digits.slice(3, 6) + "-" + digits.slice(6);
}

function displaySalon() {
    document.getElementById("p").innerHTML =
        salon.name + " | Hours: " + salon.hour + " | Phone: " + formatPhone(salon.phone) +
        " | Address: " + salon.address.street + ", " + salon.address.city +
        ", " + salon.address.state;
}

displaySalon();