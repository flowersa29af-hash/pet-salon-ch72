// Salon services: add, list and delete (saved in the browser)

const STORAGE_KEY = "services";

function loadServices() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (error) {
        return [];
    }
}

function saveServices(services) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(services));
    } catch (error) {
        // storage unavailable (e.g. private window): the list still works until reload
    }
}

let services = loadServices();

function displayServices() {
    const list = $("#serviceList").empty();
    $("#noServices").toggle(services.length === 0);

    services.forEach(function(service, index) {
        const item = $("<li>", { "class": "list-group-item d-flex justify-content-between align-items-start gap-3" });
        const text = $("<div>").append(
            $("<div>", { "class": "fw-semibold", text: service.name }),
            $("<small>", { "class": "text-body-secondary", text: service.description })
        );
        const right = $("<div>", { "class": "d-flex align-items-center gap-2" }).append(
            $("<span>", { "class": "badge text-bg-light border fs-6", text: "$" + service.price.toFixed(2) }),
            $("<button>", { type: "button", "class": "btn btn-sm btn-outline-danger delete-service", text: "Delete", "data-index": index })
        );
        list.append(item.append(text, right));
    });
}

$("#serviceForm").on("submit", function(event) {
    event.preventDefault();

    const serviceName = $("#serviceName").val().trim();
    const serviceDesc = $("#serviceDesc").val().trim();
    const servicePrice = Number($("#servicePrice").val());

    if (!serviceName || !serviceDesc || !Number.isFinite(servicePrice) || servicePrice <= 0) {
        alert("Enter a service name, description, and a price greater than zero.");
        return;
    }

    services.push({ name: serviceName, description: serviceDesc, price: servicePrice });
    saveServices(services);
    displayServices();

    this.reset();
});

$("#serviceList").on("click", ".delete-service", function() {
    services.splice(Number($(this).data("index")), 1);
    saveServices(services);
    displayServices();
});

displayServices();
