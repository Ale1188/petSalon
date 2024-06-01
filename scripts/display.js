function displayRow(pet) {
    let table = $("#petTable");
    let petHTML = `
    <tr id="${pet.id}">
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.breed}</td>
        <td>${pet.service}</td>
        <td>${pet.phone}</td>
        <td><button class="btn btn-danger" onclick="removePet('${pet.id}')">Remove</button></td>
    </tr>
    `;

    table.append(petHTML);
    $('html, body').animate({
        scrollTop: $("#petTable").offset().top
    }, 1000);
}

function displayTotalPets() {
    let storedPets = JSON.parse(localStorage.getItem('pets'));
    let totalPets = storedPets ? storedPets.length : 0;
    $("#total").text(totalPets);
}

function displayServiceCount() {
    let storedPets = JSON.parse(localStorage.getItem('pets'));
    let haircut = 0,
        wash = 0,
        vaccination = 0,
        revision = 0,
        massage = 0,
        drying = 0,
        nailTrimming = 0;

    if (storedPets) {
        storedPets.forEach(function(pet) {
            switch (pet.service) {
                case "Haircut":
                    haircut++;
                    break;
                case "Wash":
                    wash++;
                    break;
                case "Vaccination":
                    vaccination++;
                    break;
                case "Revision":
                    revision++;
                    break;
                case "Massage":
                    massage++;
                    break;
                case "Drying":
                    drying++;
                    break;
                case "Nail trimming":
                    nailTrimming++;
                    break;
                default:
                    break;
            }
        });
    }

    $("#totalHaircut").text(haircut);
    $("#totalWash").text(wash);
    $("#totalVaccination").text(vaccination);
    $("#totalRevision").text(revision);
    $("#totalMassage").text(massage);
    $("#totalDrying").text(drying);
    $("#totalNailTrimming").text(nailTrimming);
}
