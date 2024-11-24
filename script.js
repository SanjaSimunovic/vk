document.addEventListener("DOMContentLoaded", function() {
    var backgroundImage = document.getElementById("backgroundImage");
    var imageUrl = "fotografije/bookstore.jpg";
    backgroundImage.style.backgroundImage = "url('" + imageUrl + "')";
    backgroundImage.style.backgroundSize = "cover";
    backgroundImage.style.backgroundPosition = "center";
});
