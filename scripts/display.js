function displayCards(){
    let card = "";
    const petDiv=document.getElementById("petDiv");
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        card=`
            <div class="petCard">
                <h4>${pet.name}</h4>
                <p>${pet.age}</p>
                <p>${pet.gender}</p>
                <p>${pet.service}</p>
            </div>
        `;
    }
    petDiv.innerHTML=card;
}

function displayRow(){

}

function displayTotalPets(){
    document.getElementById("total").innerHTML = petSalon.pets.length;
}
function displayServiceCount(){
    let grooming=0;
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        if(pet.service=="Grooming"){
            grooming++;
        }
    }
    document.getElementById("totalGroomings").innerHTML=grooming;
}