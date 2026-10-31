$("#registerService").click(function(event){
    event.preventDefault();

  //  alert("clicked")
    // 1.Get the values .val()
// get the input fields values using Jquery $()

let serviceName = $("#serviceName").val().trim();
let serviceDesc = $("#serviceDesc").val().trim();
let servicePrice = $("#servicePrice").val();
// alert(`${serviceName} - ${serviceDesc} - ${servicePrice}`);

if(serviceName == ""){
    $("#serviceName").css("border", "1px solid red");
} else if (#serviceDesc == ""){
    $("#serviceDesc").css("border", "1px solid red");
} else if (#servicePrice == ""){
   $("#servicePrice").css("border", "1px solid red");
} else{
    // save to local storage assignment 3

    // Remove the red border
S  $("#serviceName").css("border", "");
   $("#serviceDesc").css("border", "");
   $("#servicePrice").css("border", "");

   //clear input fields
   $("#serviceName").val("");
   $("#serviceDesc").val("");
   $("#servicePrice").val("");
}







});