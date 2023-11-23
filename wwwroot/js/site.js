$(document).ready(
    function () {
        $("#formCadastro").submit(function (e) {
                e.preventDefault();
                Cadastrar();
             }
        );
    }
);

function Cadastrar() {
    var parametros =
    {
        Nome: $("#idNome").val(),
        Email: $("#idEmail").val(),
        Mensagem: $("#idMensagem").val()
    };

    $.post("/Home/Cadastrar", parametros)

        .done(function (data) {
            if (data.status == "OK") {
                $("#formCadastro").after("<h3>Cadastro realizado com sucesso!</h3>");
                $("#formCadastro").hide();
            }
            else {
                alert(data.mensagem);
            }
        })

        .fail(function () {
            alert("Erro");
        })
}