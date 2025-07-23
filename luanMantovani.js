const btResultado = document.getElementById("btResultado");

function mostrarCursos() {
    let inCurso = document.getElementById("inCurso").value;
    let divCursos = document.getElementById("cursos");
    divCursos.innerHTML = ""; // Limpa sugestões antigas

    // Percorre os vetores paralelos usando FOR
    for (let i = 0; i < vetCurso.length; i++) {
      if (vetCurso[i].toUpperCase().includes(inCurso.toUpperCase()) && inCurso !== "") {
        let item = document.createElement("div");
        item.textContent = vetCurso[i];
        item.style.cursor = "pointer";

        item.onclick = () => {
          document.getElementById("inCurso").value = vetCurso[i];
          divCursos.innerHTML = "";
        }

        divCursos.appendChild(item);
      }
    }
  }

function mostrarAlunos(){
    let inAluno = document.getElementById("inAluno").value;
    let divAlunos = document.getElementById("alunos");
    divAlunos.innerHTML = "";

    for(let i = 0; i < vetAluno.length; i++){
      if(vetAluno[i].toUpperCase().includes(inAluno.toUpperCase()) && inAluno !== ""){
        let nomes = document.createElement("div");
        nomes.textContent = vetAluno[i];
        nomes.style.cursor = "pointer";

        nomes.onclick = () => {
          document.getElementById("inAluno").value = vetAluno[i];
          divAlunos.innerHTML = "";
        }

        divAlunos.appendChild(nomes);
      }
    }

}

btResultado.addEventListener("click", mostrarResultado);

function mostrarResultado() {
  const alunoInput = document.getElementById("inAluno").value.trim().toLowerCase();
  const cursoInput = document.getElementById("inCurso").value.trim().toLowerCase();
  const divResultado = document.getElementById("resultado");
  divResultado.innerHTML = ""; // Limpa resultados anteriores

  // Verifica se aluno existe
  const indexAluno = vetAluno.findIndex(aluno => aluno.toLowerCase() === alunoInput);
  if (indexAluno === -1) {
    alert("Aluno não encontrado!");
    return;
  }

  // Verifica se curso confere
  if (vetCurso[indexAluno].toLowerCase() !== cursoInput) {
    alert("Curso não corresponde ao aluno!");
    return;
  }

  // Filtra todos os alunos do mesmo curso
  let lista = [];
  for (let i = 0; i < vetAluno.length; i++) {
    if (vetCurso[i].toLowerCase() === cursoInput) {
      let media = (vetProva1[i] * 0.2) + (vetProva2[i] * 0.4) + (vetParticipacao[i] * 0.4);
      let situacao = (media >= 60 && vetFalta[i] <= 25) ? "APROVADO" : "REPROVADO";

      lista.push({
        nome: vetAluno[i],
        curso: vetCurso[i],
        media: media.toFixed(2),
        falta: vetFalta[i] + "%",
        situacao: situacao
      });
    }
  }

  // Monta a tabela
  let html = "<table border='1'><tr><th>Aluno</th><th>Curso</th><th>Média</th><th>Faltas</th><th>Situação</th></tr>";
  lista.forEach(item => {
    html += `<tr>
      <td>${item.nome}</td>
      <td>${item.curso}</td>
      <td>${item.media}</td>
      <td>${item.falta}</td>
      <td>${item.situacao}</td>
    </tr>`;
  });
  html += "</table>";

  divResultado.innerHTML = html;
}
