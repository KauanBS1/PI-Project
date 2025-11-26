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


module.exports = {
    salvar
}