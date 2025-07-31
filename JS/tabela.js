const tabela = document.getElementById("tabela");
const inAluno = document.getElementById("inAluno");
const inCurso = document.getElementById("inCurso");
const apenasAprovados = document.getElementById("apenasAprovados"); 

document.addEventListener("DOMContentLoaded", mostrarTabela);
inAluno.addEventListener("input", mostrarTabela);
inCurso.addEventListener("input", mostrarTabela);
apenasAprovados.addEventListener("change", mostrarTabela); // Evento para o checkbox

function mostrarTabela() {
  tabela.innerHTML = "";

 
  let thead = document.createElement("thead");
  let trow = document.createElement("tr");

  let thNome = document.createElement("th");
  let thcurso = document.createElement("th");
  let thNota1 = document.createElement("th");
  let thNota2 = document.createElement("th");
  let thParticipacao = document.createElement("th");
  let thMedia = document.createElement("th");
  let thFaltas = document.createElement("th");
  let thSituacao = document.createElement("th");

  thNome.innerHTML = "Nome";
  thcurso.innerHTML = "Curso";
  thNota1.innerHTML = "Primeira<br>Prova";
  thNota2.innerHTML = "Segunda<br>Prova";
  thParticipacao.innerHTML = "Nota<br>Participação";
  thFaltas.innerHTML = "Percentual<br>de Faltas";
  thMedia.innerHTML = "Média";
  thSituacao.innerHTML = "Situação";

  trow.append(thNome, thcurso, thNota1, thNota2, thParticipacao, thFaltas, thMedia, thSituacao);
  thead.append(trow);
  tabela.append(thead);

  let tbody = document.createElement("tbody");

  const filtroAluno = inAluno.value.toLowerCase();
  const filtroCurso = inCurso.value.toLowerCase();

  let aprovados = 0; // contadora dos aprovads

  for (let i = 0; i < vetAluno.length; i++) {
    const nome = vetAluno[i].toLowerCase();
    const curso = vetCurso[i].toLowerCase();

    if (nome.includes(filtroAluno) && curso.includes(filtroCurso)) {
      let resultado1 = vetProva1[i] * 0.2;
      let resultado2 = vetProva2[i] * 0.4;
      let resultado3 = vetParticipacao[i] * 0.4;
      let resultadoMedia = resultado1 + resultado2 + resultado3;
      let percentualFaltas = (vetFalta[i] / 50) * 100;
      let resultado = (resultadoMedia >= 60 && percentualFaltas <= 25) ? "Aprovado" : "Reprovado";

      // checa o checkbox para mostrar apenas aprovados
      if (apenasAprovados.checked && resultado !== "Aprovado") {
        continue;
      }

      if (resultado === "Aprovado") {
        aprovados++;
      }

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
      tdFaltas.innerHTML = percentualFaltas.toFixed(2) + "%";
      tdMedia.innerHTML = resultadoMedia.toFixed(2);
      tdSituacao.innerHTML = resultado;

      trow.append(tdNome, tdCurso, tdNota1, tdNota2, tdParticipacao, tdFaltas, tdMedia, tdSituacao);
      tbody.append(trow);
    }
  }

  tabela.appendChild(tbody);


  const divCursos = document.getElementById("cursos");
  if (filtroCurso !== "") {
    divCursos.innerHTML = `<p><strong>Alunos aprovados no curso "${filtroCurso.toUpperCase()}":</strong> ${aprovados}</p>`;
  } else {
    divCursos.innerHTML = ""; // limpa se nenhum curso for filtrado
  }
}
