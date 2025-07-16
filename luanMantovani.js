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

          // Você pode fazer mais coisas aqui, se quiser
          console.log("Aluno:", vetAluno[i], 
                      "Curso:", vetCurso[i],
                      "Notas:", vetProva1[i], vetProva2[i], vetParticipacao[i],
                      "Faltas:", vetFalta[i]);
        };

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
