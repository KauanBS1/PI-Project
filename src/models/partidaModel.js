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


module.exports = {
    salvar
};