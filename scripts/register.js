let petSalon = {
    name:"The Fashion pet",
    phone:"999-9999-9999",
    hours:{
        open:"9:00 am",
        close:"9:00 pm"
    },
    pets:[]
}

function Pet(name,age,gender,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
}

function isValid(aPet){
    let validation = true;
    
    if(aPet.name==""||aPet.service==""){
        validation = false;
        document.getElementById("txtName").classList.add("alert-error");
    }

    return validation;
}

function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;
    let newPet = new Pet(inputName,inputAge,inputGender,inputService);
    if(isValid(newPet)){
        petSalon.pets.push(newPet);
        displayCards();
        displayTotalPets();
        displayServiceCount();
    }
}

function init(){
    // let pet1 = new Pet("Scooby",79,"Male","Grooming");
    // let pet2 = new Pet("Scrappy",79,"Male","Grooming");
    // petSalon.pets.push(pet1);
    // petSalon.pets.push(pet2);
    displayCards();
    displayTotalPets();
    displayServiceCount();
}
window.onload=init;