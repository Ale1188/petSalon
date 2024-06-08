var pets = [];

class Pet {
    constructor(name, age, breed, service, phone, paid) {
        this.id = generateRandomId();
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.service = service;
        this.phone = phone;
        this.paid = paid;
    }
}



function generateRandomId() {
    return 'id-' + Math.random().toString(36).substr(2, 9);
}

function isValid(pet) {
    let validation = true;
    $("#notifications").removeClass("alert-error alert-success");
    
    $("input, select").css("border-color", "initial");
    
    if (pet.name === "" || pet.age === "" || pet.breed === "" || pet.service === "" || pet.phone === "" || pet.paid === "") {
        validation = false;
        
        $("input").each(function() {
            if ($(this).val() === "") {
                $(this).css("border-color", "red");
            }
        });
        
        if ($("#txtService").val() === "") {
            $("#txtService").css("border-color", "red");
        }
        if ($("#txtPaid").val() === "") {
            $("#txtPaid").css("border-color", "red");
        }

        setTimeout(function() {
            $("input, select").css("border-color", "initial");
        }, 1500);
    }
    
    if ($("#txtService").val() === "" || $("#txtService").val() === null) {
        validation = false;
        $("#txtService").css("border-color", "red");
        
        setTimeout(function() {
            $("#txtService").css("border-color", "initial");
        }, 1500);
    }
    if ($("#txtPaid").val() === "" || $("#txtPaid").val() === null) {
        validation = false;
        $("#txtPaid").css("border-color", "red");
        
        setTimeout(function() {
            $("#txtPaid").css("border-color", "initial");
        }, 1500);
    }

    return validation;
}

function register() {
    var inputName = $("#txtName").val();
    var inputAge = $("#txtAge").val();
    var inputBreed = $("#txtBreed").val();
    var inputService = $("#txtService").val();
    var inputPhone = $("#txtPhone").val();
    var inputPaid = $("#txtPaid").val();

    let newPet = new Pet(inputName, inputAge, inputBreed, inputService, inputPhone, inputPaid);

    if (isValid(newPet)) {
        savePetToLocalStorage(newPet);
        pets.push(newPet);
        displayRow(newPet);
        displayTotalPets();
        // displayServiceCount();
        notifications("alert-success", "Successful registration");
        $("input, select").val("");
    } else {
        notifications("alert-error", "Add all the required fields");
    }
}

function getServices(){
    let serviceList = readItems();
    let option = "";
    for(let i=0;i<serviceList.length;i++){
        option =  `<option>${serviceList[i].description} -> $${serviceList[i].price}</option>`;
        $("#txtService").append(option);
    }
}

function removePet(id) {
    removePetFromLocalStorage(id);
    pets = pets.filter(pet => pet.id !== id);
    $(`#${id}`).remove();
    displayTotalPets(); 
    // displayServiceCount();
}

function notifications(type, msg) {
    let div = $("#notifications");
    div.removeClass("alert-danger alert-success");
    div.addClass(type);
    div.text(msg);
    div.slideDown(800).delay(200).slideUp(800);
}

function savePetToLocalStorage(pet) {
    let pets = JSON.parse(localStorage.getItem('pets')) || [];
    pets.push(pet);
    localStorage.setItem('pets', JSON.stringify(pets));
}

function removePetFromLocalStorage(id) {
    let pets = JSON.parse(localStorage.getItem('pets'));
    pets = pets.filter(pet => pet.id !== id);
    localStorage.setItem('pets', JSON.stringify(pets));
}

function loadPetsFromLocalStorage() {
    let pets = JSON.parse(localStorage.getItem('pets'));
    if (pets) {
        pets.forEach(pet => {
            displayRow(pet);
        });
    }
}

function init() {
    loadPetsFromLocalStorage();
    displayTotalPets();
    // displayServiceCount();
    getServices();
}

$(document).ready(init);