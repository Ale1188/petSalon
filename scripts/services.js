function Service(description, price) {
    this.id = generateRandomId();
    this.description = description;
    this.price = price;
}

function generateRandomId() {
    return 'id-' + Math.random().toString(36).substr(2, 9);
}

function isValid(service) {
    let validation = true;
    $("#notifications").removeClass("alert-error alert-success");
    
    $("input, select").css("border-color", "initial");
    
    if (service.description === "" || service.price === "") {
        validation = false;
        
        $("input").each(function() {
            if ($(this).val() === "") {
                $(this).css("border-color", "red");
            }
        });

        setTimeout(function() {
            $("input, select").css("border-color", "initial");
        }, 1500);
    }

    return validation;
}

function removeService(rowId) {
    $("#" + rowId).remove();
    removeServiceFromLocalStorage(rowId);
}

function displayRow(newService) {
    let table = $("#servicesTable");
    let serviceHTML = `
    <tr id="${newService.id}">
        <td>${newService.description}</td>
        <td>${newService.price}</td>
        <td><button class="btn-danger" onclick="removeService('${newService.id}')">Remove</button></td>
    </tr>
    `;
    
    table.append(serviceHTML);
    $('html, body').animate({
        scrollTop: $("#servicesTable").offset().top
    }, 1000);
}

function notifications(type, msg) {
    let div = $("#notifications");
    div.removeClass("alert-danger alert-success");
    div.addClass(type);
    div.text(msg);
    div.slideDown(800).delay(200).slideUp(800);
}

function register(){
    let description = $("#txtDescription").val();
    let price = $("#txtPrice").val();
    let newService = new Service(description, price);
    if(isValid(newService)){
        displayRow(newService);
        saveServiceToLocalStorage(newService);
        notifications("alert-success", "Successful registration");
    }else{
        notifications("alert-error", "Add all the required fields");
    }
    $("input, select").val("");
}

function saveServiceToLocalStorage(service) {
    let services = JSON.parse(localStorage.getItem('services')) || [];
    services.push(service);
    localStorage.setItem('services', JSON.stringify(services));
}

function removeServiceFromLocalStorage(id) {
    let services = JSON.parse(localStorage.getItem('services'));
    services = services.filter(service => service.id !== id);
    localStorage.setItem('services', JSON.stringify(services));
}

function loadServicesFromLocalStorage() {
    let services = JSON.parse(localStorage.getItem('services'));
    if (services) {
        services.forEach(service => {
            displayRow(service);
        });
    }
}

function init() {
    loadServicesFromLocalStorage();
}

$(document).ready(init);
