
function showMessage() {
    var name = "Guest";
    var txtName = document.getElementById("name");
    if (txtName.value != "")
        name = txtName.value;

    var message = document.getElementById("message");
    message.innerText = "Welcome To " + name;
}
