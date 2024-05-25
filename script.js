// script.js

// Update fastest delivery date
var fastestDeliveryDateElement = document.getElementById("fastestDeliveryDate");
var fastestDeliveryDate = new Date();
fastestDeliveryDate.setDate(fastestDeliveryDate.getDate() + 2); // Assuming 2 days for fastest delivery
fastestDeliveryDateElement.innerText = fastestDeliveryDate.toDateString() + ", " + fastestDeliveryDate.toLocaleTimeString();

// Update automatic time and date
var currentDateElement = document.createElement("p");
currentDateElement.innerText = "Last Updated: " + new Date().toLocaleString();
document.body.appendChild(currentDateElement);
