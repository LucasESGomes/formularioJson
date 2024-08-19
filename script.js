function enviarFormulario() {

    //Obter valores das variaveis
    var infClientes = new Object();

    infClientes.nome = document.getElementById("nome").value;
    infClientes.sobrenome = document.getElementById("sobrenome").value;
    infClientes.cpf = document.getElementById("cpf").value;
    infClientes.telefone = document.getElementById("telefone").value;
    infClientes.idade = document.getElementById("idade").value;
    infClientes.email = document.getElementById("email").value;
    infClientes.senha = document.getElementById("senha").value;
    infClientes.sexo = document.getElementById("sexo").value;

    //Converter String para JSON
    var json = JSON.stringify(infClientes);

    //Imprimir no console
    console.log(json)
    console.log(infClientes.valueOf())
    alert("Cadastro realizado com sucesso!")
}
