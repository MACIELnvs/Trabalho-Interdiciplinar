const outSaida = document.getElementById("outSaida");
const btCalcular = document.getElementById("btCalcular");
const btResultado = document.getElementById("btResultado");

function mostrarSugestoes() {
    let inCurso = document.getElementById("inCurso").value;
    let divSugestoes = document.getElementById("sugestoes");
    divSugestoes.innerHTML = ""; // Limpa sugestões antigas

    // Percorre os vetores paralelos usando FOR
    for (let i = 0; i < vetCurso.length; i++) {
      if (vetCurso[i].toUpperCase().includes(inCurso.toUpperCase()) && inCurso !== "") {
        let item = document.createElement("div");
        item.textContent = vetCurso[i];
        item.style.cursor = "pointer";

        item.onclick = () => {
          document.getElementById("inCurso").value = vetCurso[i];
          divSugestoes.innerHTML = "";

          // Você pode fazer mais coisas aqui, se quiser
          console.log("Aluno:", vetAluno[i], 
                      "Curso:", vetCurso[i],
                      "Notas:", vetProva1[i], vetProva2[i], vetParticipacao[i],
                      "Faltas:", vetFalta[i]);
        };

        divSugestoes.appendChild(item);
      }
    }
  }

  btCalcular.addEventListener("click", calculoNota2);

  function calculoNota2(){
    let strNota2 = "";

        for(let i = 0; i < vetAluno.length; i++){
            strNota2 += (vetProva2[i] * 0.4).toFixed(2) + "<br>";
        }
        
        outSaida.innerHTML = strNota2;
  }

  btResultado.addEventListener("click", reprovados);

  function reprovados(){
    let strNota1 = 0;
    let strNota2 = 0;
    let strNota3 = 0;
    let strNotaTotal = 0;

    for(let i = 0; i < vetAluno.length; i++){
      strNota1 += (vetProva1[i] * 0.2).toFixed(2);
      strNota2 += (vetProva2[i] * 0.4).toFixed(2);
      strNota3 += (vetParticipacao[i] * 0.4).toFixed(2);
      strNotaTotal = (strNota1).toFixed(2);
    }

    outSaida.innerHTML = strNotaTotal;
  }
