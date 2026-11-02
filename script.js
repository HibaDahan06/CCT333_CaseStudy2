function revealWarning() {
    let warning = documentById("warning");
    if (warning.style.display === "block") {
        warning.style.display = "none";
    } else {
        warning.style.display = "block";
    }
}


function showFactor(factorId, clickedButton) {

    let factors = document.querySelectorAll(".factor");

    factors.forEach(function(factor) {
        factor.style.display = "none";
    });


    document.getElementById(factorId).style.display = "block";


    let buttons = document.querySelectorAll(".factor-button");

    buttons.forEach(function(button) {
        button.classList.remove("active-button");
    });


    clickedButton.classList.add("active-button");
}



function showModel(modelId) {
    let models = document.querySelectorAll(".model");
    models.forEach(function(model) {
        model.style.display = "none";
    });

    document.getElementById(modelId).style.display = "block";
}