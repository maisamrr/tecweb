function cadastrar() {

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    var user = {
        nome: nome,
        email: email
    };

    var userJSON = JSON.stringify(user);
    console.log(userJSON);
}