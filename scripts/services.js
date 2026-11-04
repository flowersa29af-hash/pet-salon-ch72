$("#serviceForm").on("submit", function(event) {
    event.preventDefault();

    const serviceName = $("#serviceName").val().trim();
    const serviceDesc = $("#serviceDesc").val().trim();
    const servicePrice = Number($("#servicePrice").val());

    if (!serviceName || !serviceDesc || !Number.isFinite(servicePrice) || servicePrice <= 0) {
        alert("Enter a service name, description, and a price greater than zero.");
        return;
    }

    localStorage.setItem("serviceName", serviceName);
    localStorage.setItem("serviceDesc", serviceDesc);
    localStorage.setItem("servicePrice", String(servicePrice));

    this.reset();
});







