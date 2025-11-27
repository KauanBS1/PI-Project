var partidaModel = require("../models/partidaModel");

function salvar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fk_usuario = req.body.fk_usuario;
    var fk_quiz = req.body.fk_quiz;
    var pontuacao = req.body.pontuacao;
    var acertos = req.body.acertos;
    var erros = req.body.erros;


    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    partidaModel.salvar(fk_usuario, fk_quiz, pontuacao, acertos, erros)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao salvar partida no banco! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function obterDados(req, res) {
    var idUsuario = req.params.idUsuario;

    partidaModel.obterDados(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    salvar,
    obterDados
}