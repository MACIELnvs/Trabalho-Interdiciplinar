const tabela = document.getElementById("tabela");
const inAluno = document.getElementById("inAluno");
const inCurso = document.getElementById("inCurso");

document.addEventListener("DOMContentLoaded", mostrarTabela);
inAluno.addEventListener("input", mostrarTabela);
inCurso.addEventListener("input", mostrarTabela);

function mostrarTabela(){

    tabela.innerHTML = "";

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

    thNome.innerHTML = "Nome"; // nome do aluno
    thcurso.innerHTML = "Curso"; // curso do aluno 
    thNota1.innerHTML = "Primeira<br>Prova"; // nota da prova 1
    thNota2.innerHTML = "Segunda<br>Prova"; // nota da prova 2
    thParticipacao.innerHTML = "Nota<br>Participação"; // participação do aluno
    thFaltas.innerHTML = "Percentual<br>de Faltas"; // faltas do aluno
    thMedia.innerHTML = "Média"; // média do aluno
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
    tabela.append(thead);


    let tbody = document.createElement("tbody");

    const filtroAluno = inAluno.value.toLowerCase();
    const filtroCurso = inCurso.value.toLowerCase();

    for (let i = 0; i < vetAluno.length; i++) {

        const nome = vetAluno[i].toLowerCase();
        const curso = vetCurso[i].toLowerCase();

        if(nome.includes(filtroAluno) && curso.includes(filtroCurso)){

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


        trow.append(tdNome);
        trow.append(tdCurso);
        trow.append(tdNota1);
        trow.append(tdNota2);
        trow.append(tdParticipacao);
        trow.append(tdFaltas);
        trow.append(tdMedia);
        trow.append(tdSituacao);
        tbody.append(trow);

    }
  }
    tabela.appendChild(tbody);
}
