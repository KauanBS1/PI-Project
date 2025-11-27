var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function salvar(fk_usuario, fk_quiz, pontuacao, acertos, erros) {
    console.log("ACESSEI O PARTIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvar():", fk_usuario, fk_quiz, pontuacao, acertos, erros);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO partida (fk_id_usuario, fk_id_quiz, pontuacao, acertos, erros) VALUES ('${fk_usuario}', '${fk_quiz}', '${pontuacao}', '${acertos}', '${erros}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDados(idUsuario){
    console.log("ACESSEI O PARTIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function obterDados()");
    var instrucaoSql = `
    SELECT
        partida.id_partida,
        partida.pontuacao,
        partida.acertos,
        partida.erros,
        quiz.nome
    FROM partida
        join quiz
            on partida.fk_id_quiz = quiz.id_quiz
        where partida.fk_id_usuario = ${idUsuario};
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    salvar,
    obterDados
};