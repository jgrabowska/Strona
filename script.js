function myFunction() {
var ST = document.getElementById("ST").value;
var Nazwa = document.getElementById("Nazwa").value;
var Nr_seryjny = document.getElementById("Nr_seryjny").value;
// Returns successful data submission message when the entered information is stored in database.
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "test.php",
data: dataString,
cache: false,
success: function(html) {
alert(html);
}
});

return false;
}