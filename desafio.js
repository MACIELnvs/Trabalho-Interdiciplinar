const tabelaAprovados = document.getElementById("tabelaAprovados");

document.addEventListener("DOMContentLoaded", mostrarAprovados);
function mostrarAprovados() {

    let thead = document.createElement("thead");// criando o header da tabela
    let trow = document.createElement("tr");//criar linha dentro da tabela

    let thNome = document.createElement("th");
    let thcurso = document.createElement("th");
    let thNota1 = document.createElement("th");
    let thNota2 = document.createElement("th");
    let thParticipacao = document.createElement("th");
    let thMedia = document.createElement("th");
    let thFaltas = document.createElement("th");
    let thSituacao = document.createElement("th");

    // criando os titulos do cabeçalho da tabela

    thNome.innerHTML = "Nome"; 
    thcurso.innerHTML = "Curso"; 
    thNota1.innerHTML = "Primeira<br>Prova"; 
    thNota2.innerHTML = "Segunda<br>Prova"; 
    thParticipacao.innerHTML = "Nota<br>Participação"; 
    thFaltas.innerHTML = "Percentual<br>de Faltas"; 
    thMedia.innerHTML = "Média"; // média ponderada do aluno
    thSituacao.innerHTML = "Situação"; // situação do aluno "aprovado" ou "reprovado"

    trow.append(thNome);
    trow.append(thcurso);
    trow.append(thNota1);
    trow.append(thNota2);
    trow.append(thParticipacao);
    trow.append(thFaltas);
    trow.append(thMedia);
    trow.append(thSituacao);
    thead.append(trow);

    tabelaAprovados.append(thead);

    let tbody = document.createElement("tbody");

    for (let i = 0; i < vetAluno.length; i++) {

        //calculo da média
        var resultado1 = vetProva1[i] * 0.2;
        var resultado2 = vetProva2[i] * 0.4;
        var resultado3 = vetParticipacao[i] * 0.4;

        var resultadoMedia = resultado1 + resultado2 + resultado3;

        //calculo do percentual de faltas
        var percentualFaltas = (vetFalta[i] / 50) * 100;

        var resultado = (resultadoMedia >= 60 && percentualFaltas <= 25) ? "Aprovado" : "Reprovado";

        let trow = document.createElement("tr");
        let tdNome = document.createElement("td");
        let tdCurso = document.createElement("td");
        let tdNota1 = document.createElement("td");
        let tdNota2 = document.createElement("td");
        let tdParticipacao = document.createElement("td");
        let tdMedia = document.createElement("td");
        let tdFaltas = document.createElement("td");
        let tdSituacao = document.createElement("td");


        tdNome.innerHTML = vetAluno[i].toUpperCase();
        tdCurso.innerHTML = vetCurso[i].toUpperCase();
        tdNota1.innerHTML = vetProva1[i];
        tdNota2.innerHTML = vetProva2[i];
        tdParticipacao.innerHTML = vetParticipacao[i];

        tdFaltas.innerHTML = percentualFaltas.toFixed(2) + "%"; // percentual de faltas com duas casas decimais
        tdMedia.innerHTML = resultadoMedia.toFixed(2); // média com duas casas decimais
        tdSituacao.innerHTML = resultado; // mostra na tabela se o aluno está "aprovado" ou "reprovado"


        if (resultado === "Aprovado") {
            trow.append(tdNome);
            trow.append(tdCurso);
            trow.append(tdNota1);
            trow.append(tdNota2);
            trow.append(tdParticipacao);
            trow.append(tdFaltas);
            trow.append(tdMedia);
            trow.append(tdSituacao);
        }

        tbody.append(trow);
    }
    tabelaAprovados.append(tbody);
}