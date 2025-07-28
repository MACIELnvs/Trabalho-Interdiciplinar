const btAprovados = document.getElementById("btAprovados");

btAprovados.addEventListener("click", mostrarAprovados);

function mostrarAprovados(){
    const divAprovados = document.getElementById("aprovados");
    divAprovados.innerHTML = "";

    let lista = [];

    for(let i = 0; i < vetAluno.length; i++){
        let media = (vetProva1[i] * 0.2) + (vetProva2[i] * 0.4) + (vetParticipacao[i] * 0.4);
        let situacao = (media >= 60 && vetFalta <=25) ? "APROVADO" : "REPROVADO";

        if(situacao == "APROVADO"){
            lista.push({
                nome: vetAluno[i],
                curso: vetCurso[i],
                media: media.toFixed(2),
                falta: vetFalta[i] + "%",
                situação: situacao
            });
        }
    }

        if(lista.length == 0){
            divAprovados.innerHTML = "Nenhum aluno aprovado!";
            return;
        }

        let html = "<h3>Lista de Aprovados<h3>";
        html += "<table border='1'><tr><th>Aluno</th><th>Curso</th><th>Média</th><th>Faltas</th></tr>";
        lista.forEach(item => {
             html += `<tr>
            <td>${item.nome}</td>
            <td>${item.curso}</td>
            <td>${item.media}</td>
            <td>${item.falta}</td>
            </tr>`;
        })

        html += "</table>";

        divAprovados.innerHTML = html;
}