let teams = [];

criarbtn.onclick = () => {
  
    overlay.classList.add('show');
    formcriar.classList.add('show');

}

btnClose.onclick = () => {
    overlay.classList.remove('show');
    formcriar.classList.remove('show');
}

fecharParticipanteBtn.onclick = () => {
    overlay.classList.remove('show');
    mostrarFormParticipante.classList.remove('show');
}

overlay.onclick = () => {
    overlay.classList.remove('show');
    formcriar.classList.remove('show');
    mostrarFormParticipante.classList.remove('show');
}

formcriar.onsubmit = () => {
    event.preventDefault();
    if(verificarLista(nome.value)){
       alert("Este nome já esta em uso");
    }else{
        
        teams.push({
            name: nome.value,
            capacity: capacidade.value,
            members:[]
        });
    }
    adicionarCards();
    overlay.classList.remove('show');
    formcriar.classList.remove('show');
}

formParticipante.onsubmit = () => {
    event.preventDefault();
    teams[Number(teamID.value)]. membres.push(nomeParticipante.value);
    alert("Adicionado com sucesso");
    formParticipante.reset();
}

function adicionarCards(){
    listTeams.innerHTML = '';
    if(teams.length === 0){
        listTeams.innerHTML = '<li class="noTeams"><h4>Nenhum team criado</h4></li>'
        return;
    }
    for(let i = 0; i < teams.length; i++){
        listTeams.innerHTML += `
        <li>
            <h4>${teams[i].name} <box-icon name='show'></box-icon></box-icon></h4>
            <h1>0 <span>/ ${teams[i].capacity}</span></h1>
            <div class="actions">
            <button onClick = "mostrarFormParticipante(${i})">adicionar</button>
            <button onClick = "removeCard(${i})"><box-icon name='trash'></box-icon></button>
            </div>
        </li>`;
    }
}

function removeCard(indice){
    let listaAuxiliar = [];
    for(let i = 0; i < teams.length; i++){
        if(i != indice){
            listaAuxiliar.push(teams[i]);
        }
    }
    teams = listaAuxiliar;
    adicionarCards();
}

function verificarLista(nomeDoTeam){
    let achou = false
    for(let i = 0; i < teams.length; i++){
        if(teams[i].name === nomeDoTeam){
            achou = true;
        }
    }
    return achou;
}

function mostrarFormParticipante(indice){
    overlay.classList.add('show');
    formAdicionarParticipante.classList.add('show');
    teamID.value = indice;
}