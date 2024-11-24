function Unos() {
    var ime = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var poruka = document.getElementById("message").value;

    if (ime === "" || email === "" || poruka === "") {
        alert("Molimo Vas da popunite sva polja.");
        return false;
    } else {
        alert("Hvala što ste popunili formu. Dobićete potvrdu prijave na mail.");
        return true;
    }
}

document.querySelector("form").addEventListener("submit", function(event) {
    if (!Unos()) {
        event.preventDefault(); 
    } else {
        processForm();
    }
});

window.addEventListener("load", function() {
    var alertOkButton = document.querySelector(".alert button");
    alertOkButton.addEventListener("click", function() {
        console.log("Potvrda prijave poslata na mail.");
    });
});
