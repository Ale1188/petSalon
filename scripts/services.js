function Service(description,price){
    this.description=description;
    this.price=price;
}

function isValid(service){
    let validation = true;
    
    if (service.description === "" || service.price === "") {
        validation = false;
        $("#txtDescription").addClass("alert-error");
        $("#txtPrice").addClass("alert-error");
        setTimeout(function() {
            $("#txtDescription").removeClass("alert-error");
            $("#txtPrice").removeClass("alert-error");
        }, 1000);
    } else {
        $("#txtDescription").removeClass("alert-error");
        $("#txtPrice").removeClass("alert-error");
    }
    return validation;
}


function register(){
    let description = $("#txtDescription").val();
    let price = $("#txtPrice").val();
    let newService = new Service(description,price);
    if(isValid(newService)){
        console.log("Addng a new service:", newService);
    }else{
        console.log("Parameters incomplete:", newService);
    }
    $("input").val("");
}
